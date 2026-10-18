# Termostato riscaldamento

Integrazione per Home Assistant che comanda un **termostato ambiente esistente** (`climate.*`) con tre modalità, una scheda Lovelace e preferenze configurabili dalla scheda stessa:

- **Manuale**: scegli l'obiettivo con + e − e il termostato lo mantiene.
- **Timer**: scalda alla temperatura scelta per un tempo (30 minuti, 1, 2, 3, 4, 6 ore o un tempo a scelta), poi torna al programma, se è attivo, altrimenti all'antigelo.
- **Programma settimanale**: più fasce al giorno, ognuna con i suoi giorni, l'ora di inizio e di fine e la **temperatura**; fuori fascia il termostato va all'antigelo. Dove due fasce si sovrappongono vale la temperatura più alta.
- **Spento**: nessun programma, il termostato resta all'antigelo (o si spegne, a scelta).

Con la **casa vuota** (un'entità acceso/spento che indichi tu) il termostato va all'antigelo dopo il tempo scelto e il programma non lo scalda; al rientro il programma riprende. Si può **sempre scaldare a mano**, anche a casa vuota: se lo fai, la scelta viene rispettata e dopo la durata massima del timer (6 ore) si torna all'antigelo se la casa è ancora vuota.

Nasce per sostituire un pacchetto YAML (`packages/caldaia.yaml`) con qualcosa di installabile, configurabile dall'interfaccia e provato con i test.

## Come decide

Le azioni partono **solo ai cambi** (inizio o fine di una fascia, scadenza del timer, uscita o rientro di casa): fra un cambio e l'altro il termostato resta libero di essere cambiato a mano, dalla scheda, dall'app o dal termostato stesso.

| Modalità | Quando |
|---|---|
| **Programma** | il programma è attivo e il termostato fa quello che prevede |
| **Fuori programma** | il programma è attivo ma l'hai cambiato a mano: vale fino al prossimo cambio |
| **Manuale** | programma spento, il termostato mantiene la temperatura scelta |
| **Timer** | timer in corso |
| **Spento** | nessun programma e il termostato è all'antigelo |

## Che cosa crea

Un dispositivo "Termostato riscaldamento" con:

- `sensor.termostato_riscaldamento_modalita` (programma / fuori_programma / manuale / timer / spento) con gli attributi `obiettivo`, `temperatura`, `atteso`, `timer_fino`, `temperatura_timer`, `prossima_azione`, `prossima_temperatura`, `prossimo_evento`, `assenza_attiva` e `ultima_azione`
- `sensor` prossimo evento (data e ora del prossimo cambio)
- `switch` programmazione, per attivare o disattivare il programma dalle automazioni
- `binary_sensor` sta scaldando e casa vuota (antigelo)

## Installazione

**HACS** → Integrazioni → menu ⋮ → *Repository personalizzati* → `https://github.com/hubcasale/termostato-riscaldamento`, categoria *Integrazione* → installa → riavvia Home Assistant.

**A mano**: copia `custom_components/termostato_riscaldamento` nella cartella `custom_components` e riavvia.

Poi *Impostazioni → Dispositivi e servizi → Aggiungi integrazione → Termostato riscaldamento* e scegli:

1. il **termostato** (obbligatorio);
2. un **sensore di temperatura** (facoltativo, altrimenti si usa quello del termostato);
3. l'entità **casa vuota** (facoltativa: acceso quando non c'è nessuno);
4. l'entità **ospiti** (facoltativa: con gli ospiti la casa non è considerata vuota).

## La scheda

L'integrazione serve da sola il file della scheda. Se il tablet con Fully Kiosk o il browser mostrano «custom element non esiste», svuota la cache del browser: la pagina principale di Home Assistant è in cache e non conosce ancora la scheda.

```yaml
type: custom:termostato-card
# facoltativi
title: Termostato ambiente
entry_id: ...   # solo se hai più termostati
embedded: true  # senza cornice, per metterla dentro un'altra scheda
```

- **Quadrante**: temperatura ambiente con l'ago, segno dell'obiettivo e fasce di colore (blu sotto, verde vicino, arancio sopra).
- **+ e −**: cambiano l'obiettivo a passi di 0,5 °C dentro i limiti delle preferenze. Da **Spento** sono disattivati e non accendono niente: prima si sceglie Manuale (che riporta l'obiettivo predefinito). In Programma valgono fino alla fascia successiva.
- **Modalità**: Programma, Manuale, Timer e Spento.
- **Programma**: fasce settimanali con la vista della settimana colorata per temperatura.
- **Preferenze (ingranaggio)**: cinque blocchi (Temperature, Timer, Casa vuota, Annunci vocali, Collegamenti), ciascuno con la sua spiegazione: tocca la «i» per leggere cosa fa, quando serve e il valore consigliato.

Tutto è pensato per il tocco (tablet): nessun suggerimento al passaggio del mouse, pulsanti da almeno 44 px, finestre che scorrono dentro lo schermo.

## Annunci vocali

Con un servizio `notify.*` (per esempio `notify.alexa_media`) e uno o più altoparlanti il termostato annuncia a voce inizio e fine del timer, i cambi del programma, la casa vuota e il rientro. Servizio e altoparlanti si scelgono nelle preferenze; senza servizio non c'è nessun annuncio.

## Migrare da `caldaia.yaml`

1. Installa l'integrazione e configurala con `climate.termostato` (e l'entità «nessuno in casa», se l'hai).
2. Imposta nelle preferenze antigelo (5 °C), limiti (10-23 °C), annunci e altoparlanti.
3. Sposta nella scheda i valori che usavi: ore e minuti del timer diventano la finestra *Timer*, la temperatura desiderata diventa + e −.
4. Controlla per qualche giorno che timer, programma e annunci si comportino come prima.
5. Togli `packages/caldaia.yaml` e i suoi helper (`caldaia_timer_*`, `caldaia_temperatura_target`, `timer.caldaia_countdown`), poi ricarica la configurazione e riavvia.

## Sviluppo

```bash
npm ci
npm run build        # genera custom_components/termostato_riscaldamento/frontend/termostato-card.js (da committare)
npm test             # test della logica della scheda
pip install pytest-homeassistant-custom-component home-assistant-frontend
python -m pytest -q  # test della logica e dell'integrazione dentro Home Assistant
npm run build:dev    # per provare la scheda: apri dev/index.html (parametri: modes, theme=dark, open, help, away)
```

Licenza MIT.
