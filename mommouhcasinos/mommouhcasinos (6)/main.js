(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var qo={exports:{}},zl={},Xo={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),jd=Symbol.for("react.portal"),Nd=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),_d=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),Na=Symbol.iterator;function Pd(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Zo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jo=Object.assign,eu={};function zn(e,t,n){this.props=e,this.context=t,this.refs=eu,this.updater=n||Zo}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tu(){}tu.prototype=zn.prototype;function Ns(e,t,n){this.props=e,this.context=t,this.refs=eu,this.updater=n||Zo}var Ss=Ns.prototype=new tu;Ss.constructor=Ns;Jo(Ss,zn.prototype);Ss.isPureReactComponent=!0;var Sa=Array.isArray,nu=Object.prototype.hasOwnProperty,Cs={current:null},ru={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)nu.call(t,r)&&!ru.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];l.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:vr,type:e,key:i,ref:s,props:l,_owner:Cs.current}}function Md(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function Dd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ca=/\/+/g;function Kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dd(""+e.key):t.toString(36)}function Br(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case vr:case jd:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Kl(s,0):r,Sa(l)?(n="",e!=null&&(n=e.replace(Ca,"$&/")+"/"),Br(l,t,n,"",function(c){return c})):l!=null&&(Es(l)&&(l=Md(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Ca,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Sa(e))for(var u=0;u<e.length;u++){i=e[u];var o=r+Kl(i,u);s+=Br(i,t,n,o,l)}else if(o=Pd(e),typeof o=="function")for(e=o.call(e),u=0;!(i=e.next()).done;)i=i.value,o=r+Kl(i,u++),s+=Br(i,t,n,o,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Nr(e,t,n){if(e==null)return e;var r=[],l=0;return Br(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Vr={transition:null},Rd={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:Cs};function iu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Nr,forEach:function(e,t,n){Nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nr(e,function(){t++}),t},toArray:function(e){return Nr(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=zn;R.Fragment=Nd;R.Profiler=Cd;R.PureComponent=Ns;R.StrictMode=Sd;R.Suspense=bd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;R.act=iu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jo({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Cs.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in t)nu.call(t,o)&&!ru.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&u!==void 0?u[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:vr,type:e.type,key:l,ref:i,props:r,_owner:s}};R.createContext=function(e){return e={$$typeof:zd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};R.createElement=lu;R.createFactory=function(e){var t=lu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Td,render:e}};R.isValidElement=Es;R.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:Id}};R.memo=function(e,t){return{$$typeof:_d,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};R.unstable_act=iu;R.useCallback=function(e,t){return ye.current.useCallback(e,t)};R.useContext=function(e){return ye.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};R.useEffect=function(e,t){return ye.current.useEffect(e,t)};R.useId=function(){return ye.current.useId()};R.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ye.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};R.useRef=function(e){return ye.current.useRef(e)};R.useState=function(e){return ye.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ye.current.useTransition()};R.version="18.3.1";Xo.exports=R;var T=Xo.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=T,Ad=Symbol.for("react.element"),Fd=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Ud=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$d.call(t,r)&&!Hd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ad,type:e,key:i,ref:s,props:l,_owner:Ud.current}}zl.Fragment=Fd;zl.jsx=su;zl.jsxs=su;qo.exports=zl;var a=qo.exports,au={exports:{}},Pe={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var D=z.length;z.push(M);e:for(;0<D;){var Z=D-1>>>1,le=z[Z];if(0<l(le,M))z[Z]=M,z[D]=le,D=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],D=z.pop();if(D!==M){z[0]=D;e:for(var Z=0,le=z.length,kr=le>>>1;Z<kr;){var Rt=2*(Z+1)-1,Ql=z[Rt],Ot=Rt+1,jr=z[Ot];if(0>l(Ql,D))Ot<le&&0>l(jr,Ql)?(z[Z]=jr,z[Ot]=D,Z=Ot):(z[Z]=Ql,z[Rt]=D,Z=Rt);else if(Ot<le&&0>l(jr,D))z[Z]=jr,z[Ot]=D,Z=Ot;else break e}}return M}function l(z,M){var D=z.sortIndex-M.sortIndex;return D!==0?D:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var o=[],c=[],h=1,v=null,m=3,x=!1,w=!1,N=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=z)r(c),M.sortIndex=M.expirationTime,t(o,M);else break;M=n(c)}}function y(z){if(N=!1,p(z),!w)if(n(o)!==null)w=!0,Ee(S);else{var M=n(c);M!==null&&Ge(y,M.startTime-z)}}function S(z,M){w=!1,N&&(N=!1,f(_),_=-1),x=!0;var D=m;try{for(p(M),v=n(o);v!==null&&(!(v.expirationTime>M)||z&&!j());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,m=v.priorityLevel;var le=Z(v.expirationTime<=M);M=e.unstable_now(),typeof le=="function"?v.callback=le:v===n(o)&&r(o),p(M)}else r(o);v=n(o)}if(v!==null)var kr=!0;else{var Rt=n(c);Rt!==null&&Ge(y,Rt.startTime-M),kr=!1}return kr}finally{v=null,m=D,x=!1}}var E=!1,C=null,_=-1,$=5,g=-1;function j(){return!(e.unstable_now()-g<$)}function P(){if(C!==null){var z=e.unstable_now();g=z;var M=!0;try{M=C(!0,z)}finally{M?Q():(E=!1,C=null)}}else E=!1}var Q;if(typeof d=="function")Q=function(){d(P)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Ce=te.port2;te.port1.onmessage=P,Q=function(){Ce.postMessage(null)}}else Q=function(){A(P,0)};function Ee(z){C=z,E||(E=!0,Q())}function Ge(z,M){_=A(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Ee(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var D=m;m=M;try{return z()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=m;m=z;try{return M()}finally{m=D}},e.unstable_scheduleCallback=function(z,M,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=D+le,z={id:h++,callback:M,priorityLevel:z,startTime:D,expirationTime:le,sortIndex:-1},D>Z?(z.sortIndex=D,t(c,z),n(o)===null&&z===n(c)&&(N?(f(_),_=-1):N=!0,Ge(y,D-Z))):(z.sortIndex=le,t(o,z),w||x||(w=!0,Ee(S))),z},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(z){var M=m;return function(){var D=m;m=M;try{return z.apply(this,arguments)}finally{m=D}}}})(uu);ou.exports=uu;var Bd=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=T,Le=Bd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,Zn={};function Xt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=Object.prototype.hasOwnProperty,Wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ea={},za={};function Qd(e){return Ci.call(za,e)?!0:Ci.call(Ea,e)?!1:Wd.test(e)?za[e]=!0:(Ea[e]=!0,!1)}function Kd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gd(e,t,n,r){if(t===null||typeof t>"u"||Kd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var zs=/[\-:]([a-z])/g;function Ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zs,Ts);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zs,Ts);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zs,Ts);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var l=ce.hasOwnProperty(t)?ce[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gd(t,n,l,r)&&(n=null),r||l===null?Qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),_s=Symbol.for("react.strict_mode"),Ei=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),Ls=Symbol.for("react.forward_ref"),zi=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Gl;function An(e){if(Gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Yl=!1;function ql(e,t){if(!e||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,u=i.length-1;1<=s&&0<=u&&l[s]!==i[u];)u--;for(;1<=s&&0<=u;s--,u--)if(l[s]!==i[u]){if(s!==1||u!==1)do if(s--,u--,0>u||l[s]!==i[u]){var o=`
`+l[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=u);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function Yd(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function bi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case Ei:return"Profiler";case _s:return"StrictMode";case zi:return"Suspense";case Ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case Ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return t=e.displayName||null,t!==null?t:bi(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return bi(e(t))}catch{}}return null}function qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bi(t);case 8:return t===_s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=Xd(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vu(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function Li(e,t){vu(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pi(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pi(e,t,n){(t!=="number"||tl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Fn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function gu(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zd=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Zd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function wu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=wu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Jd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,hn=null,mn=null;function Ma(e){if(e=xr(e)){if(typeof Ai!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Pl(t),Ai(e.stateNode,e.type,t))}}function ju(e){hn?mn?mn.push(e):mn=[e]:hn=e}function Nu(){if(hn){var e=hn,t=mn;if(mn=hn=null,Ma(e),t)for(e=0;e<t.length;e++)Ma(t[e])}}function Su(e,t){return e(t)}function Cu(){}var Xl=!1;function Eu(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return Su(e,t,n)}finally{Xl=!1,(hn!==null||mn!==null)&&(Cu(),Nu())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Fi=!1;if(ut)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Fi=!1}function ef(e,t,n,r,l,i,s,u,o){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Vn=!1,nl=null,rl=!1,$i=null,tf={onError:function(e){Vn=!0,nl=e}};function nf(e,t,n,r,l,i,s,u,o){Vn=!1,nl=null,ef.apply(tf,arguments)}function rf(e,t,n,r,l,i,s,u,o){if(nf.apply(this,arguments),Vn){if(Vn){var c=nl;Vn=!1,nl=null}else throw Error(k(198));rl||(rl=!0,$i=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Da(e){if(Zt(e)!==e)throw Error(k(188))}function lf(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Da(l),e;if(i===r)return Da(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,u=l.child;u;){if(u===n){s=!0,n=l,r=i;break}if(u===r){s=!0,r=l,n=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===n){s=!0,n=i,r=l;break}if(u===r){s=!0,r=i,n=l;break}u=u.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Tu(e){return e=lf(e),e!==null?bu(e):null}function bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bu(e);if(t!==null)return t;e=e.sibling}return null}var _u=Le.unstable_scheduleCallback,Ia=Le.unstable_cancelCallback,sf=Le.unstable_shouldYield,af=Le.unstable_requestPaint,J=Le.unstable_now,of=Le.unstable_getCurrentPriorityLevel,Ds=Le.unstable_ImmediatePriority,Lu=Le.unstable_UserBlockingPriority,ll=Le.unstable_NormalPriority,uf=Le.unstable_LowPriority,Pu=Le.unstable_IdlePriority,Tl=null,Je=null;function cf(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:pf,df=Math.log,ff=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(df(e)/ff|0)|0}var zr=64,Tr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var u=s&~l;u!==0?r=$n(u):(i&=s,i!==0&&(r=$n(i)))}else s=n&~l,s!==0?r=$n(s):i!==0&&(r=$n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),l=1<<n,r|=e[n],t&=~l;return r}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-We(i),u=1<<s,o=l[s];o===-1?(!(u&n)||u&r)&&(l[s]=hf(u,t)):o<=t&&(e.expiredLanes|=u),i&=~u}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mu(){var e=zr;return zr<<=1,!(zr&4194240)&&(zr=64),e}function Zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-We(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Is(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Iu,Rs,Ru,Ou,Au,Hi=!1,br=[],Nt=null,St=null,Ct=null,tr=new Map,nr=new Map,yt=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ra(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(t.pointerId)}}function Pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=xr(t),t!==null&&Rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yf(e,t,n,r,l){switch(t){case"focusin":return Nt=Pn(Nt,e,t,n,r,l),!0;case"dragenter":return St=Pn(St,e,t,n,r,l),!0;case"mouseover":return Ct=Pn(Ct,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return tr.set(i,Pn(tr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,nr.set(i,Pn(nr.get(i)||null,e,t,n,r,l)),!0}return!1}function Fu(e){var t=Ut(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=zu(n),t!==null){e.blockedOn=t,Au(e.priority,function(){Ru(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=xr(n),t!==null&&Rs(t),e.blockedOn=n,!1;t.shift()}return!0}function Oa(e,t,n){Wr(e)&&n.delete(t)}function xf(){Hi=!1,Nt!==null&&Wr(Nt)&&(Nt=null),St!==null&&Wr(St)&&(St=null),Ct!==null&&Wr(Ct)&&(Ct=null),tr.forEach(Oa),nr.forEach(Oa)}function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,Hi||(Hi=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,xf)))}function rr(e){function t(l){return Mn(l,e)}if(0<br.length){Mn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&Mn(Nt,e),St!==null&&Mn(St,e),Ct!==null&&Mn(Ct,e),tr.forEach(t),nr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)Fu(n),n.blockedOn===null&&yt.shift()}var vn=pt.ReactCurrentBatchConfig,sl=!0;function wf(e,t,n,r){var l=F,i=vn.transition;vn.transition=null;try{F=1,Os(e,t,n,r)}finally{F=l,vn.transition=i}}function kf(e,t,n,r){var l=F,i=vn.transition;vn.transition=null;try{F=4,Os(e,t,n,r)}finally{F=l,vn.transition=i}}function Os(e,t,n,r){if(sl){var l=Bi(e,t,n,r);if(l===null)oi(e,t,r,al,n),Ra(e,r);else if(yf(l,e,t,n,r))r.stopPropagation();else if(Ra(e,r),t&4&&-1<gf.indexOf(e)){for(;l!==null;){var i=xr(l);if(i!==null&&Iu(i),i=Bi(e,t,n,r),i===null&&oi(e,t,r,al,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else oi(e,t,r,null,n)}}var al=null;function Bi(e,t,n,r){if(al=null,e=Ms(r),e=Ut(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return al=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case Ds:return 1;case Lu:return 4;case ll:case uf:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var wt=null,As=null,Qr=null;function Uu(){if(Qr)return Qr;var e,t=As,n=t.length,r,l="value"in wt?wt.value:wt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Qr=l.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Aa(){return!1}function Me(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_r:Aa,this.isPropagationStopped=Aa,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Me(Tn),yr=Y({},Tn,{view:0,detail:0}),jf=Me(yr),Jl,ei,Dn,bl=Y({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(Jl=e.screenX-Dn.screenX,ei=e.screenY-Dn.screenY):ei=Jl=0,Dn=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),Fa=Me(bl),Nf=Y({},bl,{dataTransfer:0}),Sf=Me(Nf),Cf=Y({},yr,{relatedTarget:0}),ti=Me(Cf),Ef=Y({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=Me(Ef),Tf=Y({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bf=Me(Tf),_f=Y({},Tn,{data:0}),$a=Me(_f),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mf[e])?!!t[e]:!1}function $s(){return Df}var If=Y({},yr,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rf=Me(If),Of=Y({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ua=Me(Of),Af=Y({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),Ff=Me(Af),$f=Y({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uf=Me($f),Hf=Y({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Me(Hf),Vf=[9,13,27,32],Us=ut&&"CompositionEvent"in window,Wn=null;ut&&"documentMode"in document&&(Wn=document.documentMode);var Wf=ut&&"TextEvent"in window&&!Wn,Hu=ut&&(!Us||Wn&&8<Wn&&11>=Wn),Ha=" ",Ba=!1;function Bu(e,t){switch(e){case"keyup":return Vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function Qf(e,t){switch(e){case"compositionend":return Vu(t);case"keypress":return t.which!==32?null:(Ba=!0,Ha);case"textInput":return e=t.data,e===Ha&&Ba?null:e;default:return null}}function Kf(e,t){if(nn)return e==="compositionend"||!Us&&Bu(e,t)?(e=Uu(),Qr=As=wt=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function Wu(e,t,n,r){ju(r),t=ol(t,"onChange"),0<t.length&&(n=new Fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,lr=null;function Yf(e){nc(e,0)}function _l(e){var t=sn(e);if(mu(t))return e}function qf(e,t){if(e==="change")return t}var Qu=!1;if(ut){var ni;if(ut){var ri="oninput"in document;if(!ri){var Wa=document.createElement("div");Wa.setAttribute("oninput","return;"),ri=typeof Wa.oninput=="function"}ni=ri}else ni=!1;Qu=ni&&(!document.documentMode||9<document.documentMode)}function Qa(){Qn&&(Qn.detachEvent("onpropertychange",Ku),lr=Qn=null)}function Ku(e){if(e.propertyName==="value"&&_l(lr)){var t=[];Wu(t,lr,e,Ms(e)),Eu(Yf,t)}}function Xf(e,t,n){e==="focusin"?(Qa(),Qn=t,lr=n,Qn.attachEvent("onpropertychange",Ku)):e==="focusout"&&Qa()}function Zf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(lr)}function Jf(e,t){if(e==="click")return _l(t)}function ep(e,t){if(e==="input"||e==="change")return _l(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:tp;function ir(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ci.call(t,l)||!Ke(e[l],t[l]))return!1}return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ga(e,t){var n=Ka(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ka(n)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(){for(var e=window,t=tl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=Yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gu(n.ownerDocument.documentElement,n)){if(r!==null&&Hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ga(n,i);var s=Ga(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=ut&&"documentMode"in document&&11>=document.documentMode,rn=null,Vi=null,Kn=null,Wi=!1;function Ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wi||rn==null||rn!==tl(r)||(r=rn,"selectionStart"in r&&Hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&ir(Kn,r)||(Kn=r,r=ol(Vi,"onSelect"),0<r.length&&(t=new Fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},li={},qu={};ut&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Ll(e){if(li[e])return li[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return li[e]=t[n];return e}var Xu=Ll("animationend"),Zu=Ll("animationiteration"),Ju=Ll("animationstart"),ec=Ll("transitionend"),tc=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){tc.set(e,t),Xt(t,[e])}for(var ii=0;ii<qa.length;ii++){var si=qa[ii],lp=si.toLowerCase(),ip=si[0].toUpperCase()+si.slice(1);Mt(lp,"on"+ip)}Mt(Xu,"onAnimationEnd");Mt(Zu,"onAnimationIteration");Mt(Ju,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(ec,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));function Xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rf(r,t,void 0,e),e.currentTarget=null}function nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var u=r[s],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==i&&l.isPropagationStopped())break e;Xa(l,u,c),i=o}else for(s=0;s<r.length;s++){if(u=r[s],o=u.instance,c=u.currentTarget,u=u.listener,o!==i&&l.isPropagationStopped())break e;Xa(l,u,c),i=o}}}if(rl)throw e=$i,rl=!1,$i=null,e}function B(e,t){var n=t[qi];n===void 0&&(n=t[qi]=new Set);var r=e+"__bubble";n.has(r)||(rc(t,e,2,!1),n.add(r))}function ai(e,t,n){var r=0;t&&(r|=4),rc(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Pr]){e[Pr]=!0,cu.forEach(function(n){n!=="selectionchange"&&(sp.has(n)||ai(n,!1,e),ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,ai("selectionchange",!1,t))}}function rc(e,t,n,r){switch($u(t)){case 1:var l=wf;break;case 4:l=kf;break;default:l=Os}n=l.bind(null,t,n,e),l=void 0,!Fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function oi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;s=s.return}for(;u!==null;){if(s=Ut(u),s===null)return;if(o=s.tag,o===5||o===6){r=i=s;continue e}u=u.parentNode}}r=r.return}Eu(function(){var c=i,h=Ms(n),v=[];e:{var m=tc.get(e);if(m!==void 0){var x=Fs,w=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":x=Rf;break;case"focusin":w="focus",x=ti;break;case"focusout":w="blur",x=ti;break;case"beforeblur":case"afterblur":x=ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ff;break;case Xu:case Zu:case Ju:x=zf;break;case ec:x=Uf;break;case"scroll":x=jf;break;case"wheel":x=Bf;break;case"copy":case"cut":case"paste":x=bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ua}var N=(t&4)!==0,A=!N&&e==="scroll",f=N?m!==null?m+"Capture":null:m;N=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=er(d,f),y!=null&&N.push(ar(d,y,p)))),A)break;d=d.return}0<N.length&&(m=new x(m,w,null,n,h),v.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Oi&&(w=n.relatedTarget||n.fromElement)&&(Ut(w)||w[ct]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?Ut(w):null,w!==null&&(A=Zt(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(N=Fa,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(N=Ua,y="onPointerLeave",f="onPointerEnter",d="pointer"),A=x==null?m:sn(x),p=w==null?m:sn(w),m=new N(y,d+"leave",x,n,h),m.target=A,m.relatedTarget=p,y=null,Ut(h)===c&&(N=new N(f,d+"enter",w,n,h),N.target=p,N.relatedTarget=A,y=N),A=y,x&&w)t:{for(N=x,f=w,d=0,p=N;p;p=Jt(p))d++;for(p=0,y=f;y;y=Jt(y))p++;for(;0<d-p;)N=Jt(N),d--;for(;0<p-d;)f=Jt(f),p--;for(;d--;){if(N===f||f!==null&&N===f.alternate)break t;N=Jt(N),f=Jt(f)}N=null}else N=null;x!==null&&Za(v,m,x,N,!1),w!==null&&A!==null&&Za(v,A,w,N,!0)}}e:{if(m=c?sn(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=qf;else if(Va(m))if(Qu)S=ep;else{S=Zf;var E=Xf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Jf);if(S&&(S=S(e,c))){Wu(v,S,n,h);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Pi(m,"number",m.value)}switch(E=c?sn(c):window,e){case"focusin":(Va(E)||E.contentEditable==="true")&&(rn=E,Vi=c,Kn=null);break;case"focusout":Kn=Vi=rn=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,Ya(v,n,h);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":Ya(v,n,h)}var C;if(Us)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else nn?Bu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Hu&&n.locale!=="ko"&&(nn||_!=="onCompositionStart"?_==="onCompositionEnd"&&nn&&(C=Uu()):(wt=h,As="value"in wt?wt.value:wt.textContent,nn=!0)),E=ol(c,_),0<E.length&&(_=new $a(_,e,null,n,h),v.push({event:_,listeners:E}),C?_.data=C:(C=Vu(n),C!==null&&(_.data=C)))),(C=Wf?Qf(e,n):Kf(e,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(h=new $a("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:c}),h.data=C))}nc(v,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ol(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=er(e,n),i!=null&&r.unshift(ar(e,i,l)),i=er(e,t),i!=null&&r.push(ar(e,i,l))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Za(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var u=n,o=u.alternate,c=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&c!==null&&(u=c,l?(o=er(n,i),o!=null&&s.unshift(ar(n,o,u))):l||(o=er(n,i),o!=null&&s.push(ar(n,o,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ap=/\r\n?/g,op=/\u0000|\uFFFD/g;function Ja(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(op,"")}function Mr(e,t,n){if(t=Ja(t),Ja(e)!==t&&n)throw Error(k(425))}function ul(){}var Qi=null,Ki=null;function Gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yi=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,eo=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof eo<"u"?function(e){return eo.resolve(null).then(e).catch(dp)}:Yi;function dp(e){setTimeout(function(){throw e})}function ui(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);rr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function to(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+bn,or="__reactProps$"+bn,ct="__reactContainer$"+bn,qi="__reactEvents$"+bn,fp="__reactListeners$"+bn,pp="__reactHandles$"+bn;function Ut(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=to(e);e!==null;){if(n=e[Ze])return n;e=to(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[Ze]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Pl(e){return e[or]||null}var Xi=[],an=-1;function Dt(e){return{current:e}}function V(e){0>an||(e.current=Xi[an],Xi[an]=null,an--)}function H(e,t){an++,Xi[an]=e.current,e.current=t}var Pt={},me=Dt(Pt),je=Dt(!1),Qt=Pt;function wn(e,t){var n=e.type.contextTypes;if(!n)return Pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function cl(){V(je),V(me)}function no(e,t,n){if(me.current!==Pt)throw Error(k(168));H(me,t),H(je,n)}function lc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,qd(e)||"Unknown",l));return Y({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Qt=me.current,H(me,e),H(je,je.current),!0}function ro(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=lc(e,t,Qt),r.__reactInternalMemoizedMergedChildContext=e,V(je),V(me),H(me,e)):V(je),H(je,n)}var rt=null,Ml=!1,ci=!1;function ic(e){rt===null?rt=[e]:rt.push(e)}function hp(e){Ml=!0,ic(e)}function It(){if(!ci&&rt!==null){ci=!0;var e=0,t=F;try{var n=rt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,Ml=!1}catch(l){throw rt!==null&&(rt=rt.slice(e+1)),_u(Ds,It),l}finally{F=t,ci=!1}}return null}var on=[],un=0,fl=null,pl=0,De=[],Ie=0,Kt=null,lt=1,it="";function Ft(e,t){on[un++]=pl,on[un++]=fl,fl=e,pl=t}function sc(e,t,n){De[Ie++]=lt,De[Ie++]=it,De[Ie++]=Kt,Kt=e;var r=lt;e=it;var l=32-We(r)-1;r&=~(1<<l),n+=1;var i=32-We(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,lt=1<<32-We(t)+l|n<<l|r,it=i+e}else lt=1<<i|n<<l|r,it=e}function Bs(e){e.return!==null&&(Ft(e,1),sc(e,1,0))}function Vs(e){for(;e===fl;)fl=on[--un],on[un]=null,pl=on[--un],on[un]=null;for(;e===Kt;)Kt=De[--Ie],De[Ie]=null,it=De[--Ie],De[Ie]=null,lt=De[--Ie],De[Ie]=null}var _e=null,Te=null,W=!1,Ve=null;function ac(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Te=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:lt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Te=null,!0):!1;default:return!1}}function Zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ji(e){if(W){var t=Te;if(t){var n=t;if(!lo(e,t)){if(Zi(e))throw Error(k(418));t=Et(n.nextSibling);var r=_e;t&&lo(e,t)?ac(r,n):(e.flags=e.flags&-4097|2,W=!1,_e=e)}}else{if(Zi(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,_e=e}}}function io(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Dr(e){if(e!==_e)return!1;if(!W)return io(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gi(e.type,e.memoizedProps)),t&&(t=Te)){if(Zi(e))throw oc(),Error(k(418));for(;t;)ac(e,t),t=Et(t.nextSibling)}if(io(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=_e?Et(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=Te;e;)e=Et(e.nextSibling)}function kn(){Te=_e=null,W=!1}function Ws(e){Ve===null?Ve=[e]:Ve.push(e)}var mp=pt.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var u=l.refs;s===null?delete u[i]:u[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function so(e){var t=e._init;return t(e._payload)}function uc(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=_t(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,d,p,y){return d===null||d.tag!==6?(d=gi(p,f.mode,y),d.return=f,d):(d=l(d,p),d.return=f,d)}function o(f,d,p,y){var S=p.type;return S===tn?h(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&so(S)===d.type)?(y=l(d,p.props),y.ref=In(f,d,p),y.return=f,y):(y=el(p.type,p.key,p.props,null,f.mode,y),y.ref=In(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=yi(p,f.mode,y),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,y,S){return d===null||d.tag!==7?(d=Wt(p,f.mode,y,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function v(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Sr:return p=el(d.type,d.key,d.props,null,f.mode,p),p.ref=In(f,null,d),p.return=f,p;case en:return d=yi(d,f.mode,p),d.return=f,d;case vt:var y=d._init;return v(f,y(d._payload),p)}if(Fn(d)||_n(d))return d=Wt(d,f.mode,p,null),d.return=f,d;Ir(f,d)}return null}function m(f,d,p,y){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:u(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===S?o(f,d,p,y):null;case en:return p.key===S?c(f,d,p,y):null;case vt:return S=p._init,m(f,d,S(p._payload),y)}if(Fn(p)||_n(p))return S!==null?null:h(f,d,p,y,null);Ir(f,p)}return null}function x(f,d,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,u(d,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sr:return f=f.get(y.key===null?p:y.key)||null,o(d,f,y,S);case en:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,S);case vt:var E=y._init;return x(f,d,p,E(y._payload),S)}if(Fn(y)||_n(y))return f=f.get(p)||null,h(d,f,y,S,null);Ir(d,y)}return null}function w(f,d,p,y){for(var S=null,E=null,C=d,_=d=0,$=null;C!==null&&_<p.length;_++){C.index>_?($=C,C=null):$=C.sibling;var g=m(f,C,p[_],y);if(g===null){C===null&&(C=$);break}e&&C&&g.alternate===null&&t(f,C),d=i(g,d,_),E===null?S=g:E.sibling=g,E=g,C=$}if(_===p.length)return n(f,C),W&&Ft(f,_),S;if(C===null){for(;_<p.length;_++)C=v(f,p[_],y),C!==null&&(d=i(C,d,_),E===null?S=C:E.sibling=C,E=C);return W&&Ft(f,_),S}for(C=r(f,C);_<p.length;_++)$=x(C,f,_,p[_],y),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?_:$.key),d=i($,d,_),E===null?S=$:E.sibling=$,E=$);return e&&C.forEach(function(j){return t(f,j)}),W&&Ft(f,_),S}function N(f,d,p,y){var S=_n(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var E=S=null,C=d,_=d=0,$=null,g=p.next();C!==null&&!g.done;_++,g=p.next()){C.index>_?($=C,C=null):$=C.sibling;var j=m(f,C,g.value,y);if(j===null){C===null&&(C=$);break}e&&C&&j.alternate===null&&t(f,C),d=i(j,d,_),E===null?S=j:E.sibling=j,E=j,C=$}if(g.done)return n(f,C),W&&Ft(f,_),S;if(C===null){for(;!g.done;_++,g=p.next())g=v(f,g.value,y),g!==null&&(d=i(g,d,_),E===null?S=g:E.sibling=g,E=g);return W&&Ft(f,_),S}for(C=r(f,C);!g.done;_++,g=p.next())g=x(C,f,_,g.value,y),g!==null&&(e&&g.alternate!==null&&C.delete(g.key===null?_:g.key),d=i(g,d,_),E===null?S=g:E.sibling=g,E=g);return e&&C.forEach(function(P){return t(f,P)}),W&&Ft(f,_),S}function A(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===tn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var S=p.key,E=d;E!==null;){if(E.key===S){if(S=p.type,S===tn){if(E.tag===7){n(f,E.sibling),d=l(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&so(S)===E.type){n(f,E.sibling),d=l(E,p.props),d.ref=In(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===tn?(d=Wt(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=el(p.type,p.key,p.props,null,f.mode,y),y.ref=In(f,d,p),y.return=f,f=y)}return s(f);case en:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=yi(p,f.mode,y),d.return=f,f=d}return s(f);case vt:return E=p._init,A(f,d,E(p._payload),y)}if(Fn(p))return w(f,d,p,y);if(_n(p))return N(f,d,p,y);Ir(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=gi(p,f.mode,y),d.return=f,f=d),s(f)):n(f,d)}return A}var jn=uc(!0),cc=uc(!1),hl=Dt(null),ml=null,cn=null,Qs=null;function Ks(){Qs=cn=ml=null}function Gs(e){var t=hl.current;V(hl),e._currentValue=t}function es(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){ml=e,Qs=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Qs!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(ml===null)throw Error(k(308));cn=e,ml.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var Ht=null;function Ys(e){Ht===null?Ht=[e]:Ht.push(e)}function dc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ys(t)):(n.next=l.next,l.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,dt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ys(r)):(t.next=l.next,l.next=t),r.interleaved=t,dt(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Is(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var l=e.updateQueue;gt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,c=o.next;o.next=null,s===null?i=c:s.next=c,s=o;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==s&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=o))}if(i!==null){var v=l.baseState;s=0,h=c=o=null,u=i;do{var m=u.lane,x=u.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,N=u;switch(m=t,x=n,N.tag){case 1:if(w=N.payload,typeof w=="function"){v=w.call(x,v,m);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,m=typeof w=="function"?w.call(x,v,m):w,m==null)break e;v=Y({},v,m);break e;case 2:gt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else x={eventTime:x,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=x,o=v):h=h.next=x,s|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(o=v),l.baseState=o,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Yt|=s,e.lanes=s,e.memoizedState=v}}function oo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var wr={},et=Dt(wr),ur=Dt(wr),cr=Dt(wr);function Bt(e){if(e===wr)throw Error(k(174));return e}function Xs(e,t){switch(H(cr,t),H(ur,e),H(et,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}V(et),H(et,t)}function Nn(){V(et),V(ur),V(cr)}function pc(e){Bt(cr.current);var t=Bt(et.current),n=Di(t,e.type);t!==n&&(H(ur,e),H(et,n))}function Zs(e){ur.current===e&&(V(et),V(ur))}var K=Dt(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var di=[];function Js(){for(var e=0;e<di.length;e++)di[e]._workInProgressVersionPrimary=null;di.length=0}var Yr=pt.ReactCurrentDispatcher,fi=pt.ReactCurrentBatchConfig,Gt=0,G=null,ne=null,ie=null,yl=!1,Gn=!1,dr=0,vp=0;function de(){throw Error(k(321))}function ea(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ta(e,t,n,r,l,i){if(Gt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?wp:kp,e=n(r,l),Gn){i=0;do{if(Gn=!1,dr=0,25<=i)throw Error(k(301));i+=1,ie=ne=null,t.updateQueue=null,Yr.current=jp,e=n(r,l)}while(Gn)}if(Yr.current=xl,t=ne!==null&&ne.next!==null,Gt=0,ie=ne=G=null,yl=!1,t)throw Error(k(300));return e}function na(){var e=dr!==0;return dr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=e:ie=ie.next=e,ie}function Fe(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?G.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?G.memoizedState=ie=e:ie=ie.next=e}return ie}function fr(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=Fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=s=null,o=null,c=i;do{var h=c.lane;if((Gt&h)===h)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(u=o=v,s=r):o=o.next=v,G.lanes|=h,Yt|=h}c=c.next}while(c!==null&&c!==i);o===null?s=r:o.next=u,Ke(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=o,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,G.lanes|=i,Yt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hi(e){var t=Fe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Ke(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hc(){}function mc(e,t){var n=G,r=Fe(),l=t(),i=!Ke(r.memoizedState,l);if(i&&(r.memoizedState=l,ke=!0),r=r.queue,ra(yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,pr(9,gc.bind(null,n,r,l,t),void 0,null),se===null)throw Error(k(349));Gt&30||vc(n,t,l)}return l}function vc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gc(e,t,n,r){t.value=n,t.getSnapshot=r,xc(t)&&wc(e)}function yc(e,t,n){return n(function(){xc(t)&&wc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function wc(e){var t=dt(e,1);t!==null&&Qe(t,e,1,-1)}function uo(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=xp.bind(null,G,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kc(){return Fe().memoizedState}function qr(e,t,n,r){var l=qe();G.flags|=e,l.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function Dl(e,t,n,r){var l=Fe();r=r===void 0?null:r;var i=void 0;if(ne!==null){var s=ne.memoizedState;if(i=s.destroy,r!==null&&ea(r,s.deps)){l.memoizedState=pr(t,n,i,r);return}}G.flags|=e,l.memoizedState=pr(1|t,n,i,r)}function co(e,t){return qr(8390656,8,e,t)}function ra(e,t){return Dl(2048,8,e,t)}function jc(e,t){return Dl(4,2,e,t)}function Nc(e,t){return Dl(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4,4,Sc.bind(null,t,e),n)}function la(){}function Ec(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ea(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ea(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tc(e,t,n){return Gt&21?(Ke(n,t)||(n=Mu(),G.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function gp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{F=n,fi.transition=r}}function bc(){return Fe().memoizedState}function yp(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_c(e))Lc(t,n);else if(n=dc(e,t,n,r),n!==null){var l=ge();Qe(n,e,r,l),Pc(n,t,r)}}function xp(e,t,n){var r=bt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_c(e))Lc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,n);if(l.hasEagerState=!0,l.eagerState=u,Ke(u,s)){var o=t.interleaved;o===null?(l.next=l,Ys(t)):(l.next=o.next,o.next=l),t.interleaved=l;return}}catch{}finally{}n=dc(e,t,l,r),n!==null&&(l=ge(),Qe(n,e,r,l),Pc(n,t,r))}}function _c(e){var t=e.alternate;return e===G||t!==null&&t===G}function Lc(e,t){Gn=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Is(e,n)}}var xl={readContext:Ae,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},wp={readContext:Ae,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:co,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qr(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return qr(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:uo,useDebugValue:la,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=uo(!1),t=e[0];return e=gp.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=qe();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));Gt&30||vc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,co(yc.bind(null,r,i,e),[e]),r.flags|=2048,pr(9,gc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=qe(),t=se.identifierPrefix;if(W){var n=it,r=lt;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kp={readContext:Ae,useCallback:Ec,useContext:Ae,useEffect:ra,useImperativeHandle:Cc,useInsertionEffect:jc,useLayoutEffect:Nc,useMemo:zc,useReducer:pi,useRef:kc,useState:function(){return pi(fr)},useDebugValue:la,useDeferredValue:function(e){var t=Fe();return Tc(t,ne.memoizedState,e)},useTransition:function(){var e=pi(fr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:hc,useSyncExternalStore:mc,useId:bc,unstable_isNewReconciler:!1},jp={readContext:Ae,useCallback:Ec,useContext:Ae,useEffect:ra,useImperativeHandle:Cc,useInsertionEffect:jc,useLayoutEffect:Nc,useMemo:zc,useReducer:hi,useRef:kc,useState:function(){return hi(fr)},useDebugValue:la,useDeferredValue:function(e){var t=Fe();return ne===null?t.memoizedState=e:Tc(t,ne.memoizedState,e)},useTransition:function(){var e=hi(fr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:hc,useSyncExternalStore:mc,useId:bc,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Il={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=bt(e),i=at(r,l);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,l),t!==null&&(Qe(t,e,l,r),Gr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=bt(e),i=at(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,l),t!==null&&(Qe(t,e,l,r),Gr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=bt(e),l=at(n,r);l.tag=2,t!=null&&(l.callback=t),t=zt(e,l,r),t!==null&&(Qe(t,e,r,n),Gr(t,e,r))}};function fo(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(l,i):!0}function Mc(e,t,n){var r=!1,l=Pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(l=Ne(t)?Qt:me.current,r=t.contextTypes,i=(r=r!=null)?wn(e,l):Pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function po(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Il.enqueueReplaceState(t,t.state,null)}function ns(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},qs(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ae(i):(i=Ne(t)?Qt:me.current,l.context=wn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ts(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Il.enqueueReplaceState(l,l.state,null),vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=Yd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function mi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Np=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,ps=r),rs(e,t)},n}function Ic(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){rs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){rs(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ho(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Np;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Op.bind(null,e,t,n),t.then(e,e))}function mo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vo(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var Sp=pt.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?cc(t,null,n,r):jn(t,e.child,n,r)}function go(e,t,n,r,l){n=n.render;var i=t.ref;return gn(t,l),r=ta(e,t,n,r,i,l),n=na(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ft(e,t,l)):(W&&n&&Bs(t),t.flags|=1,ve(e,t,r,l),t.child)}function yo(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!fa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rc(e,t,i,r,l)):(e=el(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(s,r)&&e.ref===t.ref)return ft(e,t,l)}return t.flags|=1,e=_t(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(ir(i,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ft(e,t,l)}return ls(e,t,n,r,l)}function Oc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(fn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(fn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(fn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(fn,ze),ze|=r;return ve(e,t,l,n),t.child}function Ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,n,r,l){var i=Ne(n)?Qt:me.current;return i=wn(t,i),gn(t,l),n=ta(e,t,n,r,i,l),r=na(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ft(e,t,l)):(W&&r&&Bs(t),t.flags|=1,ve(e,t,n,l),t.child)}function xo(e,t,n,r,l){if(Ne(n)){var i=!0;dl(t)}else i=!1;if(gn(t,l),t.stateNode===null)Xr(e,t),Mc(t,n,r),ns(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,u=t.memoizedProps;s.props=u;var o=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=Ne(n)?Qt:me.current,c=wn(t,c));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||o!==c)&&po(t,s,r,c),gt=!1;var m=t.memoizedState;s.state=m,vl(t,r,s,l),o=t.memoizedState,u!==r||m!==o||je.current||gt?(typeof h=="function"&&(ts(t,n,h,r),o=t.memoizedState),(u=gt||fo(t,n,u,r,m,o,c))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=o),s.props=r,s.state=o,s.context=c,r=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,fc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:He(t.type,u),s.props=c,v=t.pendingProps,m=s.context,o=n.contextType,typeof o=="object"&&o!==null?o=Ae(o):(o=Ne(n)?Qt:me.current,o=wn(t,o));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==v||m!==o)&&po(t,s,r,o),gt=!1,m=t.memoizedState,s.state=m,vl(t,r,s,l);var w=t.memoizedState;u!==v||m!==w||je.current||gt?(typeof x=="function"&&(ts(t,n,x,r),w=t.memoizedState),(c=gt||fo(t,n,c,r,m,w,o)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=o,r=c):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,i,l)}function is(e,t,n,r,l,i){Ac(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&ro(t,n,!1),ft(e,t,i);r=t.stateNode,Sp.current=t;var u=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,u,i)):ve(e,t,u,i),t.memoizedState=r.state,l&&ro(t,n,!0),t.child}function Fc(e){var t=e.stateNode;t.pendingContext?no(e,t.pendingContext,t.pendingContext!==t.context):t.context&&no(e,t.context,!1),Xs(e,t.containerInfo)}function wo(e,t,n,r,l){return kn(),Ws(l),t.flags|=256,ve(e,t,n,r),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function $c(e,t,n){var r=t.pendingProps,l=K.current,i=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(K,l&1),e===null)return Ji(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Al(s,r,0,null),e=Wt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=as(n),t.memoizedState=ss,e):ia(t,s));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Cp(e,t,s,r,u,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,u=l.sibling;var o={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=o,t.deletions=null):(r=_t(l,o),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=_t(u,i):(i=Wt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?as(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ss,r}return i=e.child,e=i.sibling,r=_t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ia(e,t){return t=Al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&Ws(r),jn(t,e.child,null,n),e=ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cp(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=mi(Error(k(422))),Rr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Al({mode:"visible",children:r.children},l,0,null),i=Wt(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&jn(t,e.child,null,s),t.child.memoizedState=as(s),t.memoizedState=ss,i);if(!(t.mode&1))return Rr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(k(419)),r=mi(i,r,void 0),Rr(e,t,s,r)}if(u=(s&e.childLanes)!==0,ke||u){if(r=se,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,dt(e,l),Qe(r,e,l,-1))}return da(),r=mi(Error(k(421))),Rr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Te=Et(l.nextSibling),_e=t,W=!0,Ve=null,e!==null&&(De[Ie++]=lt,De[Ie++]=it,De[Ie++]=Kt,lt=e.id,it=e.overflow,Kt=t),t=ia(t,r.children),t.flags|=4096,t)}function ko(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),es(e.return,t,n)}function vi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Uc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ko(e,n,t);else if(e.tag===19)ko(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),vi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}vi(t,!0,n,null,i);break;case"together":vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:Fc(t),kn();break;case 5:pc(t);break;case 1:Ne(t.type)&&dl(t);break;case 4:Xs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?$c(e,t,n):(H(K,K.current&1),e=ft(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Oc(e,t,n)}return ft(e,t,n)}var Hc,os,Bc,Vc;Hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};os=function(){};Bc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Bt(et.current);var i=null;switch(n){case"input":l=_i(e,l),r=_i(e,r),i=[];break;case"select":l=Y({},l,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":l=Mi(e,l),r=Mi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ul)}Ii(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(s in u)u.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var o=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&o!==u&&(o!=null||u!=null))if(c==="style")if(u){for(s in u)!u.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in o)o.hasOwnProperty(s)&&u[s]!==o[s]&&(n||(n={}),n[s]=o[s])}else n||(i||(i=[]),i.push(c,n)),n=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&B("scroll",e),i||u===o||(i=[])):(i=i||[]).push(c,o))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Vc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zp(e,t,n){var r=t.pendingProps;switch(Vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ne(t.type)&&cl(),fe(t),null;case 3:return r=t.stateNode,Nn(),V(je),V(me),Js(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(vs(Ve),Ve=null))),os(e,t),fe(t),null;case 5:Zs(t);var l=Bt(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)Bc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return fe(t),null}if(e=Bt(et.current),Dr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ze]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Un.length;l++)B(Un[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ba(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":La(r,i),B("invalid",r)}Ii(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var u=i[s];s==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Mr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Mr(r.textContent,u,e),l=["children",""+u]):Zn.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":Cr(r),_a(r,i,!0);break;case"textarea":Cr(r),Pa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ul)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ze]=t,e[or]=r,Hc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ri(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Un.length;l++)B(Un[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":ba(e,r),l=_i(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":La(e,r),l=Mi(e,r),B("invalid",e);break;default:l=r}Ii(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var o=u[i];i==="style"?ku(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&xu(e,o)):i==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&Jn(e,o):typeof o=="number"&&Jn(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zn.hasOwnProperty(i)?o!=null&&i==="onScroll"&&B("scroll",e):o!=null&&bs(e,i,o,s))}switch(n){case"input":Cr(e),_a(e,r,!1);break;case"textarea":Cr(e),Pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Vc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Bt(cr.current),Bt(et.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(i=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return fe(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Te!==null&&t.mode&1&&!(t.flags&128))oc(),kn(),t.flags|=98560,i=!1;else if(i=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ze]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Ve!==null&&(vs(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):da())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Nn(),os(e,t),e===null&&sr(t.stateNode.containerInfo),fe(t),null;case 10:return Gs(t.type._context),fe(t),null;case 17:return Ne(t.type)&&cl(),fe(t),null;case 19:if(V(K),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Rn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=gl(e),s!==null){for(t.flags|=128,Rn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Cn&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304)}else{if(!r)if(e=gl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!W)return fe(t),null}else 2*J()-i.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return ca(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Tp(e,t){switch(Vs(t),t.tag){case 1:return Ne(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),V(je),V(me),Js(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zs(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return Nn(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return ca(),null;case 24:return null;default:return null}}var Or=!1,he=!1,bp=typeof WeakSet=="function"?WeakSet:Set,b=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function us(e,t,n){try{n()}catch(r){X(e,t,r)}}var jo=!1;function _p(e,t){if(Qi=sl,e=Yu(),Hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,u=-1,o=-1,c=0,h=0,v=e,m=null;t:for(;;){for(var x;v!==n||l!==0&&v.nodeType!==3||(u=s+l),v!==i||r!==0&&v.nodeType!==3||(o=s+r),v.nodeType===3&&(s+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break t;if(m===n&&++c===l&&(u=s),m===i&&++h===r&&(o=s),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}n=u===-1||o===-1?null:{start:u,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ki={focusedElem:e,selectionRange:n},sl=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,A=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?N:He(t.type,N),A);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return w=jo,jo=!1,w}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&us(t,n,i)}l=l.next}while(l!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[or],delete t[qi],delete t[fp],delete t[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function No(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}var oe=null,Be=!1;function ht(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:he||dn(n,t);case 6:var r=oe,l=Be;oe=null,ht(e,t,n),oe=r,Be=l,oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?ui(e.parentNode,n):e.nodeType===1&&ui(e,n),rr(e)):ui(oe,n.stateNode));break;case 4:r=oe,l=Be,oe=n.stateNode.containerInfo,Be=!0,ht(e,t,n),oe=r,Be=l;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&us(n,t,s),l=l.next}while(l!==r)}ht(e,t,n);break;case 1:if(!he&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){X(n,t,u)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,ht(e,t,n),he=r):ht(e,t,n);break;default:ht(e,t,n)}}function So(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bp),t.forEach(function(r){var l=Fp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Be=!1;break e;case 3:oe=u.stateNode.containerInfo,Be=!0;break e;case 4:oe=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(oe===null)throw Error(k(160));Kc(i,s,l),oe=null,Be=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(c){X(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),r&4){try{Yn(3,e,e.return),Rl(3,e)}catch(N){X(e,e.return,N)}try{Yn(5,e,e.return)}catch(N){X(e,e.return,N)}}break;case 1:Ue(t,e),Ye(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ue(t,e),Ye(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var l=e.stateNode;try{Jn(l,"")}catch(N){X(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&vu(l,i),Ri(u,s);var c=Ri(u,i);for(s=0;s<o.length;s+=2){var h=o[s],v=o[s+1];h==="style"?ku(l,v):h==="dangerouslySetInnerHTML"?xu(l,v):h==="children"?Jn(l,v):bs(l,h,v,c)}switch(u){case"input":Li(l,i);break;case"textarea":gu(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?pn(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?pn(l,!!i.multiple,i.defaultValue,!0):pn(l,!!i.multiple,i.multiple?[]:"",!1))}l[or]=i}catch(N){X(e,e.return,N)}}break;case 6:if(Ue(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(N){X(e,e.return,N)}}break;case 3:if(Ue(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(N){X(e,e.return,N)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(oa=J())),r&4&&So(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||h,Ue(t,e),he=c):Ue(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(b=e,h=e.child;h!==null;){for(v=b=h;b!==null;){switch(m=b,x=m.child,m.tag){case 0:case 11:case 14:case 15:Yn(4,m,m.return);break;case 1:dn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(N){X(r,n,N)}}break;case 5:dn(m,m.return);break;case 22:if(m.memoizedState!==null){Eo(v);continue}}x!==null?(x.return=m,b=x):Eo(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=v.stateNode,o=v.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=wu("display",s))}catch(N){X(e,e.return,N)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(N){X(e,e.return,N)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ue(t,e),Ye(e),r&4&&So(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Jn(l,""),r.flags&=-33);var i=No(e);fs(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,u=No(e);ds(e,u,s);break;default:throw Error(k(161))}}catch(o){X(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e,t,n){b=e,Yc(e)}function Yc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Or;if(!s){var u=l.alternate,o=u!==null&&u.memoizedState!==null||he;u=Or;var c=he;if(Or=s,(he=o)&&!c)for(b=l;b!==null;)s=b,o=s.child,s.tag===22&&s.memoizedState!==null?zo(l):o!==null?(o.return=s,b=o):zo(l);for(;i!==null;)b=i,Yc(i),i=i.sibling;b=l,Or=u,he=c}Co(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,b=i):Co(e)}}function Co(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oo(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oo(t,s,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&rr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||t.flags&512&&cs(t)}catch(m){X(t,t.return,m)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Eo(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function zo(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(o){X(t,n,o)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(o){X(t,l,o)}}var i=t.return;try{cs(t)}catch(o){X(t,i,o)}break;case 5:var s=t.return;try{cs(t)}catch(o){X(t,s,o)}}}catch(o){X(t,t.return,o)}if(t===e){b=null;break}var u=t.sibling;if(u!==null){u.return=t.return,b=u;break}b=t.return}}var Pp=Math.ceil,wl=pt.ReactCurrentDispatcher,sa=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,O=0,se=null,ee=null,ue=0,ze=0,fn=Dt(0),re=0,hr=null,Yt=0,Ol=0,aa=0,qn=null,we=null,oa=0,Cn=1/0,nt=null,kl=!1,ps=null,Tt=null,Ar=!1,kt=null,jl=0,Xn=0,hs=null,Zr=-1,Jr=0;function ge(){return O&6?J():Zr!==-1?Zr:Zr=J()}function bt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:mp.transition!==null?(Jr===0&&(Jr=Mu()),Jr):(e=F,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Qe(e,t,n,r){if(50<Xn)throw Xn=0,hs=null,Error(k(185));gr(e,n,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Ol|=n),re===4&&xt(e,ue)),Se(e,r),n===1&&O===0&&!(t.mode&1)&&(Cn=J()+500,Ml&&It()))}function Se(e,t){var n=e.callbackNode;mf(e,t);var r=il(e,e===se?ue:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?hp(To.bind(null,e)):ic(To.bind(null,e)),cp(function(){!(O&6)&&It()}),n=null;else{switch(Du(r)){case 1:n=Ds;break;case 4:n=Lu;break;case 16:n=ll;break;case 536870912:n=Pu;break;default:n=ll}n=rd(n,qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qc(e,t){if(Zr=-1,Jr=0,O&6)throw Error(k(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=il(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var l=O;O|=2;var i=Zc();(se!==e||ue!==t)&&(nt=null,Cn=J()+500,Vt(e,t));do try{Ip();break}catch(u){Xc(e,u)}while(!0);Ks(),wl.current=i,O=l,ee!==null?t=0:(se=null,ue=0,t=re)}if(t!==0){if(t===2&&(l=Ui(e),l!==0&&(r=l,t=ms(e,l))),t===1)throw n=hr,Vt(e,0),xt(e,r),Se(e,J()),n;if(t===6)xt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Mp(l)&&(t=Nl(e,r),t===2&&(i=Ui(e),i!==0&&(r=i,t=ms(e,i))),t===1))throw n=hr,Vt(e,0),xt(e,r),Se(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:$t(e,we,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=oa+500-J(),10<t)){if(il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Yi($t.bind(null,e,we,nt),t);break}$t(e,we,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-We(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pp(r/1960))-r,10<r){e.timeoutHandle=Yi($t.bind(null,e,we,nt),r);break}$t(e,we,nt);break;case 5:$t(e,we,nt);break;default:throw Error(k(329))}}}return Se(e,J()),e.callbackNode===n?qc.bind(null,e):null}function ms(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Vt(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=we,we=n,t!==null&&vs(t)),e}function vs(e){we===null?we=e:we.push.apply(we,e)}function Mp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ke(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~aa,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function To(e){if(O&6)throw Error(k(327));yn();var t=il(e,0);if(!(t&1))return Se(e,J()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Ui(e);r!==0&&(t=r,n=ms(e,r))}if(n===1)throw n=hr,Vt(e,0),xt(e,t),Se(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,we,nt),Se(e,J()),null}function ua(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Cn=J()+500,Ml&&It())}}function qt(e){kt!==null&&kt.tag===0&&!(O&6)&&yn();var t=O;O|=1;var n=Oe.transition,r=F;try{if(Oe.transition=null,F=1,e)return e()}finally{F=r,Oe.transition=n,O=t,!(O&6)&&It()}}function ca(){ze=fn.current,V(fn)}function Vt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,up(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:Nn(),V(je),V(me),Js();break;case 5:Zs(r);break;case 4:Nn();break;case 13:V(K);break;case 19:V(K);break;case 10:Gs(r.type._context);break;case 22:case 23:ca()}n=n.return}if(se=e,ee=e=_t(e.current,null),ue=ze=t,re=0,hr=null,aa=Ol=Yt=0,we=qn=null,Ht!==null){for(t=0;t<Ht.length;t++)if(n=Ht[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}Ht=null}return e}function Xc(e,t){do{var n=ee;try{if(Ks(),Yr.current=xl,yl){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}yl=!1}if(Gt=0,ie=ne=G=null,Gn=!1,dr=0,sa.current=null,n===null||n.return===null){re=1,hr=t,ee=null;break}e:{var i=e,s=n.return,u=n,o=t;if(t=ue,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,h=u,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=mo(s);if(x!==null){x.flags&=-257,vo(x,s,u,i,t),x.mode&1&&ho(i,c,t),t=x,o=c;var w=t.updateQueue;if(w===null){var N=new Set;N.add(o),t.updateQueue=N}else w.add(o);break e}else{if(!(t&1)){ho(i,c,t),da();break e}o=Error(k(426))}}else if(W&&u.mode&1){var A=mo(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),vo(A,s,u,i,t),Ws(Sn(o,u));break e}}i=o=Sn(o,u),re!==4&&(re=2),qn===null?qn=[i]:qn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Dc(i,o,t);ao(i,f);break e;case 1:u=o;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tt===null||!Tt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ic(i,u,t);ao(i,y);break e}}i=i.return}while(i!==null)}ed(n)}catch(S){t=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Zc(){var e=wl.current;return wl.current=xl,e===null?xl:e}function da(){(re===0||re===3||re===2)&&(re=4),se===null||!(Yt&268435455)&&!(Ol&268435455)||xt(se,ue)}function Nl(e,t){var n=O;O|=2;var r=Zc();(se!==e||ue!==t)&&(nt=null,Vt(e,t));do try{Dp();break}catch(l){Xc(e,l)}while(!0);if(Ks(),O=n,wl.current=r,ee!==null)throw Error(k(261));return se=null,ue=0,re}function Dp(){for(;ee!==null;)Jc(ee)}function Ip(){for(;ee!==null&&!sf();)Jc(ee)}function Jc(e){var t=nd(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?ed(e):ee=t,sa.current=null}function ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=zp(n,t,ze),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function $t(e,t,n){var r=F,l=Oe.transition;try{Oe.transition=null,F=1,Rp(e,t,n,r)}finally{Oe.transition=l,F=r}return null}function Rp(e,t,n,r){do yn();while(kt!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(vf(e,i),e===se&&(ee=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ar||(Ar=!0,rd(ll,function(){return yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var s=F;F=1;var u=O;O|=4,sa.current=null,_p(e,n),Gc(n,e),np(Ki),sl=!!Qi,Ki=Qi=null,e.current=n,Lp(n),af(),O=u,F=s,Oe.transition=i}else e.current=n;if(Ar&&(Ar=!1,kt=e,jl=l),i=e.pendingLanes,i===0&&(Tt=null),cf(n.stateNode),Se(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(kl)throw kl=!1,e=ps,ps=null,e;return jl&1&&e.tag!==0&&yn(),i=e.pendingLanes,i&1?e===hs?Xn++:(Xn=0,hs=e):Xn=0,It(),null}function yn(){if(kt!==null){var e=Du(jl),t=Oe.transition,n=F;try{if(Oe.transition=null,F=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,jl=0,O&6)throw Error(k(331));var l=O;for(O|=4,b=e.current;b!==null;){var i=b,s=i.child;if(b.flags&16){var u=i.deletions;if(u!==null){for(var o=0;o<u.length;o++){var c=u[o];for(b=c;b!==null;){var h=b;switch(h.tag){case 0:case 11:case 15:Yn(8,h,i)}var v=h.child;if(v!==null)v.return=h,b=v;else for(;b!==null;){h=b;var m=h.sibling,x=h.return;if(Wc(h),h===c){b=null;break}if(m!==null){m.return=x,b=m;break}b=x}}}var w=i.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var A=N.sibling;N.sibling=null,N=A}while(N!==null)}}b=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,b=s;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,b=f;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){s=b;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,b=p;else e:for(s=d;b!==null;){if(u=b,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Rl(9,u)}}catch(S){X(u,u.return,S)}if(u===s){b=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,b=y;break e}b=u.return}}if(O=l,It(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{F=n,Oe.transition=t}}return!1}function bo(e,t,n){t=Sn(n,t),t=Dc(e,t,1),e=zt(e,t,1),t=ge(),e!==null&&(gr(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)bo(e,e,n);else for(;t!==null;){if(t.tag===3){bo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=Sn(n,e),e=Ic(t,e,1),t=zt(t,e,1),e=ge(),t!==null&&(gr(t,1,e),Se(t,e));break}}t=t.return}}function Op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>J()-oa?Vt(e,0):aa|=n),Se(e,t)}function td(e,t){t===0&&(e.mode&1?(t=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):t=1);var n=ge();e=dt(e,t),e!==null&&(gr(e,t,n),Se(e,n))}function Ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),td(e,n)}function Fp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),td(e,n)}var nd;nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Ep(e,t,n);ke=!!(e.flags&131072)}else ke=!1,W&&t.flags&1048576&&sc(t,pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xr(e,t),e=t.pendingProps;var l=wn(t,me.current);gn(t,n),l=ta(null,t,r,e,l,n);var i=na();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,dl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qs(t),l.updater=Il,t.stateNode=l,l._reactInternals=t,ns(t,r,e,n),t=is(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Bs(t),ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Up(r),e=He(r,e),l){case 0:t=ls(null,t,r,e,n);break e;case 1:t=xo(null,t,r,e,n);break e;case 11:t=go(null,t,r,e,n);break e;case 14:t=yo(null,t,r,He(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),ls(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),xo(e,t,r,l,n);case 3:e:{if(Fc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,fc(e,t),vl(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Sn(Error(k(423)),t),t=wo(e,t,r,n,l);break e}else if(r!==l){l=Sn(Error(k(424)),t),t=wo(e,t,r,n,l);break e}else for(Te=Et(t.stateNode.containerInfo.firstChild),_e=t,W=!0,Ve=null,n=cc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===l){t=ft(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return pc(t),e===null&&Ji(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Gi(r,l)?s=null:i!==null&&Gi(r,i)&&(t.flags|=32),Ac(e,t),ve(e,t,s,n),t.child;case 6:return e===null&&Ji(t),null;case 13:return $c(e,t,n);case 4:return Xs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),go(e,t,r,l,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,H(hl,r._currentValue),r._currentValue=s,i!==null)if(Ke(i.value,s)){if(i.children===l.children&&!je.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){s=i.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(i.tag===1){o=at(-1,n&-n),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o}}i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),es(i.return,n,t),u.lanes|=n;break}o=o.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(k(341));s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),es(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,gn(t,n),l=Ae(l),r=r(l),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,l=He(r,t.pendingProps),l=He(r.type,l),yo(e,t,r,l,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),Xr(e,t),t.tag=1,Ne(r)?(e=!0,dl(t)):e=!1,gn(t,n),Mc(t,r,l),ns(t,r,l,n),is(null,t,r,!0,e,n);case 19:return Uc(e,t,n);case 22:return Oc(e,t,n)}throw Error(k(156,t.tag))};function rd(e,t){return _u(e,t)}function $p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new $p(e,t,n,r)}function fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Up(e){if(typeof e=="function")return fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ls)return 11;if(e===Ps)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")fa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tn:return Wt(n.children,l,i,t);case _s:s=8,l|=8;break;case Ei:return e=Re(12,n,t,l|2),e.elementType=Ei,e.lanes=i,e;case zi:return e=Re(13,n,t,l),e.elementType=zi,e.lanes=i,e;case Ti:return e=Re(19,n,t,l),e.elementType=Ti,e.lanes=i,e;case pu:return Al(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:s=10;break e;case fu:s=9;break e;case Ls:s=11;break e;case Ps:s=14;break e;case vt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Re(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Wt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Al(e,t,n,r){return e=Re(22,e,r,t),e.elementType=pu,e.lanes=n,e.stateNode={isHidden:!1},e}function gi(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function yi(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function pa(e,t,n,r,l,i,s,u,o){return e=new Hp(e,t,n,u,o),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qs(i),e}function Bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ld(e){if(!e)return Pt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ne(n))return lc(e,n,t)}return t}function id(e,t,n,r,l,i,s,u,o){return e=pa(n,r,!0,e,l,i,s,u,o),e.context=ld(null),n=e.current,r=ge(),l=bt(n),i=at(r,l),i.callback=t??null,zt(n,i,l),e.current.lanes=l,gr(e,l,r),Se(e,r),e}function Fl(e,t,n,r){var l=t.current,i=ge(),s=bt(l);return n=ld(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(l,t,s),e!==null&&(Qe(e,l,s,i),Gr(e,l,s)),s}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ha(e,t){_o(e,t),(e=e.alternate)&&_o(e,t)}function Vp(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}$l.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Fl(e,t,null,null)};$l.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Fl(null,e,null,null)}),t[ct]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&Fu(e)}};function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lo(){}function Wp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Sl(s);i.call(c)}}var s=id(t,r,e,0,null,!1,!1,"",Lo);return e._reactRootContainer=s,e[ct]=s.current,sr(e.nodeType===8?e.parentNode:e),qt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Sl(o);u.call(c)}}var o=pa(e,0,!1,null,null,!1,!1,"",Lo);return e._reactRootContainer=o,e[ct]=o.current,sr(e.nodeType===8?e.parentNode:e),qt(function(){Fl(t,o,n,r)}),o}function Hl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var u=l;l=function(){var o=Sl(s);u.call(o)}}Fl(t,s,e,l)}else s=Wp(n,t,e,l,r);return Sl(s)}Iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(Is(t,n|1),Se(t,J()),!(O&6)&&(Cn=J()+500,It()))}break;case 13:qt(function(){var r=dt(e,1);if(r!==null){var l=ge();Qe(r,e,1,l)}}),ha(e,1)}};Rs=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ge();Qe(t,e,134217728,n)}ha(e,134217728)}};Ru=function(e){if(e.tag===13){var t=bt(e),n=dt(e,t);if(n!==null){var r=ge();Qe(n,e,t,r)}ha(e,t)}};Ou=function(){return F};Au=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ai=function(e,t,n){switch(t){case"input":if(Li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Pl(r);if(!l)throw Error(k(90));mu(r),Li(r,l)}}}break;case"textarea":gu(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};Su=ua;Cu=qt;var Qp={usingClientEntryPoint:!1,Events:[xr,sn,Pl,ju,Nu,ua]},On={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kp={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||Vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{Tl=Fr.inject(Kp),Je=Fr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!va(t))throw Error(k(200));return Bp(e,t,null,n)};Pe.createRoot=function(e,t){if(!va(e))throw Error(k(299));var n=!1,r="",l=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=pa(e,1,!1,null,null,n,!1,r,l),e[ct]=t.current,sr(e.nodeType===8?e.parentNode:e),new ma(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return qt(e)};Pe.hydrate=function(e,t,n){if(!Ul(t))throw Error(k(200));return Hl(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!va(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=sd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=id(t,null,e,1,n??null,l,!1,i,s),e[ct]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)};Pe.render=function(e,t,n){if(!Ul(t))throw Error(k(200));return Hl(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Ul(e))throw Error(k(40));return e._reactRootContainer?(qt(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Pe.unstable_batchedUpdates=ua;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ul(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Hl(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),au.exports=Pe;var Gp=au.exports,od,Po=Gp;od=Po.createRoot,Po.hydrateRoot;const Yp="M500 0L0 500V2300H600V2800L1100 2300H1500L2400 1400V0H500ZM2200 1300L1800 1700H1400L1050 2050V1700H600V200H2200V1300Z",qp="M1700 550H1900V1150H1700V550ZM1150 550H1350V1150H1150V550Z";function Mo({fill:e,width:t,opacity:n,className:r,style:l}){return a.jsxs("svg",{viewBox:"0 0 2400 2800",width:t,height:t/2400*2800,"aria-hidden":"true",focusable:"false",className:r,style:{position:"absolute",opacity:n,filter:"blur(1.5px)",pointerEvents:"none",...l},children:[a.jsx("path",{d:Yp,fill:e}),a.jsx("path",{d:qp,fill:e})]})}function Xp(){return a.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-0 overflow-hidden",style:{backgroundColor:"var(--bg-base)"},children:[
  a.jsx("div",{className:"ambient-light-orb-1 absolute",style:{top:"-18%",left:"-12%",width:"58vw",height:"58vw",borderRadius:"9999px",background:"radial-gradient(circle, rgba(47,69,83,0.8) 0%, rgba(20,117,225,0.25) 45%, transparent 70%)",filter:"blur(100px)"}}),
  a.jsx("div",{className:"ambient-light-orb-2 absolute",style:{bottom:"-16%",right:"-8%",width:"44vw",height:"44vw",borderRadius:"9999px",background:"radial-gradient(circle, rgba(0,231,1,0.4) 0%, rgba(36,255,38,0.15) 40%, transparent 68%)",filter:"blur(110px)"}}),
  a.jsx("div",{className:"ambient-light-orb-3 absolute",style:{top:"35%",right:"18%",width:"32vw",height:"32vw",borderRadius:"9999px",background:"radial-gradient(circle, rgba(0,231,1,0.2) 0%, transparent 65%)",filter:"blur(95px)"}}),
  a.jsx(Mo,{fill:"#557086",width:760,opacity:.038,className:"drift-a",style:{top:"-6%",right:"-9%",transform:"rotate(-12deg)"}}),
  a.jsx(Mo,{fill:"#5C7FB8",width:620,opacity:.03,className:"drift-b",style:{bottom:"-12%",left:"-4%",transform:"rotate(18deg)"}}),
  a.jsx("div",{className:"sparkle-node gold",style:{top:"14%",left:"22%",width:"6px",height:"6px",animationDelay:"0.2s"}}),
  a.jsx("div",{className:"sparkle-node",style:{top:"28%",right:"24%",width:"8px",height:"8px",animationDelay:"1.8s"}}),
  a.jsx("div",{className:"sparkle-node blue",style:{top:"62%",left:"15%",width:"7px",height:"7px",animationDelay:"3.1s"}}),
  a.jsx("div",{className:"sparkle-node gold",style:{top:"78%",right:"16%",width:"6px",height:"6px",animationDelay:"2.4s"}}),
  a.jsx("div",{className:"sparkle-node",style:{top:"46%",left:"48%",width:"5px",height:"5px",animationDelay:"4.2s"}}),
  a.jsx("div",{className:"sparkle-node blue",style:{top:"88%",left:"38%",width:"7px",height:"7px",animationDelay:"0.9s"}}),
  a.jsx("div",{className:"sparkle-node gold",style:{top:"8%",right:"38%",width:"5px",height:"5px",animationDelay:"3.7s"}}),
  a.jsx("div",{className:"layer-grid absolute inset-0"}),
  a.jsx("div",{className:"layer-grain absolute inset-0"}),
  a.jsx("div",{className:"layer-vignette absolute inset-0"})
]})}/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ud=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=T.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:s,...u},o)=>T.createElement("svg",{ref:o,...Jp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ud("lucide",l),...u},[...s.map(([c,h])=>T.createElement(c,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const n=T.forwardRef(({className:r,...l},i)=>T.createElement(eh,{ref:i,iconNode:t,className:ud(`lucide-${Zp(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=I("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=I("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=I("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=I("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=I("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=I("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=I("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=I("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=I("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=I("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=I("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=I("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=I("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=I("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=I("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=I("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=I("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=I("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=I("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=I("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=I("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=I("ShieldQuestion",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=I("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=I("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=I("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=I("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=I("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=I("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=I("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=I("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=I("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=I("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=I("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=I("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=I("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=I("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=I("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=I("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ys=[{id:"casinos",label:"Casinos",icon:rh,enabled:!0},{id:"giveaways",label:"Giveaways",icon:Cl,enabled:!0},{id:"blackjack",label:"Blackjack",icon:gh,enabled:!0},{id:"plinko",label:"Plinko",icon:ih,enabled:!0},{id:"leaderboard",label:"Leaderboard",icon:ya,enabled:!1},{id:"admin",label:"Admin",icon:vh,enabled:!0,hidden:!0}],Th=[{name:"Mommouh",url:"https://www.twitch.tv/mommouh",live:!1},{name:"Fishfish",url:"https://www.twitch.tv/fishfishke",live:!1}];let Xe=null,ot=null,mr=!1,pd=.5;const xs=new Set,bh=()=>xs.forEach(e=>e());function _h(e){return xs.add(e),()=>xs.delete(e)}const Io=()=>mr;function Lh(e){mr=e,ot&&Xe&&ot.gain.setTargetAtTime(mr?0:pd,Xe.currentTime,.01),bh()}function xa(){if(typeof window>"u")return null;if(Xe)return Xe.state==="suspended"&&Xe.resume(),Xe;const e=window.AudioContext??window.webkitAudioContext;if(!e)return null;try{return Xe=new e,ot=Xe.createGain(),ot.gain.value=mr?0:pd,ot.connect(Xe.destination),Xe}catch{return null}}function ae({freq:e,to:t,dur:n,type:r="sine",gain:l=.2,delay:i=0,attack:s=.004}){const u=xa();if(!u||!ot)return;const o=u.currentTime+i,c=u.createOscillator(),h=u.createGain();c.type=r,c.frequency.setValueAtTime(e,o),t!==void 0&&c.frequency.exponentialRampToValueAtTime(Math.max(1,t),o+n),h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(l,o+s),h.gain.exponentialRampToValueAtTime(1e-4,o+n),c.connect(h),h.connect(ot),c.start(o),c.stop(o+n+.02)}function At({dur:e=.09,gain:t=.16,delay:n=0,freq:r=1800,q:l=.8,sweepTo:i,type:s="bandpass"}){const u=xa();if(!u||!ot)return;const o=u.currentTime+n,c=Math.max(1,Math.floor(u.sampleRate*e)),h=u.createBuffer(1,c,u.sampleRate),v=h.getChannelData(0);for(let N=0;N<c;N+=1)v[N]=(Math.random()*2-1)*(1-N/c);const m=u.createBufferSource();m.buffer=h;const x=u.createBiquadFilter();x.type=s,x.frequency.setValueAtTime(r,o),x.Q.value=l,i&&x.frequency.exponentialRampToValueAtTime(Math.max(40,i),o+e);const w=u.createGain();w.gain.setValueAtTime(t,o),w.gain.exponentialRampToValueAtTime(1e-4,o+e),m.connect(x),x.connect(w),w.connect(ot),m.start(o),m.stop(o+e+.02)}function $r(e,t=.075,n={}){e.forEach((r,l)=>ae({freq:r,dur:.26,type:"triangle",gain:.16,delay:l*t,...n}))}const wi={hover:()=>ae({freq:900,dur:.035,type:"sine",gain:.035}),click:()=>{ae({freq:620,to:900,dur:.055,type:"square",gain:.075}),At({dur:.03,gain:.05,freq:3200})},toggle:()=>ae({freq:480,to:760,dur:.09,type:"triangle",gain:.11}),chip:()=>{At({dur:.045,gain:.16,freq:2600,q:1.4}),At({dur:.05,gain:.12,freq:2100,q:1.6,delay:.045}),ae({freq:1400,to:900,dur:.06,type:"square",gain:.05})},deal:()=>{At({dur:.14,gain:.13,freq:2400,sweepTo:700,q:.7}),ae({freq:300,to:190,dur:.1,type:"sine",gain:.05})},flip:()=>{At({dur:.07,gain:.15,freq:3400,sweepTo:1400,q:1.1}),ae({freq:720,to:1180,dur:.07,type:"triangle",gain:.07})},win:()=>$r([523.25,659.25,783.99]),bigWin:()=>{$r([523.25,659.25,783.99,1046.5],.08,{gain:.18,dur:.3}),ae({freq:1567.98,dur:.5,type:"triangle",gain:.1,delay:.32}),At({dur:.5,gain:.05,freq:6e3,q:.4,delay:.3})},lose:()=>$r([392,329.63,261.63],.085,{gain:.12,type:"sine"}),bust:()=>{ae({freq:420,to:90,dur:.42,type:"sawtooth",gain:.13}),At({dur:.3,gain:.07,freq:900,sweepTo:180,delay:.04})},push:()=>{ae({freq:440,dur:.16,type:"sine",gain:.11}),ae({freq:440,dur:.2,type:"sine",gain:.09,delay:.16})},open:()=>ae({freq:340,to:660,dur:.16,type:"triangle",gain:.09}),close:()=>ae({freq:620,to:300,dur:.14,type:"triangle",gain:.08}),copy:()=>{ae({freq:880,dur:.06,type:"sine",gain:.1}),ae({freq:1320,dur:.09,type:"sine",gain:.09,delay:.06})},error:()=>{ae({freq:220,dur:.12,type:"square",gain:.09}),ae({freq:180,dur:.16,type:"square",gain:.09,delay:.11})},enter:()=>{$r([440,587.33,880],.06,{gain:.14,dur:.24})}};function L(e){var t;if(!mr)try{(t=wi[e])==null||t.call(wi)}catch{}}function hd(){xa()}const Ph={"gold-outline":"border-[var(--border-gold)] text-[var(--gold)] bg-[rgba(0,231,1,0.06)]","gold-solid":"border-transparent text-[#04060B] font-bold bg-gradient-to-b from-[var(--gold-bright)] to-[var(--gold)] shadow-[0_2px_0_0_var(--gold-shadow)]",navy:"border-[var(--border)] text-[var(--text-muted)] bg-[rgba(47,69,83,0.16)]",muted:"border-[var(--border-navy)] text-[var(--text-dim)] bg-transparent",live:"border-transparent text-[#04060B] font-bold bg-gradient-to-b from-[var(--gold-bright)] to-[var(--gold)]"};function be({children:e,variant:t="navy",className:n="",mono:r=!1}){return a.jsx("span",{className:["inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 leading-none",r?"font-mono text-[10px] uppercase tracking-[0.14em]":"text-[11px]",Ph[t],n].join(" "),children:e})}function Ro({src:e,alt:t="",className:n="",stacked:r=!1}){return a.jsx("div",{className:"relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[var(--gold)] "+n,style:{background:"linear-gradient(160deg,#213743,#1a2c38)",boxShadow:r?"0 0 0 3px #1a2c38, inset 0 1px 0 rgba(255,255,255,0.1)":"inset 0 1px 0 rgba(255,255,255,0.1)"},children:a.jsx("img",{src:e,alt:t,className:"h-full w-full object-cover object-center"})})}function Oo({activeSection:e,onSelect:t,adminUnlocked:n,isDrawer:r=!1,onClose:l}){const i=ys.filter(s=>!s.hidden||n);return a.jsxs("aside",{className:["relative flex h-full w-[264px] shrink-0 flex-col border-r border-[var(--border)]",r?"animate-drawer-in":""].join(" "),style:{background:"linear-gradient(180deg, rgba(26,44,56,0.86), rgba(15,33,46,0.9))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)"},children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-y-0 right-0 w-px",style:{backgroundColor:"rgba(47,69,83,0.8)"}}),r&&a.jsx("button",{type:"button",onClick:l,"aria-label":"Close navigation",className:`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-[12px]
                       border border-[var(--border-navy)] text-[var(--text-muted)]
                       transition-colors hover:border-[var(--border-gold)] hover:text-[var(--gold)]`,children:a.jsx(Bl,{size:16})}),a.jsxs("div",{className:"px-5 pb-6 pt-6",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx(Ro,{src:"/profile-images/Mommouh.png",alt:"Mommouh"}),a.jsx(Ro,{src:"/profile-images/Fish.png",alt:"Fishfish",className:"-ml-3.5",stacked:!0})]}),a.jsxs("div",{className:"mt-4 font-display text-[15px] font-bold leading-tight tracking-[-0.02em]",children:[a.jsx("span",{children:"MOMMOUH"}),a.jsx("span",{className:"mx-1.5 text-[var(--gold)]",children:"×"}),a.jsx("span",{children:"FISHFISH"})]}),a.jsx("div",{className:"micro mt-2",children:"Casino Hub"})]}),a.jsxs("nav",{"aria-label":"Main",className:"flex-1 overflow-y-auto px-3 py-2",children:[a.jsx("div",{className:"micro px-2 mb-2.5 sidebar-section-heading",children:"Main"}),a.jsx("ul",{className:"flex flex-col gap-2.5",children:i.map(s=>{const u=s.icon,o=s.enabled&&s.id===e,c=s.id==="admin";return a.jsx("li",{children:a.jsxs("button",{type:"button",disabled:!s.enabled,"aria-current":o?"page":void 0,onPointerEnter:()=>s.enabled&&!o&&L("hover"),onClick:()=>{s.enabled&&(L("click"),t(s.id))},className:["group relative flex h-[50px] w-full items-center gap-3 overflow-hidden","rounded-[14px] px-3 text-[14px] font-medium transition-all duration-200",s.enabled?o?"text-[var(--text-primary)]":"text-[var(--text-muted)] hover:bg-[rgba(47,69,83,0.16)] hover:text-[var(--text-primary)]":"cursor-not-allowed text-[var(--text-dim)] opacity-50"].join(" "),style:o?{background:"var(--bg-raised)"}:void 0,children:[o&&a.jsx("span",{"aria-hidden":"true",className:"absolute inset-y-[6px] left-0 w-[3px] rounded-r-full bg-[var(--gold)]",style:{boxShadow:"0 0 12px rgba(0,231,1,0.7)"}}),a.jsx("span",{className:["grid h-9 w-9 shrink-0 place-items-center rounded-[11px] border transition-colors",o?"border-[var(--border-gold)] bg-[rgba(0,231,1,0.12)]":"border-[var(--border)] bg-[rgba(47,69,83,0.12)]"].join(" "),children:a.jsx(u,{size:17,"aria-hidden":"true"})}),a.jsx("span",{className:"flex-1 text-left",children:s.label}),!s.enabled&&a.jsx("span",{className:"shrink-0 rounded-[6px] border border-[rgba(255,255,255,0.08)] bg-[rgba(33,55,67,0.40)] px-2 py-0.5 text-[11px] font-medium leading-normal text-[var(--text-dim)] tracking-normal",children:"Soon"}),c&&s.enabled&&a.jsx(be,{variant:"gold-outline",mono:!0,className:"px-2 py-[3px]",children:"You"})]})},s.id)})})]}),a.jsxs("div",{className:"px-3 pb-4 pt-3 border-t border-[var(--border)]",children:[a.jsx("div",{className:"micro px-2 mb-2.5 sidebar-section-heading",children:"Twitch Channels"}),a.jsx("ul",{className:"flex flex-col gap-1.5",children:Th.map(s=>a.jsx("li",{children:a.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",onPointerEnter:()=>L("hover"),className:"flex h-10 items-center gap-2.5 rounded-[12px] border border-[var(--border)] bg-[rgba(47,69,83,0.10)] px-3 transition-colors hover:bg-[rgba(47,69,83,0.22)] hover:border-[var(--border-gold)] cursor-pointer group",children:[a.jsx(Nh,{size:14,className:"twitch-icon shrink-0 text-[var(--text-dim)] group-hover:text-[#9146FF] group-hover:stroke-[#9146FF]","aria-hidden":"true",style:{transition:"color 0.2s ease, stroke 0.2s ease"}}),a.jsx("span",{className:"flex-1 text-[13px] text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-primary)]",children:s.name}),a.jsxs("span",{className:"flex items-center gap-1.5 transition-opacity duration-200",children:[a.jsx("span",{"aria-hidden":"true",className:["h-1.5 w-1.5 rounded-full shrink-0",s.live?"bg-[var(--gold)] shadow-[0_0_6px_rgba(0,231,1,0.5)]":"bg-[var(--text-dim)] opacity-60"].join(" ")}),a.jsx("span",{className:["text-[12px] font-medium leading-none",s.live?"text-[var(--gold)]":"text-[var(--text-dim)]"].join(" "),children:s.live?"Live":"Offline"})]})]})},s.name))}),a.jsx("div",{className:"micro px-2 pt-3 mb-2.5 sidebar-section-heading",children:"Discord"}),a.jsx("div",{children:a.jsxs("a",{href:"https://discord.gg/fnuYVDQ2T",target:"_blank",rel:"noopener noreferrer",onPointerEnter:()=>L("hover"),className:"flex h-10 items-center gap-2.5 rounded-[12px] border border-[var(--border)] bg-[rgba(47,69,83,0.10)] px-3 transition-colors hover:bg-[rgba(47,69,83,0.22)] hover:border-[rgba(88,101,242,0.5)] cursor-pointer group discord-button",children:[a.jsx("svg",{viewBox:"0 0 24 24",width:15,height:15,fill:"currentColor",className:"discord-icon shrink-0 text-[var(--text-dim)] group-hover:text-[#5865F2]","aria-hidden":"true",style:{transition:"color 0.2s ease, fill 0.2s ease, filter 0.2s ease"},children:a.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),a.jsx("span",{className:"flex-1 text-[13px] text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-primary)]",children:"Discord"})]})}),a.jsx("div",{className:"mx-2 mt-4 border-t border-[var(--border)] pt-3",children:a.jsx("p",{className:"text-[10px] leading-relaxed text-[var(--text-dim)]",children:"18+ · Play responsibly · Gambling involves risk"})})]})]})}function Mh(){const e=T.useSyncExternalStore(r=>_h(r),()=>Io(),()=>!0),t=T.useCallback(()=>{hd();const r=!Io();Lh(r),r||L("toggle")},[]),n=T.useCallback(r=>L(r),[]);return{muted:e,toggleMuted:t,sfx:n}}function Dh(){T.useEffect(()=>{const e=()=>hd(),t={once:!0,passive:!0};return window.addEventListener("pointerdown",e,t),window.addEventListener("keydown",e,t),()=>{window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)}},[])}const Ih=[{value:"featured",label:"Featured"},{value:"name",label:"Name A–Z"},{value:"newest",label:"Newest"}],Ur="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-[var(--border-navy)] bg-[rgba(33,55,67,0.6)] text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--border-gold)] hover:text-[var(--gold)] active:translate-y-[2px]";function Rh({title:e,count:t,query:n,onQueryChange:r,sort:l,onSortChange:i,showControls:s,onOpenNav:u}){const[o,c]=T.useState(!1),h=T.useRef(null),{muted:v,toggleMuted:m}=Mh();return T.useEffect(()=>{var x;o&&((x=h.current)==null||x.focus())},[o]),a.jsxs("header",{className:"sticky top-0 z-30 h-[72px] shrink-0 border-b border-[var(--border)]",style:{background:"linear-gradient(180deg, rgba(15,33,46,0.85), rgba(15,33,46,0.7))",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"},children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 bottom-0 h-px",style:{backgroundColor:"rgba(0,231,1,0.20)"}}),a.jsxs("div",{className:"mx-auto flex h-full max-w-[1400px] items-center gap-3 px-5 sm:px-8",children:[a.jsx("button",{type:"button",onClick:()=>{L("open"),u()},"aria-label":"Open navigation",className:`${Ur} lg:hidden`,children:a.jsx(uh,{size:17})}),!o&&a.jsxs("div",{className:"flex min-w-0 items-baseline gap-2.5",children:[a.jsx("h1",{className:"truncate font-display text-[20px] font-bold",children:e}),t!==null&&a.jsxs("span",{className:"hidden shrink-0 text-[13px] text-[var(--text-muted)] sm:inline",children:[t," ",t===1?"partner":"partners"]})]}),a.jsxs("div",{className:"flex flex-1 items-center justify-end gap-2.5",children:[s&&a.jsxs(a.Fragment,{children:[a.jsxs("label",{className:"relative hidden md:block",children:[a.jsx("span",{className:"sr-only",children:"Search casinos"}),a.jsx(xi,{size:15,"aria-hidden":"true",className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-dim)]"}),a.jsx("input",{type:"search",value:n,onChange:x=>r(x.target.value),placeholder:"Search casinos…",className:"field w-[260px] pl-10",style:{height:40}})]}),o?a.jsxs("div",{className:"flex flex-1 items-center gap-2 md:hidden",children:[a.jsxs("label",{className:"relative flex-1",children:[a.jsx("span",{className:"sr-only",children:"Search casinos"}),a.jsx(xi,{size:15,"aria-hidden":"true",className:"pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-dim)]"}),a.jsx("input",{ref:h,type:"search",value:n,onChange:x=>r(x.target.value),placeholder:"Search casinos…",className:"field pl-10",style:{height:40}})]}),a.jsx("button",{type:"button","aria-label":"Close search",onClick:()=>{L("close"),r(""),c(!1)},className:Ur,children:a.jsx(Bl,{size:16})})]}):a.jsx("button",{type:"button","aria-label":"Search casinos",onClick:()=>{L("click"),c(!0)},className:`${Ur} md:hidden`,children:a.jsx(xi,{size:16})})]}),                    !o && a.jsx("button", { type: "button", onClick: m, "aria-pressed": !v, "aria-label": v ? "Turn sound on" : "Turn sound off", title: v ? "Sound off" : "Sound on", className: [Ur, v ? "" : "border-[var(--border-gold)] text-[var(--gold)]"].join(" "), children: v ? a.jsx(Eh, { size: 16 }) : a.jsx(Ch, { size: 16 }) })
                  ]
                })
              ]
            })
          ]
        });
      }
const q=e=>`'${e.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n")}'`,Ao=e=>`[${e.map(q).join(", ")}]`;function Oh(e){return`import type { Giveaway } from '../types';

export type { Giveaway } from '../types';

export const giveaways: Giveaway[] = [
${e.map(n=>`  {
    id: ${q(n.id)},
    prize: ${q(n.prize)},
    badge: ${q(n.badge)},
    description:
      ${q(n.description)},
    startsAt: ${q(n.startsAt)},
    endsAt: ${q(n.endsAt)},
    status: ${q(n.status)},
    entryMethod: ${q(n.entryMethod)},
    entryUrl: ${q(n.entryUrl)},
    entryInstruction: ${q(n.entryInstruction)},
    entries: ${n.entries},${n.value?`
    value: ${q(n.value)},`:""}${n.sponsorId?`
    sponsorId: ${q(n.sponsorId)},`:""}
    featured: ${n.featured},
  },`).join(`
`)}
];
`}function Ah(e){return`import type { Casino } from '../types';

export type { Casino } from '../types';

export const casinos: Casino[] = [
${e.map(n=>`  {
    id: ${q(n.id)},
    name: ${q(n.name)},
    initials: ${q(n.initials)},
    status: ${q(n.status)},
    shortDescription:
      ${q(n.shortDescription)},
    longDescription:
      ${q(n.longDescription)},
    highlights: ${Ao(n.highlights)},
    tags: ${Ao(n.tags)},
    bonus: ${q(n.bonus)},
    promoCode: ${q(n.promoCode)},
    url: ${q(n.url)},
    featured: ${n.featured},
    addedOrder: ${n.addedOrder},
  },`).join(`
`)}
];
`}function Fo(e,t,n="text/plain"){const r=new Blob([t],{type:n}),l=URL.createObjectURL(r),i=document.createElement("a");i.href=l,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(l)}async function md(e){try{return await navigator.clipboard.writeText(e),!0}catch{try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const n=document.execCommand("copy");return document.body.removeChild(t),n}catch{return!1}}}const Fh=e=>e.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||"giveaway",vd={gold:"btn-gold",navy:"btn-navy",ghost:"btn-ghost",danger:"btn-danger"},gd={sm:"h-9 px-3.5 text-[12.5px]",md:"h-11 px-5 text-[13.5px]",lg:"h-[52px] px-7 text-[15px]"};function U({variant:e="gold",size:t="md",children:n,className:r="",sound:l="click",onClick:i,onPointerEnter:s,...u}){return a.jsx("button",{type:"button",className:["btn",vd[e],gd[t],r].join(" "),onPointerEnter:o=>{u.disabled||L("hover"),s==null||s(o)},onClick:o=>{l&&L(l),i==null||i(o)},...u,children:n})}function wa({variant:e="gold",size:t="md",children:n,className:r="",sound:l="click",onClick:i,onPointerEnter:s,...u}){return a.jsx("a",{className:["btn",vd[e],gd[t],r].join(" "),onPointerEnter:o=>{L("hover"),s==null||s(o)},onClick:o=>{l&&L(l),i==null||i(o)},...u,children:n})}function jt({label:e,status:t,right:n}){const r=t==="EXCLUSIVE"||t==="LIVE"?"gold-solid":t==="ENDED"||t==="SOON"?"muted":"gold-outline";return a.jsxs("div",{className:`relative flex h-[44px] items-center gap-3 rounded-t-[8px] border-b
                 border-[var(--border)] px-4`,style:{background:"var(--bg-raised)"},children:[a.jsx("span",{className:"flex-1 truncate text-[13px] font-semibold text-[var(--text-primary)]",children:e}),t&&a.jsx(be,{variant:r,mono:!0,children:t}),n]})}function Hn({children:e,className:t="",as:n="div"}){return a.jsx(n,{className:["panel overflow-hidden",t].join(" "),children:e})}function Vl({eyebrow:e,title:t,subtitle:n,right:r}){return a.jsxs("div",{className:"mb-6 flex flex-wrap items-end justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"micro mb-2.5 flex items-center gap-2",children:[a.jsx("span",{className:"inline-block h-[3px] w-6 rounded-full bg-[var(--gold)]"}),e]}),a.jsx("h2",{className:"font-display text-[26px] font-bold leading-tight sm:text-[32px]",children:t}),n&&a.jsx("p",{className:"mt-2 max-w-[62ch] text-[14.5px] leading-[1.6] text-[var(--text-muted)]",children:n})]}),r]})}function yd({logoUrl:l,name:n="",size:t=58}){const defaultSrc=(n==="Kirgo"||n==="kirgo")?"/profile-images/kirgo.png":"/profile-images/jackcasino.png";const src=l||defaultSrc;return a.jsx("div",{className:"grid shrink-0 place-items-center rounded-[16px] border border-[var(--border-gold)] overflow-hidden",style:{width:t,height:t,background:"linear-gradient(160deg,#213743,#1a2c38)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -2px 0 rgba(0,0,0,0.5)"},children:a.jsx("img",{src:src,alt:n||"Logo",className:"h-full w-full object-contain p-1.5 rounded-[14px]"})})}function xd({bonus:e,promoCode:t}){const[n,r]=T.useState(!1),l=T.useRef(void 0);T.useEffect(()=>()=>window.clearTimeout(l.current),[]);const i=async()=>{if(!t)return;const s=await md(t);L(s?"copy":"error"),r(s),window.clearTimeout(l.current),l.current=window.setTimeout(()=>r(!1),1500)};return a.jsxs("div",{className:"panel-inset flex items-center justify-between gap-3 px-3.5 py-3",children:[a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("div",{className:"micro mb-1.5",children:"Bonus"}),a.jsx("div",{className:"text-[13px] font-medium leading-snug text-[var(--text-primary)]",children:e})]}),t?a.jsxs("button",{type:"button",onClick:i,onPointerEnter:()=>L("hover"),"aria-label":n?"Promo code copied":`Copy promo code ${t}`,className:`flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-gold)] bg-[rgba(0,231,1,0.08)] px-3 py-1.5 transition-all duration-200 hover:bg-[rgba(0,231,1,0.16)] active:scale-95`,children:[a.jsx("span",{className:"font-mono text-[11px] font-medium tracking-[0.08em] text-[var(--gold)]",children:n?"Copied!":t}),n?a.jsx(En,{size:12,className:"text-[var(--gold)]","aria-hidden":"true"}):a.jsx(cd,{size:12,className:"text-[var(--gold)] opacity-70","aria-hidden":"true"})]}):null]})}function $h({casino:e,index:t,onOpenDetails:n}){const r=!!e.url&&e.url!=="#";return a.jsxs("article",{className:`panel animate-fade-up shine group flex flex-col transition-transform duration-200 hover:-translate-y-1`,style:{"--stagger":t},children:[a.jsx(jt,{label:e.name,status:e.status,right:e.featured?a.jsx(xh,{size:13,className:"ml-1 shrink-0 text-[var(--gold)]","aria-label":"Featured"}):void 0}),a.jsxs("div",{className:"flex flex-1 flex-col gap-4 p-5",children:[a.jsxs("div",{className:"flex items-center gap-3.5",children:[a.jsx(yd,{initials:e.initials,logoUrl:e.logoUrl,name:e.name}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("h3",{className:"truncate font-display text-[18px] font-semibold",children:e.name}),a.jsx("p",{className:"micro mt-1.5",children:e.status==="EXCLUSIVE"?"Exclusive partner":"Verified partner"})]})]}),a.jsx("p",{className:"text-[14px] leading-[1.6] text-[var(--text-muted)]",children:e.shortDescription}),a.jsx("ul",{className:"flex flex-wrap gap-1.5",children:e.tags.map(l=>a.jsx("li",{children:a.jsx(be,{variant:"navy",children:l})},l))}),a.jsx("div",{className:"mt-auto",children:a.jsx(xd,{bonus:e.bonus,promoCode:e.promoCode})})]}),a.jsxs("div",{className:"flex gap-2.5 border-t border-[var(--border)] p-4",children:[r?a.jsxs(wa,{href:e.url,target:"_blank",rel:"noopener noreferrer sponsored",variant:"gold",className:"flex-1",children:["Play now",a.jsx(ga,{size:15,className:"opacity-70"})]}):a.jsx(U,{variant:"gold",className:"flex-1",disabled:!0,title:"No affiliate link set yet — add one in the Admin tab",children:"Link soon"}),a.jsx(U,{variant:"ghost",className:"flex-1",onClick:()=>n(e),sound:"open","aria-haspopup":"dialog",children:"Details"})]})]})}const $o='a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';function Uh({casino:e,onClose:t}){const n=T.useRef(null),r=T.useRef(null),l=!!e.url&&e.url!=="#";T.useEffect(()=>(r.current=document.activeElement,()=>{var u,o;return(o=(u=r.current)==null?void 0:u.focus)==null?void 0:o.call(u)}),[]),T.useEffect(()=>(document.body.classList.add("is-locked"),()=>document.body.classList.remove("is-locked")),[]),T.useEffect(()=>{var o,c;(c=((o=n.current)==null?void 0:o.querySelector($o))??n.current)==null||c.focus()},[]);const i=T.useCallback(()=>{L("close"),t()},[t]),s=T.useCallback(u=>{var m;if(u.key==="Escape"){u.stopPropagation(),i();return}if(u.key!=="Tab")return;const o=Array.from(((m=n.current)==null?void 0:m.querySelectorAll($o))??[]);if(o.length===0)return;const c=o[0],h=o[o.length-1],v=document.activeElement;u.shiftKey&&(v===c||v===n.current)?(u.preventDefault(),h.focus()):!u.shiftKey&&v===h&&(u.preventDefault(),c.focus())},[i]);return a.jsx("div",{className:"animate-backdrop-in fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(1,2,4,0.78)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"},onMouseDown:u=>{u.target===u.currentTarget&&i()},onKeyDown:s,children:a.jsxs("div",{ref:n,role:"dialog","aria-modal":"true","aria-labelledby":"casino-modal-title",tabIndex:-1,className:"panel animate-modal-in max-h-[88vh] w-full max-w-[560px] focus:outline-none",children:[a.jsx(jt,{label:e.name,status:e.status,right:a.jsx("button",{type:"button",onClick:i,"aria-label":"Close details",className:`ml-1 grid h-7 w-7 place-items-center rounded-[8px] text-[var(--text-dim)] transition-colors hover:bg-[rgba(0,231,1,0.10)] hover:text-[var(--gold)]`,children:a.jsx(Bl,{size:14})})}),a.jsx("div",{className:"max-h-[calc(88vh-42px)] overflow-y-auto",children:a.jsxs("div",{className:"flex flex-col gap-5 p-6",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(yd,{initials:e.initials,logoUrl:e.logoUrl,name:e.name,size:64}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("h2",{id:"casino-modal-title",className:"font-display text-[22px] font-semibold",children:e.name}),a.jsx("p",{className:"micro mt-2 text-[12px] font-semibold text-[#b8cadf]",children:e.status==="EXCLUSIVE"?"Exclusive partner":"Verified partner"})]})]}),a.jsxs("div",{children:[a.jsx("div",{className:"micro modal-highlights-title mb-3 text-[12px] font-bold tracking-wider text-[var(--text-primary)] uppercase",children:"Details"}),a.jsx("ul",{className:"flex flex-col gap-2.5",children:e.highlights.map(u=>a.jsxs("li",{className:"flex items-start gap-2.5",children:[a.jsx("span",{"aria-hidden":"true",className:`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[var(--border-gold)] bg-[rgba(0,231,1,0.08)]`,children:a.jsx(En,{size:10,className:"text-[var(--gold)]"})}),a.jsx("span",{className:"modal-highlight-item text-[14px] leading-[1.55] font-medium text-[#e2ecf7]",children:u})]},u))})]}),a.jsx(xd,{bonus:e.bonus,promoCode:e.promoCode}),l?a.jsxs(wa,{href:e.url,target:"_blank",rel:"noopener noreferrer sponsored",variant:"gold",size:"lg",className:"w-full",children:["Play now",a.jsx(ga,{size:16,className:"opacity-70"})]}):a.jsx(U,{variant:"gold",size:"lg",className:"w-full",disabled:!0,children:"Link coming soon — check back"}),a.jsx("p",{className:"modal-legal-text text-[12px] leading-relaxed text-[#9fb3c8]",children:"18+ only. Terms and wagering requirements apply. Play responsibly — gambling involves risk."})]})})]})})}function ki({icon:e,children:t}){return a.jsxs("li",{className:`flex items-center gap-2 rounded-full border border-[var(--border-gold)]
                 bg-[rgba(33,55,67,0.45)] px-3.5 py-1.5 text-[12px] font-medium`,style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.06)"},children:[a.jsx(e,{size:13,className:"text-[var(--gold)]","aria-hidden":"true"}),t]})}function Hh({casinos:e,totalCount:t,query:n,onClearSearch:r}){const[l,i]=T.useState(null),[cf,scf]=T.useState(null),s=e.filter(u=>u.status==="EXCLUSIVE").length,filtered=T.useMemo(()=>cf?e.filter(u=>u.category===cf||(u.category&&u.category.toLowerCase()===cf.toLowerCase())):e,[e,cf]);return a.jsxs("section",{children:[a.jsxs("div",{className:"panel seam-top hero-surface relative mb-7 overflow-hidden p-7 sm:p-9",children:[a.jsx("div",{"aria-hidden":"true",className:"hero-sweep pointer-events-none absolute inset-0"}),a.jsxs("h2",{className:"font-display text-[30px] font-bold leading-tight sm:text-[40px]",children:["Mommouh ",a.jsx("span",{className:"text-[var(--gold)]",children:"×"})," Fishfish"]}),a.jsx("p",{className:"mt-3 max-w-[52ch] text-[15px] leading-[1.6] text-[var(--text-muted)]",children:"Explore our featured casino partners, exclusive offers and community benefits."}),a.jsxs("ul",{className:"mt-6 flex flex-wrap gap-2",children:[a.jsxs(ki,{icon:zh,children:[t," Partners"]}),a.jsx(ki,{icon:gs,children:s>0?"Exclusive codes":"Verified codes"}),a.jsx(ki,{icon:th,children:"Verified payouts"})]})]}),a.jsx(Vl,{eyebrow:"Partners",title:"Where we play",subtitle:"Every site here has been used on stream. Codes are copy-ready."}),a.jsx("div",{className:"panel-inset mb-6 inline-flex flex-wrap gap-1 p-1.5",role:"tablist","aria-label":"Filter casinos",children:a.jsx("button",{type:"button",role:"tab","aria-selected":cf==="crypto",onPointerEnter:()=>L("hover"),onClick:()=>{L("click");scf(prev=>prev==="crypto"?null:"crypto")},className:["rounded-[10px] px-4 py-2 text-[13px] font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer",cf==="crypto"?"bg-gradient-to-b from-[var(--gold-bright)] to-[var(--gold)] text-[#04060B] shadow-[0_2px_0_0_var(--gold-shadow)] font-semibold":"text-[var(--text-muted)] hover:bg-[rgba(47,69,83,0.18)] hover:text-[var(--text-primary)]"].join(" "),children:"CRYPTO CASINOS"})}),filtered.length>0?a.jsx("div",{className:"casino-grid",children:filtered.map((u,o)=>a.jsx($h,{casino:u,index:o,onOpenDetails:i},u.id))}):a.jsxs("div",{className:"panel flex flex-col items-center gap-4 px-6 py-16 text-center",children:[a.jsx(hh,{size:44,strokeWidth:1.25,className:"text-[var(--gold)] opacity-25"}),a.jsx("h3",{className:"font-display text-[18px] font-semibold",children:n?`No casinos match "${n}"`:cf?"No crypto casinos found":"No casinos available yet."}),a.jsx("p",{className:"max-w-[40ch] text-[14px] leading-[1.6] text-[var(--text-muted)]",children:n?"Try a different name, or search by a feature such as crypto, live dealers or instant payout.":cf?"Check back soon for more crypto-enabled partners.":"Check back soon for featured casino partners."}),(n||cf)&&a.jsx(U,{variant:"ghost",size:"sm",onClick:()=>{r();scf(null);},children:"Clear filters"})]}) ,a.jsx("p",{className:"mt-8 text-[12px] leading-relaxed text-[var(--text-dim)]",children:"Links on this page are affiliate links. 18+ only — play responsibly, and never wager more than you can afford to lose."}),l&&a.jsx(Uh,{casino:l,onClose:()=>i(null)})]})}const Bh=["S","H","D","C"],Vh=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],Wh=[10,25,100,500],Qh=1e3,Kh=3;let Gh=0;const Yh=()=>`c${Gh+=1}`;function ka(e=6,t=Math.random){const n=[];for(let r=0;r<e;r+=1)for(const l of Bh)for(const i of Vh)n.push({id:Yh(),suit:l,rank:i,faceUp:!1});for(let r=n.length-1;r>0;r-=1){const l=Math.floor(t()*(r+1));[n[r],n[l]]=[n[l],n[r]]}return n}function ws(e){return e==="A"?11:e==="K"||e==="Q"||e==="J"||e==="10"?10:Number(e)}function tt(e){let t=0,n=0;for(const l of e)t+=ws(l.rank),l.rank==="A"&&(n+=1);let r=n>0;for(;t>21&&n>0;)t-=10,n-=1,r=n>0;return{total:t,soft:r}}function Wl(e){return!e.fromSplit&&e.cards.length===2&&tt(e.cards).total===21}function ks(e,t){return e.phase==="player"&&t.cards.length===2&&ws(t.cards[0].rank)===ws(t.cards[1].rank)&&e.hands.length<Kh&&e.bankroll>=t.bet}function js(e,t){return e.phase==="player"&&t.cards.length===2&&!t.doubled&&!(t.fromSplit&&t.cards[0].rank==="A")&&e.bankroll>=t.bet}function st(e,t=!0){e.shoe.length===0&&(e.shoe=ka(e.decks),e.discarded=0);const n=e.shoe.pop();return n.faceUp=t,e.discarded+=1,n}function qh(e){return e.discarded>e.decks*52*.6}function wd(e=6){return{shoe:ka(e),discarded:0,decks:e,dealer:[],hands:[],activeHand:0,bankroll:Qh,pendingBet:0,phase:"betting",insuranceBet:0,insuranceOffered:!1,message:"Place your bet to begin.",roundId:0,lastNet:0}}const $e=e=>({...e,shoe:[...e.shoe],dealer:e.dealer.map(t=>({...t})),hands:e.hands.map(t=>({...t,cards:t.cards.map(n=>({...n}))}))});function Xh(e,t){if(e.phase!=="betting"||e.bankroll<e.pendingBet+t||e.pendingBet+t>1000)return e;const n=$e(e);n.pendingBet=Math.min(1000,n.pendingBet+t);n.message=n.pendingBet>=1000?`Bet ${n.pendingBet} chips (Max bet reached). Deal when ready.`:`Bet ${n.pendingBet} chips. Deal when ready.`;return n}function Zh(e){if(e.phase!=="betting")return e;const t=$e(e);return t.pendingBet=0,t.message="Place your bet to begin.",t}function Jh(e){if(e.phase!=="betting"||e.pendingBet<=0||e.pendingBet>1000)return e;let t=$e(e);qh(t)&&(t.shoe=ka(t.decks),t.discarded=0),t.bankroll-=t.pendingBet,t.roundId+=1,t.lastNet=0,t.insuranceBet=0,t.insuranceOffered=!1,t.insuranceResult=void 0,t.dealer=[],t.activeHand=0;const n={id:`h${t.roundId}-0`,cards:[],bet:t.pendingBet,done:!1,doubled:!1,fromSplit:!1};return t.hands=[n],n.cards.push(st(t)),t.dealer.push(st(t)),n.cards.push(st(t)),t.dealer.push(st(t,!1)),t.pendingBet=0,t.phase="dealing",t.message="Dealing…",t}function em(e){if(e.phase!=="dealing")return e;const t=$e(e),n=t.hands[0];return t.dealer[0].rank==="A"&&t.bankroll>=Math.floor(n.bet/2)?(t.phase="insurance",t.insuranceOffered=!0,t.message="Dealer shows an Ace. Insurance?",t):Wl(n)?(t.phase="dealer",t.message="Blackjack!",t):(t.phase="player",t.message="Your move.",t)}function Uo(e,t){if(e.phase!=="insurance")return e;const n=$e(e),r=Math.floor(n.hands[0].bet/2);return t&&(n.insuranceBet=r,n.bankroll-=r),tt(n.dealer).total===21?(n.phase="dealer",n.message="Dealer checks…"):Wl(n.hands[0])?(n.phase="dealer",n.message="Blackjack!"):(n.phase="player",n.message=t?"Insurance placed. Your move.":"Your move."),n.insuranceOffered=!1,n}function El(e){const t=e.hands.findIndex((n,r)=>r>e.activeHand&&!n.done);return t===-1?(e.phase="dealer",e.message="Dealer plays."):(e.activeHand=t,e.message=`Hand ${t+1}. Your move.`),e}function tm(e){if(e.phase!=="player")return e;const t=$e(e),n=t.hands[t.activeHand];n.cards.push(st(t));const{total:r}=tt(n.cards);return r>21?(n.done=!0,n.result="bust",El(t)):r===21?(n.done=!0,El(t)):(t.message="Hit or stand?",t)}function nm(e){if(e.phase!=="player")return e;const t=$e(e);return t.hands[t.activeHand].done=!0,El(t)}function rm(e){const t=e.hands[e.activeHand];if(!js(e,t))return e;const n=$e(e),r=n.hands[n.activeHand];return n.bankroll-=r.bet,r.bet*=2,r.doubled=!0,r.cards.push(st(n)),r.done=!0,tt(r.cards).total>21&&(r.result="bust"),El(n)}function lm(e){const t=e.hands[e.activeHand];if(!ks(e,t))return e;const n=$e(e),r=n.hands[n.activeHand],l=r.cards.pop();n.bankroll-=r.bet,r.fromSplit=!0;const i={id:`h${n.roundId}-${n.hands.length}`,cards:[l],bet:r.bet,done:!1,doubled:!1,fromSplit:!0};if(n.hands.splice(n.activeHand+1,0,i),r.cards.push(st(n)),i.cards.push(st(n)),l.rank==="A"){r.done=!0,i.done=!0;const s=n.hands.findIndex(u=>!u.done);return s===-1?(n.phase="dealer",n.message="Dealer plays.",n):(n.activeHand=s,n)}return n.message=`Split. Playing hand ${n.activeHand+1}.`,n}function im(e){const t=$e(e),n=[];t.dealer=t.dealer.map(i=>({...i,faceUp:!0}));const r=t.hands.every(i=>tt(i.cards).total>21),l=t.hands.length===1&&Wl(t.hands[0]);if(!r&&!l)for(;;){const{total:i}=tt(t.dealer);if(i>=17)break;const s=st(t);t.dealer.push(s),n.push(s)}return{state:t,drawn:n}}function sm(e){const t=$e(e),n=tt(t.dealer).total,r=t.dealer.length===2&&n===21,l=n>21;let i=0;if(t.insuranceBet>0)if(r){const s=t.insuranceBet*2;t.bankroll+=t.insuranceBet+s,i+=s,t.insuranceResult="win"}else i-=t.insuranceBet,t.insuranceResult="lose";for(const s of t.hands){const u=tt(s.cards).total,o=Wl(s);if(u>21)s.result="bust",s.payout=0,i-=s.bet;else if(o&&!r){s.result="blackjack";const c=Math.floor(s.bet*1.5);s.payout=s.bet+c,t.bankroll+=s.payout,i+=c}else r&&!o?(s.result="lose",s.payout=0,i-=s.bet):o&&r?(s.result="push",s.payout=s.bet,t.bankroll+=s.bet):l||u>n?(s.result="win",s.payout=s.bet*2,t.bankroll+=s.payout,i+=s.bet):u===n?(s.result="push",s.payout=s.bet,t.bankroll+=s.bet):(s.result="lose",s.payout=0,i-=s.bet)}return t.lastNet=i,t.phase="settled",t.message=i>0?`You win ${i} chips.`:i<0?`You lose ${Math.abs(i)} chips.`:"Push.",t}function Ho(e){const t=$e(e);return t.dealer=[],t.hands=[],t.activeHand=0,t.insuranceBet=0,t.insuranceResult=void 0,t.phase="betting",t.lastNet=0,t.message=t.bankroll<=0?"Out of chips — reset the table to keep playing.":"Place your bet.",t}function am(e){const t=wd(e.decks);return t.roundId=e.roundId,t}const om={S:"♠",H:"♥",D:"♦",C:"♣"},um=e=>e==="H"||e==="D";function cm({card:e,width:t=74,index:n=0,animate:r=!0}){const l=Math.round(t*1.4),i=um(e.suit)?"var(--card-suit-gold)":"var(--card-ink)",s=om[e.suit],u=e.rank==="J"||e.rank==="Q"||e.rank==="K";return a.jsx("div",{className:r?"animate-deal":void 0,style:{width:t,height:l,perspective:"900px","--tilt":`${(n-1)*1.5}deg`},children:a.jsxs("div",{className:["pcard h-full w-full",e.faceUp?"":"is-down"].join(" "),children:[a.jsxs("div",{className:"pcard-face",children:[a.jsxs("div",{className:"absolute left-[7%] top-[5%] flex flex-col items-center leading-none",style:{color:i},children:[a.jsx("span",{className:"font-display font-bold",style:{fontSize:t*.24,letterSpacing:"-0.03em"},children:e.rank}),a.jsx("span",{style:{fontSize:t*.19,marginTop:t*.01},children:s})]}),a.jsxs("div",{className:"absolute bottom-[5%] right-[7%] flex rotate-180 flex-col items-center leading-none",style:{color:i},children:[a.jsx("span",{className:"font-display font-bold",style:{fontSize:t*.24,letterSpacing:"-0.03em"},children:e.rank}),a.jsx("span",{style:{fontSize:t*.19,marginTop:t*.01},children:s})]}),a.jsx("div",{className:"absolute inset-0 grid place-items-center",children:u?a.jsx("div",{className:"grid place-items-center rounded-[6px]",style:{width:t*.46,height:t*.62,border:`1.5px solid ${i}`,background:"repeating-linear-gradient(45deg, rgba(233,17,60,0.10) 0 2px, transparent 2px 6px)"},children:a.jsx("span",{className:"font-display font-bold",style:{fontSize:t*.3,color:i},children:e.rank})}):a.jsx("span",{style:{fontSize:t*.46,color:i,opacity:.9},children:s})})]}),a.jsx("div",{className:"pcard-back"})]})})}function dm({width:e=54,count:t=4}){const n=Math.round(e*1.4);return a.jsx("div",{className:"relative",style:{width:e,height:n+t*2},"aria-hidden":"true",children:Array.from({length:t}).map((r,l)=>a.jsx("div",{className:"pcard-back absolute rounded-[8px]",style:{width:e,height:n,top:l*2,left:l*1}},l))})}const Bo={10:{bg:"linear-gradient(180deg,#3a5464,#2f4553)",ring:"#557086",text:"#F7FAFC"},25:{bg:"linear-gradient(180deg,#f43f5e,#c81e3e)",ring:"#fb7185",text:"#FFFFFF"},100:{bg:"linear-gradient(180deg,#00e701,#00a802)",ring:"#54ff55",text:"#0F212E"},500:{bg:"linear-gradient(180deg,#8b5cf6,#6d3fd6)",ring:"#a78bfa",text:"#FFFFFF"}};function fm({value:e,onClick:t,disabled:n,size:r=58}){const l=Bo[e]??Bo[10];return a.jsx("button",{type:"button",className:"chip",disabled:n,onClick:t,onPointerEnter:()=>!n&&L("hover"),"aria-label":`Bet ${e} chips`,style:{width:r,height:r,background:l.bg,color:l.text,fontSize:r*.28,border:`2px solid ${l.ring}`,boxShadow:"0 5px 0 0 rgba(2,5,10,0.85), 0 10px 18px -8px rgba(0,0,0,0.9)"},children:e})}function pm({seed:e}){const t=T.useMemo(()=>Array.from({length:26},(r,l)=>{const i=Math.PI*2*l/26+e%7*.13,s=80+(l*37+e*13)%95;return{dx:Math.round(Math.cos(i)*s*1.25),dy:Math.round(Math.sin(i)*s*.7)-34,rot:(l*53+e*29)%360,delay:l%6*28,gold:l%3!==2,size:5+l%3*2}}),[e]);return a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-20 overflow-hidden",children:t.map((n,r)=>a.jsx("span",{className:"burst-bit",style:{left:"50%",top:"46%",width:n.size,height:Math.round(n.size*1.6),background:n.gold?"linear-gradient(180deg, var(--gold-bright), var(--gold))":"var(--navy-bright)",animationDelay:`${n.delay}ms`,"--dx":`${n.dx}px`,"--dy":`${n.dy}px`,"--rot":`${n.rot}deg`}},r))})}function hm(){return a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-[58%] justify-center",children:a.jsxs("svg",{viewBox:"0 0 620 185",className:"w-[min(660px,94%)]",role:"presentation",children:[a.jsxs("defs",{children:[a.jsx("path",{id:"bj-arc",d:"M 40 168 A 300 300 0 0 1 580 168",fill:"none"}),a.jsx("path",{id:"bj-arc-inner",d:"M 92 178 A 250 250 0 0 1 528 178",fill:"none"})]}),a.jsx("use",{href:"#bj-arc",stroke:"rgba(0,231,1,0.20)",strokeWidth:"1.5",fill:"none",strokeDasharray:"2 7",strokeLinecap:"round"}),a.jsx("text",{fill:"rgba(0,231,1,0.28)",fontFamily:"'IBM Plex Sans', sans-serif",fontSize:"25",fontWeight:"700",letterSpacing:"3",children:a.jsx("textPath",{href:"#bj-arc-inner",startOffset:"50%",textAnchor:"middle",children:"BLACKJACK PAYS 3 TO 2"})})]})})}const mm={blackjack:"BLACKJACK",win:"WIN",push:"PUSH",lose:"LOSE",bust:"BUST"};function Vo({cards:e,cardWidth:t,overlap:n}){return a.jsx("div",{className:"flex",style:{minHeight:t*1.4},children:e.map((r,l)=>a.jsx("div",{style:{marginLeft:l===0?0:-n,zIndex:l},children:a.jsx(cm,{card:r,width:t,index:l})},r.id))})}function Wo({total:e,soft:t,hidden:n}){if(n)return a.jsx("span",{className:"rounded-full border border-[var(--border-navy)] bg-[#0f212e] px-2.5 py-1 font-mono text-[11px] text-[var(--text-dim)]",children:"?"});const r=e>21;return a.jsxs("span",{className:["rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium",r?"border-[rgba(190,110,110,0.45)] bg-[rgba(60,20,20,0.5)] text-[#e0a3a3]":e===21?"border-[var(--border-gold)] bg-[rgba(0,231,1,0.12)] text-[var(--gold)]":"border-[var(--border-navy)] bg-[#0f212e] text-[var(--text-primary)]"].join(" "),children:[e,t&&e!==21?" soft":""]})}











const PLINKO_MULTIPLIERS = {
  easy: {
    8: [5.5, 2.1, 1.1, 1.0, 0.42, 1.0, 1.1, 2.1, 5.5],
    9: [5.6, 1.95, 1.6, 1.0, 0.66, 0.66, 1.0, 1.6, 1.95, 5.6],
    10: [8.8, 2.9, 1.35, 1.1, 0.97, 0.49, 0.97, 1.1, 1.35, 2.9, 8.8],
    11: [8.4, 3.0, 1.9, 1.3, 1.0, 0.65, 0.65, 1.0, 1.3, 1.9, 3.0, 8.4],
    12: [10, 3.0, 1.55, 1.35, 1.1, 0.98, 0.48, 0.98, 1.1, 1.35, 1.55, 3.0, 10],
    13: [8.1, 3.95, 2.95, 1.9, 1.2, 0.9, 0.65, 0.65, 0.9, 1.2, 1.9, 2.95, 3.95, 8.1],
    14: [7.1, 3.9, 1.8, 1.35, 1.26, 1.1, 0.98, 0.48, 0.98, 1.1, 1.26, 1.35, 1.8, 3.9, 7.1],
    15: [15, 7.9, 3.05, 2.0, 1.5, 1.1, 0.99, 0.65, 0.65, 0.99, 1.1, 1.5, 2.0, 3.05, 7.9, 15],
    16: [16, 8.9, 1.85, 1.4, 1.32, 1.16, 1.1, 0.98, 0.48, 0.98, 1.1, 1.16, 1.32, 1.4, 1.85, 8.9, 16]
  },
  medium: {
    8: [13, 3.0, 1.3, 0.7, 0.33, 0.7, 1.3, 3.0, 13],
    9: [18, 4.0, 1.7, 0.9, 0.45, 0.45, 0.9, 1.7, 4.0, 18],
    10: [22, 5.0, 2.0, 1.4, 0.58, 0.35, 0.58, 1.4, 2.0, 5.0, 22],
    11: [24, 5.9, 2.95, 1.8, 0.7, 0.46, 0.46, 0.7, 1.8, 2.95, 5.9, 24],
    12: [33, 8.0, 4.0, 2.0, 1.1, 0.59, 0.3, 0.59, 1.1, 2.0, 4.0, 8.0, 33],
    13: [43, 12.9, 5.9, 2.95, 1.3, 0.7, 0.36, 0.36, 0.7, 1.3, 2.95, 5.9, 12.9, 43],
    14: [58, 15, 6.9, 3.9, 1.86, 0.98, 0.48, 0.2, 0.48, 0.98, 1.86, 3.9, 6.9, 15, 58],
    15: [88, 17.8, 10.9, 4.9, 2.9, 1.3, 0.5, 0.27, 0.27, 0.5, 1.3, 2.9, 4.9, 10.9, 17.8, 88],
    16: [110, 41, 10.1, 5.0, 3.0, 1.5, 0.98, 0.48, 0.25, 0.48, 0.98, 1.5, 3.0, 5.0, 10.1, 41, 110]
  },
  hard: {
    8: [29, 4.0, 1.45, 0.3, 0.16, 0.3, 1.45, 4.0, 29],
    9: [43, 6.95, 2.0, 0.58, 0.17, 0.17, 0.58, 2.0, 6.95, 43],
    10: [76, 9.95, 3.0, 0.88, 0.29, 0.15, 0.29, 0.88, 3.0, 9.95, 76],
    11: [120, 14.1, 5.2, 1.35, 0.39, 0.17, 0.17, 0.39, 1.35, 5.2, 14.1, 120],
    12: [170, 24.0, 8.0, 1.94, 0.69, 0.2, 0.15, 0.2, 0.69, 1.94, 8.0, 24.0, 170],
    13: [260, 37.1, 11.0, 3.89, 1.0, 0.2, 0.16, 0.16, 0.2, 1.0, 3.89, 11.0, 37.1, 260],
    14: [420, 56.0, 17.9, 4.86, 1.9, 0.3, 0.19, 0.15, 0.19, 0.3, 1.9, 4.86, 17.9, 56.0, 420],
    15: [620, 83.0, 26.9, 7.8, 3.0, 0.5, 0.2, 0.16, 0.16, 0.2, 0.5, 3.0, 7.8, 26.9, 83.0, 620],
    16: [1000, 129.8, 25.8, 8.7, 3.9, 2.0, 0.2, 0.19, 0.16, 0.19, 0.2, 2.0, 3.9, 8.7, 25.8, 129.8, 1000]
  },
  impossible: {
    8: [50, 3.45, 1.0, 0.2, 0.1, 0.2, 1.0, 3.45, 50],
    9: [100, 6.7, 1.48, 0.26, 0.1, 0.1, 0.26, 1.48, 6.7, 100],
    10: [201, 10.6, 2.13, 0.44, 0.13, 0.1, 0.13, 0.44, 2.13, 10.6, 201],
    11: [324, 18.0, 3.74, 0.8, 0.26, 0.1, 0.1, 0.26, 0.8, 3.74, 18.0, 324],
    12: [619, 31.1, 6.29, 1.38, 0.28, 0.11, 0.1, 0.11, 0.28, 1.38, 6.29, 31.1, 619],
    13: [1012, 53.1, 10.5, 2.21, 0.52, 0.21, 0.1, 0.1, 0.21, 0.52, 2.21, 10.5, 53.1, 1012],
    14: [2369, 85.2, 16.1, 3.58, 0.81, 0.16, 0.1, 0.1, 0.1, 0.16, 0.81, 3.58, 16.1, 85.2, 2369],
    15: [5000, 140.0, 26.0, 5.53, 1.17, 0.26, 0.1, 0.1, 0.1, 0.1, 0.26, 1.17, 5.53, 26.0, 140.0, 5000],
    16: [10000, 206.0, 25.0, 6.8, 2.45, 1.04, 0.1, 0.1, 0.1, 0.1, 0.1, 1.04, 2.45, 6.8, 25.0, 206.0, 10000]
  }
};

function binomialCoefficient(n, k) {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let c = 1;
  for (let i = 1; i <= k; i++) {
    c = (c * (n - (k - i))) / i;
  }
  return Math.round(c);
}

function getPlinkoProbability(rows, slot) {
  const n = typeof rows === "number" ? rows : 16;
  const k = typeof slot === "number" ? slot : 0;
  return binomialCoefficient(n, k) / Math.pow(2, n);
}

function getPlinkoProbabilities(rows) {
  const n = typeof rows === "number" ? rows : 16;
  const totalCombinations = Math.pow(2, n);
  const probs = [];
  for (let k = 0; k <= n; k++) {
    const coeff = binomialCoefficient(n, k);
    const prob = coeff / totalCombinations;
    probs.push({
      slot: k,
      coeff: coeff,
      prob: prob,
      pct: prob * 100,
      probFraction: coeff + "/" + totalCombinations
    });
  }
  return probs;
}

function formatPlinkoLabel(val) {
  if (val >= 10000) return (val / 1000) + "K";
  if (val >= 1000 && val % 1000 === 0) return (val / 1000) + "K";
  if (Number.isInteger(val)) return val.toString();
  return val.toFixed(1);
}

function getPlinkoSlots(difficulty, rows) {
  const mults = PLINKO_MULTIPLIERS[difficulty]?.[rows] || PLINKO_MULTIPLIERS.easy[rows] || PLINKO_MULTIPLIERS.easy[16];
  const probs = getPlinkoProbabilities(rows);
  return mults.map((val, idx) => {
    const probObj = probs[idx] || {
      coeff: binomialCoefficient(rows, idx),
      prob: getPlinkoProbability(rows, idx),
      pct: getPlinkoProbability(rows, idx) * 100,
      probFraction: binomialCoefficient(rows, idx) + "/" + Math.pow(2, rows)
    };
    return {
      label: formatPlinkoLabel(val),
      val: val,
      slot: idx,
      coeff: probObj.coeff,
      prob: probObj.prob,
      chancePct: probObj.pct,
      probFraction: probObj.probFraction,
      title: formatPlinkoLabel(val) + "x (" + probObj.probFraction + " = " + probObj.pct.toFixed(2) + "% chance)"
    };
  });
}

const PLINKO_DIFFICULTIES = {
  easy: {
    id: "easy",
    name: "Easy",
    theme: "green",
    color: "#00e701",
    textColor: "#04060B",
    activeBtn: "border-[#4ade80] text-white bg-gradient-to-b from-[#16a34a] to-[#15803d] shadow-[0_0_12px_rgba(34,197,94,0.45),0_2px_0_0_#14532d] ring-1 ring-[#4ade80] font-black",
    inactiveBtn: "border-[#22c55e]/40 text-[#86efac] bg-[rgba(22,163,74,0.12)] hover:bg-[rgba(22,163,74,0.22)] hover:border-[#4ade80]/70 hover:text-white font-bold",
    slotBg: "bg-[#00e701]",
    slotStyle: {
      background: "linear-gradient(180deg, #16a34a 0%, #15803d 100%)",
      color: "#ffffff",
      border: "1.5px solid #4ade80",
      boxShadow: "0 2px 0 0 #14532d, inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 4px rgba(0,0,0,0.3)",
      },
    activeSlotStyle: {
      background: "linear-gradient(180deg, #86efac 0%, #16a34a 100%)",
      color: "#ffffff",
      border: "1.5px solid #ffffff",
      boxShadow: "0 0 12px #22c55e, 0 2px 0 0 #14532d, inset 0 1px 0 #ffffff",
      transform: "translateY(-2px) scale(1.1)"
    }
  },
  medium: {
    id: "medium",
    name: "Medium",
    theme: "yellow",
    color: "#eab308",
    textColor: "#04060B",
    activeBtn: "border-[#fde047] text-white bg-gradient-to-b from-[#eab308] to-[#ca8a04] shadow-[0_0_12px_rgba(234,179,8,0.45),0_2px_0_0_#854d0e] ring-1 ring-[#fde047] font-black",
    inactiveBtn: "border-[#eab308]/40 text-[#fef08a] bg-[rgba(234,179,8,0.12)] hover:bg-[rgba(234,179,8,0.22)] hover:border-[#fde047]/70 hover:text-white font-bold",
    slotBg: "bg-[#ca8a04]",
    slotStyle: {
      background: "linear-gradient(180deg, #eab308 0%, #ca8a04 100%)",
      color: "#ffffff",
      border: "1.5px solid #fde047",
      boxShadow: "0 2px 0 0 #854d0e, inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 4px rgba(0,0,0,0.3)",
      },
    activeSlotStyle: {
      background: "linear-gradient(180deg, #fef08a 0%, #eab308 100%)",
      color: "#ffffff",
      border: "1.5px solid #ffffff",
      boxShadow: "0 0 12px #eab308, 0 2px 0 0 #854d0e, inset 0 1px 0 #ffffff",
      transform: "translateY(-2px) scale(1.1)"
    }
  },
  hard: {
    id: "hard",
    name: "Hard",
    theme: "purple",
    color: "#a855f7",
    textColor: "#ffffff",
    activeBtn: "border-[#c084fc] text-white bg-gradient-to-b from-[#9333ea] to-[#7e22ce] shadow-[0_0_12px_rgba(168,85,247,0.45),0_2px_0_0_#581c87] ring-1 ring-[#c084fc] font-black",
    inactiveBtn: "border-[#a855f7]/40 text-[#d8b4fe] bg-[rgba(168,85,247,0.12)] hover:bg-[rgba(168,85,247,0.22)] hover:border-[#c084fc]/70 hover:text-white font-bold",
    slotBg: "bg-[#9333ea]",
    slotStyle: {
      background: "linear-gradient(180deg, #9333ea 0%, #7e22ce 100%)",
      color: "#ffffff",
      border: "1.5px solid #c084fc",
      boxShadow: "0 2px 0 0 #581c87, inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 4px rgba(0,0,0,0.3)",
      },
    activeSlotStyle: {
      background: "linear-gradient(180deg, #d8b4fe 0%, #9333ea 100%)",
      color: "#ffffff",
      border: "1.5px solid #ffffff",
      boxShadow: "0 0 12px #a855f7, 0 2px 0 0 #581c87, inset 0 1px 0 #ffffff",
      transform: "translateY(-2px) scale(1.1)"
    }
  },
  impossible: {
    id: "impossible",
    name: "Impossible",
    theme: "orange",
    color: "#f97316",
    textColor: "#ffffff",
    activeBtn: "border-[#fdba74] text-white bg-gradient-to-b from-[#ea580c] to-[#c2410c] shadow-[0_0_12px_rgba(249,115,22,0.45),0_2px_0_0_#7c2d12] ring-1 ring-[#fdba74] font-black",
    inactiveBtn: "border-[#f97316]/40 text-[#fed7aa] bg-[rgba(249,115,22,0.12)] hover:bg-[rgba(249,115,22,0.22)] hover:border-[#fdba74]/70 hover:text-white font-bold",
    slotBg: "bg-[#ea580c]",
    slotStyle: {
      background: "linear-gradient(180deg, #ea580c 0%, #c2410c 100%)",
      color: "#ffffff",
      border: "1.5px solid #fdba74",
      boxShadow: "0 2px 0 0 #7c2d12, inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 4px rgba(0,0,0,0.3)",
      },
    activeSlotStyle: {
      background: "linear-gradient(180deg, #fed7aa 0%, #ea580c 100%)",
      color: "#ffffff",
      border: "1.5px solid #ffffff",
      boxShadow: "0 0 12px #f97316, 0 2px 0 0 #7c2d12, inset 0 1px 0 #ffffff",
      transform: "translateY(-2px) scale(1.1)"
    }
  }
};

// Dedicated Plinko Sound Effects (Launch & Landing Only)
function playPlinkoLaunchSound() {
  try {
    ae({ freq: 440, to: 880, dur: 0.05, type: "sine", gain: 0.15 });
    At({ dur: 0.025, gain: 0.08, freq: 3200, sweepTo: 1400 });
  } catch (err) {}
}

function playPlinkoLandingSound() {
  try {
    ae({ freq: 587.33, dur: 0.14, type: "triangle", gain: 0.15 });
    ae({ freq: 880, dur: 0.22, type: "sine", gain: 0.18, delay: 0.045 });
  } catch (err) {}
}

// STEP 1: Single Authoritative Binomial Outcome Selection
function sampleBinomialSlot(rows) {
  const n = typeof rows === "number" ? rows : 16;
  const total = Math.pow(2, n);
  const roll = Math.random();
  let cumulative = 0;
  for (let k = 0; k <= n; k++) {
    const p = binomialCoefficient(n, k) / total;
    cumulative += p;
    if (roll < cumulative || k === n) {
      return k;
    }
  }
  return Math.floor(n / 2);
}

// STEP 2: Generate natural random path containing exactly `finalSlot` RIGHT movements and (rows - finalSlot) LEFT movements
function createRandomPath(rows, finalSlot) {
  const n = typeof rows === "number" ? rows : 16;
  const k = Math.max(0, Math.min(n, typeof finalSlot === "number" ? finalSlot : 0));
  const path = new Array(n).fill(0);
  for (let i = 0; i < k; i++) {
    path[i] = 1;
  }
  // Shuffle path using Fisher-Yates
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = path[i];
    path[i] = path[j];
    path[j] = tmp;
  }
  return path;
}

// STEP 3: Generate visual waypoints strictly following the randomized path to the target slot
function generatePlinkoWaypoints(finalSlot, path, rows) {
  const width = 500;
  const topY = 16;
  const rowHeight = (300 - 16) / Math.max(1, rows - 1);
  const pinSpacing = 430 / (rows + 2);
  const centerX = width / 2;
  const waypoints = [];
  waypoints.push({ x: centerX, y: 4, pin: null });
  let k = 0;
  for (let r = 0; r < rows; r++) {
    const pinCount = r + 3;
    const col = k + 1;
    const pinX = centerX + (col - (pinCount - 1) / 2) * pinSpacing;
    const pinY = topY + r * rowHeight;
    waypoints.push({ x: pinX, y: pinY, pin: { x: pinX, y: pinY } });
    k += path[r];
  }
  const finalX = centerX + (finalSlot - rows / 2) * pinSpacing;
  waypoints.push({ x: finalX, y: 306, pin: null });
  return waypoints;
}

// Internal test/debug function simulating 1,000,000 Plinko drops
function simulatePlinkoValidation(rows = 8, numDrops = 1000000) {
  const totalSlots = rows + 1;
  const counts = new Array(totalSlots).fill(0);
  for (let i = 0; i < numDrops; i++) {
    const slot = sampleBinomialSlot(rows);
    counts[slot]++;
  }
  return counts.map((c, idx) => ({
    slot: idx,
    count: c,
    observedPct: (c / numDrops) * 100,
    theoreticalPct: (binomialCoefficient(rows, idx) / Math.pow(2, rows)) * 100
  }));
}
if (typeof window !== "undefined") {
  window.__simulatePlinko = simulatePlinkoValidation;
}

function PlinkoGame() {
  const [difficulty, setDifficulty] = T.useState("easy");
  const [rows, setRows] = T.useState(16);
  const [bankroll, setBankroll] = T.useState(() => {
    try {
      const saved = localStorage.getItem("mxf_plinko_bankroll");
      return saved ? Math.max(10, parseInt(saved, 10)) : 1568377;
    } catch {
      return 1568377;
    }
  });
  const [pendingBet, setPendingBet] = T.useState(10);
  const [betInput, setBetInput] = T.useState("10");
  T.useEffect(() => {
    setBetInput(pendingBet.toString());
  }, [pendingBet]);
  const commitBet = (val) => {
    const currentStr = val !== undefined ? val : betInput;
    let num = parseInt(currentStr, 10);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 1000) num = 1000;
    if (num > bankroll) num = Math.max(1, bankroll);
    setPendingBet(num);
    setBetInput(num.toString());
    return num;
  };
  const handleBetInputChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setBetInput("");
      return;
    }
    let num = parseInt(raw, 10);
    if (isNaN(num)) return;
    if (num > 1000) {
      num = 1000;
      setBetInput("1000");
      setPendingBet(num);
      return;
    }
    const cleanStr = num === 0 ? "0" : num.toString();
    setBetInput(cleanStr);
    if (num >= 1) {
      setPendingBet(num);
    }
  };
  const [activeSlot, setActiveSlot] = T.useState(null);
  const [recentHits, setRecentHits] = T.useState([]);
  const [lastWin, setLastWin] = T.useState(null);

  const { muted, toggleMuted } = Mh();

  const canvasRef = T.useRef(null);
  const ballsRef = T.useRef([]);
  const pinFlashesRef = T.useRef([]);
  const animFrameRef = T.useRef(null);
  const activeSlotTimerRef = T.useRef(null);
  const winBannerTimerRef = T.useRef(null);

  T.useEffect(() => {
    try {
      localStorage.setItem("mxf_plinko_bankroll", bankroll.toString());
    } catch {}
  }, [bankroll]);

  // Peg setup: dynamically calculated for active row count (8 to 16)
  const pegs = T.useMemo(() => {
    const p = [];
    const width = 500;
    const topY = 16;
    const rowHeight = (300 - 16) / Math.max(1, rows - 1);
    const pinSpacing = 430 / (rows + 2);
    const centerX = width / 2;
    for (let r = 0; r < rows; r++) {
      const pinCount = r + 3;
      const y = topY + r * rowHeight;
      for (let col = 0; col < pinCount; col++) {
        const x = centerX + (col - (pinCount - 1) / 2) * pinSpacing;
        p.push({ x, y, r, col, radius: rows > 12 ? 2.5 : 3.0 });
      }
    }
    return p;
  }, [rows]);

  // Main Canvas Render & Physics Loop
  T.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    function loop(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw subtle board grid / background glow
      const grad = ctx.createRadialGradient(250, 155, 20, 250, 155, 230);
      grad.addColorStop(0, "rgba(47, 69, 83, 0.16)");
      grad.addColorStop(1, "rgba(15, 33, 46, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Update and Draw Pin Flash effects
      const curFlashes = pinFlashesRef.current;
      for (let i = curFlashes.length - 1; i >= 0; i--) {
        const flash = curFlashes[i];
        flash.life -= dt * 4;
        if (flash.life <= 0) {
          curFlashes.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(flash.x, flash.y, (rows > 12 ? 6.5 : 8) + (1 - flash.life) * 4, 0, Math.PI * 2);
        ctx.fillStyle = flash.color;
        ctx.globalAlpha = flash.life * 0.75;
        ctx.shadowColor = flash.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      // 3. Draw Pegs
      for (let i = 0; i < pegs.length; i++) {
        const pin = pegs[i];
        ctx.beginPath();
        ctx.arc(pin.x, pin.y, pin.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fill();

        // Pin subtle specular highlight
        ctx.beginPath();
        ctx.arc(pin.x - 0.7, pin.y - 0.7, pin.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // 4. Update and Draw Active Balls
      const balls = ballsRef.current;
      const remainingBalls = [];

      for (let b = 0; b < balls.length; b++) {
        const ball = balls[b];
        const waypoints = ball.waypoints;
        const ballRows = ball.rows || 16;
        const bounceDur = Math.max(0.075, 1.8 / ballRows);
        const dur = ball.step === 0 ? 0.085 : (ball.step === waypoints.length - 2 ? 0.11 : bounceDur);

        ball.stepTime += dt;
        const progress = Math.min(ball.stepTime / dur, 1);

        const p0 = waypoints[ball.step];
        const p1 = waypoints[ball.step + 1];

        if (p0 && p1) {
          // Horizontal smooth interpolation
          const curX = p0.x + (p1.x - p0.x) * progress;

          // Parabolic bounce arc for Y
          const directY = p0.y + (p1.y - p0.y) * progress;
          let arcOffset = 0;
          if (ball.step > 0 && ball.step < waypoints.length - 1) {
            arcOffset = -Math.sin(progress * Math.PI) * (ballRows > 12 ? 3.5 : 5.0);
          }
          ball.x = curX;
          ball.y = directY + arcOffset;

          // Check if ball hits pin
          if (progress >= 0.5 && p1.pin && !ball.flashedPins[ball.step + 1]) {
            ball.flashedPins[ball.step + 1] = true;
            pinFlashesRef.current.push({
              x: p1.pin.x,
              y: p1.pin.y,
              color: ball.color,
              life: 1.0
            });
          }
        }

        if (progress >= 1) {
          ball.step++;
          ball.stepTime = 0;

          // If reached final slot destination
          if (ball.step >= waypoints.length - 1) {
            // STEP 4: Use the EXACT SAME authoritative finalSlot
            const finalSlot = ball.finalSlot;
            const mults = PLINKO_MULTIPLIERS[ball.difficulty]?.[ballRows] || PLINKO_MULTIPLIERS.easy[16];
            const slotVal = mults[finalSlot] ?? 1;
            const label = formatPlinkoLabel(slotVal);
            const winAmount = Math.round(ball.bet * slotVal);
            playPlinkoLandingSound();
            
            // Update bankroll & UI
            setBankroll((b) => b + winAmount);
            setActiveSlot(finalSlot);
            if (activeSlotTimerRef.current) clearTimeout(activeSlotTimerRef.current);
            activeSlotTimerRef.current = setTimeout(() => setActiveSlot(null), 550);
            
            // Visual Win Feedback
            setLastWin({ amount: winAmount, multiplier: label, good: slotVal >= 1 });
            if (winBannerTimerRef.current) clearTimeout(winBannerTimerRef.current);
            winBannerTimerRef.current = setTimeout(() => setLastWin(null), 1800);
            setRecentHits((prev) => [
              { label: label, val: slotVal, diff: ball.difficulty, id: Date.now() + Math.random() },
              ...prev.slice(0, 5)
            ]);
            continue; // Ball completed
          }
        }

        // Draw Ball with theme glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.shadowColor = ball.glowColor;
        ctx.shadowBlur = 12;
        ctx.fill();

        // Specular dot on top of ball
        ctx.beginPath();
        ctx.arc(ball.x - 1, ball.y - 1, ball.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();

        remainingBalls.push(ball);
      }

      ballsRef.current = remainingBalls;
      animFrameRef.current = requestAnimationFrame(loop);
    }

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [pegs, rows]);

  // Drop Ball Action
  const dropBall = T.useCallback(() => {
    const currentBet = commitBet();
    if (currentBet <= 0 || currentBet > 1000 || bankroll < currentBet) {
      return;
    }
    playPlinkoLaunchSound();
    setBankroll((b) => b - currentBet);
    
    // STEP 1: Single authoritative outcome determination
    const finalSlot = sampleBinomialSlot(rows);
    
    // STEP 2: Generate random left/right path containing exactly finalSlot right moves
    const path = createRandomPath(rows, finalSlot);
    
    // STEP 3: Generate animation waypoints strictly following the selected path
    const waypoints = generatePlinkoWaypoints(finalSlot, path, rows);
    
    const curDiff = PLINKO_DIFFICULTIES[difficulty] || PLINKO_DIFFICULTIES.easy;
    const newBall = {
      id: "plinko-ball-" + Date.now() + "-" + Math.random(),
      finalSlot: finalSlot,
      path: path,
      waypoints: waypoints,
      step: 0,
      stepTime: 0,
      flashedPins: {},
      x: 250,
      y: 4,
      radius: rows > 12 ? 8.4 : 9.45,
      bet: currentBet,
      difficulty: difficulty,
      rows: rows,
      color: curDiff.color,
      glowColor: curDiff.color
    };
    ballsRef.current.push(newBall);
  }, [pendingBet, betInput, bankroll, difficulty, rows]);
  const handleHalfBet = () => setPendingBet((p) => Math.max(1, Math.floor(p / 2)));
  const handleDoubleBet = () => setPendingBet((p) => Math.min(1000, Math.min(bankroll, Math.max(1, p * 2))));
  const handleMaxBet = () => setPendingBet(Math.min(1000, bankroll));
  const handleClearBet = () => setPendingBet(1);
  const handleAddChip = (val) => {
    setPendingBet((p) => Math.min(1000, Math.min(bankroll, (p || 0) + val)));
  };
  const handleReset = () => {
    setBankroll(1568377);
    setPendingBet(10);
    setRecentHits([]);
    setLastWin(null);
  };
  const curConfig = PLINKO_DIFFICULTIES[difficulty] || PLINKO_DIFFICULTIES.easy;
  const currentSlots = getPlinkoSlots(difficulty, rows);

  // Formatted chips string with spaced thousands (e.g. 1 568 377)
  const formattedChips = bankroll.toLocaleString().replace(/,/g, " ");

  return a.jsxs("div", {
    className: "plinko-page-container",
    children: [
      // ==================== 1. TOP HEADER OF PLINKO AREA ====================
      a.jsxs("div", {
        className: "plinko-header-bar",
        children: [
          // Left Side: Title, Chips counter, Reset button
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.jsx("h1", {
                className: "text-[16px] font-semibold text-white tracking-normal leading-none select-none",
                children: "Plinko"
              }),
              // Chips display
              a.jsxs("div", {
                className: "flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[rgba(47,69,83,0.3)] px-3 py-1 text-[12px] font-bold text-[var(--text-primary)]",
                children: [
                  a.jsx("span", {
                    className: "text-[var(--text-dim)] font-bold uppercase text-[10px] tracking-wider",
                    children: "CHIPS:"
                  }),
                  a.jsx("span", {
                    className: "text-[var(--gold)] font-display text-[13px] font-bold",
                    children: formattedChips
                  })
                ]
              }),
              // Reset button
              a.jsx("button", {
                type: "button",
                onClick: handleReset,
                className: "h-7 px-2.5 rounded-[6px] border border-[var(--border)] bg-[rgba(47,69,83,0.2)] text-[11px] font-bold text-[var(--text-muted)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)] cursor-pointer transition-colors flex items-center justify-center",
                children: "Reset"
              })
            ]
          }),
          // Right Side: Sound icon
          a.jsx("button", {
            type: "button",
            onClick: toggleMuted,
            "aria-label": muted ? "Unmute sound" : "Mute sound",
            className: "h-8 w-8 rounded-[8px] border border-[var(--border)] bg-[rgba(47,69,83,0.25)] text-[var(--text-muted)] hover:border-[var(--border-gold)] hover:text-[var(--gold)] flex items-center justify-center cursor-pointer transition-colors",
            children: muted ? a.jsx(Eh, { size: 15 }) : a.jsx(Ch, { size: 15 })
          })
        ]
      }),

      // ==================== 2. TWO-COLUMN DESKTOP LAYOUT (SIBLINGS) ====================
      a.jsxs("div", {
        className: "plinko-layout",
        children: [
          // 2A. LEFT / MAIN AREA (Difficulty buttons + Plinko board + Multipliers)
          a.jsxs("main", {
            className: "plinko-main",
            children: [
              // Difficulty Selector (4 Horizontal Buttons)
              a.jsx("div", {
                className: "plinko-diff-grid",
                children: Object.values(PLINKO_DIFFICULTIES).map((diff) => {
                  const isActive = difficulty === diff.id;
                  return a.jsx("button", {
                    key: diff.id,
                    type: "button",
                    onClick: () => setDifficulty(diff.id),
                    className: `h-9 sm:h-9.5 rounded-[8px] text-[13px] font-bold transition-all cursor-pointer border flex items-center justify-center select-none ${
                      isActive ? diff.activeBtn : diff.inactiveBtn
                    }`,
                    children: diff.name
                  });
                })
              }),

              // Plinko Board Card (Canvas + Multipliers)
              a.jsxs("div", {
                className: "plinko-board-card panel rounded-[14px] p-3 sm:p-4 relative overflow-hidden",
                children: [
                  // Unified board content wrapper to guarantee identical width and coordinate scale
                  a.jsxs("div", {
                    className: "relative w-full max-w-[500px] mx-auto flex flex-col items-center",
                    children: [
                      // Plinko Pyramid Canvas Board
                      a.jsx("canvas", {
                        ref: canvasRef,
                        width: 500,
                        height: 306,
                        className: "w-full max-w-[500px] h-auto block select-none"
                      }),

                      // Win notification banner
                      lastWin &&
                        a.jsxs("div", {
                          className: `absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border text-[13px] font-black tracking-wide shadow-lg animate-pop z-20 flex items-center gap-1.5 ${
                            lastWin.good
                              ? "bg-[rgba(0,231,1,0.2)] border-[var(--border-gold)] text-[var(--gold-bright)] shadow-[0_0_15px_rgba(0,231,1,0.4)]"
                              : "bg-[rgba(244,63,94,0.2)] border-rose-500/50 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                          }`,
                          children: [
                            a.jsx("span", { children: lastWin.multiplier + "x" }),
                            a.jsx("span", { className: "text-[11px] opacity-75", children: "•" }),
                            a.jsx("span", { children: "+" + lastWin.amount.toLocaleString() + " Chips" })
                          ]
                        }),

                      // Multiplier Boxes mathematically spanning the full landing slot range
                      (() => {
                        const pinSpacing = 430 / (rows + 2);
                        const numSlots = rows + 1;
                        const landingSpan = numSlots * pinSpacing;
                        const containerWidthPercent = (landingSpan / 500) * 100;
                        const gapPx = rows >= 14 ? "1.5px" : "2px";

                        return a.jsx("div", {
                          className: "plinko-slots-container",
                          style: {
                            width: `${containerWidthPercent}%`,
                            gap: gapPx
                          },
                          children: currentSlots.map((slot, sIdx) => {
                            const isActive = activeSlot === sIdx;
                            const baseStyle = isActive ? curConfig.activeSlotStyle : curConfig.slotStyle;
                            const computedStyle = {
                              ...baseStyle,
                              transform: isActive ? "translateY(-2px) scale(1.1)" : "none",
                              zIndex: isActive ? 10 : 1
                            };

                            const fontSize = rows <= 10 ? "14.5px" : (rows <= 13 ? "12px" : "10.5px");

                            return a.jsx(
                              "div",
                              {
                                key: `slot-${rows}-${sIdx}`,
                                className: "plinko-slot-item",
                                title: slot.title,
                                style: computedStyle,
                                children: a.jsx("span", {
                                  className: "plinko-slot-text",
                                  style: { "--slot-font-size": fontSize, fontSize: "var(--slot-font-size)" },
                                  children: slot.label
                                })
                              }
                            );
                          })
                        });
                      })()
                    ]
                  })
                ]
              })
            ]
          }),

          // 2B. RIGHT SIBLING: COMPACT CONTROL PANEL (Add Chips centered, Rows strictly to the left)
          a.jsxs("aside", {
            className: "plinko-controls panel rounded-[14px] p-3.5 sm:p-4 shrink-0 flex flex-col items-center justify-between gap-2.5",
            children: [
              // 1. TOP BET AMOUNT & MODIFIERS (Centered, w-full max-w-[364px])
              a.jsxs("div", {
                className: "flex flex-col gap-1.5 w-full max-w-[364px] items-center",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center justify-between px-0.5 w-full",
                    children: [
                      a.jsx("span", {
                        className: "text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                        children: "Bet Amount"
                      }),
                      a.jsxs("span", {
                        className: "text-[11px] font-medium text-[var(--text-dim)] select-none",
                        children: ["Max Bet: ", a.jsx("b", { className: "text-[var(--text-primary)] font-bold", children: "1k" })]
                      })
                    ]
                  }),
                  // Current Bet Input Display
                  a.jsxs("div", {
                    className: "panel-inset flex h-8.5 items-center justify-between px-3 w-full",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-1.5 flex-1 min-w-0 mr-2",
                        children: [
                          a.jsx(nh, { size: 13, className: "text-[var(--gold)] shrink-0 pointer-events-none" }),
                          a.jsx("input", {
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            value: betInput,
                            onChange: handleBetInputChange,
                            onBlur: () => commitBet(),
                            onKeyDown: (e) => {
                              if (e.key === "Enter") {
                                commitBet();
                                e.currentTarget.blur();
                              }
                            },
                            className: "font-display text-[13.5px] font-bold text-[var(--text-primary)] bg-transparent border-none outline-none focus:outline-none p-0 m-0 w-full min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-text",
                            placeholder: "1"
                          })
                        ]
                      }),
                      a.jsx("span", {
                        className: "text-[9px] font-semibold text-[var(--text-dim)] uppercase tracking-wider select-none shrink-0 pointer-events-none",
                        children: "Chips"
                      })
                    ]
                  }),
                  // Inline Modifiers: 1/2, 2x, Max, Clear (4 buttons filling 364px width)
                  a.jsxs("div", {
                    className: "grid grid-cols-4 gap-1.5 w-full mt-0.5",
                    children: [
                      a.jsx("button", {
                        type: "button",
                        onClick: handleHalfBet,
                        className: "h-6.5 rounded-[5px] border border-[var(--border)] bg-[rgba(47,69,83,0.2)] text-[10px] font-bold text-[var(--text-muted)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)] cursor-pointer transition-colors flex items-center justify-center",
                        children: "½"
                      }),
                      a.jsx("button", {
                        type: "button",
                        onClick: handleDoubleBet,
                        className: "h-6.5 rounded-[5px] border border-[var(--border)] bg-[rgba(47,69,83,0.2)] text-[10px] font-bold text-[var(--text-muted)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)] cursor-pointer transition-colors flex items-center justify-center",
                        children: "2x"
                      }),
                      a.jsx("button", {
                        type: "button",
                        onClick: handleMaxBet,
                        className: "h-6.5 rounded-[5px] border border-[var(--border)] bg-[rgba(47,69,83,0.2)] text-[10px] font-bold text-[var(--text-muted)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)] cursor-pointer transition-colors flex items-center justify-center",
                        children: "Max"
                      }),
                      a.jsx("button", {
                        type: "button",
                        onClick: handleClearBet,
                        className: "h-6.5 rounded-[5px] border border-[var(--border)] bg-[rgba(47,69,83,0.2)] text-[10px] font-bold text-[var(--text-dim)] hover:text-[#f43f5e] cursor-pointer transition-colors flex items-center justify-center",
                        children: "Clear"
                      })
                    ]
                  })
                ]
              }),

              // 2. ADD CHIPS (Centered in Panel) + ROWS (Positioned strictly to the LEFT of Add Chips)
              a.jsxs("div", {
                className: "plinko-rows-chips-wrapper relative w-full flex justify-center items-start my-0.5",
                children: [
                  // Left: ROWS SELECTOR (Anchored strictly to the left of the centered ADD CHIPS section, responsive on mobile)
                  a.jsxs("div", {
                    className: "plinko-rows-container flex flex-col gap-1 items-start text-left shrink-0",
                    children: [
                      a.jsx("span", {
                        className: "text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider px-0.5 text-left whitespace-nowrap",
                        children: "Rows"
                      }),
                      a.jsxs("div", {
                        className: "relative w-full",
                        children: [
                          a.jsx("select", {
                            value: rows,
                            onChange: (e) => setRows(Number(e.target.value)),
                            className: "w-full h-8 rounded-[6px] border border-[var(--border)] bg-[rgba(15,33,46,0.9)] text-[var(--text-primary)] font-bold text-[11px] pl-2 pr-5 appearance-none cursor-pointer focus:border-[var(--border-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]/40 hover:border-[var(--border-gold)] transition-colors select-none text-left",
                            children: [8, 9, 10, 11, 12, 13, 14, 15, 16].map((r) =>
                              a.jsx("option", {
                                key: r,
                                value: r,
                                className: "bg-[#0f212e] text-[var(--text-primary)] font-bold py-1",
                                children: `${r} Rows`
                              })
                            )
                          }),
                          // Dropdown Chevron Icon
                          a.jsx("div", {
                            className: "pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] flex items-center justify-center",
                            children: a.jsx("svg", {
                              width: "10",
                              height: "10",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: a.jsx("polyline", { points: "6 9 12 15 18 9" })
                            })
                          })
                        ]
                      })
                    ]
                  }),

                  // Center: ADD CHIPS (2x2 Grid, centered in panel)
                  a.jsxs("div", {
                    className: "plinko-add-chips-container flex flex-col gap-1 items-center w-[216px] shrink-0",
                    children: [
                      a.jsx("span", {
                        className: "text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider px-0.5 text-center",
                        children: "Add Chips"
                      }),
                      a.jsx("div", {
                        className: "grid grid-cols-2 gap-1.5 w-full",
                        children: [
                          { val: 10, bg: "linear-gradient(180deg,#3a5464,#2f4553)", ring: "#557086", text: "#F7FAFC" },
                          { val: 25, bg: "linear-gradient(180deg,#f43f5e,#c81e3e)", ring: "#fb7185", text: "#FFFFFF" },
                          { val: 100, bg: "linear-gradient(180deg,#00e701,#00a802)", ring: "#54ff55", text: "#0F212E" },
                          { val: 500, bg: "linear-gradient(180deg,#8b5cf6,#6d3fd6)", ring: "#a78bfa", text: "#FFFFFF" }
                        ].map((chip) => {
                          const isDisabled = pendingBet + chip.val > 1000 || bankroll < pendingBet + chip.val;
                          return a.jsx("button", {
                            key: chip.val,
                            type: "button",
                            disabled: isDisabled,
                            onClick: () => handleAddChip(chip.val),
                            className: "chip flex items-center justify-center font-bold transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
                            style: {
                              width: 102,
                              height: 29,
                              background: chip.bg,
                              color: chip.text,
                              fontSize: 11,
                              borderRadius: 6,
                              border: `2px solid ${chip.ring}`,
                              boxShadow: "0 2px 0 0 rgba(2,5,10,0.85), 0 3px 6px -2px rgba(0,0,0,0.8)"
                            },
                            children: chip.val
                          });
                        })
                      })
                    ]
                  })
                ]
              }),

              // 3. RECENT HITS (Compact, unchanged width: ~240px, Centered)
              a.jsxs("div", {
                className: "flex flex-col gap-1 w-full max-w-[240px] items-center",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center justify-between px-0.5 w-full",
                    children: [
                      a.jsx("span", {
                        className: "text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider",
                        children: "Recent Hits"
                      }),
                      a.jsxs("span", {
                        className: "text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-wider",
                        children: ["Hits: ", recentHits.length]
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "panel-inset flex h-8 items-center px-2 overflow-hidden w-full",
                    children: [
                      recentHits.length === 0
                        ? a.jsx("span", { className: "text-[11px] text-[var(--text-dim)] italic", children: "No recent drops" })
                        : a.jsx("div", {
                            className: "flex items-center gap-1.5 overflow-x-auto w-full py-0.5",
                            children: recentHits.map((hit) => {
                              const diffKey = hit.diff || "easy";
                              return a.jsx("span", {
                                key: hit.id,
                                className: `animate-pop shrink-0 plinko-recent-pill plinko-recent-pill-${diffKey}`,
                                children: hit.label + "x"
                              });
                            })
                          })
                    ]
                  })
                ]
              }),

              // 4. SUBTLE DECORATIVE PLINKO PEG PATTERN
              a.jsx("div", {
                className: "w-full py-0.5 flex items-center justify-center opacity-25 select-none pointer-events-none",
                children: a.jsxs("svg", {
                  width: "120",
                  height: "16",
                  viewBox: "0 0 120 16",
                  fill: "none",
                  children: [
                    [15, 35, 55, 75, 95, 105].map((cx, idx) =>
                      a.jsx("circle", { key: `dot-t-${idx}`, cx, cy: "3", r: "1.5", fill: "#557086" })
                    ),
                    a.jsx("path", { d: "M25 11 L60 3 L95 11", stroke: "#3a5464", strokeWidth: "0.75", strokeDasharray: "2 3" }),
                    [25, 45, 65, 85, 105].map((cx, idx) =>
                      a.jsx("circle", {
                        key: `dot-b-${idx}`,
                        cx,
                        cy: "11",
                        r: cx === 65 ? "2" : "1.5",
                        fill: cx === 65 ? "var(--gold)" : "#557086",
                        opacity: cx === 65 ? 0.85 : 0.4
                      })
                    )
                  ]
                })
              }),

              // 5. DROP BALL PRIMARY CTA BUTTON (Full width, glowing prominent CTA)
              a.jsx("button", {
                type: "button",
                id: "plinko-drop-ball-button",
                className: "plinko-drop-btn w-full",
                disabled: pendingBet <= 0 || pendingBet > 1000 || bankroll < pendingBet,
                onClick: dropBall,
                children: a.jsx("span", {
                  className: "plinko-drop-btn-text",
                  children: bankroll < pendingBet ? "Insufficient Chips" : "DROP BALL"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
function vm(){const[e,t]=T.useState(()=>wd()),[n,r]=T.useState(99),[l,i]=T.useState(99),[s,u]=T.useState(null),[o,c]=T.useState(0),[h,v]=T.useState(0),m=T.useRef(null),x=T.useRef([]),w=T.useCallback((j,P)=>{const Q=window.setTimeout(P,j);return x.current.push(Q),Q},[]);T.useEffect(()=>()=>{x.current.forEach(window.clearTimeout),x.current=[]},[]),T.useEffect(()=>{if(e.phase!=="dealing")return;r(0);let j=0;const P=()=>{j+=1,L("deal"),r(j),j<4?w(230,P):w(420,()=>{r(99),t(Q=>em(Q))})};w(160,P)},[e.phase,e.roundId]),T.useEffect(()=>{if(e.phase!=="dealer")return;const{state:j,drawn:P}=im(e);m.current=j;const Q=e.dealer.length;i(Q),L("flip");let te=0;const Ce=()=>{te<P.length?(te+=1,L("deal"),i(Q+te),w(600,Ce)):w(500,()=>{i(99);const Ee=sm(j);t(Ee);const Ge=Ee.hands.some(z=>z.result==="blackjack");if(Ee.lastNet>0)L(Ge?"bigWin":"win"),v(z=>z+1),u({text:Ge?"BLACKJACK!":`+${Ee.lastNet}`,tone:"good"});else if(Ee.lastNet<0){const z=Ee.hands.every(M=>M.result==="bust");L(z?"bust":"lose"),v(0),u({text:z?"BUST":`${Ee.lastNet}`,tone:"bad"})}else L("push"),u({text:"PUSH",tone:"flat"});w(2e3,()=>u(null))})};w(850,Ce)},[e.phase,e.roundId]);const [betInput, setBetInput] = T.useState(() => e.pendingBet > 0 ? e.pendingBet.toString() : "0");
  T.useEffect(() => {
    setBetInput(e.pendingBet > 0 ? e.pendingBet.toString() : "0");
  }, [e.pendingBet]);
  const commitBet = (val) => {
    const currentStr = val !== undefined ? val : betInput;
    let num = parseInt(currentStr, 10);
    if (isNaN(num) || num < 1) num = (currentStr === "0" || currentStr === "") ? 0 : 1;
    if (num > 1000) num = 1000;
    if (num > e.bankroll) num = Math.max(0, e.bankroll);
    t(prev => {
      if (prev.phase !== "betting") return prev;
      const n = $e(prev);
      n.pendingBet = num;
      n.message = num >= 1000
        ? `Bet ${num} chips (Max bet reached). Deal when ready.`
        : num > 0
          ? `Bet ${num} chips. Deal when ready.`
          : "Place your bet to begin.";
      return n;
    });
    setBetInput(num.toString());
    return num;
  };
  const handleBetInputChange = (evt) => {
    const raw = evt.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setBetInput("");
      return;
    }
    let num = parseInt(raw, 10);
    if (isNaN(num)) return;
    if (num > 1000) {
      num = 1000;
      setBetInput("1000");
    } else {
      const cleanStr = num === 0 ? "0" : num.toString();
      setBetInput(cleanStr);
    }
    t(prev => {
      if (prev.phase !== "betting") return prev;
      const n = $e(prev);
      n.pendingBet = Math.min(1000, num);
      n.message = n.pendingBet >= 1000
        ? `Bet ${n.pendingBet} chips (Max bet reached). Deal when ready.`
        : n.pendingBet > 0
          ? `Bet ${n.pendingBet} chips. Deal when ready.`
          : "Place your bet to begin.";
      return n;
    });
  };
  const N=j=>{if(e.bankroll<e.pendingBet+j||e.pendingBet+j>1000){L("error"),c(P=>P+1);return}L("chip"),t(P=>Xh(P,j))},A=()=>{let betToUse=e.pendingBet;if(betInput&&betInput!==e.pendingBet.toString()&&betInput!=="0"){betToUse=commitBet()}if(betToUse<=0||betToUse>1000||e.bankroll<betToUse){L("error"),c(j=>j+1);return}L("chip"),i(99),m.current=null,t(j=>{const nextState=$e(j);nextState.pendingBet=betToUse;return Jh(nextState)})},f=()=>{L("deal"),t(j=>tm(j))},d=()=>{L("click"),t(j=>nm(j))},p=()=>{L("chip"),w(120,()=>L("deal")),t(j=>rm(j))},y=()=>{L("chip"),w(140,()=>L("deal")),t(j=>lm(j))};T.useEffect(()=>{const j=P=>{const Q=P.target;if(Q&&["INPUT","TEXTAREA","SELECT"].includes(Q.tagName))return;const te=P.key.toLowerCase();if(e.phase==="player"){const Ce=e.hands[e.activeHand];te==="h"?f():te==="s"?d():te==="d"&&Ce&&js(e,Ce)?p():te==="p"&&Ce&&ks(e,Ce)&&y()}else e.phase==="settled"&&te==="n"&&(L("click"),u(null),t(Ce=>Ho(Ce)))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)});const S=e.hands[e.activeHand],E=e.phase==="dealer"&&m.current?m.current.dealer.slice(0,l):e.dealer,C=E.slice(0,e.phase==="dealing"?Math.floor(n/2):E.length),_=C.some(j=>!j.faceUp),$=tt(C.filter(j=>j.faceUp)).total,g=e.phase==="player";return a.jsxs("section",{children:[a.jsx(Vl,{eyebrow:"Practice table",title:a.jsxs(a.Fragment,{children:["Black",a.jsx("span",{className:"text-[var(--gold)]",children:"jack"})]}),subtitle:"Dealer stands on soft 17, blackjack pays 3:2. Play-money chips only — nothing here costs or wins real money.",right:a.jsxs("div",{className:"flex items-center gap-2.5",children:[h>=2&&a.jsxs("div",{className:"panel-inset animate-pop flex h-[52px] items-center gap-2.5 px-4",title:`${h} wins in a row`,children:[a.jsx(ih,{size:16,className:"text-[var(--gold)]","aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("div",{className:"micro mb-1",children:"Streak"}),a.jsxs("div",{className:"font-display text-[17px] font-bold leading-none text-[var(--gold)]",children:["×",h]})]})]},h),a.jsxs("div",{className:"panel-inset flex h-[52px] items-center gap-2.5 px-4",children:[a.jsx(nh,{size:16,className:"text-[var(--gold)]","aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("div",{className:"micro mb-1",children:"Chips"}),a.jsx("div",{className:"animate-pop font-display text-[17px] font-bold leading-none text-[var(--text-primary)]",children:e.bankroll.toLocaleString()},e.bankroll)]})]}),a.jsxs(U,{variant:"ghost",size:"md",className:"h-[52px]",onClick:()=>{t(am(e)),u(null),v(0)},"aria-label":"Reset the table",children:[a.jsx(dd,{size:15}),"Reset"]})]})}),a.jsxs(Hn,{className:"seam-top",children:[a.jsx(jt,{label:"Table 01"}),a.jsxs("div",{className:"felt relative px-4 py-7 sm:px-8 sm:py-10",children:[a.jsx("div",{"aria-hidden":"true",className:"absolute inset-x-0 top-0 h-[2px] bg-[rgba(255,255,255,0.04)]",children:a.jsx("div",{className:"h-full rounded-r-full bg-[rgba(0,231,1,0.45)] transition-[width] duration-500",style:{width:`${Math.min(100,(e.decks*52-e.shoe.length)/(e.decks*52)*100)}%`}})}),a.jsxs("div",{className:"pointer-events-none absolute left-4 top-4 z-20 flex flex-col items-start gap-0.5 rounded-[10px] border border-[var(--border-navy)] bg-[rgba(15,33,46,0.85)] px-3 py-1.5 backdrop-blur-sm shadow-md",children:[a.jsx("span",{className:"micro text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]",children:"BET"}),a.jsxs("div",{className:"flex items-baseline gap-1 font-display text-[15px] font-bold text-[var(--gold)]",children:[a.jsx("span",{children:(e.hands.length>0?e.hands.reduce((acc,h)=>acc+h.bet,0):e.pendingBet).toLocaleString()}),a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[var(--text-dim)]",children:"CHIPS"})]})]}),a.jsx(hm,{}),(s==null?void 0:s.tone)==="good"&&a.jsx(pm,{seed:e.roundId}),a.jsx("div",{className:"pointer-events-none absolute right-4 top-4 hidden opacity-70 sm:block",children:a.jsx(dm,{width:46,count:4})}),s&&a.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 justify-center",children:a.jsx("div",{className:["animate-rise-fade rounded-[18px] border px-7 py-4 font-display text-[30px] font-bold","backdrop-blur-sm sm:text-[40px]",s.tone==="good"?"border-[var(--border-gold)] bg-[rgba(0,231,1,0.14)] text-[var(--gold-bright)]":s.tone==="bad"?"border-[rgba(190,110,110,0.4)] bg-[rgba(40,12,12,0.6)] text-[#e0a3a3]":"border-[var(--border-navy)] bg-[rgba(10,20,36,0.7)] text-[var(--text-primary)]"].join(" "),style:{textShadow:"0 4px 20px rgba(0,0,0,0.6)"},children:s.text})}),a.jsxs("div",{className:"relative z-10 mb-6 flex min-h-[128px] flex-col items-center gap-3",children:[a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("span",{className:"micro",children:"Dealer"}),C.length>0&&a.jsx(Wo,{total:$,hidden:_&&$===0})]}),C.length>0&&a.jsx(Vo,{cards:C,cardWidth:72,overlap:26})]}),a.jsx("div",{className:"relative z-10 mt-14 flex min-h-[132px] flex-wrap items-start justify-center gap-6",children:e.hands.length===0?a.jsx("div",{className:`grid h-[112px] w-[104px] place-items-center rounded-[14px]
                           border border-dashed border-[rgba(0,231,1,0.22)]`,children:a.jsxs("span",{className:"micro text-center leading-[1.6]",children:["Your",a.jsx("br",{}),"hand"]})}):e.hands.map((j,P)=>{const Q=e.phase==="dealing"?j.cards.slice(0,Math.ceil(n/2)):j.cards,{total:te,soft:Ce}=tt(Q),Ee=g&&P===e.activeHand,Ge=e.hands.length>1;return a.jsxs("div",{className:["relative flex flex-col items-center gap-3 rounded-[18px] p-3 transition-all duration-200",Ee?"bg-[rgba(0,231,1,0.06)] ring-1 ring-[var(--border-gold)]":Ge?"opacity-70":""].join(" "),children:[Q.length>0&&a.jsx(Vo,{cards:Q,cardWidth:Ge?60:74,overlap:Ge?22:26}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Wo,{total:te,soft:Ce}),j.doubled&&a.jsx(be,{variant:"muted",mono:!0,children:"2×"})]}),j.result&&e.phase==="settled"&&a.jsx("div",{className:"animate-pop",children:a.jsx(be,{variant:j.result==="blackjack"||j.result==="win"?"gold-solid":j.result==="push"?"navy":"muted",mono:!0,children:mm[j.result]})})]},j.id)})}),a.jsx("p",{className:"relative z-10 mt-7 text-center text-[13.5px] text-[var(--text-muted)]","aria-live":"polite",children:e.message})]}),a.jsxs("div",{className:"border-t border-[var(--border)] bg-[#080c14] p-4 sm:p-6",children:[e.phase==="insurance"&&a.jsxs("div",{className:"animate-pop panel-inset mb-5 flex flex-wrap items-center justify-between gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(mh,{size:20,className:"shrink-0 text-[var(--gold)]"}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[14px] font-semibold",children:"Dealer is showing an Ace"}),a.jsxs("div",{className:"text-[12.5px] text-[var(--text-muted)]",children:["Insurance costs ",Math.floor(e.hands[0].bet/2)," chips and pays 2:1 if the dealer has blackjack."]})]})]}),a.jsxs("div",{className:"flex gap-2.5",children:[a.jsx(U,{variant:"gold",size:"sm",onClick:()=>t(j=>Uo(j,!0)),children:"Take insurance"}),a.jsx(U,{variant:"ghost",size:"sm",onClick:()=>t(j=>Uo(j,!1)),children:"No thanks"})]})]}),e.phase==="betting"&&a.jsxs("div",{className:"flex flex-col items-center gap-5",children:[a.jsx("div",{className:"micro",children:"Place your bet"}),a.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3",children:Wh.map(j=>a.jsx(fm,{value:j,onClick:()=>N(j),disabled:e.bankroll<e.pendingBet+j||e.pendingBet+j>1000},j))}),a.jsxs("div",{className:["panel-inset flex items-center gap-4 px-5 py-3",o?"animate-nudge":""].join(" "),children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[a.jsx("div",{className:"micro",children:"Current bet"}),e.pendingBet>=1000&&a.jsx("span",{className:"micro font-mono text-[9px] text-[var(--gold)] border border-[var(--border-gold)] rounded px-1 py-0.5",children:"MAX 1,000"})]}),a.jsx("input", {
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  value: betInput,
                  onChange: handleBetInputChange,
                  onBlur: () => {
                    if (betInput === "") {
                      commitBet("0");
                    } else {
                      commitBet();
                    }
                  },
                  onKeyDown: (evt) => {
                    if (evt.key === "Enter") {
                      commitBet();
                      evt.currentTarget.blur();
                    }
                  },
                  className: "font-display text-[22px] font-bold leading-none text-[var(--gold)] bg-transparent border-none outline-none focus:outline-none p-0 m-0 w-24 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-text",
                  placeholder: "0"
                })]}),e.pendingBet>0&&a.jsx("button",{type:"button",onClick:()=>{L("click"),t(j=>Zh(j))},"aria-label":"Clear bet",className:`grid h-8 w-8 place-items-center rounded-full border border-[var(--border-navy)]
                               text-[var(--text-dim)] transition-colors hover:border-[var(--border-gold)]
                               hover:text-[var(--gold)]`,children:a.jsx(Bl,{size:14})})]},o),a.jsxs(U,{variant:"gold",size:"lg",onClick:A,disabled:e.bankroll<=0&&e.pendingBet<=0,className:"min-w-[200px]",sound:null,children:[a.jsx(yh,{size:17}),"Deal"]}),e.bankroll<=0&&e.pendingBet<=0&&a.jsx("p",{className:"text-[13px] text-[var(--text-muted)]",children:"Out of chips. Hit Reset to start again with 1,000."})]}),g&&S&&a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[a.jsxs(U,{variant:"gold",size:"lg",onClick:f,className:"min-w-[120px]",sound:null,children:[a.jsx(sh,{size:16}),"Hit"]}),a.jsx(U,{variant:"navy",size:"lg",onClick:d,className:"min-w-[120px]",sound:null,children:"Stand"}),a.jsxs(U,{variant:"ghost",size:"lg",onClick:p,disabled:!js(e,S),className:"min-w-[120px]",sound:null,children:[a.jsx(kh,{size:16}),"Double"]}),a.jsxs(U,{variant:"ghost",size:"lg",onClick:y,disabled:!ks(e,S),className:"min-w-[120px]",sound:null,children:[a.jsx(ph,{size:16}),"Split"]})]}),g&&a.jsx("p",{className:"micro mt-4 hidden text-center sm:block",children:"Keys · H hit · S stand · D double · P split · N next hand"}),e.phase==="settled"&&a.jsxs("div",{className:"flex flex-col items-center gap-4",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2.5",children:[e.insuranceResult&&a.jsxs(be,{variant:e.insuranceResult==="win"?"gold-outline":"muted",mono:!0,children:["Insurance ",e.insuranceResult==="win"?"paid":"lost"]}),a.jsxs(be,{variant:e.lastNet>=0?"gold-outline":"muted",mono:!0,children:[e.lastNet>0?`+${e.lastNet}`:e.lastNet," chips"]})]}),a.jsx(U,{variant:"gold",size:"lg",className:"min-w-[200px]",onClick:()=>{L("click"),u(null),t(j=>Ho(j))},sound:null,children:"Next hand"})]}),(e.phase==="dealing"||e.phase==="dealer")&&a.jsx("div",{className:"flex justify-center",children:a.jsxs("span",{className:"micro flex items-center gap-2",children:[a.jsx(ah,{size:13,className:"text-[var(--gold)]"}),e.phase==="dealing"?"Dealing":"Dealer plays"]})})]})]}),a.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-3",children:[{label:"Blackjack pays",value:"3 : 2"},{label:"Dealer",value:"Stands soft 17"},{label:"Split",value:"Up to 3 hands"}].map(j=>a.jsxs("div",{className:"panel-inset px-4 py-3.5",children:[a.jsx("div",{className:"micro mb-1.5",children:j.label}),a.jsx("div",{className:"font-display text-[15px] font-semibold",children:j.value})]},j.label))}),a.jsx("p",{className:"mt-6 text-[12px] leading-relaxed text-[var(--text-dim)]",children:"This table is for practice only. No money goes in and none comes out — chips have no value and cannot be bought, sold or cashed. 18+ · Play responsibly."})]})}function gm(e,t=Date.now()){const n=new Date(e).getTime(),r=Math.max(0,n-t);return{days:Math.floor(r/864e5),hours:Math.floor(r/36e5%24),minutes:Math.floor(r/6e4%60),seconds:Math.floor(r/1e3%60),total:r,expired:r<=0}}function ym(e){const[t,n]=T.useState(()=>Date.now());return T.useEffect(()=>{if(new Date(e).getTime()<=Date.now())return;const r=window.setInterval(()=>n(Date.now()),1e3);return()=>window.clearInterval(r)},[e]),gm(e,t)}function ja(e,t=Date.now()){const n=new Date(e.startsAt).getTime(),r=new Date(e.endsAt).getTime();return Number.isNaN(n)||Number.isNaN(r)?e.status:t>=r?"ENDED":t<n?"UPCOMING":e.status==="ENDED"?"ENDED":"LIVE"}function Qo(e){const t=new Date(e);return Number.isNaN(t.getTime())?"—":t.toLocaleString(void 0,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}function Ko(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const n=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}function Go(e){const t=new Date(e);return Number.isNaN(t.getTime())?new Date().toISOString():t.toISOString()}const xm={twitch:"Twitch chat",discord:"Discord",form:"Entry form",kick:"Kick chat",other:"See instructions"};function Hr({value:e,label:t}){return a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("div",{className:`panel-inset grid h-[52px] w-[52px] place-items-center font-display text-[21px]
                   font-bold tabular-nums text-[var(--text-primary)]`,children:String(e).padStart(2,"0")}),a.jsx("span",{className:"micro mt-1.5",children:t})]})}function wm({giveaway:e,index:t,sponsor:n}){const[r,l]=T.useState(!1),i=ja(e),s=i==="UPCOMING"?e.startsAt:e.endsAt,u=ym(s),o=i==="LIVE",c=i==="ENDED",h=e.entryUrl&&e.entryUrl!=="#";return a.jsxs("article",{className:"panel animate-fade-up shine group flex flex-col",style:{"--stagger":t},children:[a.jsx(jt,{label:e.prize,status:i}),a.jsxs("div",{className:"flex flex-1 flex-col gap-4 p-5",children:[a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:["grid h-[58px] w-[58px] shrink-0 place-items-center rounded-[16px] border",o?"animate-glow border-[var(--border-gold)]":"border-[var(--border-navy)]"].join(" "),style:{background:"linear-gradient(160deg,#213743,#1a2c38)"},children:a.jsx("span",{className:"font-display text-[15px] font-bold text-[var(--gold)]",style:{letterSpacing:"-0.02em"},children:e.badge})}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("h3",{className:"font-display text-[19px] font-semibold leading-tight",children:e.prize}),a.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[e.value&&a.jsxs(be,{variant:"gold-outline",mono:!0,children:[a.jsx(ya,{size:10}),e.value]}),a.jsxs(be,{variant:"navy",children:[a.jsx(fd,{size:11}),e.entries.toLocaleString()," entries"]})]})]})]}),a.jsx("p",{className:"text-[14px] leading-[1.6] text-[var(--text-muted)]",children:e.description}),a.jsxs("div",{className:"panel-inset p-4",children:[a.jsx("div",{className:"micro mb-3",children:c?"Finished":i==="UPCOMING"?"Opens in":"Closes in"}),c?a.jsxs("div",{className:"text-[14px] font-medium text-[var(--text-muted)]",children:["Ended ",Qo(e.endsAt)]}):a.jsxs("div",{className:"flex gap-2.5",children:[a.jsx(Hr,{value:u.days,label:"Days"}),a.jsx(Hr,{value:u.hours,label:"Hrs"}),a.jsx(Hr,{value:u.minutes,label:"Min"}),a.jsx(Hr,{value:u.seconds,label:"Sec"})]})]}),a.jsxs("div",{className:"flex items-start gap-2.5 rounded-[12px] border border-[var(--border)] bg-[rgba(47,69,83,0.10)] px-3.5 py-3",children:[a.jsx(ch,{size:14,className:"mt-0.5 shrink-0 text-[var(--gold)]","aria-hidden":"true"}),a.jsxs("div",{className:"min-w-0",children:[a.jsxs("div",{className:"micro mb-1",children:["How to enter · ",xm[e.entryMethod]]}),a.jsx("p",{className:"text-[13px] leading-[1.5] text-[var(--text-muted)]",children:e.entryInstruction})]})]}),n&&a.jsxs("div",{className:"flex items-center gap-2 text-[12px] text-[var(--text-dim)]",children:[a.jsx("span",{children:"Sponsored by"}),a.jsx("span",{className:"font-medium text-[var(--gold)]",children:n.name})]})]}),a.jsx("div",{className:"mt-auto border-t border-[var(--border)] p-4",children:c?a.jsx(U,{variant:"ghost",size:"md",className:"w-full",disabled:!0,children:"Entries closed"}):i==="UPCOMING"?a.jsxs(U,{variant:"ghost",size:"md",className:"w-full",disabled:!0,children:["Opens ",Qo(e.startsAt)]}):h?a.jsxs(wa,{href:e.entryUrl,target:"_blank",rel:"noopener noreferrer",variant:"gold",size:"md",className:"w-full",sound:"enter",onClick:()=>l(!0),children:[r?a.jsx(En,{size:16}):a.jsx(gs,{size:16}),r?"Entry page opened":"Enter giveaway",a.jsx(ga,{size:15,className:"opacity-70"})]}):a.jsxs(U,{variant:"gold",size:"md",className:"w-full",sound:"enter",onClick:()=>{L("enter"),l(!0)},children:[r?a.jsx(En,{size:16}):a.jsx(gs,{size:16}),r?"Noted — enter on stream":"Enter giveaway"]})})]})}const km=[{value:"all",label:"All"},{value:"LIVE",label:"Live"},{value:"UPCOMING",label:"Upcoming"},{value:"ENDED",label:"Ended"}];function ji({icon:e,label:t,value:n}){return a.jsxs("div",{className:"panel-inset flex items-center gap-3.5 px-4 py-3.5",children:[a.jsx("div",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-[var(--border-gold)]",style:{background:"rgba(0,231,1,0.08)"},children:a.jsx(e,{size:17,className:"text-[var(--gold)]","aria-hidden":"true"})}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:"micro mb-1",children:t}),a.jsx("div",{className:"font-display text-[18px] font-bold leading-none",children:n})]})]})}function jm(){return a.jsxs("section",{children:[a.jsx(Vl,{eyebrow:"Community drops",title:a.jsxs(a.Fragment,{children:["Give",a.jsx("span",{className:"text-[var(--gold)]",children:"aways"})]}),subtitle:"Prizes we run for the chat. All giveaways are hosted and drawn exclusively on our Discord server."}),a.jsxs("div",{className:"panel flex flex-col items-center gap-6 px-6 py-14 sm:py-16 text-center relative overflow-hidden",children:[a.jsx("svg",{viewBox:"0 0 24 24",width:48,height:48,fill:"currentColor",className:"text-[#5865F2] drop-shadow-[0_0_16px_rgba(88,101,242,0.45)]","aria-hidden":"true",children:a.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),a.jsxs("div",{className:"flex flex-col items-center gap-2 max-w-[560px]",children:[a.jsx("h3",{className:"font-display text-[22px] sm:text-[26px] font-bold tracking-tight text-[var(--text-primary)]",children:"Giveaways are hosted on our Discord server."}),a.jsx("p",{className:"text-[15px] sm:text-[16px] leading-[1.6] text-[var(--text-muted)]",children:"Join our Discord to participate in upcoming giveaways, get notified when new giveaways go live, and claim exclusive prizes."})]}),a.jsxs("a",{href:"https://discord.gg/fnuYVDQ2T",target:"_blank",rel:"noopener noreferrer",onPointerEnter:()=>L("hover"),onClick:()=>L("click"),className:"mt-2 group relative inline-flex h-[54px] w-[310px] max-w-full items-center justify-center gap-3.5 rounded-[14px] border-2 border-[var(--border-gold)] bg-[linear-gradient(180deg,#213743,#1a2c38)] px-8 text-[15px] font-bold text-white tracking-wide shadow-[0_0_20px_rgba(0,231,1,0.25),0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200 hover:border-[var(--gold-bright)] hover:bg-[linear-gradient(180deg,#2b4657,#1e3444)] hover:shadow-[0_0_28px_rgba(0,231,1,0.4),0_6px_16px_rgba(0,0,0,0.6)] hover:text-[var(--gold)] active:translate-y-[1px] cursor-pointer select-none",children:[a.jsx("svg",{viewBox:"0 0 24 24",width:22,height:22,fill:"currentColor",className:"shrink-0 text-[#5865F2] transition-transform duration-200 group-hover:scale-110 group-hover:text-[var(--gold)]","aria-hidden":"true",children:a.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),a.jsx("span",{className:"uppercase tracking-wider font-extrabold",children:"JOIN OUR DISCORD"})]})]}),a.jsx("p",{className:"mt-8 text-[12px] leading-relaxed text-[var(--text-dim)]",children:"18+ only. Giveaways are free to enter and are not gambling — no purchase or deposit is ever required. Winners are announced on stream."})]})}const Nm=[{id:"giveaways",label:"Giveaways",icon:Cl},{id:"links",label:"Casino links",icon:oh},{id:"export",label:"Export",icon:lh}],Sm=["LIVE","UPCOMING","ENDED"],Cm=["twitch","discord","kick","form","other"],Em=()=>{const e=new Date,t=new Date(e.getTime()+7*864e5);return{id:"",prize:"",badge:"",description:"",startsAt:e.toISOString(),endsAt:t.toISOString(),status:"LIVE",entryMethod:"twitch",entryUrl:"",entryInstruction:"",entries:0,value:"",sponsorId:"",featured:!1}};function pe({label:e,hint:t,children:n}){return a.jsxs("label",{className:"block",children:[a.jsx("span",{className:"micro mb-2 block",children:e}),n,t&&a.jsx("span",{className:"mt-1.5 block text-[11.5px] text-[var(--text-dim)]",children:t})]})}function Yo({text:e,label:t="Copy"}){const[n,r]=T.useState(!1);return a.jsxs(U,{variant:"ghost",size:"sm",sound:null,onClick:async()=>{const l=await md(e);L(l?"copy":"error"),r(l),window.setTimeout(()=>r(!1),1600)},children:[n?a.jsx(En,{size:14}):a.jsx(cd,{size:14}),n?"Copied!":t]})}function zm({giveaways:e,setGiveaways:t,casinos:n,setCasinos:r,onResetAll:l,dirty:i}){const[s,u]=T.useState("giveaways"),[o,c]=T.useState(null),[h,v]=T.useState(null),[m,x]=T.useState(""),[w,N]=T.useState(null),A=T.useMemo(()=>Oh(e),[e]),f=T.useMemo(()=>Ah(n),[n]),d=T.useMemo(()=>JSON.stringify({giveaways:e,casinos:n},null,2),[e,n]),p=()=>{L("open"),c(Em()),v(null)},y=g=>{L("open"),c({...g}),v(g.id)},S=()=>{L("close"),c(null),v(null)},E=()=>{var P,Q;if(!o)return;if(!o.prize.trim()){L("error");return}const g=o.id.trim()||Fh(o.prize),j={...o,id:g,badge:o.badge.trim()||o.prize.slice(0,4).toUpperCase(),value:(P=o.value)!=null&&P.trim()?o.value:void 0,sponsorId:(Q=o.sponsorId)!=null&&Q.trim()?o.sponsorId:void 0};t(h?e.map(te=>te.id===h?j:te):[...e.filter(te=>te.id!==g),j]),L("copy"),c(null),v(null)},C=g=>{L("close"),t(e.filter(j=>j.id!==g)),h===g&&S()},_=(g,j)=>r(n.map(P=>P.id===g?{...P,...j}:P)),$=()=>{var g,j;try{const P=JSON.parse(m);if(!P||!Array.isArray(P.giveaways)&&!Array.isArray(P.casinos))throw new Error("No giveaways or casinos array found");Array.isArray(P.giveaways)&&t(P.giveaways),Array.isArray(P.casinos)&&r(P.casinos),L("copy"),N({ok:!0,text:`Loaded ${((g=P.giveaways)==null?void 0:g.length)??0} giveaways and ${((j=P.casinos)==null?void 0:j.length)??0} casinos.`}),x("")}catch(P){L("error"),N({ok:!1,text:P instanceof Error?P.message:"Could not parse JSON"})}};return a.jsxs("section",{children:[a.jsx(Vl,{eyebrow:"Private · not linked in the nav",title:a.jsxs(a.Fragment,{children:["Ad",a.jsx("span",{className:"text-[var(--gold)]",children:"min"})]}),subtitle:"Build giveaways and edit casino links here, then export the data file and paste it into the project. Changes you make are live in this browser tab so you can preview them, but visitors only see what you ship in the code.",right:i?a.jsxs(U,{variant:"ghost",size:"md",onClick:l,children:[a.jsx(dd,{size:15}),"Discard changes"]}):void 0}),a.jsxs("div",{className:"panel-inset mb-6 flex items-start gap-3 p-4",children:[a.jsx(jh,{size:17,className:"mt-0.5 shrink-0 text-[var(--gold)]","aria-hidden":"true"}),a.jsxs("p",{className:"text-[13px] leading-[1.6] text-[var(--text-muted)]",children:["There is no server behind this site, so nothing saved here reaches your visitors on its own — and it will be gone if you refresh. When a giveaway is ready, open"," ",a.jsx("strong",{className:"text-[var(--text-primary)]",children:"Export"}),", copy the generated file and commit it. That is the step that actually publishes it."]})]}),a.jsx("div",{className:"panel-inset mb-6 inline-flex flex-wrap gap-1 p-1.5",children:Nm.map(g=>{const j=g.icon,P=s===g.id;return a.jsxs("button",{type:"button",onPointerEnter:()=>L("hover"),onClick:()=>{L("click"),u(g.id)},className:["flex items-center gap-2 rounded-[10px] px-4 py-2 text-[13px] font-medium transition-all duration-200",P?"bg-gradient-to-b from-[var(--gold-bright)] to-[var(--gold)] text-[#04060B] shadow-[0_2px_0_0_var(--gold-shadow)]":"text-[var(--text-muted)] hover:bg-[rgba(47,69,83,0.18)] hover:text-[var(--text-primary)]"].join(" "),children:[a.jsx(j,{size:15}),g.label]},g.id)})}),s==="giveaways"&&a.jsxs("div",{className:"flex flex-col gap-5",children:[!o&&a.jsx("div",{children:a.jsxs(U,{variant:"gold",size:"md",onClick:p,sound:null,children:[a.jsx(fh,{size:16}),"New giveaway"]})}),o&&a.jsxs(Hn,{className:"animate-pop",children:[a.jsx(jt,{label:h?`Editing · ${h}`:"New giveaway",status:"ADMIN"}),a.jsxs("div",{className:"grid gap-4 p-5 sm:grid-cols-2",children:[a.jsx(pe,{label:"Prize name",children:a.jsx("input",{className:"field",value:o.prize,onChange:g=>c({...o,prize:g.target.value}),placeholder:"RTX 5080 Gaming Rig"})}),a.jsx(pe,{label:"Tile badge",hint:"Two to five characters shown on the prize tile.",children:a.jsx("input",{className:"field",value:o.badge,onChange:g=>c({...o,badge:g.target.value}),placeholder:"PC"})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(pe,{label:"Description",children:a.jsx("textarea",{className:"field",rows:3,value:o.description,onChange:g=>c({...o,description:g.target.value}),placeholder:"What the prize is, who can enter, when it's drawn."})})}),a.jsx(pe,{label:"Opens",children:a.jsx("input",{type:"datetime-local",className:"field",value:Ko(o.startsAt),onChange:g=>c({...o,startsAt:Go(g.target.value)})})}),a.jsx(pe,{label:"Closes",hint:"Drives the countdown and flips the card to ENDED.",children:a.jsx("input",{type:"datetime-local",className:"field",value:Ko(o.endsAt),onChange:g=>c({...o,endsAt:Go(g.target.value)})})}),a.jsx(pe,{label:"Status",children:a.jsx("select",{className:"field",value:o.status,onChange:g=>c({...o,status:g.target.value}),children:Sm.map(g=>a.jsx("option",{value:g,className:"bg-[#213743]",children:g},g))})}),a.jsx(pe,{label:"Entry method",children:a.jsx("select",{className:"field",value:o.entryMethod,onChange:g=>c({...o,entryMethod:g.target.value}),children:Cm.map(g=>a.jsx("option",{value:g,className:"bg-[#213743]",children:g},g))})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(pe,{label:"Entry link",hint:"Where the Enter button sends people.",children:a.jsx("input",{className:"field",value:o.entryUrl,onChange:g=>c({...o,entryUrl:g.target.value}),placeholder:"https://discord.gg/…"})})}),a.jsx("div",{className:"sm:col-span-2",children:a.jsx(pe,{label:"Entry instruction",children:a.jsx("input",{className:"field",value:o.entryInstruction,onChange:g=>c({...o,entryInstruction:g.target.value}),placeholder:"Type !drop in chat during any stream this week."})})}),a.jsx(pe,{label:"Entry count",children:a.jsx("input",{type:"number",min:0,className:"field",value:o.entries,onChange:g=>c({...o,entries:Number(g.target.value)||0})})}),a.jsx(pe,{label:"Prize value",hint:"Optional.",children:a.jsx("input",{className:"field",value:o.value??"",onChange:g=>c({...o,value:g.target.value}),placeholder:"$3,200"})}),a.jsx(pe,{label:"Sponsor",hint:"Optional partner credit on the card.",children:a.jsxs("select",{className:"field",value:o.sponsorId??"",onChange:g=>c({...o,sponsorId:g.target.value}),children:[a.jsx("option",{value:"",className:"bg-[#213743]",children:"None"}),n.map(g=>a.jsx("option",{value:g.id,className:"bg-[#213743]",children:g.name},g.id))]})}),a.jsx(pe,{label:"Featured",children:a.jsxs("button",{type:"button",onClick:()=>{L("toggle"),c({...o,featured:!o.featured})},className:["field flex items-center justify-between",o.featured?"border-[var(--border-gold)] text-[var(--gold)]":""].join(" "),children:[o.featured?"Pinned to the top":"Normal ordering",a.jsx("span",{className:["relative h-5 w-9 rounded-full transition-colors",o.featured?"bg-[var(--gold)]":"bg-[#1b2740]"].join(" "),children:a.jsx("span",{className:["absolute top-[3px] h-3.5 w-3.5 rounded-full bg-[#04060B] transition-all",o.featured?"left-[19px]":"left-[3px]"].join(" ")})})]})})]}),a.jsxs("div",{className:"flex flex-wrap gap-2.5 border-t border-[var(--border)] p-4",children:[a.jsxs(U,{variant:"gold",size:"md",onClick:E,sound:null,children:[a.jsx(En,{size:16}),h?"Update giveaway":"Add giveaway"]}),a.jsx(U,{variant:"ghost",size:"md",onClick:S,sound:null,children:"Cancel"})]})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[e.length===0&&a.jsx("div",{className:"panel px-6 py-12 text-center",children:a.jsx("p",{className:"text-[14px] text-[var(--text-muted)]",children:"No giveaways yet. Create one above."})}),e.map(g=>{const j=ja(g);return a.jsxs("div",{className:"panel flex flex-wrap items-center gap-4 p-4",children:[a.jsx("div",{className:"grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-[var(--border-navy)]",style:{background:"linear-gradient(160deg,#213743,#1a2c38)"},children:a.jsx("span",{className:"font-display text-[12px] font-bold text-[var(--gold)]",children:g.badge})}),a.jsxs("div",{className:"min-w-[180px] flex-1",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsx("span",{className:"font-display text-[15px] font-semibold",children:g.prize}),a.jsx(be,{variant:j==="LIVE"?"gold-solid":j==="UPCOMING"?"gold-outline":"muted",mono:!0,children:j}),g.featured&&a.jsx(be,{variant:"navy",mono:!0,children:"Featured"})]}),a.jsxs("div",{className:"mt-1.5 font-mono text-[11px] text-[var(--text-dim)]",children:[g.id," · ",g.entries.toLocaleString()," entries"]})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs(U,{variant:"ghost",size:"sm",onClick:()=>y(g),sound:null,children:[a.jsx(dh,{size:14}),"Edit"]}),a.jsxs(U,{variant:"danger",size:"sm",onClick:()=>C(g.id),sound:null,children:[a.jsx(wh,{size:14}),"Delete"]})]})]},g.id)})]})]}),s==="links"&&a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("p",{className:"mb-1 text-[13.5px] leading-[1.6] text-[var(--text-muted)]",children:["Set each partner's affiliate link, bonus and promo code. A casino left on"," ",a.jsx("code",{className:"rounded bg-[#213743] px-1.5 py-0.5 font-mono text-[12px]",children:"#"})," shows its Play now button as disabled rather than sending people nowhere."]}),n.map(g=>{const j=!g.url||g.url==="#";return a.jsxs(Hn,{children:[a.jsx(jt,{label:g.name,status:g.status,right:j?a.jsx(be,{variant:"muted",mono:!0,children:"No link"}):void 0}),a.jsxs("div",{className:"grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4",children:[a.jsx("div",{className:"sm:col-span-2",children:a.jsx(pe,{label:"Affiliate link",children:a.jsx("input",{className:"field",value:g.url,onChange:P=>_(g.id,{url:P.target.value}),placeholder:"https://…"})})}),a.jsx(pe,{label:"Bonus",children:a.jsx("input",{className:"field",value:g.bonus,onChange:P=>_(g.id,{bonus:P.target.value})})}),a.jsx(pe,{label:"Promo code",children:a.jsx("input",{className:"field font-mono",value:g.promoCode,onChange:P=>_(g.id,{promoCode:P.target.value})})})]})]},g.id)})]}),s==="export"&&a.jsxs("div",{className:"flex flex-col gap-5",children:[[{title:"src/data/giveaways.ts",body:A,note:"Replace the whole file with this."},{title:"src/data/casinos.ts",body:f,note:"Only the links, bonuses and codes changed — descriptions are preserved."}].map(g=>a.jsxs(Hn,{children:[a.jsx(jt,{label:g.title,right:a.jsxs("div",{className:"flex gap-2",children:[a.jsx(Yo,{text:g.body}),a.jsxs(U,{variant:"ghost",size:"sm",sound:"copy",onClick:()=>Fo(g.title.split("/").pop()??"data.ts",g.body),children:[a.jsx(Do,{size:14}),"Download"]})]})}),a.jsxs("div",{className:"p-4",children:[a.jsx("p",{className:"mb-3 text-[12.5px] text-[var(--text-muted)]",children:g.note}),a.jsx("pre",{className:"panel-inset max-h-[320px] overflow-auto p-4 font-mono text-[11.5px] leading-[1.65] text-[var(--text-muted)]",children:g.body})]})]},g.title)),a.jsxs(Hn,{children:[a.jsx(jt,{label:"Backup · JSON",right:a.jsxs("div",{className:"flex gap-2",children:[a.jsx(Yo,{text:d,label:"Copy JSON"}),a.jsxs(U,{variant:"ghost",size:"sm",sound:"copy",onClick:()=>Fo("casino-hub-data.json",d,"application/json"),children:[a.jsx(Do,{size:14}),"Download"]})]})}),a.jsxs("div",{className:"grid gap-4 p-4 lg:grid-cols-2",children:[a.jsxs("div",{children:[a.jsx("div",{className:"micro mb-2",children:"Current data"}),a.jsx("pre",{className:"panel-inset max-h-[260px] overflow-auto p-4 font-mono text-[11.5px] leading-[1.65] text-[var(--text-muted)]",children:d})]}),a.jsxs("div",{children:[a.jsx("div",{className:"micro mb-2",children:"Load a backup"}),a.jsx("textarea",{className:"field font-mono text-[11.5px]",rows:10,value:m,onChange:g=>x(g.target.value),placeholder:"Paste a previously exported JSON bundle here…"}),a.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[a.jsxs(U,{variant:"navy",size:"sm",onClick:$,disabled:!m.trim(),sound:null,children:[a.jsx(Sh,{size:14}),"Load into this session"]}),w&&a.jsx("span",{className:["text-[12.5px]",w.ok?"text-[var(--gold)]":"text-[#e0a3a3]"].join(" "),children:w.text})]})]})]})]})]})]})}function Tm({title:e,icon:t}){return a.jsx("section",{className:"flex min-h-[420px] items-center justify-center",children:a.jsxs("div",{className:`card-surface flex w-full max-w-[440px] flex-col items-center gap-5
                   rounded-[16px] border border-[var(--border)] px-8 py-14 text-center`,children:[a.jsx(t,{size:72,strokeWidth:1.25,"aria-hidden":"true",className:"text-[var(--gold)] opacity-[0.12]"}),a.jsx("h2",{className:"font-display text-[24px] font-semibold text-[var(--text-primary)]",children:e}),a.jsx("p",{className:"text-[14px] leading-[1.6] text-[var(--text-muted)]",children:"This section is coming soon. Stay tuned."})]})})}const Ni=[{"id":"jack-casino","name":"JackCasino","initials":"JC","logoUrl":"/profile-images/jackcasino.png","category":"crypto","status":"VERIFIED","shortDescription":"Poker: 300% match bonus + 20% instant cash + mystery prises from our luckbox mini game. Casino: 250 Free Bets on Aviator / Aloha King Elevis+ 100% match bonus.","longDescription":"","highlights":["Poker welcome offer: 300% match bonus + 20% instant cash + mystery prises from our luckbox mini game","Casino welcome offer: 250 Free Bets on Aviator / Aloha King Elevis+ 100% match bonus","Deposit methods: Card, Crypto","Withdrawal methods: Card, Crypto","KYC Required"],"tags":["Card","Crypto"],"bonus":"250 Free Bets on Aviator / Aloha King Elevis+ 100% match bonus","promoCode":"","url":"https://jack-casino.com","featured":true,"addedOrder":1},{"id":"kirgo","name":"Kirgo","initials":"KG","logoUrl":"/profile-images/kirgo.png","category":"crypto","status":"VERIFIED","shortDescription":"1st Deposit: 100% Match + 100 FS (Code: WELCOME1) · 2nd Deposit: 75% Match + 25 FS (Code: WELCOME2) · 3rd Deposit: 50% Match (Code: WELCOME3)","longDescription":"","highlights":["FIRST DEPOSIT BONUS: 100% Match + 100 FS (Bonus Code: WELCOME1) (25x wager)","SECOND DEPOSIT BONUS: 75% Match + 25 FS (Bonus Code: WELCOME2) (25x wager)","THIRD DEPOSIT BONUS: 50% Match (Bonus Code: WELCOME3) (30x wager)","Deposit methods: Crypto","Withdrawal methods: Crypto","No KYC"],"tags":["Crypto Only"],"bonus":"100% Match + 100 FS","promoCode":"WELCOME1","url":"https://go.kirgo.com/Mommouh","featured":true,"addedOrder":2}],mt=(e,t=20)=>{const n=new Date;return n.setDate(n.getDate()+e),n.setHours(t,0,0,0),n.toISOString()},Si=[],bm="#admin";const IpDetectionService = {
  async detect() {
    try {
      if (typeof window !== "undefined" && window.location) {
        const params = new URLSearchParams(window.location.search);
        const override = params.get("test_country") || params.get("country");
        if (override) {
          const code = override.toUpperCase();
          return {
            isHungary: code === "HU",
            countryCode: code,
            countryName: code === "HU" ? "Hungary" : code,
            ip: "127.0.0.1 (Test Override)",
            provider: "url-param"
          };
        }
        if (params.get("vpn") === "1" || params.get("test_hu") === "1") {
          return {
            isHungary: true,
            countryCode: "HU",
            countryName: "Hungary",
            ip: "127.0.0.1 (Test Override)",
            provider: "url-param"
          };
        }
      }
    } catch (e) {}

    const timestamp = Date.now();

    try {
      const res = await fetch(`/api/geo?_t=${timestamp}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(3500)
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.countryCode) {
          return {
            isHungary: Boolean(data.isHungary || data.countryCode === "HU"),
            countryCode: data.countryCode,
            countryName: data.countryName || (data.countryCode === "HU" ? "Hungary" : data.countryCode),
            ip: data.ip || "",
            provider: data.provider || "backend-api"
          };
        }
      }
    } catch (e) {}

    try {
      const res = await fetch(`https://ipwho.is/?_t=${timestamp}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(3000)
      });
      if (res.ok) {
        const data = await res.json();
        const code = (data.country_code || "").toUpperCase();
        return {
          isHungary: code === "HU",
          countryCode: code,
          countryName: data.country || code,
          ip: data.ip || "",
          provider: "ipwho.is-client"
        };
      }
    } catch (e) {}

    return {
      isHungary: false,
      countryCode: "UNKNOWN",
      countryName: "Unknown",
      ip: "",
      provider: "fallback"
    };
  }
};

function HungarianIpWarningModal({ countryInfo }) {
  const modalRef = T.useRef(null);

  T.useEffect(() => {
    modalRef.current?.focus();
    const handleKeyDown = (e) => {
      // Prevent Escape or tab away from modal
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
      if (e.key === "Tab") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return a.jsx("div", {
    className: "animate-backdrop-in fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none",
    style: {
      backgroundColor: "rgba(1, 2, 4, 0.88)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      pointerEvents: "auto"
    },
    children: a.jsxs("div", {
      ref: modalRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "hu-ip-warning-title",
      "aria-describedby": "hu-ip-warning-desc",
      tabIndex: -1,
      className: "panel animate-modal-in relative w-full max-w-[490px] overflow-hidden rounded-[20px] border border-[rgba(0,231,1,0.35)] p-6 sm:p-8 text-center shadow-[0_0_0_1px_rgba(0,231,1,0.25),0_24px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_-8px_rgba(0,231,1,0.22)] focus:outline-none",
      style: {
        background: "linear-gradient(180deg, #1f3545 0%, #152530 100%)"
      },
      children: [
        a.jsx("div", {
          className: "absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#00e701] to-transparent",
          "aria-hidden": "true"
        }),
        a.jsxs("div", {
          className: "mx-auto mb-5 relative flex h-20 w-20 items-center justify-center",
          children: [
            a.jsx("div", {
              className: "absolute inset-0 rounded-full bg-[#00e701] opacity-20 blur-xl animate-pulse"
            }),
            a.jsx("div", {
              className: "relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(0,231,1,0.45)] bg-[rgba(15,33,46,0.92)] shadow-[0_0_24px_rgba(0,231,1,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]",
              children: a.jsxs("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#00e701",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "drop-shadow-[0_0_8px_rgba(0,231,1,0.85)]",
                children: [
                  a.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
                  a.jsx("path", { d: "m9 12 2 2 4-4" })
                ]
              })
            })
          ]
        }),
        a.jsxs("div", {
          className: "inline-flex items-center gap-2 rounded-full border border-[rgba(0,231,1,0.3)] bg-[rgba(0,231,1,0.08)] px-3.5 py-1 mb-3 text-[12px] font-semibold tracking-wide text-[var(--gold)] uppercase",
          children: [
            a.jsx("span", {
              className: "inline-block h-2 w-2 rounded-full bg-[#00e701] shadow-[0_0_8px_#00e701] animate-pulse"
            }),
            a.jsx("span", {
              children: "MAGYARORSZÁGI IP ÉSZLELVE"
            })
          ]
        }),
        a.jsx("h2", {
          id: "hu-ip-warning-title",
          className: "font-display text-[24px] sm:text-[28px] font-bold tracking-tight text-white mb-3",
          children: "Magyar IP észlelve"
        }),
        a.jsx("p", {
          id: "hu-ip-warning-desc",
          className: "text-[15px] sm:text-[16px] leading-relaxed text-[#d0dceb] mb-6 font-normal",
          children: "A weboldal használatához kérjük, kapcsold be a VPN-t, majd töltsd újra az oldalt."
        }),
        a.jsxs("div", {
          className: "mb-5 rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,20,30,0.6)] p-3.5 text-left text-[13px] text-[#9fb3c8] flex items-start gap-3",
          children: [
            a.jsxs("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#00e701",
              strokeWidth: "2",
              className: "shrink-0 mt-0.5",
              children: [
                a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                a.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                a.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
              ]
            }),
            a.jsx("span", {
              className: "leading-[1.5]",
              children: "Ha már bekapcsoltad a VPN-t és továbbra is ezt látod, próbálj meg egy másik szervert választani."
            })
          ]
        }),
        a.jsxs("div", {
          className: "flex items-center justify-center gap-2.5 rounded-[12px] border border-[rgba(0,231,1,0.22)] bg-[rgba(0,231,1,0.06)] py-3 px-4 text-[13px] font-medium text-[var(--gold)]",
          children: [
            a.jsxs("span", {
              className: "relative flex h-2.5 w-2.5",
              children: [
                a.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e701] opacity-75" }),
                a.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e701]" })
              ]
            }),
            a.jsx("span", {
              className: "tracking-wide",
              children: "Kapcsolat automatikus ellenőrzése folyamatban..."
            })
          ]
        })
      ]
    })
  });
}

function AgeVerificationModal({ onVerify }) {
  const [underage, setUnderage] = T.useState(false);
  const modalRef = T.useRef(null);

  T.useEffect(() => {
    modalRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusables && focusables.length > 0) {
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return a.jsx("div", {
    className: "animate-backdrop-in fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
    style: {
      backgroundColor: "rgba(1, 2, 4, 0.88)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)"
    },
    children: a.jsxs("div", {
      ref: modalRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "age-modal-title",
      tabIndex: -1,
      className: "panel animate-modal-in relative w-full max-w-[480px] overflow-hidden rounded-[20px] border border-[rgba(0,231,1,0.3)] p-6 sm:p-8 text-center shadow-[0_0_0_1px_rgba(0,231,1,0.2),0_24px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_-8px_rgba(0,231,1,0.2)] focus:outline-none",
      style: {
        background: "linear-gradient(180deg, #1f3545 0%, #152530 100%)"
      },
      children: underage ? [
        a.jsx("div", {
          className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/40 bg-red-950/40 text-red-400",
          children: a.jsxs("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
              a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              a.jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
              a.jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
            ]
          })
        }),
        a.jsx("h2", {
          className: "font-display text-[22px] font-bold text-white mb-2",
          children: "Hozzáférés korlátozva"
        }),
        a.jsx("p", {
          className: "text-[14px] text-[#d0dceb] mb-6 leading-relaxed",
          children: "A weboldal tartalma kizárólag 18 éven felüli látogatók számára érhető el."
        }),
        a.jsx("button", {
          type: "button",
          onClick: () => setUnderage(false),
          className: "w-full cursor-pointer rounded-[12px] bg-[rgba(255,255,255,0.08)] py-3 px-4 text-[14px] font-medium text-white hover:bg-[rgba(255,255,255,0.15)] transition-colors",
          children: "Vissza a választáshoz"
        })
      ] : [
        a.jsx("div", {
          className: "absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#00e701] to-transparent",
          "aria-hidden": "true"
        }),
        a.jsxs("div", {
          className: "mx-auto mb-5 relative flex h-20 w-20 items-center justify-center",
          children: [
            a.jsx("div", {
              className: "absolute inset-0 rounded-full bg-[#00e701] opacity-20 blur-xl animate-pulse"
            }),
            a.jsx("div", {
              className: "relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(0,231,1,0.45)] bg-[rgba(15,33,46,0.92)] shadow-[0_0_24px_rgba(0,231,1,0.3)]",
              children: a.jsx("span", {
                className: "font-display text-[24px] font-black text-[var(--gold)] tracking-tighter drop-shadow-[0_0_8px_rgba(0,231,1,0.85)]",
                children: "18+"
              })
            })
          ]
        }),
        a.jsx("h2", {
          id: "age-modal-title",
          className: "font-display text-[24px] sm:text-[26px] font-bold tracking-tight text-white mb-2.5",
          children: "Korhatár-ellenőrzés"
        }),
        a.jsx("p", {
          className: "text-[14px] sm:text-[15px] leading-relaxed text-[#d0dceb] mb-6",
          children: "A weboldalon található ajánlatok és tartalmak kizárólag 18 éven felüli látogatók számára érhetők el. Kérjük, erősítsd meg az életkorodat a belépéshez."
        }),
        a.jsxs("div", {
          className: "flex flex-col gap-3 mb-5",
          children: [
            a.jsx("button", {
              type: "button",
              onClick: onVerify,
              className: "btn-gold w-full cursor-pointer rounded-[12px] py-3.5 px-6 font-display text-[16px] font-bold text-black shadow-[0_2px_0_0_var(--gold-shadow),0_0_24px_rgba(0,231,1,0.4)] transition-all hover:brightness-110 active:scale-[0.98]",
              children: "Elmúltam 18 éves"
            }),
            a.jsx("button", {
              type: "button",
              onClick: () => setUnderage(true),
              className: "w-full cursor-pointer rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] py-3 px-4 text-[14px] font-medium text-[#9fb3c8] transition-colors hover:bg-[rgba(255,255,255,0.08)] hover:text-white",
              children: "Nem múltam el 18"
            })
          ]
        }),
        a.jsx("p", {
          className: "text-[12px] text-[#6e8499] leading-tight",
          children: "18+ · Játssz felelősségteljesen · A szerencsejáték kockázattal jár."
        })
      ]
    })
  });
}

function _m(){
  const[e,t]=T.useState("casinos"),
  [n,r]=T.useState(""),
  [l,i]=T.useState("featured"),
  [s,u]=T.useState(!1),
  [o,c]=T.useState(!1),
  [h,v]=T.useState(Ni),
  [m,x]=T.useState(Si),
  [geoState,setGeoState]=T.useState({loading:true,isHungary:false,countryCode:null,ip:null,provider:null}),
  [ageVerified,setAgeVerified]=T.useState(()=>{
    try{return sessionStorage.getItem("mommouh_age_verified")==="true"}catch(E){return!1}
  }),
  w=JSON.stringify(h)!==JSON.stringify(Ni)||JSON.stringify(m)!==JSON.stringify(Si);

  Dh();
  const N=ys.find(y=>y.id===e)??ys[0];

  T.useEffect(()=>{
    let isMounted=true;
    IpDetectionService.detect().then(res=>{
      if(isMounted){
        setGeoState({loading:false,...res});
      }
    }).catch(()=>{
      if(isMounted){
        setGeoState({loading:false,isHungary:false,countryCode:"UNKNOWN",ip:"",provider:"fallback"});
      }
    });
    return()=>{isMounted=false};
  },[]);

  // Periodic automatic re-check while Hungarian IP is active
  T.useEffect(()=>{
    if(geoState.loading || !geoState.isHungary) return;
    let isMounted=true;
    const checkIp=()=>{
      IpDetectionService.detect().then(res=>{
        if(isMounted && !res.isHungary){
          setGeoState({loading:false,...res});
        }
      }).catch(()=>{});
    };
    const interval=window.setInterval(checkIp,3000);
    const onFocus=()=>checkIp();
    window.addEventListener("focus",onFocus);
    window.addEventListener("online",onFocus);
    return()=>{
      isMounted=false;
      window.clearInterval(interval);
      window.removeEventListener("focus",onFocus);
      window.removeEventListener("online",onFocus);
    };
  },[geoState.loading,geoState.isHungary]);

  const handleVerifyAge=T.useCallback(()=>{
    setAgeVerified(true);
    try{sessionStorage.setItem("mommouh_age_verified","true")}catch(E){}
  },[]);

  T.useEffect(()=>{
    const y=()=>{window.location.hash.toLowerCase()===bm&&(c(!0),t("admin"))};
    return y(),window.addEventListener("hashchange",y),()=>window.removeEventListener("hashchange",y)
  },[]);

  T.useEffect(()=>{
    const y=window.matchMedia("(min-width: 1024px)"),S=()=>y.matches&&u(!1);
    return y.addEventListener("change",S),()=>y.removeEventListener("change",S)
  },[]);

  T.useEffect(()=>{
    if(!s)return;
    const y=S=>S.key==="Escape"&&u(!1);
    return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)
  },[s]);

  const A=T.useMemo(()=>{
    const y=n.trim().toLowerCase(),S=y?h.filter(E=>E.name.toLowerCase().includes(y)||E.tags.some(C=>C.toLowerCase().includes(y))):[...h];
    switch(l){
      case"name":return S.sort((E,C)=>E.name.localeCompare(C.name));
      case"newest":return S.sort((E,C)=>C.addedOrder-E.addedOrder);
      default:return S.sort((E,C)=>E.featured!==C.featured?E.featured?-1:1:C.addedOrder-E.addedOrder)
    }
  },[h,n,l]),
  f=T.useCallback(y=>{t(y),r(""),u(!1)},[]),
  d=T.useCallback(()=>{v(Ni),x(Si)},[]),
  p=()=>{
    switch(e){
      case"casinos":return a.jsx(Hh,{casinos:A,totalCount:h.length,query:n,onClearSearch:()=>r("")});
      case"blackjack":return a.jsx(vm,{});
      case"plinko":return a.jsx(PlinkoGame,{});
      case"giveaways":return a.jsx(jm,{giveaways:m,casinos:h});
      case"admin":return a.jsx(zm,{giveaways:m,setGiveaways:x,casinos:h,setCasinos:v,onResetAll:d,dirty:w});
      default:return a.jsx(Tm,{title:N.label,icon:N.icon})
    }
  };

  const showHungarianIpWarning=!geoState.loading && geoState.isHungary;
  const showAgeVerification=!geoState.loading && !geoState.isHungary && !ageVerified;

  return a.jsxs(a.Fragment,{
    children:[
      a.jsx(Xp,{}),
      showHungarianIpWarning && a.jsx(HungarianIpWarningModal,{
        countryInfo:geoState
      }),
      showAgeVerification && a.jsx(AgeVerificationModal,{
        onVerify:handleVerifyAge
      }),
      a.jsxs("div",{
        className:"relative z-10 flex h-screen overflow-hidden",
        children:[
          a.jsx("div",{className:"hidden lg:block",children:a.jsx(Oo,{activeSection:e,onSelect:f,adminUnlocked:o})}),
          s&&a.jsxs("div",{className:"fixed inset-0 z-40 lg:hidden",children:[a.jsx("div",{className:"animate-backdrop-in absolute inset-0 bg-[rgba(1,2,4,0.72)]",style:{backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)"},onClick:()=>u(!1),"aria-hidden":"true"}),a.jsx("div",{className:"absolute inset-y-0 left-0",children:a.jsx(Oo,{activeSection:e,onSelect:f,adminUnlocked:o,isDrawer:!0,onClose:()=>u(!1)})})]}),
          a.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[a.jsx(Rh,{title:N.label,count:e==="casinos"?A.length:null,query:n,onQueryChange:r,sort:l,onSortChange:i,showControls:e==="casinos",onOpenNav:()=>u(!0)}),a.jsx("main",{className:"flex-1 overflow-y-auto",children:a.jsx("div",{className:e==="plinko"?"w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-4 sm:py-6":"mx-auto max-w-[1400px] px-5 py-8 sm:px-8",children:p()})})]})
        ]
      })
    ]
  });
}
const kd=document.getElementById("root");if(!kd)throw new Error("Root element #root not found");od(kd).render(a.jsx(T.StrictMode,{children:a.jsx(_m,{})}));
