"""Configurazione guidata: il termostato da comandare e le preferenze (antigelo, limiti, assenza, annunci)."""
from __future__ import annotations

from typing import Any

import voluptuous as vol

from homeassistant.config_entries import ConfigFlow, ConfigFlowResult, OptionsFlow
from homeassistant.core import callback
from homeassistant.helpers import selector

from .const import CONF_AWAY, CONF_CLIMATE, CONF_GUESTS, CONF_NAME, CONF_TEMP, DOMAIN
from .logic import Settings


def _number(min_: float, max_: float, step: float, unit: str | None = None) -> selector.NumberSelector:
    cfg: dict[str, Any] = {"min": min_, "max": max_, "step": step, "mode": selector.NumberSelectorMode.BOX}
    if unit:
        cfg["unit_of_measurement"] = unit
    return selector.NumberSelector(selector.NumberSelectorConfig(**cfg))


def source_schema(with_name: bool = False) -> vol.Schema:
    fields: dict[Any, Any] = {}
    if with_name:
        fields[vol.Required(CONF_NAME, default="Termostato riscaldamento")] = str
    fields[vol.Required(CONF_CLIMATE)] = selector.EntitySelector(selector.EntitySelectorConfig(domain="climate"))
    fields[vol.Optional(CONF_TEMP)] = selector.EntitySelector(
        selector.EntitySelectorConfig(domain="sensor", device_class="temperature")
    )
    fields[vol.Optional(CONF_AWAY)] = selector.EntitySelector(selector.EntitySelectorConfig(domain=["binary_sensor", "input_boolean"]))
    fields[vol.Optional(CONF_GUESTS)] = selector.EntitySelector(selector.EntitySelectorConfig(domain=["binary_sensor", "input_boolean"]))
    return vol.Schema(fields)


def settings_schema(s: Settings) -> vol.Schema:
    return vol.Schema(
        {
            vol.Required("antigelo", default=s.antigelo): _number(5, 15, 0.5, "°C"),
            vol.Required("min_target", default=s.min_target): _number(5, 35, 0.5, "°C"),
            vol.Required("max_target", default=s.max_target): _number(5, 35, 0.5, "°C"),
            vol.Required("default_target", default=s.default_target): _number(5, 35, 0.5, "°C"),
            vol.Required("timer_max_hours", default=s.timer_max_hours): _number(1, 24, 1, "h"),
            vol.Required("frost_keep_heat", default=s.frost_keep_heat): selector.BooleanSelector(),
            vol.Required("away_setback", default=s.away_setback): selector.BooleanSelector(),
            vol.Required("away_minutes", default=s.away_minutes): _number(0, 1440, 1, "min"),
            vol.Required("notify_enabled", default=s.notify_enabled): selector.BooleanSelector(),
            vol.Optional("notify_service", default=s.notify_service): selector.TextSelector(),
            vol.Optional("notify_targets", default=list(s.notify_targets)): selector.EntitySelector(
                selector.EntitySelectorConfig(domain="media_player", multiple=True)
            ),
        }
    )


class TermoConfigFlow(ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        if user_input is not None:
            await self.async_set_unique_id(user_input[CONF_CLIMATE])
            self._abort_if_unique_id_configured()
            data = {k: v for k, v in user_input.items() if k != CONF_NAME and v not in (None, "")}
            return self.async_create_entry(title=user_input[CONF_NAME], data=data, options={})
        return self.async_show_form(step_id="user", data_schema=source_schema(with_name=True))

    @staticmethod
    @callback
    def async_get_options_flow(config_entry) -> "TermoOptionsFlow":
        return TermoOptionsFlow()


class TermoOptionsFlow(OptionsFlow):
    """Le stesse preferenze della scheda: antigelo, limiti, assenza e annunci."""

    async def async_step_init(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        if user_input is not None:
            return self.async_create_entry(title="", data=Settings.from_dict(user_input).to_dict())
        return self.async_show_form(
            step_id="init", data_schema=settings_schema(Settings.from_dict(self.config_entry.options))
        )
