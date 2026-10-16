var ie=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var h=(r,e,t,i)=>{for(var s=i>1?void 0:i?se(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&ie(e,t,s),s};var Q=globalThis,Z=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),At=new WeakMap,U=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Z&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=At.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&At.set(t,e))}return e}toString(){return this.cssText}},St=r=>new U(typeof r=="string"?r:r+"",void 0,at),y=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new U(t,r,at)},Et=(r,e)=>{if(Z)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=Q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},lt=Z?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return St(t)})(r):r;var{is:re,defineProperty:oe,getOwnPropertyDescriptor:ne,getOwnPropertyNames:ae,getOwnPropertySymbols:le,getPrototypeOf:ce}=Object,tt=globalThis,Ct=tt.trustedTypes,de=Ct?Ct.emptyScript:"",pe=tt.reactiveElementPolyfillSupport,B=(r,e)=>r,j={toAttribute(r,e){switch(e){case Boolean:r=r?de:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},et=(r,e)=>!re(r,e),Tt={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),tt.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&oe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:o}=ne(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let a=s?.call(this);o?.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Tt}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;let e=ce(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){let t=this.properties,i=[...ae(t),...le(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(lt(s))}else e!==void 0&&t.push(lt(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Et(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=s;let a=n.fromAttribute(t,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(e!==void 0){let n=this.constructor;if(s===!1&&(o=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??et)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:n}=o,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[B("elementProperties")]=new Map,A[B("finalized")]=new Map,pe?.({ReactiveElement:A}),(tt.reactiveElementVersions??=[]).push("2.1.2");var gt=globalThis,Mt=r=>r,it=gt.trustedTypes,zt=it?it.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ot="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+C,ue=`<${Dt}>`,P=document,K=()=>P.createComment(""),q=r=>r===null||typeof r!="object"&&typeof r!="function",ft=Array.isArray,he=r=>ft(r)||typeof r?.[Symbol.iterator]=="function",ct=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Rt=/>/g,M=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Nt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,bt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=bt(1),Pe=bt(2),Re=bt(3),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),It=new WeakMap,z=P.createTreeWalker(P,129);function Ut(r,e){if(!ft(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(e):e}var me=(r,e)=>{let t=r.length-1,i=[],s,o=e===2?"<svg>":e===3?"<math>":"",n=F;for(let a=0;a<t;a++){let l=r[a],p,m,u=-1,b=0;for(;b<l.length&&(n.lastIndex=b,m=n.exec(l),m!==null);)b=n.lastIndex,n===F?m[1]==="!--"?n=Pt:m[1]!==void 0?n=Rt:m[2]!==void 0?(Ht.test(m[2])&&(s=RegExp("</"+m[2],"g")),n=M):m[3]!==void 0&&(n=M):n===M?m[0]===">"?(n=s??F,u=-1):m[1]===void 0?u=-2:(u=n.lastIndex-m[2].length,p=m[1],n=m[3]===void 0?M:m[3]==='"'?Nt:Lt):n===Nt||n===Lt?n=M:n===Pt||n===Rt?n=F:(n=M,s=void 0);let x=n===M&&r[a+1].startsWith("/>")?" ":"";o+=n===F?l+ue:u>=0?(i.push(p),l.slice(0,u)+Ot+l.slice(u)+C+x):l+C+(u===-2?a:x)}return[Ut(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},V=class r{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0,a=e.length-1,l=this.parts,[p,m]=me(e,t);if(this.el=r.createElement(p,i),z.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=z.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(Ot)){let b=m[n++],x=s.getAttribute(u).split(C),J=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:J[2],strings:x,ctor:J[1]==="."?pt:J[1]==="?"?ut:J[1]==="@"?ht:I}),s.removeAttribute(u)}else u.startsWith(C)&&(l.push({type:6,index:o}),s.removeAttribute(u));if(Ht.test(s.tagName)){let u=s.textContent.split(C),b=u.length-1;if(b>0){s.textContent=it?it.emptyScript:"";for(let x=0;x<b;x++)s.append(u[x],K()),z.nextNode(),l.push({type:2,index:++o});s.append(u[b],K())}}}else if(s.nodeType===8)if(s.data===Dt)l.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(C,u+1))!==-1;)l.push({type:7,index:o}),u+=C.length-1}o++}}static createElement(e,t){let i=P.createElement("template");return i.innerHTML=e,i}};function N(r,e,t=r,i){if(e===S)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,o=q(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=N(r,s._$AS(r,e.values),s,i)),e}var dt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);z.currentNode=s;let o=z.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let p;l.type===2?p=new G(o,o.nextSibling,this,e):l.type===1?p=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(p=new mt(o,this,e)),this._$AV.push(p),l=i[++a]}n!==l?.index&&(o=z.nextNode(),n++)}return z.currentNode=P,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},G=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),q(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):he(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=V.createElement(Ut(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let o=new dt(s,this),n=o.u(this.options);o.p(t),this.T(n),this._$AH=o}}_$AC(e){let t=It.get(e.strings);return t===void 0&&It.set(e.strings,t=new V(e)),t}k(e){ft(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let o of e)s===t.length?t.push(i=new r(this.O(K()),this.O(K()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Mt(e).nextSibling;Mt(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){let o=this.strings,n=!1;if(o===void 0)e=N(this,e,t,0),n=!q(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{let a=e,l,p;for(e=o[0],l=0;l<o.length-1;l++)p=N(this,a[i+l],t,l),p===S&&(p=this._$AH[l]),n||=!q(p)||p!==this._$AH[l],p===d?e=d:e!==d&&(e+=(p??"")+o[l+1]),this._$AH[l]=p}n&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pt=class extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},ut=class extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},ht=class extends I{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??d)===S)return;let i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},mt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}};var ge=gt.litHtmlPolyfillSupport;ge?.(V,G),(gt.litHtmlVersions??=[]).push("3.3.3");var Bt=(r,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let o=t?.renderBefore??null;i._$litPart$=s=new G(e.insertBefore(K(),o),o,void 0,t??{})}return s._$AI(r),s};var vt=globalThis,v=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};v._$litElement$=!0,v.finalized=!0,vt.litElementHydrateSupport?.({LitElement:v});var fe=vt.litElementPolyfillSupport;fe?.({LitElement:v});(vt.litElementVersions??=[]).push("4.2.2");var be={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:et},ve=(r=be,e,t)=>{let{kind:i,metadata:s}=t,o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),i==="accessor"){let{name:n}=t;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(i==="setter"){let{name:n}=t;return function(a){let l=this[n];e.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+i)};function _(r){return(e,t)=>typeof t=="object"?ve(r,e,t):((i,s,o)=>{let n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}function g(r){return _({...r,state:!0,attribute:!1})}var jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ot=r=>(...e)=>({_$litDirective$:r,values:e}),rt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var R=class extends rt{constructor(e){if(super(e),this.it=d,e.type!==jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===d||e==null)return this._t=void 0,this.it=e;if(e===S)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};R.directiveName="unsafeHTML",R.resultType=1;var $i=ot(R);var W=class extends R{};W.directiveName="unsafeSVG",W.resultType=2;var Ft=ot(W);var X={programma:"Programma",fuori_programma:"Fuori programma",manuale:"Manuale",timer:"Timer",spento:"Spento"};function D(r){if(r==null||r===""||typeof r=="boolean")return null;let e=typeof r=="number"?r:Number(String(r).replace(",","."));return Number.isFinite(e)?e:null}function f(r){if(r==null||!Number.isFinite(r))return"\u2013";let e=Math.round(r*10)/10;return e.toLocaleString("it-IT",{minimumFractionDigits:Number.isInteger(e)?0:1,maximumFractionDigits:1})}function xt(r){let e=Math.max(0,Math.round(r/6e4)),t=Math.floor(e/60),i=e%60;return t===0?`${i} min`:`${t} h ${String(i).padStart(2,"0")} min`}function Y(r,e){let t=new Date(r),i=new Date(e),s=l=>new Date(l.getFullYear(),l.getMonth(),l.getDate()).getTime(),o=Math.round((s(t)-s(i))/864e5),n=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`,a=["dom","lun","mar","mer","gio","ven","sab"];return o===0?`oggi alle ${n}`:o===1?`domani alle ${n}`:`${a[t.getDay()]} ${t.getDate()} alle ${n}`}function w(r,e,t,i){let s=Math.min(t,Math.max(e,r)),o=(String(i).split(".")[1]??"").length;return Number((Math.round(s/i)*i).toFixed(o))}var _t=10,Kt=28,_e="#3b82f6",xe="#22c55e",ye="#f59e0b",$e="#9ca3af";function qt(r,e,t){let i=n=>Math.min(1,Math.max(0,(n-_t)/(Kt-_t))),s=e===null||e<=t.antigelo+.01,o=[];if(s)o.push({from:0,to:1,color:$e});else{let n=i(e-1),a=i(e+1);n>0&&o.push({from:0,to:n,color:_e}),o.push({from:n,to:a,color:xe}),a<1&&o.push({from:a,to:1,color:ye})}return{min:_t,max:Kt,arcs:o,needle:r===null?null:i(r),mark:s||e===null?null:i(e),idle:s}}function Vt(r,e,t){let i=e.next?e.next.kind==="set"?`${Y(e.next.time,t)} a ${f(e.next.temp)} \xB0C`:`${Y(e.next.time,t)} antigelo ${f(e.antigelo)} \xB0C`:"";if(e.awayApplied&&r!=="timer")return{icon:"mdi:home-off",text:`Casa vuota: antigelo ${f(e.antigelo)} \xB0C. Puoi comunque scaldare a mano.`,tone:"accent"};switch(r){case"timer":return{icon:"mdi:timer-outline",text:`Timer: ${f(e.timerTemp??e.target)} \xB0C${e.timerUntil!==null?` fino a ${Y(e.timerUntil,t)} (tra ${xt(e.timerUntil-t)})`:""}`,tone:"accent"};case"programma":return{icon:"mdi:calendar-check",text:i?`Prossimo cambio: ${i}`:"Programma attivo, senza altri cambi nella settimana",tone:"success"};case"fuori_programma":return{icon:"mdi:hand-back-right",text:`Cambiato a mano${i?`: il programma riprende ${i}`:""}`,tone:"warning"};case"manuale":return{icon:"mdi:hand-back-right-outline",text:`Manuale: mantiene ${f(e.target)} \xB0C finch\xE9 non lo cambi`,tone:"neutral"};default:return{icon:"mdi:snowflake-thermometer",text:`Spento: resta l'antigelo a ${f(e.antigelo)} \xB0C`,tone:"neutral"}}}var nt=["Lun","Mar","Mer","Gio","Ven","Sab","Dom"],Gt=["L","M","M","G","V","S","D"],Wt=[30,60,120,180,240,360];function O(r,e=!1){let t=/^(\d{1,2}):(\d{2})$/.exec(r.trim());if(!t||Number(t[2])>59)return null;let i=Number(t[1])*60+Number(t[2]);return i>=0&&i<=(e?1440:1439)?i:null}function yt(r){if(r.days.length===0)return"Scegli almeno un giorno.";let e=O(r.start),t=O(r.end,!0);return e===null||t===null?"Orario non valido.":e===t?"Inizio e fine non possono coincidere.":!Number.isFinite(r.temp)||r.temp<5||r.temp>35?"La temperatura deve stare tra 5 e 35 \xB0C.":null}function Yt(r){let e=O(r.start),t=O(r.end,!0);return e!==null&&t!==null&&t<=e}function Xt(r){let t=new Array(10080).fill(null);for(let s of r){let o=O(s.start),n=O(s.end,!0);if(o===null||n===null||o===n)continue;let a=n>o?n-o:1440-o+n;for(let l of s.days)if(!(l<0||l>6))for(let p=0;p<a;p++){let m=(l*1440+o+p)%10080,u=t[m];(u===null||s.temp>u)&&(t[m]=s.temp)}}let i=[];for(let s=0;s<7;s++){let o=[],n=0,a=null;for(let l=0;l<=1440;l++){let p=l<1440?t[s*1440+l]:null;p!==a&&(a!==null&&o.push({from:n,to:l,temp:a}),n=l,a=p)}i.push(o)}return i}function Jt(r){let e=[...new Set(r)].sort((t,i)=>t-i);return e.length===7?"Tutti i giorni":e.length===5&&e.join()==="0,1,2,3,4"?"Lun\u2013Ven":e.length===2&&e.join()==="5,6"?"Sab\u2013Dom":e.map(t=>nt[t]).join(" ")}function Qt(r=20.5){return{days:[0,1,2,3,4],start:"07:00",end:"09:00",temp:r}}function $t(r){let e=[];return r.slots.forEach((t,i)=>{let s=yt(t);s&&e.push(`Fascia ${i+1}: ${s}`)}),r.slots.length>30&&e.push("Al massimo 30 fasce."),e}function Zt(r){let e=Math.min(1,Math.max(0,(r-15)/9));return`hsl(${(45-e*40).toFixed(0)} 85% ${(58-e*8).toFixed(0)}%)`}function wt(r){let e=[];return r.antigelo<r.min_target||e.push("L'antigelo deve stare sotto l'obiettivo minimo."),r.min_target<r.max_target||e.push("L'obiettivo minimo deve stare sotto il massimo."),(r.default_target<r.min_target||r.default_target>r.max_target)&&e.push("L'obiettivo predefinito deve stare tra minimo e massimo."),r.notify_enabled&&r.notify_service.trim()!==""&&!r.notify_service.includes(".")&&e.push("Il servizio di annuncio va scritto come notify.nome."),e}function L(r,e){let t=Math.PI*(1-r);return[110+e*Math.cos(t),102-e*Math.sin(t)]}function we(r,e,t){let[i,s]=L(r,86),[o,n]=L(e,86);return`<path d="M${i.toFixed(1)} ${s.toFixed(1)} A86 86 0 0 1 ${o.toFixed(1)} ${n.toFixed(1)}" fill="none" stroke="${t}" stroke-width="14"/>`}function te(r){let e=r.arcs.map(p=>we(p.from,p.to,p.color)).join(""),t="";if(r.needle!==null){let[p,m]=L(r.needle,66);t=`<line x1="110" y1="102" x2="${p.toFixed(1)}" y2="${m.toFixed(1)}" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="110" cy="102" r="5" fill="currentColor"/>`}let i="";if(r.mark!==null){let[p,m]=L(r.mark,97),[u,b]=L(r.mark,75);i=`<line x1="${p.toFixed(1)}" y1="${m.toFixed(1)}" x2="${u.toFixed(1)}" y2="${b.toFixed(1)}" stroke="currentColor" stroke-width="3"/>`}let[s,o]=L(0,88),[n,a]=L(1,88),l=`<text x="${s.toFixed(0)}" y="${(o+16).toFixed(0)}" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.6">${r.min}</text><text x="${n.toFixed(0)}" y="${(a+16).toFixed(0)}" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.6">${r.max}</text>`;return`<svg viewBox="0 0 220 118" role="img" aria-label="Temperatura ambiente e obiettivo">${e}${i}${t}${l}</svg>`}var H=y`
  :host {
    position: fixed;
    inset: 0;
    z-index: 10000;
    color: var(--primary-text-color, #212121);
    font-family: var(--paper-font-body1_-_font-family, Roboto, Helvetica, Arial, sans-serif);
  }
  .backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    box-sizing: border-box;
  }
  .panel {
    background: var(--card-background-color, #fff);
    border-radius: 16px;
    width: 100%;
    max-width: 560px;
    max-height: min(88vh, 780px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  .panel.wide {
    max-width: 760px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }
  .title {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .x {
    border: 0;
    background: transparent;
    color: inherit;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 8px;
  }
  .x:hover {
    background: var(--secondary-background-color, #f0f0f0);
  }
  .body {
    overflow: auto;
    padding: 12px 16px 16px;
  }
  .foot {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 10px 16px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }
  .btn {
    border: 1px solid var(--divider-color, #ccc);
    background: var(--secondary-background-color, #f4f4f4);
    color: inherit;
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .btn.primary {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: transparent;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .err {
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(220, 38, 38, 0.12);
    color: #b91c1c;
    font-size: 0.85rem;
  }
  .ok {
    margin-top: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(22, 163, 74, 0.12);
    color: #166534;
    font-size: 0.85rem;
  }
  .empty {
    padding: 24px 8px;
    text-align: center;
    color: var(--secondary-text-color, #727272);
  }
`;var T=class extends v{constructor(){super(...arguments);this._busy=!1;this._error="";this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._sch=JSON.parse(JSON.stringify(this.info.schedule))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}get _limits(){let t=this.info.settings;return{min:t.min_target,max:t.max_target}}_patch(t,i){this._sch={...this._sch,slots:this._sch.slots.map((s,o)=>o===t?{...s,...i}:s)}}_toggleDay(t,i){let s=this._sch.slots[t].days;this._patch(t,{days:s.includes(i)?s.filter(o=>o!==i):[...s,i].sort((o,n)=>o-n)})}_bumpTemp(t,i){let{min:s,max:o}=this._limits;this._patch(t,{temp:w(this._sch.slots[t].temp+i*.5,s,o,.5)})}_add(){this._sch={...this._sch,slots:[...this._sch.slots,Qt(this.info.settings.default_target)]}}_remove(t){this._sch={...this._sch,slots:this._sch.slots.filter((i,s)=>s!==t)}}_duplicate(t){let i=JSON.parse(JSON.stringify(this._sch.slots[t]));this._sch={...this._sch,slots:[...this._sch.slots.slice(0,t+1),i,...this._sch.slots.slice(t+1)]}}async _save(){let t=$t(this._sch);if(t.length){this._error=t[0];return}this._busy=!0,this._error="";try{await this.hass.callWS({type:"termostato_riscaldamento/schedule",entry_id:this.info.entry_id,schedule:this._sch}),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(i){this._error=`Impossibile salvare: ${i instanceof Error?i.message:i?.message??String(i)}`}finally{this._busy=!1}}_week(){let t=Xt(this._sch.slots);return c`
      <div class="week" aria-label="Vista della settimana">
        ${t.map((i,s)=>c`
            <div class="wd"><span>${nt[s]}</span>
              <div class="wbar">${i.map(o=>c`<i title="${f(o.temp)} °C" style="left:${o.from/1440*100}%;width:${(o.to-o.from)/1440*100}%;background:${Zt(o.temp)}"></i>`)}</div>
            </div>`)}
        <div class="wd axis"><span></span><div class="wax"><b>0</b><b>6</b><b>12</b><b>18</b><b>24</b></div></div>
        <div class="legend">Più scuro = più caldo. Fuori dalle fasce: antigelo ${f(this.info.settings.antigelo)} °C.</div>
      </div>`}render(){if(!this._sch)return d;let t=$t(this._sch);return c`
      <div class="backdrop" @click=${i=>i.target===i.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Programma termostato">
          <div class="head">
            <div class="title">Programma settimanale</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            <div class="row top">
              <div class="t"><div class="lab">Programma attivo</div>
                <div class="hint">Alle ore indicate il termostato va alla temperatura della fascia; fuori fascia va all'antigelo. Se lo cambi a mano, il programma riprende alla fascia successiva.</div></div>
              <button class=${this._sch.enabled?"sw on":"sw"} role="switch" aria-checked=${this._sch.enabled?"true":"false"} aria-label="Programma attivo" @click=${()=>this._sch={...this._sch,enabled:!this._sch.enabled}}><span class="knob"></span></button>
            </div>

            ${this._week()}

            <div class="sec">Fasce</div>
            ${this._sch.slots.length===0?c`<div class="empty">Nessuna fascia: aggiungine una.</div>`:d}
            ${this._sch.slots.map((i,s)=>{let o=yt(i);return c`
                <div class="slot ${o?"bad":""}">
                  <div class="days" role="group" aria-label="Giorni">
                    ${Gt.map((n,a)=>c`<button class=${i.days.includes(a)?"day on":"day"} aria-label=${nt[a]} aria-pressed=${i.days.includes(a)?"true":"false"} @click=${()=>this._toggleDay(s,a)}>${n}</button>`)}
                  </div>
                  <div class="times">
                    <label>Da<input type="time" .value=${i.start} @change=${n=>this._patch(s,{start:n.target.value})} /></label>
                    <label>A<input type="time" .value=${i.end} @change=${n=>this._patch(s,{end:n.target.value})} /></label>
                    <div class="tmp" role="group" aria-label="Temperatura della fascia">
                      <button class="st" aria-label="Meno caldo" @click=${()=>this._bumpTemp(s,-1)}>−</button>
                      <b>${f(i.temp)} °C</b>
                      <button class="st" aria-label="Più caldo" @click=${()=>this._bumpTemp(s,1)}>+</button>
                    </div>
                  </div>
                  <div class="foot2">
                    <div class="sum">${o??`${Jt(i.days)}${Yt(i)?" \xB7 finisce il giorno dopo":""}`}</div>
                    <button class="mini" aria-label="Duplica fascia" @click=${()=>this._duplicate(s)}>⧉</button>
                    <button class="mini del" aria-label="Elimina fascia" @click=${()=>this._remove(s)}>🗑</button>
                  </div>
                </div>`})}
            <button class="btn add" @click=${()=>this._add()}>+ Aggiungi fascia</button>

            ${t.length?c`<div class="err">${t[0]}</div>`:d}
            ${this._error?c`<div class="err">${this._error}</div>`:d}
          </div>
          <div class="foot">
            <button class="btn" @click=${()=>this._close()}>Annulla</button>
            <button class="btn primary" ?disabled=${this._busy||t.length>0} @click=${()=>void this._save()}>Salva</button>
          </div>
        </div>
      </div>
    `}static{this.styles=[H,y`
      .row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 4px 0 12px; }
      .t { flex: 1; min-width: 0; }
      .lab { font-size: 0.95rem; font-weight: 500; }
      .hint { font-size: 0.78rem; color: var(--secondary-text-color, #727272); margin-top: 2px; line-height: 1.3; }
      .sw { flex: none; width: 52px; height: 30px; border-radius: 15px; border: 0; background: var(--disabled-color, #bdbdbd); position: relative; cursor: pointer; transition: background 0.2s; }
      .sw.on { background: var(--primary-color, #03a9f4); }
      .sw .knob { position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; transition: transform 0.2s; }
      .sw.on .knob { transform: translateX(22px); }
      .week { margin: 4px 0 12px; padding: 10px 12px; border-radius: 12px; background: var(--secondary-background-color, #f2f2f2); }
      .wd { display: flex; align-items: center; gap: 8px; margin: 3px 0; font-size: 0.75rem; }
      .wd span { width: 28px; color: var(--secondary-text-color, #727272); }
      .wbar { position: relative; flex: 1; height: 12px; border-radius: 6px; background: rgba(127, 127, 127, 0.18); overflow: hidden; }
      .wbar i { position: absolute; top: 0; bottom: 0; }
      .wax { flex: 1; display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--secondary-text-color, #727272); }
      .wax b { font-weight: 400; }
      .legend { margin-top: 6px; font-size: 0.72rem; color: var(--secondary-text-color, #727272); }
      .sec { font-weight: 600; font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--secondary-text-color, #727272); margin: 8px 0 6px; }
      .slot { padding: 10px; margin-bottom: 8px; border: 1px solid var(--divider-color, #ddd); border-radius: 12px; }
      .slot.bad { border-color: #dc2626; }
      .days { display: flex; gap: 6px; margin-bottom: 8px; }
      .day { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; font-size: 0.9rem; cursor: pointer; }
      .day.on { background: var(--primary-color, #03a9f4); color: #fff; border-color: transparent; }
      .times { display: flex; align-items: flex-end; gap: 10px; flex-wrap: wrap; }
      .times label { display: flex; flex-direction: column; font-size: 0.72rem; color: var(--secondary-text-color, #727272); gap: 2px; }
      .times input { min-height: 44px; box-sizing: border-box; padding: 6px 8px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: var(--primary-text-color, #212121); font-size: 1rem; }
      .tmp { display: flex; align-items: center; gap: 6px; margin-left: auto; }
      .tmp b { min-width: 64px; text-align: center; font-size: 1rem; }
      .st { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; font-size: 1.3rem; cursor: pointer; }
      .foot2 { display: flex; align-items: center; gap: 8px; margin-top: 8px; }
      .sum { flex: 1; font-size: 0.78rem; color: var(--secondary-text-color, #727272); }
      .slot.bad .sum { color: #b91c1c; }
      .mini { border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; border-radius: 10px; width: 44px; height: 44px; cursor: pointer; font-size: 1rem; }
      .add { min-height: 44px; }
    `]}};h([_({attribute:!1})],T.prototype,"hass",2),h([_({attribute:!1})],T.prototype,"info",2),h([g()],T.prototype,"_sch",2),h([g()],T.prototype,"_busy",2),h([g()],T.prototype,"_error",2);customElements.get("termostato-schedule-dialog")||customElements.define("termostato-schedule-dialog",T);var ke=r=>r<60?`${r} min`:r%60===0?`${r/60} h`:`${Math.floor(r/60)} h ${r%60} min`,E=class extends v{constructor(){super(...arguments);this._temp=20.5;this._custom="";this._busy=!1;this._error="";this._onKey=t=>{t.key==="Escape"&&this._close()}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey);let t=this.info.settings,i=this.info.target!==null&&this.info.target>t.antigelo+.01&&this.info.hvac_mode!=="off";this._temp=w(i&&this.info.target!==null?this.info.target:t.default_target,t.min_target,t.max_target,.5)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}_bump(t){let i=this.info.settings;this._temp=w(this._temp+t*.5,i.min_target,i.max_target,.5)}async _start(t){let i=this.info.settings.timer_max_hours*60;if(!Number.isInteger(t)||t<0||t>i){this._error=`Scegli un tempo tra 1 minuto e ${this.info.settings.timer_max_hours} ore.`;return}this._busy=!0,this._error="";try{let s={type:"termostato_riscaldamento/timer",entry_id:this.info.entry_id,minutes:t};t>0&&(s.temperature=this._temp),await this.hass.callWS(s),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(s){this._error=`Impossibile avviare il timer: ${s instanceof Error?s.message:s?.message??String(s)}`}finally{this._busy=!1}}render(){if(!this.info)return d;let t=this.info.timer_until?Date.parse(this.info.timer_until):null,i=Date.now(),s=this.info.settings.timer_max_hours*60,o=Number(this._custom.replace(",",".")),n=Wt.filter(a=>a<=s);return c`
      <div class="backdrop" @click=${a=>a.target===a.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Timer termostato">
          <div class="head">
            <div class="title">Timer</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            ${t!==null&&t>i?c`<div class="active">Timer in corso: ${f(this.info.timer_temp)} °C fino a ${Y(t,i)} (tra ${xt(t-i)}).
                  <div><button class="btn" ?disabled=${this._busy} @click=${()=>void this._start(0)}>Annulla il timer</button></div></div>`:d}
            <div class="lab">Temperatura</div>
            <div class="tmp">
              <button class="st" aria-label="Meno caldo" @click=${()=>this._bump(-1)}>−</button>
              <b>${f(this._temp)} °C</b>
              <button class="st" aria-label="Più caldo" @click=${()=>this._bump(1)}>+</button>
            </div>
            <div class="lab">Scalda per</div>
            <div class="chips">
              ${n.map(a=>c`<button class="chip" ?disabled=${this._busy} @click=${()=>void this._start(a)}>${ke(a)}</button>`)}
            </div>
            <div class="custom">
              <input type="text" inputmode="numeric" placeholder="minuti" .value=${this._custom} @input=${a=>this._custom=a.target.value} aria-label="Minuti" />
              <button class="btn primary" ?disabled=${this._busy||!(o>=1)} @click=${()=>void this._start(Math.round(o))}>Avvia</button>
            </div>
            <div class="hint">Finito il tempo il termostato torna al programma, se è attivo, altrimenti all'antigelo (${f(this.info.settings.antigelo)} °C). Durata massima ${this.info.settings.timer_max_hours} ore, modificabile nelle preferenze.</div>
            ${this._error?c`<div class="err">${this._error}</div>`:d}
          </div>
        </div>
      </div>
    `}static{this.styles=[H,y`
      .lab { font-size: 0.95rem; font-weight: 500; margin: 6px 0 8px; }
      .tmp { display: flex; align-items: center; justify-content: center; gap: 18px; margin-bottom: 12px; }
      .tmp b { min-width: 100px; text-align: center; font-size: 1.6rem; }
      .st { width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; font-size: 1.6rem; cursor: pointer; }
      .chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .chip { min-height: 52px; padding: 12px 6px; border-radius: 12px; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; font-size: 1rem; cursor: pointer; }
      .custom { display: flex; gap: 8px; margin: 12px 0; }
      .custom input { flex: 1; min-height: 48px; box-sizing: border-box; padding: 9px 10px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 1rem; }
      .hint { font-size: 0.78rem; color: var(--secondary-text-color, #727272); line-height: 1.35; }
      .active { padding: 10px 12px; margin-bottom: 14px; border-radius: 12px; background: rgba(96, 165, 250, 0.16); font-size: 0.9rem; }
      .active .btn { margin-top: 8px; min-height: 44px; }
    `]}};h([_({attribute:!1})],E.prototype,"hass",2),h([_({attribute:!1})],E.prototype,"info",2),h([g()],E.prototype,"_temp",2),h([g()],E.prototype,"_custom",2),h([g()],E.prototype,"_busy",2),h([g()],E.prototype,"_error",2);customElements.get("termostato-timer-dialog")||customElements.define("termostato-timer-dialog",E);var kt={block_temperature:{title:"Temperature",what:"Le temperature che il termostato usa: l'antigelo quando nessuno \xE8 in fascia, i limiti dell'obiettivo e il valore da cui si parte.",when:"Cambiale se l'antigelo ti sembra troppo basso o se vuoi evitare obiettivi troppo alti o troppo bassi dai pulsanti + e \u2212."},antigelo:{title:"Temperatura antigelo",what:"La temperatura a cui il termostato si porta fuori dal programma, a timer finito e a casa vuota.",when:"Protegge tubi e muri dal gelo senza scaldare la casa.",suggested:"5 \xB0C. Sali a 7-8 \xB0C se hai muri o tubi esposti."},min_target:{title:"Obiettivo minimo",what:"Il valore pi\xF9 basso che puoi scegliere con \u2212 o nel timer.",when:"Evita di scendere per sbaglio sotto una temperatura che non vuoi.",suggested:"10 \xB0C."},max_target:{title:"Obiettivo massimo",what:"Il valore pi\xF9 alto che puoi scegliere con + o nel timer.",when:"Evita sprechi se il tablet viene toccato per sbaglio.",suggested:"23 \xB0C."},default_target:{title:"Obiettivo predefinito",what:"La temperatura usata quando passi da Spento a Manuale o avvii un timer senza sceglierne una.",when:"\xC8 il valore di comfort di tutti i giorni.",suggested:"20,5 \xB0C."},frost_keep_heat:{title:"Fuori programma resta acceso all'antigelo",what:"Acceso: fuori fascia il termostato resta in modalit\xE0 riscaldamento ma con l'obiettivo all'antigelo, cos\xEC protegge dal gelo. Spento: il termostato viene spento del tutto.",when:"Lascialo acceso se vuoi la protezione dal gelo anche d'inverno a casa vuota.",suggested:"Acceso."},block_timer:{title:"Timer",what:"Il timer scalda alla temperatura scelta per un tempo e poi torna al programma, oppure all'antigelo se il programma \xE8 spento.",when:"Per una serata fuori programma o per scaldare prima di rientrare."},timer_max_hours:{title:"Durata massima del timer",what:"Il timer non pu\xF2 durare pi\xF9 di questo. Vale anche come sicurezza: se qualcuno scalda a mano a casa vuota, dopo questo tempo il termostato torna all'antigelo.",when:"Riduci il valore se vuoi pi\xF9 sicurezza contro le dimenticanze.",suggested:"6 ore."},block_away:{title:"Casa vuota",what:"Quando nessuno \xE8 in casa il termostato va all'antigelo e il programma non lo scalda. Al rientro il programma riprende.",when:"Per non scaldare una casa vuota. Si pu\xF2 sempre scaldare a mano, anche a casa vuota."},away_setback:{title:"Abbassa a casa vuota",what:"Porta il termostato all'antigelo dopo il tempo indicato dall'uscita di tutti. Serve il sensore \xABCasa vuota\xBB tra i collegamenti.",when:"Spegnilo per il periodo in cui tieni la casa calda anche da vuota.",suggested:"Acceso."},away_minutes:{title:"Minuti di casa vuota",what:"Quanto deve restare vuota la casa prima di abbassare. Evita che un'uscita breve spenga il riscaldamento.",when:"Allungalo se esci spesso per commissioni brevi.",suggested:"30 minuti."},block_notify:{title:"Annunci vocali",what:"Il termostato annuncia a voce quello che fa: inizio e fine del timer, cambi del programma, casa vuota e rientro.",when:"Utile con Alexa. Lascia il servizio vuoto per non avere annunci."},notify_enabled:{title:"Annunci attivi",what:"Interruttore generale degli annunci.",when:"Spegnilo di notte o per gli ospiti.",suggested:"Acceso."},notify_service:{title:"Servizio di annuncio",what:"Il servizio di Home Assistant che pronuncia il messaggio, scritto come notify.nome.",when:"Con l'integrazione Alexa Media Player \xE8 notify.alexa_media."},notify_targets:{title:"Altoparlanti",what:"Quali altoparlanti pronunciano gli annunci. Se non ne scegli nessuno decide il servizio.",when:"Scegli le stanze dove vuoi sentire gli annunci."},block_links:{title:"Collegamenti",what:"Le entit\xE0 di Home Assistant che il termostato usa: il termostato da comandare, un sensore di temperatura e gli indicatori di casa vuota e ospiti.",when:"Di solito si impostano una volta sola."},climate:{title:"Termostato",what:"Il termostato che viene comandato (climate). \xC8 l'unico collegamento obbligatorio.",when:"Cambialo solo se sostituisci il termostato."},temperature_sensor:{title:"Sensore di temperatura",what:"Un sensore ambiente da mostrare al posto di quello del termostato.",when:"Utile se hai una sonda pi\xF9 precisa in un'altra stanza. Facoltativo."},away_entity:{title:"Casa vuota",what:"Un'entit\xE0 accesa quando nessuno \xE8 in casa (per esempio il sensore della caldaia \xABnessuno in casa\xBB).",when:"Serve all'abbassamento a casa vuota. Facoltativo."},guests_entity:{title:"Ospiti",what:"Un'entit\xE0 accesa quando ci sono ospiti: con gli ospiti la casa non \xE8 considerata vuota.",when:"Per chi non ha un telefono tracciato. Facoltativo."}};var Ae={antigelo:{key:"antigelo",label:"Temperatura antigelo",unit:"\xB0C",min:5,max:15,step:.5},min_target:{key:"min_target",label:"Obiettivo minimo",unit:"\xB0C",min:5,max:35,step:.5},max_target:{key:"max_target",label:"Obiettivo massimo",unit:"\xB0C",min:5,max:35,step:.5},default_target:{key:"default_target",label:"Obiettivo predefinito",unit:"\xB0C",min:5,max:35,step:.5},timer_max_hours:{key:"timer_max_hours",label:"Durata massima del timer",unit:"h",min:1,max:24,step:1},away_minutes:{key:"away_minutes",label:"Minuti di casa vuota prima di abbassare",unit:"min",min:0,max:1440,step:5}},Se=[{id:"temperature",icon:"mdi:thermometer",title:"Temperature",helpId:"block_temperature"},{id:"timer",icon:"mdi:timer-outline",title:"Timer",helpId:"block_timer"},{id:"away",icon:"mdi:home-off",title:"Casa vuota",helpId:"block_away"},{id:"notify",icon:"mdi:bullhorn-outline",title:"Annunci vocali",helpId:"block_notify"},{id:"links",icon:"mdi:link-variant",title:"Collegamenti",helpId:"block_links"}],$=class extends v{constructor(){super(...arguments);this._open="temperature";this._help=null;this._busy=!1;this._error="";this._onKey=t=>{t.key==="Escape"&&(this._help?this._help=null:this._close())}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this._onKey),this._s={...this.info.settings,notify_targets:[...this.info.settings.notify_targets]},this._src={climate:this.info.sources.climate??"",temperature_sensor:this.info.sources.temperature_sensor??"",away_entity:this.info.sources.away_entity??"",guests_entity:this.info.sources.guests_entity??""}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._onKey)}_close(){this.dispatchEvent(new CustomEvent("closed")),this.remove()}_set(t,i){this._s={...this._s,[t]:i}}_step(t,i){this._set(t.key,w(this._s[t.key]+i*t.step,t.min,t.max,t.step))}_typed(t,i){let s=i.target.value.replace(",","."),o=Number(s);if(s.trim()===""||!Number.isFinite(o)){i.target.value=String(this._s[t.key]).replace(".",",");return}this._set(t.key,w(o,t.min,t.max,t.step))}_toggleTarget(t){let i=this._s.notify_targets;this._set("notify_targets",i.includes(t)?i.filter(s=>s!==t):[...i,t])}async _save(){let t=wt(this._s);if(t.length){this._error=t[0];return}if(!this._src.climate){this._error="Il termostato \xE8 obbligatorio.";return}this._busy=!0,this._error="";try{await this.hass.callWS({type:"termostato_riscaldamento/update",entry_id:this.info.entry_id,settings:this._s,sources:this._src}),this.dispatchEvent(new CustomEvent("saved")),this._close()}catch(i){this._error=`Impossibile salvare: ${i instanceof Error?i.message:i?.message??String(i)}`}finally{this._busy=!1}}_helpBtn(t){return c`<button class="i" aria-label="Spiegazione: ${kt[t]?.title??t}" @click=${i=>{i.stopPropagation(),this._help=t}}>i</button>`}_numRow(t){let i=Ae[t];return c`
      <div class="row">
        <div class="t"><span class="lab">${i.label}</span>${this._helpBtn(t)}</div>
        <div class="num">
          <button class="st" aria-label="Diminuisci" @click=${()=>this._step(i,-1)}>−</button>
          <input type="text" inputmode="decimal" .value=${String(this._s[t]).replace(".",",")} aria-label=${i.label} @change=${s=>this._typed(i,s)} />
          <span class="unit">${i.unit}</span>
          <button class="st" aria-label="Aumenta" @click=${()=>this._step(i,1)}>+</button>
        </div>
      </div>`}_boolRow(t,i){let s=this._s[t];return c`
      <div class="row">
        <div class="t"><span class="lab">${i}</span>${this._helpBtn(t)}</div>
        <button class=${s?"sw on":"sw"} role="switch" aria-checked=${s?"true":"false"} aria-label=${i} @click=${()=>this._set(t,!s)}><span class="knob"></span></button>
      </div>`}_entityRow(t,i,s,o){let n=Object.keys(this.hass.states).filter(a=>s.includes(a.split(".")[0]));return c`
      <div class="row col">
        <div class="t"><span class="lab">${i}</span> <span class="opt">${o?"obbligatorio":"facoltativo"}</span>${this._helpBtn(t)}</div>
        <input class="txt" list=${`dl-${t}`} .value=${this._src[t]} placeholder=${s.join(" / ")+".nome"} @change=${a=>{this._src={...this._src,[t]:a.target.value.trim()}}} />
        <datalist id=${`dl-${t}`}>${n.map(a=>c`<option value=${a}></option>`)}</datalist>
        ${this._src[t]&&!this.hass.states[this._src[t]]?c`<div class="warn">Entità non trovata in Home Assistant.</div>`:d}
      </div>`}_summary(t){let i=this._s;switch(t){case"temperature":return`Antigelo ${f(i.antigelo)} \xB0C \xB7 da ${f(i.min_target)} a ${f(i.max_target)} \xB0C`;case"timer":return`Al massimo ${i.timer_max_hours} h`;case"away":return i.away_setback?`Abbassa dopo ${i.away_minutes} min`:"Disattivato";case"notify":return!i.notify_enabled||!i.notify_service?"Nessun annuncio":i.notify_targets.length?`${i.notify_targets.length} altoparlanti`:i.notify_service;default:return"Termostato e sensori"}}_blockBody(t){switch(t){case"temperature":return c`${this._numRow("antigelo")}${this._numRow("min_target")}${this._numRow("max_target")}${this._numRow("default_target")}${this._boolRow("frost_keep_heat","Fuori programma resta acceso all'antigelo")}`;case"timer":return c`${this._numRow("timer_max_hours")}`;case"away":return c`${this._boolRow("away_setback","Abbassa a casa vuota")}${this._numRow("away_minutes")}${this._src.away_entity?d:c`<div class="warn">Indica il sensore «Casa vuota» tra i collegamenti perché funzioni.</div>`}`;case"notify":{let i=Object.values(this.hass.states).filter(s=>s.entity_id.startsWith("media_player."));return c`
          ${this._boolRow("notify_enabled","Annunci attivi")}
          <div class="row col">
            <div class="t"><span class="lab">Servizio di annuncio</span>${this._helpBtn("notify_service")}</div>
            <input class="txt" .value=${this._s.notify_service} placeholder="notify.alexa_media" @change=${s=>this._set("notify_service",s.target.value.trim())} />
          </div>
          <div class="row col">
            <div class="t"><span class="lab">Altoparlanti</span>${this._helpBtn("notify_targets")}</div>
            <div class="chips">
              ${i.length===0?c`<span class="opt">Nessun media player trovato.</span>`:d}
              ${i.map(s=>c`<button class=${this._s.notify_targets.includes(s.entity_id)?"chip on":"chip"} aria-pressed=${this._s.notify_targets.includes(s.entity_id)?"true":"false"} @click=${()=>this._toggleTarget(s.entity_id)}>${String(s.attributes.friendly_name??s.entity_id)}</button>`)}
            </div>
          </div>`}default:return c`${this._entityRow("climate","Termostato",["climate"],!0)}${this._entityRow("temperature_sensor","Sensore di temperatura",["sensor"],!1)}${this._entityRow("away_entity","Casa vuota",["binary_sensor","input_boolean"],!1)}${this._entityRow("guests_entity","Ospiti in casa",["binary_sensor","input_boolean"],!1)}`}}_helpOverlay(){let t=this._help?kt[this._help]:void 0;return t?c`
      <div class="hback" @click=${i=>i.target===i.currentTarget&&(this._help=null)}>
        <div class="hbox" role="dialog" aria-modal="true" aria-label=${t.title}>
          <div class="ht">${t.title}</div>
          <div class="hs">Cosa fa</div><p>${t.what}</p>
          <div class="hs">Quando serve</div><p>${t.when}</p>
          ${t.suggested?c`<div class="hs">Valore consigliato</div><p>${t.suggested}</p>`:d}
          <button class="btn primary" @click=${()=>this._help=null}>Ho capito</button>
        </div>
      </div>`:d}render(){if(!this.hass||!this._s)return d;let t=wt(this._s);return c`
      <div class="backdrop" @click=${i=>i.target===i.currentTarget&&this._close()}>
        <div class="panel" role="dialog" aria-modal="true" aria-label="Preferenze termostato">
          <div class="head">
            <div class="title">Preferenze del termostato</div>
            <button class="x" aria-label="Chiudi" @click=${()=>this._close()}>✕</button>
          </div>
          <div class="body">
            ${Se.map(i=>{let s=this._open===i.id;return c`
                <section class="block ${s?"open":""}">
                  <div class="bh" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${()=>this._open=s?null:i.id} @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(this._open=s?null:i.id)}}>
                    <ha-icon icon=${i.icon}></ha-icon>
                    <div class="bt"><div class="bn">${i.title}</div><div class="bs">${this._summary(i.id)}</div></div>
                    ${this._helpBtn(i.helpId)}
                    <span class="chev">${s?"\u25BE":"\u25B8"}</span>
                  </div>
                  ${s?c`<div class="bb">${this._blockBody(i.id)}</div>`:d}
                </section>`})}
            ${t.length?c`<div class="err">${t[0]}</div>`:d}
            ${this._error?c`<div class="err">${this._error}</div>`:d}
          </div>
          <div class="foot">
            <button class="btn" @click=${()=>this._close()}>Annulla</button>
            <button class="btn primary" ?disabled=${this._busy||t.length>0} @click=${()=>void this._save()}>Salva</button>
          </div>
          ${this._helpOverlay()}
        </div>
      </div>
    `}static{this.styles=[H,y`
      .panel { position: relative; }
      .block { border: 1px solid var(--divider-color, #ddd); border-radius: 14px; margin-bottom: 8px; overflow: hidden; }
      .block.open { border-color: var(--primary-color, #03a9f4); }
      .bh { display: flex; align-items: center; gap: 10px; min-height: 56px; padding: 6px 12px; cursor: pointer; }
      .bh ha-icon { --mdc-icon-size: 24px; color: var(--secondary-text-color, #727272); flex: none; }
      .bt { flex: 1; min-width: 0; }
      .bn { font-size: 1rem; font-weight: 600; }
      .bs { font-size: 0.78rem; color: var(--secondary-text-color, #727272); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .chev { width: 18px; text-align: center; color: var(--secondary-text-color, #727272); }
      .bb { padding: 0 12px 8px; border-top: 1px solid var(--divider-color, #eee); }
      .i { flex: none; width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--divider-color, #ccc); background: transparent; color: var(--secondary-text-color, #727272); font-size: 0.95rem; font-style: italic; font-family: Georgia, serif; cursor: pointer; margin-left: 6px; }
      .row { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 0; border-top: 1px solid var(--divider-color, #eee); }
      .row:first-child { border-top: 0; }
      .row.col { flex-direction: column; align-items: stretch; gap: 6px; }
      .t { flex: 1; min-width: 0; display: flex; align-items: center; flex-wrap: wrap; }
      .lab { font-size: 0.93rem; }
      .opt { font-size: 0.7rem; color: var(--secondary-text-color, #727272); margin-left: 6px; }
      .warn { font-size: 0.78rem; color: #d97706; padding: 6px 0; }
      .txt { width: 100%; box-sizing: border-box; min-height: 44px; padding: 8px 10px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 0.95rem; }
      .num { display: flex; align-items: center; gap: 4px; flex: none; }
      .num input { width: 66px; min-height: 44px; box-sizing: border-box; text-align: center; padding: 6px 4px; border-radius: 10px; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 1rem; }
      .unit { width: 28px; font-size: 0.8rem; color: var(--secondary-text-color, #727272); }
      .st { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--divider-color, #ccc); background: var(--secondary-background-color, #f4f4f4); color: inherit; font-size: 1.3rem; cursor: pointer; }
      .sw { flex: none; width: 52px; height: 30px; border-radius: 15px; border: 0; background: var(--disabled-color, #bdbdbd); position: relative; cursor: pointer; transition: background 0.2s; }
      .sw.on { background: var(--primary-color, #03a9f4); }
      .sw .knob { position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; transition: transform 0.2s; }
      .sw.on .knob { transform: translateX(22px); }
      .chips { display: flex; flex-wrap: wrap; gap: 8px; }
      .chip { min-height: 44px; padding: 8px 14px; border-radius: 22px; border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; font-size: 0.9rem; cursor: pointer; }
      .chip.on { background: var(--primary-color, #03a9f4); color: #fff; border-color: transparent; }
      .hback { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; padding: 14px; z-index: 2; }
      .hbox { background: var(--card-background-color, #fff); border-radius: 16px; padding: 16px 18px; max-width: 420px; max-height: 90%; overflow: auto; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4); }
      .ht { font-size: 1.05rem; font-weight: 600; margin-bottom: 6px; }
      .hs { font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--secondary-text-color, #727272); margin-top: 8px; }
      .hbox p { margin: 2px 0 0; font-size: 0.92rem; line-height: 1.4; }
      .hbox .btn { margin-top: 14px; min-height: 44px; width: 100%; }
    `]}};h([_({attribute:!1})],$.prototype,"hass",2),h([_({attribute:!1})],$.prototype,"info",2),h([g()],$.prototype,"_s",2),h([g()],$.prototype,"_src",2),h([g()],$.prototype,"_open",2),h([g()],$.prototype,"_help",2),h([g()],$.prototype,"_busy",2),h([g()],$.prototype,"_error",2);customElements.get("termostato-settings-dialog")||customElements.define("termostato-settings-dialog",$);var ee=.5,k=class extends v{constructor(){super(...arguments);this.embedded=!1;this._config={type:"custom:termostato-card"};this._info=null;this._error="";this._now=Date.now();this._pending=null;this._loadedAt=0;this._loading=!1;this._syncers=new Set}setConfig(t){this._config={...t},this.embedded=t.embedded===!0,this._info=null,this._loadedAt=0}getCardSize(){return 5}static getStubConfig(){return{type:"custom:termostato-card"}}connectedCallback(){super.connectedCallback(),this._tick=window.setInterval(()=>this._now=Date.now(),15e3)}disconnectedCallback(){super.disconnectedCallback(),this._tick&&window.clearInterval(this._tick),this._writeTimer&&window.clearTimeout(this._writeTimer)}willUpdate(){for(let t of this._syncers)t()}updated(){this.hass&&!this._loading&&(!this._info||Date.now()-this._loadedAt>5*6e4)&&this._loadInfo()}async _loadInfo(){this._loading=!0;try{let t={type:"termostato_riscaldamento/info"};this._config.entry_id&&(t.entry_id=this._config.entry_id),this._info=await this.hass.callWS(t),this._error=""}catch(t){let i=t instanceof Error?t.message:t?.message??String(t);this._error=`Termostato non configurato o integrazione non caricata (${i}).`}finally{this._loadedAt=Date.now(),this._loading=!1}}_refreshSoon(){this._loadedAt=0,this._loadInfo()}async _ws(t){try{return await this.hass.callWS({...t,entry_id:this._info?.entry_id}),this._error="",!0}catch(i){let s=i instanceof Error?i.message:i?.message??String(i);return this._error=`Comando non riuscito: ${s}`,!1}finally{this._refreshSoon()}}async _open(t){if(!this._info)return;for(;this._loading;)await new Promise(o=>setTimeout(o,50));if(await this._loadInfo(),!this._info)return;let i=document.createElement(t);i.hass=this.hass,i.info=this._info,i.addEventListener("saved",()=>this._refreshSoon()),document.body.appendChild(i);let s=()=>{i.isConnected&&(i.hass=this.hass)};this._syncers.add(s),i.addEventListener("closed",()=>this._syncers.delete(s))}_live(){let t=this._info,i=this.hass.states[t.sources.climate],s=i?.attributes??{},o=!!i&&i.state!=="unavailable"&&i.state!=="unknown",n=t.entities.modo?this.hass.states[t.entities.modo]:void 0,a=n?.attributes??{},l=["programma","fuori_programma","manuale","timer","spento"].includes(String(n?.state))?n.state:t.mode,p=D(s.current_temperature),m=t.sources.temperature_sensor?D(this.hass.states[t.sources.temperature_sensor]?.state):null;m!==null&&(p=m);let u=a.prossimo_evento??t.next_event?.time??null,b=a.prossima_azione?a.prossima_azione==="riscaldamento"?"set":"idle":t.next_event?.kind??"idle",x=a.timer_fino??t.timer_until;return{available:o,mode:l,hvac:i?.state??t.hvac_mode,action:s.hvac_action??t.hvac_action,target:D(s.temperature)??t.target,current:p??t.current,next:u?{kind:b,time:Date.parse(u),temp:D(a.prossima_temperatura)??t.next_event?.temp??null}:null,timerUntil:x?Date.parse(x):null,timerTemp:D(a.temperatura_timer)??t.timer_temp,away:a.assenza_attiva===!0||n===void 0&&t.away_applied}}_bump(t,i){let s=this._info.settings,o=this._pending&&this._pending.until>Date.now()?this._pending.value:i,n=w(o+t*ee,s.min_target,s.max_target,ee);this._pending={value:n,until:Date.now()+8e3},this._writeTimer&&window.clearTimeout(this._writeTimer),this._writeTimer=window.setTimeout(()=>{let a=this._pending?.value??n;this._ws({type:"termostato_riscaldamento/target",temperature:a})},600)}async _setMode(t){if(t==="programma"&&this._info&&this._info.schedule.slots.length===0){this._open("termostato-schedule-dialog");return}await this._ws({type:"termostato_riscaldamento/mode",mode:t})}_modeButton(t,i,s,o,n=!1){return c`<button class=${s?n?"mb on warn":"mb on":"mb"} aria-pressed=${s?"true":"false"} @click=${o}>
      <ha-icon icon=${i}></ha-icon><span>${t}</span>
    </button>`}render(){if(!this.hass)return d;let t=this._config.title??this._info?.title??"Termostato";if(this._error&&!this._info)return this._wrap(c`<div class="pad"><div class="title">${t}</div><div class="errbox">${this._error}</div></div>`);if(!this._info)return this._wrap(c`<div class="pad"><div class="title">${t}</div><div class="muted">Carico…</div></div>`);let i=this._info,s=i.settings,o=this._live(),a=(this._pending&&this._pending.until>this._now?this._pending.value:null)??o.target,l=qt(o.current,a,s),p=Vt(o.mode,{target:a,expected:i.expected,timerUntil:o.timerUntil,timerTemp:o.timerTemp,next:o.next,awayApplied:o.away,antigelo:s.antigelo},this._now),m=o.action==="heating",u=o.available?m?["Sta scaldando","warn"]:o.mode==="spento"?["Antigelo","idle"]:["A temperatura","ok"]:["Non disponibile","bad"],b=o.mode==="programma"||o.mode==="fuori_programma";return this._wrap(c`
      <div class="pad">
        <div class="top">
          <div class="title">${t}</div>
          <div class="pill ${u[1]}"><i></i>${u[0]}</div>
        </div>

        <div class="cols">
          <div class="left">
            <div class="gauge">
              ${Ft(te(l))}
              <div class="read"><div class="big">${f(o.current)}<span> °C</span></div></div>
            </div>
          </div>
          <div class="right">
            <div class="stepper" role="group" aria-label="Obiettivo">
              <button class="st" aria-label="Diminuisci l'obiettivo" ?disabled=${!o.available} @click=${()=>this._bump(-1,a??s.default_target)}>−</button>
              <div class="tv">${f(a??s.default_target)}<span> °C</span></div>
              <button class="st" aria-label="Aumenta l'obiettivo" ?disabled=${!o.available} @click=${()=>this._bump(1,a??s.default_target)}>+</button>
            </div>
            <div class="modes" role="group" aria-label="Modalità">
              ${this._modeButton(X.programma,"mdi:calendar-clock",b,()=>void this._setMode("programma"),o.mode==="fuori_programma")}
              ${this._modeButton(X.manuale,"mdi:hand-back-right-outline",o.mode==="manuale",()=>void this._setMode("manuale"))}
              ${this._modeButton(X.timer,"mdi:timer-outline",o.mode==="timer",()=>void this._open("termostato-timer-dialog"))}
              ${this._modeButton(X.spento,"mdi:snowflake",o.mode==="spento",()=>void this._setMode("spento"))}
            </div>
          </div>
        </div>

        <div class="lrow">
          <div class="line ${p.tone}"><ha-icon icon=${p.icon}></ha-icon><span>${p.text}</span></div>
          <button class="btn icon" aria-label="Modifica il programma settimanale" @click=${()=>void this._open("termostato-schedule-dialog")}><ha-icon icon="mdi:calendar-edit"></ha-icon></button>
          <button class="btn icon" aria-label="Preferenze del termostato" @click=${()=>void this._open("termostato-settings-dialog")}><ha-icon icon="mdi:cog"></ha-icon></button>
        </div>
        ${this._error?c`<div class="errbox">${this._error}</div>`:d}
      </div>
    `)}_wrap(t){return this.embedded?c`<div class="embed">${t}</div>`:c`<ha-card>${t}</ha-card>`}static{this.styles=y`
    :host { display: block; container-type: inline-size; }
    ha-card { overflow: hidden; }
    .embed { border-radius: 14px; background: var(--secondary-background-color, rgba(127, 127, 127, 0.1)); }
    .pad { padding: 12px 14px 14px; }
    .top { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
    .title { font-size: 1.05rem; font-weight: 600; }
    .muted { color: var(--secondary-text-color, #727272); font-size: 0.82rem; }
    .errbox { margin-top: 8px; padding: 8px 10px; border-radius: 10px; background: rgba(220, 38, 38, 0.12); color: #ef4444; font-size: 0.85rem; }
    .pill { display: inline-flex; align-items: center; gap: 7px; padding: 5px 12px; border-radius: 999px; font-size: 0.82rem; font-weight: 600; background: rgba(127, 127, 127, 0.18); }
    .pill i { width: 9px; height: 9px; border-radius: 50%; background: #9aa1ad; }
    .pill.ok i { background: #22c55e; } .pill.warn i { background: #f59e0b; } .pill.bad i { background: #ef4444; }
    .cols { display: block; }
    .gauge { max-width: 230px; margin: 2px auto 0; color: var(--primary-text-color, #212121); }
    .gauge svg { display: block; width: 100%; height: auto; }
    .read { text-align: center; line-height: 1.1; margin-top: 2px; }
    .big { font-size: 2.1rem; font-weight: 700; }
    .big span, .tv span { font-size: 0.95rem; font-weight: 500; color: var(--secondary-text-color, #727272); }
    .stepper { display: flex; align-items: center; justify-content: center; gap: 18px; margin: 6px 0 10px; }
    .tv { min-width: 96px; text-align: center; font-size: 1.5rem; font-weight: 600; }
    .st { width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, #fff); color: inherit; font-size: 1.6rem; line-height: 1; cursor: pointer; }
    .st:disabled { opacity: 0.4; }
    .modes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
    .mb { min-height: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px; padding: 4px 2px; border-radius: 12px; border: 1px solid var(--divider-color, #ccc); background: transparent; color: inherit; font-size: 0.74rem; cursor: pointer; }
    .mb ha-icon { --mdc-icon-size: 20px; }
    .mb.on { background: rgba(96, 165, 250, 0.2); border-color: #60a5fa; font-weight: 600; }
    .mb.on.warn { background: rgba(245, 158, 11, 0.2); border-color: #f59e0b; }
    .lrow { display: flex; align-items: stretch; gap: 6px; margin-top: 10px; }
    .line { flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 10px; font-size: 0.85rem; line-height: 1.25; background: rgba(127, 127, 127, 0.1); }
    .line ha-icon { --mdc-icon-size: 18px; flex: none; }
    .line.success { background: rgba(34, 197, 94, 0.14); } .line.warning { background: rgba(245, 158, 11, 0.16); } .line.accent { background: rgba(96, 165, 250, 0.16); }
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 44px; min-width: 44px; box-sizing: border-box; border: 1px solid var(--divider-color, #ccc); background: var(--card-background-color, rgba(127, 127, 127, 0.08)); color: inherit; border-radius: 12px; padding: 4px 10px; font-size: 0.88rem; cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: 20px; }
    /* con spazio in larghezza (colonna di una scheda più grande, tablet): quadrante a sinistra, controlli a destra */
    @container (min-width: 430px) {
      .cols { display: grid; grid-template-columns: minmax(150px, 0.9fr) 1.1fr; gap: 14px; align-items: center; }
      .gauge { max-width: 210px; }
      .big { font-size: 1.8rem; }
      .stepper { margin: 0 0 8px; }
      .modes { grid-template-columns: repeat(2, 1fr); }
      .mb { min-height: 44px; flex-direction: row; gap: 6px; font-size: 0.82rem; }
    }
  `}};h([_({attribute:!1})],k.prototype,"hass",2),h([_({type:Boolean,reflect:!0})],k.prototype,"embedded",2),h([g()],k.prototype,"_config",2),h([g()],k.prototype,"_info",2),h([g()],k.prototype,"_error",2),h([g()],k.prototype,"_now",2),h([g()],k.prototype,"_pending",2);customElements.get("termostato-card")||customElements.define("termostato-card",k);window.customCards=window.customCards||[];window.customCards.push({type:"termostato-card",name:"Termostato riscaldamento",description:"Quadrante, obiettivo, programma settimanale, timer e preferenze del termostato ambiente."});console.info("%c TERMOSTATO-RISCALDAMENTO %c v0.1.0 ","color: white; background: #b45309; font-weight: 700;","color: #b45309; background: white; font-weight: 700;");export{k as TermostatoCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
