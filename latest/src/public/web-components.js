(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,setImmediate){(function (){
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('*{padding:0;margin:0}teacher-sidebar{font-family:Factor A,sans-serif;display:flex}.rcs-inner-handle{background-color:#ffffff1a!important}.rcs-custom-scroll-handle{right:4px}.rcs-outer-container{border-radius:32px}._skeletonBox_10ycv_1{width:100%}._skeletonBox_10ycv_1.__height-40_10ycv_4{height:40px}._skeletonBox_10ycv_1 ._shine_10ycv_7{width:80%;height:80%;display:inline-block;position:relative;overflow:hidden;background-color:#303045;border-radius:12px}._skeletonBox_10ycv_1 ._shine_10ycv_7:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(-100%);background-image:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.2) 20%,rgba(255,255,255,.5) 60%,rgba(255,255,255,0));animation:_shimmer_10ycv_1 5s infinite;content:""}@keyframes _shimmer_10ycv_1{to{transform:translate(100%)}}._sidebarItem_zt6o7_1{position:relative;border-radius:10px;transition:background-color .3s}._sidebarItem_zt6o7_1:hover{background:#765fde4d}._sidebarItem_content_zt6o7_9{position:relative;display:flex;align-items:center;box-sizing:border-box;min-height:40px;padding:7px 10px;transition:.3s ease;cursor:pointer}._sidebarItem_content_icon_zt6o7_19{margin-right:10px;margin-top:2px;width:20px;height:20px;overflow:hidden}._sidebarItem_content_text_zt6o7_26{color:#fff;font-family:Factor A,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:24px;white-space:pre;align-self:center;overflow:hidden;text-overflow:ellipsis}._sidebarItem_content_arrow_zt6o7_38{margin-left:12px}._sidebarItem_ugsye_1{position:relative;border-radius:10px;cursor:pointer}._sidebarItem_ugsye_1 a{text-decoration:none}._sidebarItem_content_ugsye_9{position:relative;display:flex;align-items:center;box-sizing:border-box;min-height:40px;width:244px;padding:7px 10px;transition:.3s ease;cursor:pointer}._sidebarItem_content_icon_ugsye_20{margin-right:10px;margin-top:2px}._sidebarItem_content_text_ugsye_24{color:#fff;font-family:Factor A,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:24px;white-space:pre;align-self:center;overflow:hidden;text-overflow:ellipsis}._sidebarItem_content_arrow_ugsye_36{position:absolute;top:14px;right:12px;margin-left:12px}._sidebarItem_ugsye_1.__isActive_ugsye_42{background-color:#444358}@media (min-width: 768px){._sidebarItem_ugsye_1:hover{background-color:#444358}}._sidebarFooter_1g0nv_1{position:relative;bottom:0;padding:38px 40px 24px}._menu_drpie_1{z-index:2;position:absolute;border-radius:32px;left:208px;padding-left:44px;top:0;height:100vh;display:flex;align-items:start;flex-flow:column nowrap;opacity:0;pointer-events:none;transition:opacity .2s}._menu_drpie_1.__isActive_drpie_16{opacity:1;pointer-events:auto}._menu_drpie_1 ul{flex:1 1 20%;list-style:none;padding:32px;background:#2f2f46;border-radius:32px;width:315px;box-sizing:border-box}._itemsWrapper_xq66m_1{display:flex;flex-direction:column;gap:2px;padding:16px 40px}._itemsWrapper_xq66m_1>div{position:relative}._sidebarItem_xq66m_10{font-size:16px;font-weight:700;line-height:24px;text-align:left;height:40px;padding:8px 12px 8px 10px;border-radius:8px;cursor:pointer;display:flex;align-items:center}._sidebarItem_xq66m_10:hover{background:#765fde4d}._active_teacher_2ucod_1{font-size:14px;line-height:20px;color:#a7a7af}._userWrapper_2ucod_6{padding:0 40px}._userDropdownWrapper_2ucod_9{position:relative;display:flex;box-sizing:border-box;max-width:208px;height:96px;border-radius:24px;padding:12px 18px;background:#222238;cursor:pointer;gap:4px;transition:background .2s ease}._userDropdownWrapper_2ucod_9.__isActive_2ucod_22{background:#444358}._userDropdownWrapper_icon_2ucod_25{margin-top:6px;margin-left:1px}._userDropdownWrapper_content_2ucod_29{position:relative;display:flex;flex-direction:column;margin-left:7px}._userDropdownWrapper_content_name_2ucod_35{font-size:16px;font-weight:700;line-height:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:115px}._userDropdownWrapper_content_name_2ucod_35 svg{margin-left:38px}._userDropdownWrapper_content_arrow_2ucod_47{position:absolute;top:0;right:-12px}._userDropdownWrapper_content_coinsWrap_2ucod_52{display:flex;justify-content:start;align-items:center;margin-top:4px;margin-right:4px}._userDropdownWrapper_content_coinsWrap_2ucod_52 span{margin-left:1px;font-weight:700;font-size:16px;line-height:24px}._userDropdownWrapper_2ucod_9 div[class^=_menu_offset]{display:none}@media (min-width: 768px){._userDropdownWrapper_2ucod_9:hover{background-color:#444358}}._sidebar_1ohmu_1{width:288px;color:#fff;margin-right:10px;background:var(--Black-100, #2f2f45);min-height:100vh;height:100%;transition:width .3s;font-family:Factor A,sans-serif}._sidebar_1ohmu_1.__isOpened_1ohmu_11{width:288px}._logo_1ohmu_14{height:16px;width:120px;padding-bottom:8px;margin-bottom:16px;margin-top:26px;margin-left:40px}._navbar_1ohmu_22{position:sticky;top:0;display:flex;flex-direction:column}')),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var x0=Object.defineProperty;var C0=(e,t,n)=>t in e?x0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ee=(e,t,n)=>(C0(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function R0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Qp={exports:{}},ea={},Xp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=Symbol.for("react.element"),b0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),T0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),I0=Symbol.for("react.suspense"),L0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),jf=Symbol.iterator;function $0(e){return e===null||typeof e!="object"?null:(e=jf&&e[jf]||e["@@iterator"],typeof e=="function"?e:null)}var Jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,eh={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=eh,this.updater=n||Jp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function th(){}th.prototype=Kr.prototype;function pc(e,t,n){this.props=e,this.context=t,this.refs=eh,this.updater=n||Jp}var hc=pc.prototype=new th;hc.constructor=pc;Zp(hc,Kr.prototype);hc.isPureReactComponent=!0;var Df=Array.isArray,nh=Object.prototype.hasOwnProperty,vc={current:null},rh={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)nh.call(t,r)&&!rh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:io,type:e,key:o,ref:s,props:i,_owner:vc.current}}function z0(e,t){return{$$typeof:io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===io}function U0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var If=/\/+/g;function Ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U0(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case io:case b0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ya(s,0):r,Df(i)?(n="",e!=null&&(n=e.replace(If,"$&/")+"/"),Wo(i,t,n,"",function(u){return u})):i!=null&&(mc(i)&&(i=z0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(If,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Df(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ya(o,a);s+=Wo(o,t,n,l,i)}else if(l=$0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ya(o,a++),s+=Wo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function wo(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function F0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Go={transition:null},B0={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Go,ReactCurrentOwner:vc};function oh(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Kr;U.Fragment=P0;U.Profiler=T0;U.PureComponent=pc;U.StrictMode=A0;U.Suspense=I0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0;U.act=oh;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=vc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)nh.call(t,l)&&!rh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:io,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N0,_context:e},e.Consumer=e};U.createElement=ih;U.createFactory=function(e){var t=ih.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:D0,render:e}};U.isValidElement=mc;U.lazy=function(e){return{$$typeof:M0,_payload:{_status:-1,_result:e},_init:F0}};U.memo=function(e,t){return{$$typeof:L0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};U.unstable_act=oh;U.useCallback=function(e,t){return Te.current.useCallback(e,t)};U.useContext=function(e){return Te.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};U.useEffect=function(e,t){return Te.current.useEffect(e,t)};U.useId=function(){return Te.current.useId()};U.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Te.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};U.useRef=function(e){return Te.current.useRef(e)};U.useState=function(e){return Te.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Te.current.useTransition()};U.version="18.3.1";Xp.exports=U;var W=Xp.exports;const wn=ro(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=W,V0=Symbol.for("react.element"),W0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,K0=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)G0.call(t,r)&&!Y0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:V0,type:e,key:o,ref:s,props:i,_owner:K0.current}}ea.Fragment=W0;ea.jsx=sh;ea.jsxs=sh;Qp.exports=ea;var A=Qp.exports,Vl={},ah={exports:{}},We={},lh={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,N){var D=b.length;b.push(N);e:for(;0<D;){var K=D-1>>>1,Y=b[K];if(0<i(Y,N))b[K]=N,b[D]=Y,D=K;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var N=b[0],D=b.pop();if(D!==N){b[0]=D;e:for(var K=0,Y=b.length,Pn=Y>>>1;K<Pn;){var at=2*(K+1)-1,Xt=b[at],Ue=at+1,Dt=b[Ue];if(0>i(Xt,D))Ue<Y&&0>i(Dt,Xt)?(b[K]=Dt,b[Ue]=D,K=Ue):(b[K]=Xt,b[at]=D,K=at);else if(Ue<Y&&0>i(Dt,D))b[K]=Dt,b[Ue]=D,K=Ue;else break e}}return N}function i(b,N){var D=b.sortIndex-N.sortIndex;return D!==0?D:b.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,p=null,h=3,y=!1,g=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(b){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=b)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function m(b){if(_=!1,d(b),!g)if(n(l)!==null)g=!0,ri(S);else{var N=n(u);N!==null&&bn(m,N.startTime-b)}}function S(b,N){g=!1,_&&(_=!1,v(R),R=-1),y=!0;var D=h;try{for(d(N),p=n(l);p!==null&&(!(p.expirationTime>N)||b&&!ve());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var Y=K(p.expirationTime<=N);N=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(l)&&r(l),d(N)}else r(l);p=n(l)}if(p!==null)var Pn=!0;else{var at=n(u);at!==null&&bn(m,at.startTime-N),Pn=!1}return Pn}finally{p=null,h=D,y=!1}}var E=!1,O=null,R=-1,I=5,L=-1;function ve(){return!(e.unstable_now()-L<I)}function jt(){if(O!==null){var b=e.unstable_now();L=b;var N=!0;try{N=O(!0,b)}finally{N?ze():(E=!1,O=null)}}else E=!1}var ze;if(typeof f=="function")ze=function(){f(jt)};else if(typeof MessageChannel<"u"){var _o=new MessageChannel,Ga=_o.port2;_o.port1.onmessage=jt,ze=function(){Ga.postMessage(null)}}else ze=function(){C(jt,0)};function ri(b){O=b,E||(E=!0,ze())}function bn(b,N){R=C(function(){b(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,ri(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var D=h;h=N;try{return b()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,N){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var D=h;h=b;try{return N()}finally{h=D}},e.unstable_scheduleCallback=function(b,N,D){var K=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?K+D:K):D=K,b){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,b={id:c++,callback:N,priorityLevel:b,startTime:D,expirationTime:Y,sortIndex:-1},D>K?(b.sortIndex=D,t(u,b),n(l)===null&&b===n(u)&&(_?(v(R),R=-1):_=!0,bn(m,D-K))):(b.sortIndex=Y,t(l,b),g||y||(g=!0,ri(S))),b},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(b){var N=h;return function(){var D=h;h=N;try{return b.apply(this,arguments)}finally{h=D}}}})(uh);lh.exports=uh;var q0=lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=W,Ve=q0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ch=new Set,Di={};function Jn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Di[e]=t,e=0;e<t.length;e++)ch.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lf={},Mf={};function J0(e){return Wl.call(Mf,e)?!0:Wl.call(Lf,e)?!1:X0.test(e)?Mf[e]=!0:(Lf[e]=!0,!1)}function Z0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ey(e,t,n,r){if(t===null||typeof t>"u"||Z0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function yc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gc,yc);Se[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gc,yc);Se[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gc,yc);Se[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function _c(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ey(t,n,i,r)&&(n=null),r||i===null?J0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),ar=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),dh=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Ec=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),ph=Symbol.for("react.offscreen"),$f=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=$f&&e[$f]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,qa;function gi(e){if(qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qa=t&&t[1]||""}return`
`+qa+e}var Qa=!1;function Xa(e,t){if(!e||Qa)return"";Qa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Qa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gi(e):""}function ty(e){switch(e.tag){case 5:return gi(e.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return e=Xa(e.type,!1),e;case 11:return e=Xa(e.type.render,!1),e;case 1:return e=Xa(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ar:return"Portal";case Gl:return"Profiler";case Sc:return"StrictMode";case Kl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dh:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ec:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function ny(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ry(e){var t=hh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oo(e){e._valueTracker||(e._valueTracker=ry(e))}function vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mh(e,t){t=t.checked,t!=null&&_c(e,"checked",t,!1)}function Xl(e,t){mh(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yi=Array.isArray;function Or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ff(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(yi(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function gh(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,_h=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iy=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(e){iy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ei[t]=Ei[e]})});function Sh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ei.hasOwnProperty(e)&&Ei[e]?(""+t).trim():t+"px"}function wh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var oy=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(oy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,kr=null,xr=null;function Hf(e){if(e=ao(e)){if(typeof iu!="function")throw Error(k(280));var t=e.stateNode;t&&(t=oa(t),iu(e.stateNode,e.type,t))}}function Eh(e){kr?xr?xr.push(e):xr=[e]:kr=e}function Oh(){if(kr){var e=kr,t=xr;if(xr=kr=null,Hf(e),t)for(e=0;e<t.length;e++)Hf(t[e])}}function kh(e,t){return e(t)}function xh(){}var Ja=!1;function Ch(e,t,n){if(Ja)return e(t,n);Ja=!0;try{return kh(e,t,n)}finally{Ja=!1,(kr!==null||xr!==null)&&(xh(),Oh())}}function Li(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ou=!1;if(Wt)try{var si={};Object.defineProperty(si,"passive",{get:function(){ou=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{ou=!1}function sy(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Oi=!1,ms=null,gs=!1,su=null,ay={onError:function(e){Oi=!0,ms=e}};function ly(e,t,n,r,i,o,s,a,l){Oi=!1,ms=null,sy.apply(ay,arguments)}function uy(e,t,n,r,i,o,s,a,l){if(ly.apply(this,arguments),Oi){if(Oi){var u=ms;Oi=!1,ms=null}else throw Error(k(198));gs||(gs=!0,su=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vf(e){if(Zn(e)!==e)throw Error(k(188))}function cy(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vf(i),e;if(o===r)return Vf(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function bh(e){return e=cy(e),e!==null?Ph(e):null}function Ph(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ph(e);if(t!==null)return t;e=e.sibling}return null}var Ah=Ve.unstable_scheduleCallback,Wf=Ve.unstable_cancelCallback,fy=Ve.unstable_shouldYield,dy=Ve.unstable_requestPaint,se=Ve.unstable_now,py=Ve.unstable_getCurrentPriorityLevel,kc=Ve.unstable_ImmediatePriority,Th=Ve.unstable_UserBlockingPriority,ys=Ve.unstable_NormalPriority,hy=Ve.unstable_LowPriority,Nh=Ve.unstable_IdlePriority,ta=null,bt=null;function vy(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ta,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:yy,my=Math.log,gy=Math.LN2;function yy(e){return e>>>=0,e===0?32:31-(my(e)/gy|0)|0}var xo=64,Co=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=_i(a):(o&=s,o!==0&&(r=_i(o)))}else s=n&~i,s!==0?r=_i(s):o!==0&&(r=_i(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function _y(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-dt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=_y(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jh(){var e=xo;return xo<<=1,!(xo&4194240)&&(xo=64),e}function Za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function wy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,Cc,Lh,Mh,$h,lu=!1,Ro=[],pn=null,hn=null,vn=null,Mi=new Map,$i=new Map,an=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ao(t),t!==null&&Cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Oy(e,t,n,r,i){switch(t){case"focusin":return pn=ai(pn,e,t,n,r,i),!0;case"dragenter":return hn=ai(hn,e,t,n,r,i),!0;case"mouseover":return vn=ai(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mi.set(o,ai(Mi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$i.set(o,ai($i.get(o)||null,e,t,n,r,i)),!0}return!1}function zh(e){var t=jn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rh(n),t!==null){e.blockedOn=t,$h(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=ao(n),t!==null&&Cc(t),e.blockedOn=n,!1;t.shift()}return!0}function Kf(e,t,n){Ko(e)&&n.delete(t)}function ky(){lu=!1,pn!==null&&Ko(pn)&&(pn=null),hn!==null&&Ko(hn)&&(hn=null),vn!==null&&Ko(vn)&&(vn=null),Mi.forEach(Kf),$i.forEach(Kf)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,ky)))}function zi(e){function t(i){return li(i,e)}if(0<Ro.length){li(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&li(pn,e),hn!==null&&li(hn,e),vn!==null&&li(vn,e),Mi.forEach(t),$i.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&an.shift()}var Cr=Qt.ReactCurrentBatchConfig,Ss=!0;function xy(e,t,n,r){var i=G,o=Cr.transition;Cr.transition=null;try{G=1,Rc(e,t,n,r)}finally{G=i,Cr.transition=o}}function Cy(e,t,n,r){var i=G,o=Cr.transition;Cr.transition=null;try{G=4,Rc(e,t,n,r)}finally{G=i,Cr.transition=o}}function Rc(e,t,n,r){if(Ss){var i=uu(e,t,n,r);if(i===null)ul(e,t,r,ws,n),Gf(e,r);else if(Oy(i,e,t,n,r))r.stopPropagation();else if(Gf(e,r),t&4&&-1<Ey.indexOf(e)){for(;i!==null;){var o=ao(i);if(o!==null&&Ih(o),o=uu(e,t,n,r),o===null&&ul(e,t,r,ws,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var ws=null;function uu(e,t,n,r){if(ws=null,e=Oc(r),e=jn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ws=e,null}function Uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case kc:return 1;case Th:return 4;case ys:case hy:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var un=null,bc=null,Yo=null;function Fh(){if(Yo)return Yo;var e,t=bc,n=t.length,r,i="value"in un?un.value:un.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Yo=i.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function Yf(){return!1}function Ge(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?bo:Yf,this.isPropagationStopped=Yf,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Ge(Yr),so=ie({},Yr,{view:0,detail:0}),Ry=Ge(so),el,tl,ui,na=ie({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(el=e.screenX-ui.screenX,tl=e.screenY-ui.screenY):tl=el=0,ui=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),qf=Ge(na),by=ie({},na,{dataTransfer:0}),Py=Ge(by),Ay=ie({},so,{relatedTarget:0}),nl=Ge(Ay),Ty=ie({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Ge(Ty),jy=ie({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dy=Ge(jy),Iy=ie({},Yr,{data:0}),Qf=Ge(Iy),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$y[e])?!!t[e]:!1}function Ac(){return zy}var Uy=ie({},so,{key:function(e){if(e.key){var t=Ly[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?My[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fy=Ge(Uy),By=ie({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xf=Ge(By),Hy=ie({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Vy=Ge(Hy),Wy=ie({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=Ge(Wy),Ky=ie({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Ge(Ky),qy=[9,13,27,32],Tc=Wt&&"CompositionEvent"in window,ki=null;Wt&&"documentMode"in document&&(ki=document.documentMode);var Qy=Wt&&"TextEvent"in window&&!ki,Bh=Wt&&(!Tc||ki&&8<ki&&11>=ki),Jf=String.fromCharCode(32),Zf=!1;function Hh(e,t){switch(e){case"keyup":return qy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Xy(e,t){switch(e){case"compositionend":return Vh(t);case"keypress":return t.which!==32?null:(Zf=!0,Jf);case"textInput":return e=t.data,e===Jf&&Zf?null:e;default:return null}}function Jy(e,t){if(ur)return e==="compositionend"||!Tc&&Hh(e,t)?(e=Fh(),Yo=bc=un=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bh&&t.locale!=="ko"?null:t.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zy[e.type]:t==="textarea"}function Wh(e,t,n,r){Eh(r),t=Es(t,"onChange"),0<t.length&&(n=new Pc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Ui=null;function e_(e){nv(e,0)}function ra(e){var t=dr(e);if(vh(t))return e}function t_(e,t){if(e==="change")return t}var Gh=!1;if(Wt){var rl;if(Wt){var il="oninput"in document;if(!il){var td=document.createElement("div");td.setAttribute("oninput","return;"),il=typeof td.oninput=="function"}rl=il}else rl=!1;Gh=rl&&(!document.documentMode||9<document.documentMode)}function nd(){xi&&(xi.detachEvent("onpropertychange",Kh),Ui=xi=null)}function Kh(e){if(e.propertyName==="value"&&ra(Ui)){var t=[];Wh(t,Ui,e,Oc(e)),Ch(e_,t)}}function n_(e,t,n){e==="focusin"?(nd(),xi=t,Ui=n,xi.attachEvent("onpropertychange",Kh)):e==="focusout"&&nd()}function r_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(Ui)}function i_(e,t){if(e==="click")return ra(t)}function o_(e,t){if(e==="input"||e==="change")return ra(t)}function s_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:s_;function Fi(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function Yh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qh(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function a_(e){var t=qh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yh(n.ownerDocument.documentElement,n)){if(r!==null&&Nc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=id(n,o);var s=id(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l_=Wt&&"documentMode"in document&&11>=document.documentMode,cr=null,cu=null,Ci=null,fu=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fu||cr==null||cr!==vs(r)||(r=cr,"selectionStart"in r&&Nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ci&&Fi(Ci,r)||(Ci=r,r=Es(cu,"onSelect"),0<r.length&&(t=new Pc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},ol={},Qh={};Wt&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function ia(e){if(ol[e])return ol[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qh)return ol[e]=t[n];return e}var Xh=ia("animationend"),Jh=ia("animationiteration"),Zh=ia("animationstart"),ev=ia("transitionend"),tv=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){tv.set(e,t),Jn(t,[e])}for(var sl=0;sl<sd.length;sl++){var al=sd[sl],u_=al.toLowerCase(),c_=al[0].toUpperCase()+al.slice(1);kn(u_,"on"+c_)}kn(Xh,"onAnimationEnd");kn(Jh,"onAnimationIteration");kn(Zh,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(ev,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function ad(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uy(r,t,void 0,e),e.currentTarget=null}function nv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ad(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ad(i,a,u),o=l}}}if(gs)throw e=su,gs=!1,su=null,e}function X(e,t){var n=t[mu];n===void 0&&(n=t[mu]=new Set);var r=e+"__bubble";n.has(r)||(rv(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),rv(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Ao]){e[Ao]=!0,ch.forEach(function(n){n!=="selectionchange"&&(f_.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,ll("selectionchange",!1,t))}}function rv(e,t,n,r){switch(Uh(t)){case 1:var i=xy;break;case 4:i=Cy;break;default:i=Rc}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=jn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ch(function(){var u=o,c=Oc(n),p=[];e:{var h=tv.get(e);if(h!==void 0){var y=Pc,g=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":y=Fy;break;case"focusin":g="focus",y=nl;break;case"focusout":g="blur",y=nl;break;case"beforeblur":case"afterblur":y=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Vy;break;case Xh:case Jh:case Zh:y=Ny;break;case ev:y=Gy;break;case"scroll":y=Ry;break;case"wheel":y=Yy;break;case"copy":case"cut":case"paste":y=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xf}var _=(t&4)!==0,C=!_&&e==="scroll",v=_?h!==null?h+"Capture":null:h;_=[];for(var f=u,d;f!==null;){d=f;var m=d.stateNode;if(d.tag===5&&m!==null&&(d=m,v!==null&&(m=Li(f,v),m!=null&&_.push(Hi(f,m,d)))),C)break;f=f.return}0<_.length&&(h=new y(h,g,null,n,c),p.push({event:h,listeners:_}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ru&&(g=n.relatedTarget||n.fromElement)&&(jn(g)||g[Gt]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?jn(g):null,g!==null&&(C=Zn(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(_=qf,m="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=Xf,m="onPointerLeave",v="onPointerEnter",f="pointer"),C=y==null?h:dr(y),d=g==null?h:dr(g),h=new _(m,f+"leave",y,n,c),h.target=C,h.relatedTarget=d,m=null,jn(c)===u&&(_=new _(v,f+"enter",g,n,c),_.target=d,_.relatedTarget=C,m=_),C=m,y&&g)t:{for(_=y,v=g,f=0,d=_;d;d=ir(d))f++;for(d=0,m=v;m;m=ir(m))d++;for(;0<f-d;)_=ir(_),f--;for(;0<d-f;)v=ir(v),d--;for(;f--;){if(_===v||v!==null&&_===v.alternate)break t;_=ir(_),v=ir(v)}_=null}else _=null;y!==null&&ld(p,h,y,_,!1),g!==null&&C!==null&&ld(p,C,g,_,!0)}}e:{if(h=u?dr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=t_;else if(ed(h))if(Gh)S=o_;else{S=r_;var E=n_}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=i_);if(S&&(S=S(e,u))){Wh(p,S,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Jl(h,"number",h.value)}switch(E=u?dr(u):window,e){case"focusin":(ed(E)||E.contentEditable==="true")&&(cr=E,cu=u,Ci=null);break;case"focusout":Ci=cu=cr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,od(p,n,c);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":od(p,n,c)}var O;if(Tc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ur?Hh(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Bh&&n.locale!=="ko"&&(ur||R!=="onCompositionStart"?R==="onCompositionEnd"&&ur&&(O=Fh()):(un=c,bc="value"in un?un.value:un.textContent,ur=!0)),E=Es(u,R),0<E.length&&(R=new Qf(R,e,null,n,c),p.push({event:R,listeners:E}),O?R.data=O:(O=Vh(n),O!==null&&(R.data=O)))),(O=Qy?Xy(e,n):Jy(e,n))&&(u=Es(u,"onBeforeInput"),0<u.length&&(c=new Qf("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=O))}nv(p,t)})}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Es(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Li(e,n),o!=null&&r.unshift(Hi(e,o,i)),o=Li(e,t),o!=null&&r.push(Hi(e,o,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ld(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Li(n,o),l!=null&&s.unshift(Hi(n,l,a))):i||(l=Li(n,o),l!=null&&s.push(Hi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var d_=/\r\n?/g,p_=/\u0000|\uFFFD/g;function ud(e){return(typeof e=="string"?e:""+e).replace(d_,`
`).replace(p_,"")}function To(e,t,n){if(t=ud(t),ud(e)!==t&&n)throw Error(k(425))}function Os(){}var du=null,pu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,h_=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,v_=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(m_)}:vu;function m_(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+qr,Vi="__reactProps$"+qr,Gt="__reactContainer$"+qr,mu="__reactEvents$"+qr,g_="__reactListeners$"+qr,y_="__reactHandles$"+qr;function jn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fd(e);e!==null;){if(n=e[Ct])return n;e=fd(e)}return t}e=n,n=e.parentNode}return null}function ao(e){return e=e[Ct]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function oa(e){return e[Vi]||null}var gu=[],pr=-1;function xn(e){return{current:e}}function Z(e){0>pr||(e.current=gu[pr],gu[pr]=null,pr--)}function q(e,t){pr++,gu[pr]=e.current,e.current=t}var On={},be=xn(On),Le=xn(!1),Bn=On;function Ar(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function ks(){Z(Le),Z(be)}function dd(e,t,n){if(be.current!==On)throw Error(k(168));q(be,t),q(Le,n)}function iv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,ny(e)||"Unknown",i));return ie({},n,r)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Bn=be.current,q(be,e),q(Le,Le.current),!0}function pd(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=iv(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(be),q(be,e)):Z(Le),q(Le,n)}var Mt=null,sa=!1,fl=!1;function ov(e){Mt===null?Mt=[e]:Mt.push(e)}function __(e){sa=!0,ov(e)}function Cn(){if(!fl&&Mt!==null){fl=!0;var e=0,t=G;try{var n=Mt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,sa=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),Ah(kc,Cn),i}finally{G=t,fl=!1}}return null}var hr=[],vr=0,Cs=null,Rs=0,Ye=[],qe=0,Hn=null,Ut=1,Ft="";function Tn(e,t){hr[vr++]=Rs,hr[vr++]=Cs,Cs=e,Rs=t}function sv(e,t,n){Ye[qe++]=Ut,Ye[qe++]=Ft,Ye[qe++]=Hn,Hn=e;var r=Ut;e=Ft;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ut=1<<32-dt(t)+i|n<<i|r,Ft=o+e}else Ut=1<<o|n<<i|r,Ft=e}function jc(e){e.return!==null&&(Tn(e,1),sv(e,1,0))}function Dc(e){for(;e===Cs;)Cs=hr[--vr],hr[vr]=null,Rs=hr[--vr],hr[vr]=null;for(;e===Hn;)Hn=Ye[--qe],Ye[qe]=null,Ft=Ye[--qe],Ye[qe]=null,Ut=Ye[--qe],Ye[qe]=null}var He=null,Be=null,te=!1,ft=null;function av(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Be=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Ut,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Be=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _u(e){if(te){var t=Be;if(t){var n=t;if(!hd(e,t)){if(yu(e))throw Error(k(418));t=mn(n.nextSibling);var r=He;t&&hd(e,t)?av(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(yu(e))throw Error(k(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function No(e){if(e!==He)return!1;if(!te)return vd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=Be)){if(yu(e))throw lv(),Error(k(418));for(;t;)av(e,t),t=mn(t.nextSibling)}if(vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=He?mn(e.stateNode.nextSibling):null;return!0}function lv(){for(var e=Be;e;)e=mn(e.nextSibling)}function Tr(){Be=He=null,te=!1}function Ic(e){ft===null?ft=[e]:ft.push(e)}var S_=Qt.ReactCurrentBatchConfig;function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function jo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function uv(e){function t(v,f){if(e){var d=v.deletions;d===null?(v.deletions=[f],v.flags|=16):d.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function r(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=Sn(v,f),v.index=0,v.sibling=null,v}function o(v,f,d){return v.index=d,e?(d=v.alternate,d!==null?(d=d.index,d<f?(v.flags|=2,f):d):(v.flags|=2,f)):(v.flags|=1048576,f)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,f,d,m){return f===null||f.tag!==6?(f=yl(d,v.mode,m),f.return=v,f):(f=i(f,d),f.return=v,f)}function l(v,f,d,m){var S=d.type;return S===lr?c(v,f,d.props.children,m,d.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===on&&md(S)===f.type)?(m=i(f,d.props),m.ref=ci(v,f,d),m.return=v,m):(m=ns(d.type,d.key,d.props,null,v.mode,m),m.ref=ci(v,f,d),m.return=v,m)}function u(v,f,d,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=_l(d,v.mode,m),f.return=v,f):(f=i(f,d.children||[]),f.return=v,f)}function c(v,f,d,m,S){return f===null||f.tag!==7?(f=$n(d,v.mode,m,S),f.return=v,f):(f=i(f,d),f.return=v,f)}function p(v,f,d){if(typeof f=="string"&&f!==""||typeof f=="number")return f=yl(""+f,v.mode,d),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:return d=ns(f.type,f.key,f.props,null,v.mode,d),d.ref=ci(v,null,f),d.return=v,d;case ar:return f=_l(f,v.mode,d),f.return=v,f;case on:var m=f._init;return p(v,m(f._payload),d)}if(yi(f)||oi(f))return f=$n(f,v.mode,d,null),f.return=v,f;jo(v,f)}return null}function h(v,f,d,m){var S=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:a(v,f,""+d,m);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Eo:return d.key===S?l(v,f,d,m):null;case ar:return d.key===S?u(v,f,d,m):null;case on:return S=d._init,h(v,f,S(d._payload),m)}if(yi(d)||oi(d))return S!==null?null:c(v,f,d,m,null);jo(v,d)}return null}function y(v,f,d,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return v=v.get(d)||null,a(f,v,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Eo:return v=v.get(m.key===null?d:m.key)||null,l(f,v,m,S);case ar:return v=v.get(m.key===null?d:m.key)||null,u(f,v,m,S);case on:var E=m._init;return y(v,f,d,E(m._payload),S)}if(yi(m)||oi(m))return v=v.get(d)||null,c(f,v,m,S,null);jo(f,m)}return null}function g(v,f,d,m){for(var S=null,E=null,O=f,R=f=0,I=null;O!==null&&R<d.length;R++){O.index>R?(I=O,O=null):I=O.sibling;var L=h(v,O,d[R],m);if(L===null){O===null&&(O=I);break}e&&O&&L.alternate===null&&t(v,O),f=o(L,f,R),E===null?S=L:E.sibling=L,E=L,O=I}if(R===d.length)return n(v,O),te&&Tn(v,R),S;if(O===null){for(;R<d.length;R++)O=p(v,d[R],m),O!==null&&(f=o(O,f,R),E===null?S=O:E.sibling=O,E=O);return te&&Tn(v,R),S}for(O=r(v,O);R<d.length;R++)I=y(O,v,R,d[R],m),I!==null&&(e&&I.alternate!==null&&O.delete(I.key===null?R:I.key),f=o(I,f,R),E===null?S=I:E.sibling=I,E=I);return e&&O.forEach(function(ve){return t(v,ve)}),te&&Tn(v,R),S}function _(v,f,d,m){var S=oi(d);if(typeof S!="function")throw Error(k(150));if(d=S.call(d),d==null)throw Error(k(151));for(var E=S=null,O=f,R=f=0,I=null,L=d.next();O!==null&&!L.done;R++,L=d.next()){O.index>R?(I=O,O=null):I=O.sibling;var ve=h(v,O,L.value,m);if(ve===null){O===null&&(O=I);break}e&&O&&ve.alternate===null&&t(v,O),f=o(ve,f,R),E===null?S=ve:E.sibling=ve,E=ve,O=I}if(L.done)return n(v,O),te&&Tn(v,R),S;if(O===null){for(;!L.done;R++,L=d.next())L=p(v,L.value,m),L!==null&&(f=o(L,f,R),E===null?S=L:E.sibling=L,E=L);return te&&Tn(v,R),S}for(O=r(v,O);!L.done;R++,L=d.next())L=y(O,v,R,L.value,m),L!==null&&(e&&L.alternate!==null&&O.delete(L.key===null?R:L.key),f=o(L,f,R),E===null?S=L:E.sibling=L,E=L);return e&&O.forEach(function(jt){return t(v,jt)}),te&&Tn(v,R),S}function C(v,f,d,m){if(typeof d=="object"&&d!==null&&d.type===lr&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Eo:e:{for(var S=d.key,E=f;E!==null;){if(E.key===S){if(S=d.type,S===lr){if(E.tag===7){n(v,E.sibling),f=i(E,d.props.children),f.return=v,v=f;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===on&&md(S)===E.type){n(v,E.sibling),f=i(E,d.props),f.ref=ci(v,E,d),f.return=v,v=f;break e}n(v,E);break}else t(v,E);E=E.sibling}d.type===lr?(f=$n(d.props.children,v.mode,m,d.key),f.return=v,v=f):(m=ns(d.type,d.key,d.props,null,v.mode,m),m.ref=ci(v,f,d),m.return=v,v=m)}return s(v);case ar:e:{for(E=d.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){n(v,f.sibling),f=i(f,d.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=_l(d,v.mode,m),f.return=v,v=f}return s(v);case on:return E=d._init,C(v,f,E(d._payload),m)}if(yi(d))return g(v,f,d,m);if(oi(d))return _(v,f,d,m);jo(v,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,d),f.return=v,v=f):(n(v,f),f=yl(d,v.mode,m),f.return=v,v=f),s(v)):n(v,f)}return C}var Nr=uv(!0),cv=uv(!1),bs=xn(null),Ps=null,mr=null,Lc=null;function Mc(){Lc=mr=Ps=null}function $c(e){var t=bs.current;Z(bs),e._currentValue=t}function Su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){Ps=e,Lc=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Lc!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Ps===null)throw Error(k(308));mr=e,Ps.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Dn=null;function zc(e){Dn===null?Dn=[e]:Dn.push(e)}function fv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,zc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function gd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function As(e,t,n,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,_=a;switch(h=t,y=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){p=g.call(y,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(y,p,h):g,h==null)break e;p=ie({},p,h);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=p):c=c.next=y,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Wn|=s,e.lanes=s,e.memoizedState=p}}function yd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var lo={},Pt=xn(lo),Wi=xn(lo),Gi=xn(lo);function In(e){if(e===lo)throw Error(k(174));return e}function Fc(e,t){switch(q(Gi,t),q(Wi,e),q(Pt,lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}Z(Pt),q(Pt,t)}function jr(){Z(Pt),Z(Wi),Z(Gi)}function pv(e){In(Gi.current);var t=In(Pt.current),n=eu(t,e.type);t!==n&&(q(Wi,e),q(Pt,n))}function Bc(e){Wi.current===e&&(Z(Pt),Z(Wi))}var ne=xn(0);function Ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dl=[];function Hc(){for(var e=0;e<dl.length;e++)dl[e]._workInProgressVersionPrimary=null;dl.length=0}var Xo=Qt.ReactCurrentDispatcher,pl=Qt.ReactCurrentBatchConfig,Vn=0,re=null,ce=null,de=null,Ns=!1,Ri=!1,Ki=0,w_=0;function we(){throw Error(k(321))}function Vc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Wc(e,t,n,r,i,o){if(Vn=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?x_:C_,e=n(r,i),Ri){o=0;do{if(Ri=!1,Ki=0,25<=o)throw Error(k(301));o+=1,de=ce=null,t.updateQueue=null,Xo.current=R_,e=n(r,i)}while(Ri)}if(Xo.current=js,t=ce!==null&&ce.next!==null,Vn=0,de=ce=re=null,Ns=!1,t)throw Error(k(300));return e}function Gc(){var e=Ki!==0;return Ki=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?re.memoizedState=de=e:de=de.next=e,de}function ot(){if(ce===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=de===null?re.memoizedState:de.next;if(t!==null)de=t,ce=e;else{if(e===null)throw Error(k(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},de===null?re.memoizedState=de=e:de=de.next=e}return de}function Yi(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Vn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,re.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,_t(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,Wn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);_t(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hv(){}function vv(e,t){var n=re,r=ot(),i=t(),o=!_t(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,Kc(yv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,qi(9,gv.bind(null,n,r,i,t),void 0,null),he===null)throw Error(k(349));Vn&30||mv(n,t,i)}return i}function mv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gv(e,t,n,r){t.value=n,t.getSnapshot=r,_v(t)&&Sv(e)}function yv(e,t,n){return n(function(){_v(t)&&Sv(e)})}function _v(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Sv(e){var t=Kt(e,1);t!==null&&pt(t,e,1,-1)}function _d(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},t.queue=e,e=e.dispatch=k_.bind(null,re,e),[t.memoizedState,e]}function qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wv(){return ot().memoizedState}function Jo(e,t,n,r){var i=kt();re.flags|=e,i.memoizedState=qi(1|t,n,void 0,r===void 0?null:r)}function aa(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(ce!==null){var s=ce.memoizedState;if(o=s.destroy,r!==null&&Vc(r,s.deps)){i.memoizedState=qi(t,n,o,r);return}}re.flags|=e,i.memoizedState=qi(1|t,n,o,r)}function Sd(e,t){return Jo(8390656,8,e,t)}function Kc(e,t){return aa(2048,8,e,t)}function Ev(e,t){return aa(4,2,e,t)}function Ov(e,t){return aa(4,4,e,t)}function kv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xv(e,t,n){return n=n!=null?n.concat([e]):null,aa(4,4,kv.bind(null,t,e),n)}function Yc(){}function Cv(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rv(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bv(e,t,n){return Vn&21?(_t(n,t)||(n=jh(),re.lanes|=n,Wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function E_(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{G=n,pl.transition=r}}function Pv(){return ot().memoizedState}function O_(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Av(e))Tv(t,n);else if(n=fv(e,t,n,r),n!==null){var i=Ae();pt(n,e,r,i),Nv(n,t,r)}}function k_(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(e))Tv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,s)){var l=t.interleaved;l===null?(i.next=i,zc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=fv(e,t,i,r),n!==null&&(i=Ae(),pt(n,e,r,i),Nv(n,t,r))}}function Av(e){var t=e.alternate;return e===re||t!==null&&t===re}function Tv(e,t){Ri=Ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var js={readContext:it,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},x_={readContext:it,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Sd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,kv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O_.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:_d,useDebugValue:Yc,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=_d(!1),t=e[0];return e=E_.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=kt();if(te){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),he===null)throw Error(k(349));Vn&30||mv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sd(yv.bind(null,r,o,e),[e]),r.flags|=2048,qi(9,gv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=kt(),t=he.identifierPrefix;if(te){var n=Ft,r=Ut;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C_={readContext:it,useCallback:Cv,useContext:it,useEffect:Kc,useImperativeHandle:xv,useInsertionEffect:Ev,useLayoutEffect:Ov,useMemo:Rv,useReducer:hl,useRef:wv,useState:function(){return hl(Yi)},useDebugValue:Yc,useDeferredValue:function(e){var t=ot();return bv(t,ce.memoizedState,e)},useTransition:function(){var e=hl(Yi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:hv,useSyncExternalStore:vv,useId:Pv,unstable_isNewReconciler:!1},R_={readContext:it,useCallback:Cv,useContext:it,useEffect:Kc,useImperativeHandle:xv,useInsertionEffect:Ev,useLayoutEffect:Ov,useMemo:Rv,useReducer:vl,useRef:wv,useState:function(){return vl(Yi)},useDebugValue:Yc,useDeferredValue:function(e){var t=ot();return ce===null?t.memoizedState=e:bv(t,ce.memoizedState,e)},useTransition:function(){var e=vl(Yi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:hv,useSyncExternalStore:vv,useId:Pv,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var la={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=_n(e),o=Bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(pt(t,e,i,r),Qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=_n(e),o=Bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(pt(t,e,i,r),Qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=_n(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(pt(t,e,r,n),Qo(t,e,r))}};function wd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,o):!0}function jv(e,t,n){var r=!1,i=On,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=Me(t)?Bn:be.current,r=t.contextTypes,o=(r=r!=null)?Ar(e,i):On),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=la,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&la.enqueueReplaceState(t,t.state,null)}function Eu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Uc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=Me(t)?Bn:be.current,i.context=Ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&la.enqueueReplaceState(i,i.state,null),As(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=ty(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var b_=typeof WeakMap=="function"?WeakMap:Map;function Dv(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Is||(Is=!0,ju=r),Ou(e,t)},n}function Iv(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ou(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ou(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Od(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new b_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=B_.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var P_=Qt.ReactCurrentOwner,De=!1;function Pe(e,t,n,r){t.child=e===null?cv(t,null,n,r):Nr(t,e.child,n,r)}function Cd(e,t,n,r,i){n=n.render;var o=t.ref;return Rr(t,i),r=Wc(e,t,n,r,o,i),n=Gc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(te&&n&&jc(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Rd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!nf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lv(e,t,o,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(s,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fi(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return ku(e,t,n,r,i)}function Mv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(yr,Fe),Fe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(yr,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(yr,Fe),Fe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(yr,Fe),Fe|=r;return Pe(e,t,i,n),t.child}function $v(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,i){var o=Me(n)?Bn:be.current;return o=Ar(t,o),Rr(t,i),n=Wc(e,t,n,r,o,i),r=Gc(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(te&&r&&jc(t),t.flags|=1,Pe(e,t,n,i),t.child)}function bd(e,t,n,r,i){if(Me(n)){var o=!0;xs(t)}else o=!1;if(Rr(t,i),t.stateNode===null)Zo(e,t),jv(t,n,r),Eu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Me(n)?Bn:be.current,u=Ar(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ed(t,s,r,u),sn=!1;var h=t.memoizedState;s.state=h,As(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Le.current||sn?(typeof c=="function"&&(wu(t,n,c,r),l=t.memoizedState),(a=sn||wd(t,n,a,r,h,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,dv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ut(t.type,a),s.props=u,p=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=Me(n)?Bn:be.current,l=Ar(t,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Ed(t,s,r,l),sn=!1,h=t.memoizedState,s.state=h,As(t,r,s,i);var g=t.memoizedState;a!==p||h!==g||Le.current||sn?(typeof y=="function"&&(wu(t,n,y,r),g=t.memoizedState),(u=sn||wd(t,n,u,r,h,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xu(e,t,n,r,o,i)}function xu(e,t,n,r,i,o){$v(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&pd(t,n,!1),Yt(e,t,o);r=t.stateNode,P_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Nr(t,e.child,null,o),t.child=Nr(t,null,a,o)):Pe(e,t,a,o),t.memoizedState=r.state,i&&pd(t,n,!0),t.child}function zv(e){var t=e.stateNode;t.pendingContext?dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dd(e,t.context,!1),Fc(e,t.containerInfo)}function Pd(e,t,n,r,i){return Tr(),Ic(i),t.flags|=256,Pe(e,t,n,r),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uv(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(ne,i&1),e===null)return _u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fa(s,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ru(n),t.memoizedState=Cu,e):qc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return A_(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Sn(a,o):(o=$n(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ru(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Cu,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qc(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&Ic(r),Nr(t,e.child,null,n),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function A_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ml(Error(k(422))),Do(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fa({mode:"visible",children:r.children},i,0,null),o=$n(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nr(t,e.child,null,s),t.child.memoizedState=Ru(s),t.memoizedState=Cu,o);if(!(t.mode&1))return Do(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=ml(o,r,void 0),Do(e,t,s,r)}if(a=(s&e.childLanes)!==0,De||a){if(r=he,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),pt(r,e,i,-1))}return tf(),r=ml(Error(k(421))),Do(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=H_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=mn(i.nextSibling),He=t,te=!0,ft=null,e!==null&&(Ye[qe++]=Ut,Ye[qe++]=Ft,Ye[qe++]=Hn,Ut=e.id,Ft=e.overflow,Hn=t),t=qc(t,r.children),t.flags|=4096,t)}function Ad(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Su(e.return,t,n)}function gl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,n,t);else if(e.tag===19)Ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ts(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ts(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gl(t,!0,n,null,o);break;case"together":gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function T_(e,t,n){switch(t.tag){case 3:zv(t),Tr();break;case 5:pv(t);break;case 1:Me(t.type)&&xs(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(bs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Uv(e,t,n):(q(ne,ne.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);q(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Mv(e,t,n)}return Yt(e,t,n)}var Bv,bu,Hv,Vv;Bv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};Hv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(Pt.current);var o=null;switch(n){case"input":i=Ql(e,i),r=Ql(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=Zl(e,i),r=Zl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Os)}tu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Di.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Di.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Vv=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function N_(e,t,n){var r=t.pendingProps;switch(Dc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Me(t.type)&&ks(),Ee(t),null;case 3:return r=t.stateNode,jr(),Z(Le),Z(be),Hc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Lu(ft),ft=null))),bu(e,t),Ee(t),null;case 5:Bc(t);var i=In(Gi.current);if(n=t.type,e!==null&&t.stateNode!=null)Hv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Ee(t),null}if(e=In(Pt.current),No(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[Vi]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)X(Si[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":zf(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Ff(r,o),X("invalid",r)}tu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",""+a]):Di.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":Oo(r),Uf(r,o,!0);break;case"textarea":Oo(r),Bf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ct]=t,e[Vi]=r,Bv(e,t,!1,!1),t.stateNode=e;e:{switch(s=nu(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)X(Si[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":zf(e,r),i=Ql(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),X("invalid",e);break;case"textarea":Ff(e,r),i=Zl(e,r),X("invalid",e);break;default:i=r}tu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?wh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_h(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ii(e,l):typeof l=="number"&&Ii(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Di.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&_c(e,o,l,s))}switch(n){case"input":Oo(e),Uf(e,r,!1);break;case"textarea":Oo(e),Bf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Or(e,!!r.multiple,o,!1):r.defaultValue!=null&&Or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Vv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=In(Gi.current),In(Pt.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ee(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Be!==null&&t.mode&1&&!(t.flags&128))lv(),Tr(),t.flags|=98560,o=!1;else if(o=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ct]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else ft!==null&&(Lu(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?fe===0&&(fe=3):tf())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return jr(),bu(e,t),e===null&&Bi(t.stateNode.containerInfo),Ee(t),null;case 10:return $c(t.type._context),Ee(t),null;case 17:return Me(t.type)&&ks(),Ee(t),null;case 19:if(Z(ne),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)fi(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ts(e),s!==null){for(t.flags|=128,fi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Ir&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ts(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return Ee(t),null}else 2*se()-o.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=ne.current,q(ne,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ef(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function j_(e,t){switch(Dc(t),t.tag){case 1:return Me(t.type)&&ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),Z(Le),Z(be),Hc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bc(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return jr(),null;case 10:return $c(t.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var Io=!1,Re=!1,D_=typeof WeakSet=="function"?WeakSet:Set,P=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Pu(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Td=!1;function I_(e,t){if(du=Ss,e=qh(),Nc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,p=e,h=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},Ss=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,C=g.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?_:ut(t.type,_),C);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(m){oe(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=Td,Td=!1,g}function bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pu(t,n,o)}i=i.next}while(i!==r)}}function ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Au(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wv(e){var t=e.alternate;t!==null&&(e.alternate=null,Wv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Vi],delete t[mu],delete t[g_],delete t[y_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gv(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Os));else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}function Nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nu(e,t,n),e=e.sibling;e!==null;)Nu(e,t,n),e=e.sibling}var ge=null,ct=!1;function Zt(e,t,n){for(n=n.child;n!==null;)Kv(e,t,n),n=n.sibling}function Kv(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ta,n)}catch{}switch(n.tag){case 5:Re||gr(n,t);case 6:var r=ge,i=ct;ge=null,Zt(e,t,n),ge=r,ct=i,ge!==null&&(ct?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(ct?(e=ge,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),zi(e)):cl(ge,n.stateNode));break;case 4:r=ge,i=ct,ge=n.stateNode.containerInfo,ct=!0,Zt(e,t,n),ge=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Pu(n,t,s),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Re&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Zt(e,t,n),Re=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D_),t.forEach(function(r){var i=V_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,ct=!1;break e;case 3:ge=a.stateNode.containerInfo,ct=!0;break e;case 4:ge=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(ge===null)throw Error(k(160));Kv(o,s,i),ge=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yv(t,e),t=t.sibling}function Yv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),Ot(e),r&4){try{bi(3,e,e.return),ua(3,e)}catch(_){oe(e,e.return,_)}try{bi(5,e,e.return)}catch(_){oe(e,e.return,_)}}break;case 1:lt(t,e),Ot(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(lt(t,e),Ot(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(_){oe(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&mh(i,o),nu(a,s);var u=nu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],p=l[s+1];c==="style"?wh(i,p):c==="dangerouslySetInnerHTML"?_h(i,p):c==="children"?Ii(i,p):_c(i,c,p,u)}switch(a){case"input":Xl(i,o);break;case"textarea":gh(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Or(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Or(i,!!o.multiple,o.defaultValue,!0):Or(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vi]=o}catch(_){oe(e,e.return,_)}}break;case 6:if(lt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){oe(e,e.return,_)}}break;case 3:if(lt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(_){oe(e,e.return,_)}break;case 4:lt(t,e),Ot(e);break;case 13:lt(t,e),Ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jc=se())),r&4&&jd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||c,lt(t,e),Re=u):lt(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(p=P=c;P!==null;){switch(h=P,y=h.child,h.tag){case 0:case 11:case 14:case 15:bi(4,h,h.return);break;case 1:gr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(_){oe(r,n,_)}}break;case 5:gr(h,h.return);break;case 22:if(h.memoizedState!==null){Id(p);continue}}y!==null?(y.return=h,P=y):Id(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sh("display",s))}catch(_){oe(e,e.return,_)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){oe(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),Ot(e),r&4&&jd(e);break;case 21:break;default:lt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gv(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var o=Nd(e);Nu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Nd(e);Tu(e,a,s);break;default:throw Error(k(161))}}catch(l){oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L_(e,t,n){P=e,qv(e)}function qv(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Io;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Re;a=Io;var u=Re;if(Io=s,(Re=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?Ld(i):l!==null?(l.return=s,P=l):Ld(i);for(;o!==null;)P=o,qv(o),o=o.sibling;P=i,Io=a,Re=u}Dd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Dd(e)}}function Dd(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&zi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Re||t.flags&512&&Au(t)}catch(h){oe(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Id(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ld(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ua(4,t)}catch(l){oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){oe(t,i,l)}}var o=t.return;try{Au(t)}catch(l){oe(t,o,l)}break;case 5:var s=t.return;try{Au(t)}catch(l){oe(t,s,l)}}}catch(l){oe(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var M_=Math.ceil,Ds=Qt.ReactCurrentDispatcher,Qc=Qt.ReactCurrentOwner,nt=Qt.ReactCurrentBatchConfig,F=0,he=null,le=null,_e=0,Fe=0,yr=xn(0),fe=0,Qi=null,Wn=0,ca=0,Xc=0,Pi=null,je=null,Jc=0,Ir=1/0,It=null,Is=!1,ju=null,yn=null,Lo=!1,cn=null,Ls=0,Ai=0,Du=null,es=-1,ts=0;function Ae(){return F&6?se():es!==-1?es:es=se()}function _n(e){return e.mode&1?F&2&&_e!==0?_e&-_e:S_.transition!==null?(ts===0&&(ts=jh()),ts):(e=G,e!==0||(e=window.event,e=e===void 0?16:Uh(e.type)),e):1}function pt(e,t,n,r){if(50<Ai)throw Ai=0,Du=null,Error(k(185));oo(e,n,r),(!(F&2)||e!==he)&&(e===he&&(!(F&2)&&(ca|=n),fe===4&&ln(e,_e)),$e(e,r),n===1&&F===0&&!(t.mode&1)&&(Ir=se()+500,sa&&Cn()))}function $e(e,t){var n=e.callbackNode;Sy(e,t);var r=_s(e,e===he?_e:0);if(r===0)n!==null&&Wf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wf(n),t===1)e.tag===0?__(Md.bind(null,e)):ov(Md.bind(null,e)),v_(function(){!(F&6)&&Cn()}),n=null;else{switch(Dh(r)){case 1:n=kc;break;case 4:n=Th;break;case 16:n=ys;break;case 536870912:n=Nh;break;default:n=ys}n=rm(n,Qv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qv(e,t){if(es=-1,ts=0,F&6)throw Error(k(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=_s(e,e===he?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var i=F;F|=2;var o=Jv();(he!==e||_e!==t)&&(It=null,Ir=se()+500,Mn(e,t));do try{U_();break}catch(a){Xv(e,a)}while(1);Mc(),Ds.current=o,F=i,le!==null?t=0:(he=null,_e=0,t=fe)}if(t!==0){if(t===2&&(i=au(e),i!==0&&(r=i,t=Iu(e,i))),t===1)throw n=Qi,Mn(e,0),ln(e,r),$e(e,se()),n;if(t===6)ln(e,r);else{if(i=e.current.alternate,!(r&30)&&!$_(i)&&(t=Ms(e,r),t===2&&(o=au(e),o!==0&&(r=o,t=Iu(e,o))),t===1))throw n=Qi,Mn(e,0),ln(e,r),$e(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Nn(e,je,It);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Jc+500-se(),10<t)){if(_s(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vu(Nn.bind(null,e,je,It),t);break}Nn(e,je,It);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M_(r/1960))-r,10<r){e.timeoutHandle=vu(Nn.bind(null,e,je,It),r);break}Nn(e,je,It);break;case 5:Nn(e,je,It);break;default:throw Error(k(329))}}}return $e(e,se()),e.callbackNode===n?Qv.bind(null,e):null}function Iu(e,t){var n=Pi;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=je,je=n,t!==null&&Lu(t)),e}function Lu(e){je===null?je=e:je.push.apply(je,e)}function $_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Xc,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Md(e){if(F&6)throw Error(k(327));br();var t=_s(e,0);if(!(t&1))return $e(e,se()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=au(e);r!==0&&(t=r,n=Iu(e,r))}if(n===1)throw n=Qi,Mn(e,0),ln(e,t),$e(e,se()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,je,It),$e(e,se()),null}function Zc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Ir=se()+500,sa&&Cn())}}function Gn(e){cn!==null&&cn.tag===0&&!(F&6)&&br();var t=F;F|=1;var n=nt.transition,r=G;try{if(nt.transition=null,G=1,e)return e()}finally{G=r,nt.transition=n,F=t,!(F&6)&&Cn()}}function ef(){Fe=yr.current,Z(yr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,h_(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Dc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ks();break;case 3:jr(),Z(Le),Z(be),Hc();break;case 5:Bc(r);break;case 4:jr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:$c(r.type._context);break;case 22:case 23:ef()}n=n.return}if(he=e,le=e=Sn(e.current,null),_e=Fe=t,fe=0,Qi=null,Xc=ca=Wn=0,je=Pi=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Dn=null}return e}function Xv(e,t){do{var n=le;try{if(Mc(),Xo.current=js,Ns){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ns=!1}if(Vn=0,de=ce=re=null,Ri=!1,Ki=0,Qc.current=null,n===null||n.return===null){fe=1,Qi=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=_e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=kd(s);if(y!==null){y.flags&=-257,xd(y,s,a,o,t),y.mode&1&&Od(o,u,t),t=y,l=u;var g=t.updateQueue;if(g===null){var _=new Set;_.add(l),t.updateQueue=_}else g.add(l);break e}else{if(!(t&1)){Od(o,u,t),tf();break e}l=Error(k(426))}}else if(te&&a.mode&1){var C=kd(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xd(C,s,a,o,t),Ic(Dr(l,a));break e}}o=l=Dr(l,a),fe!==4&&(fe=2),Pi===null?Pi=[o]:Pi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Dv(o,l,t);gd(o,v);break e;case 1:a=l;var f=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(yn===null||!yn.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var m=Iv(o,a,t);gd(o,m);break e}}o=o.return}while(o!==null)}em(n)}catch(S){t=S,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Jv(){var e=Ds.current;return Ds.current=js,e===null?js:e}function tf(){(fe===0||fe===3||fe===2)&&(fe=4),he===null||!(Wn&268435455)&&!(ca&268435455)||ln(he,_e)}function Ms(e,t){var n=F;F|=2;var r=Jv();(he!==e||_e!==t)&&(It=null,Mn(e,t));do try{z_();break}catch(i){Xv(e,i)}while(1);if(Mc(),F=n,Ds.current=r,le!==null)throw Error(k(261));return he=null,_e=0,fe}function z_(){for(;le!==null;)Zv(le)}function U_(){for(;le!==null&&!fy();)Zv(le)}function Zv(e){var t=nm(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?em(e):le=t,Qc.current=null}function em(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j_(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,le=null;return}}else if(n=N_(n,t,Fe),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);fe===0&&(fe=5)}function Nn(e,t,n){var r=G,i=nt.transition;try{nt.transition=null,G=1,F_(e,t,n,r)}finally{nt.transition=i,G=r}return null}function F_(e,t,n,r){do br();while(cn!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(wy(e,o),e===he&&(le=he=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,rm(ys,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=nt.transition,nt.transition=null;var s=G;G=1;var a=F;F|=4,Qc.current=null,I_(e,n),Yv(n,e),a_(pu),Ss=!!du,pu=du=null,e.current=n,L_(n),dy(),F=a,G=s,nt.transition=o}else e.current=n;if(Lo&&(Lo=!1,cn=e,Ls=i),o=e.pendingLanes,o===0&&(yn=null),vy(n.stateNode),$e(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Is)throw Is=!1,e=ju,ju=null,e;return Ls&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===Du?Ai++:(Ai=0,Du=e):Ai=0,Cn(),null}function br(){if(cn!==null){var e=Dh(Ls),t=nt.transition,n=G;try{if(nt.transition=null,G=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Ls=0,F&6)throw Error(k(331));var i=F;for(F|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:bi(8,c,o)}var p=c.child;if(p!==null)p.return=c,P=p;else for(;P!==null;){c=P;var h=c.sibling,y=c.return;if(Wv(c),c===u){P=null;break}if(h!==null){h.return=y,P=h;break}P=y}}}var g=o.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bi(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,P=v;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){s=P;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,P=d;else e:for(s=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ua(9,a)}}catch(S){oe(a,a.return,S)}if(a===s){P=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,P=m;break e}P=a.return}}if(F=i,Cn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ta,e)}catch{}r=!0}return r}finally{G=n,nt.transition=t}}return!1}function $d(e,t,n){t=Dr(n,t),t=Dv(e,t,1),e=gn(e,t,1),t=Ae(),e!==null&&(oo(e,1,t),$e(e,t))}function oe(e,t,n){if(e.tag===3)$d(e,e,n);else for(;t!==null;){if(t.tag===3){$d(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Dr(n,e),e=Iv(t,e,1),t=gn(t,e,1),e=Ae(),t!==null&&(oo(t,1,e),$e(t,e));break}}t=t.return}}function B_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(_e&n)===n&&(fe===4||fe===3&&(_e&130023424)===_e&&500>se()-Jc?Mn(e,0):Xc|=n),$e(e,t)}function tm(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=Ae();e=Kt(e,t),e!==null&&(oo(e,t,n),$e(e,n))}function H_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tm(e,n)}function V_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),tm(e,n)}var nm;nm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,T_(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&sv(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var i=Ar(t,be.current);Rr(t,n),i=Wc(null,t,r,e,i,n);var o=Gc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,xs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uc(t),i.updater=la,t.stateNode=i,i._reactInternals=t,Eu(t,r,e,n),t=xu(null,t,r,!0,o,n)):(t.tag=0,te&&o&&jc(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=G_(r),e=ut(r,e),i){case 0:t=ku(null,t,r,e,n);break e;case 1:t=bd(null,t,r,e,n);break e;case 11:t=Cd(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,ut(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ku(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),bd(e,t,r,i,n);case 3:e:{if(zv(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dv(e,t),As(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(k(423)),t),t=Pd(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(k(424)),t),t=Pd(e,t,r,n,i);break e}else for(Be=mn(t.stateNode.containerInfo.firstChild),He=t,te=!0,ft=null,n=cv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){t=Yt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return pv(t),e===null&&_u(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,hu(r,i)?s=null:o!==null&&hu(r,o)&&(t.flags|=32),$v(e,t),Pe(e,t,s,n),t.child;case 6:return e===null&&_u(t),null;case 13:return Uv(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Cd(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(bs,r._currentValue),r._currentValue=s,o!==null)if(_t(o.value,s)){if(o.children===i.children&&!Le.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Su(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Su(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=it(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Rd(e,t,r,i,n);case 15:return Lv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Zo(e,t),t.tag=1,Me(r)?(e=!0,xs(t)):e=!1,Rr(t,n),jv(t,r,i),Eu(t,r,i,n),xu(null,t,r,!0,e,n);case 19:return Fv(e,t,n);case 22:return Mv(e,t,n)}throw Error(k(156,t.tag))};function rm(e,t){return Ah(e,t)}function W_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new W_(e,t,n,r)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G_(e){if(typeof e=="function")return nf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===Ec)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")nf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case lr:return $n(n.children,i,o,t);case Sc:s=8,i|=8;break;case Gl:return e=Je(12,n,t,i|2),e.elementType=Gl,e.lanes=o,e;case Kl:return e=Je(13,n,t,i),e.elementType=Kl,e.lanes=o,e;case Yl:return e=Je(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case ph:return fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:s=10;break e;case dh:s=9;break e;case wc:s=11;break e;case Ec:s=14;break e;case on:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function fa(e,t,n,r){return e=Je(22,e,r,t),e.elementType=ph,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function K_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rf(e,t,n,r,i,o,s,a,l){return e=new K_(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(o),e}function Y_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function im(e){if(!e)return On;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Me(n))return iv(e,n,t)}return t}function om(e,t,n,r,i,o,s,a,l){return e=rf(n,r,!0,e,i,o,s,a,l),e.context=im(null),n=e.current,r=Ae(),i=_n(n),o=Bt(r,i),o.callback=t??null,gn(n,o,i),e.current.lanes=i,oo(e,i,r),$e(e,r),e}function da(e,t,n,r){var i=t.current,o=Ae(),s=_n(i);return n=im(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,s),e!==null&&(pt(e,i,s,o),Qo(e,i,s)),s}function $s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function of(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function q_(){return null}var sm=typeof reportError=="function"?reportError:function(e){console.error(e)};function sf(e){this._internalRoot=e}pa.prototype.render=sf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));da(e,t,null,null)};pa.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){da(null,e,null,null)}),t[Gt]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&zh(e)}};function af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function Q_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$s(s);o.call(u)}}var s=om(t,r,e,0,null,!1,!1,"",Ud);return e._reactRootContainer=s,e[Gt]=s.current,Bi(e.nodeType===8?e.parentNode:e),Gn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$s(l);a.call(u)}}var l=rf(e,0,!1,null,null,!1,!1,"",Ud);return e._reactRootContainer=l,e[Gt]=l.current,Bi(e.nodeType===8?e.parentNode:e),Gn(function(){da(t,l,n,r)}),l}function va(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=$s(s);a.call(l)}}da(t,s,e,i)}else s=Q_(n,t,e,i,r);return $s(s)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(xc(t,n|1),$e(t,se()),!(F&6)&&(Ir=se()+500,Cn()))}break;case 13:Gn(function(){var r=Kt(e,1);if(r!==null){var i=Ae();pt(r,e,1,i)}}),of(e,1)}};Cc=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Ae();pt(t,e,134217728,n)}of(e,134217728)}};Lh=function(e){if(e.tag===13){var t=_n(e),n=Kt(e,t);if(n!==null){var r=Ae();pt(n,e,t,r)}of(e,t)}};Mh=function(){return G};$h=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};iu=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oa(r);if(!i)throw Error(k(90));vh(r),Xl(r,i)}}}break;case"textarea":gh(e,n);break;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}};kh=Zc;xh=Gn;var X_={usingClientEntryPoint:!1,Events:[ao,dr,oa,Eh,Oh,Zc]},di={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J_={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bh(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{ta=Mo.inject(J_),bt=Mo}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(t))throw Error(k(200));return Y_(e,t,null,n)};We.createRoot=function(e,t){if(!af(e))throw Error(k(299));var n=!1,r="",i=sm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rf(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,Bi(e.nodeType===8?e.parentNode:e),new sf(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=bh(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Gn(e)};We.hydrate=function(e,t,n){if(!ha(t))throw Error(k(200));return va(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!af(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=sm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=om(t,null,e,1,n??null,i,!1,o,s),e[Gt]=t.current,Bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pa(t)};We.render=function(e,t,n){if(!ha(t))throw Error(k(200));return va(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ha(e))throw Error(k(40));return e._reactRootContainer?(Gn(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};We.unstable_batchedUpdates=Zc;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ha(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return va(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am)}catch(e){console.error(e)}}am(),ah.exports=We;var lm=ah.exports,Fd=lm;Vl.createRoot=Fd.createRoot,Vl.hydrateRoot=Fd.hydrateRoot;var um=function(t){return t!=null&&typeof t=="object"&&t["@@functional/placeholder"]===!0},Z_=um,Qr=function(t){return function n(r){return arguments.length===0||Z_(r)?n:t.apply(this,arguments)}},e1=Array.isArray||function(t){return t!=null&&t.length>=0&&Object.prototype.toString.call(t)==="[object Array]"},t1=function(t){return Object.prototype.toString.call(t)==="[object String]"},n1=Qr,r1=e1,i1=t1,o1=n1(function(t){return r1(t)?!0:!t||typeof t!="object"||i1(t)?!1:t.nodeType===1?!!t.length:t.length===0?!0:t.length>0?t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1):!1}),s1=o1,a1=function(t){return function n(r){for(var i,o,s,a=[],l=0,u=r.length;l<u;){if(s1(r[l]))for(i=t?n(r[l]):r[l],s=0,o=i.length;s<o;)a[a.length]=i[s],s+=1;else a[a.length]=r[l];l+=1}return a}},l1=Qr,u1=a1,c1=l1(u1(!0));const f1=ro(c1);var d1=Qr,cm=d1(function(t){return t===null?"Null":t===void 0?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});const fm=ro(cm);var p1=function(t){return t},h1=Qr,v1=p1,m1=h1(v1),Sl=Qr,pi=um,lf=function(t){return function n(r,i){switch(arguments.length){case 0:return n;case 1:return pi(r)?n:Sl(function(o){return t(r,o)});default:return pi(r)&&pi(i)?n:pi(r)?Sl(function(o){return t(o,i)}):pi(i)?Sl(function(o){return t(r,o)}):t(r,i)}}},g1=function(t){for(var n=[],r;!(r=t.next()).done;)n.push(r.value);return n},y1=function(t){var n=String(t).match(/^function (\w*)/);return n==null?"":n[1]},uf=function(t,n){return Object.prototype.hasOwnProperty.call(n,t)},_1=lf,S1=_1(function(t,n){return t===n?t!==0||1/t===1/n:t!==t&&n!==n}),w1=uf,E1=function(){var e=Object.prototype.toString;return e.call(arguments)==="[object Arguments]"?function(n){return e.call(n)==="[object Arguments]"}:function(n){return w1("callee",n)}}(),Bd=Qr,Hd=uf,O1=E1,k1=function(){var e=!{toString:null}.propertyIsEnumerable("toString"),t=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],n=function(){return arguments.propertyIsEnumerable("length")}(),r=function(o,s){for(var a=0;a<o.length;){if(o[a]===s)return!0;a+=1}return!1};return Bd(typeof Object.keys=="function"&&!n?function(o){return Object(o)!==o?[]:Object.keys(o)}:function(o){if(Object(o)!==o)return[];var s,a,l=[],u=n&&O1(o);for(s in o)Hd(s,o)&&(!u||s!=="length")&&(l[l.length]=s);if(e)for(a=t.length-1;a>=0;)s=t[a],Hd(s,o)&&!r(l,s)&&(l[l.length]=s),a-=1;return l})}(),Vd=g1,x1=y1,C1=uf,wl=S1,Wd=k1,El=cm,R1=function e(t,n,r,i){if(wl(t,n))return!0;if(El(t)!==El(n)||t==null||n==null)return!1;if(typeof t.equals=="function"||typeof n.equals=="function")return typeof t.equals=="function"&&t.equals(n)&&typeof n.equals=="function"&&n.equals(t);switch(El(t)){case"Arguments":case"Array":case"Object":if(typeof t.constructor=="function"&&x1(t.constructor)==="Promise")return t===n;break;case"Boolean":case"Number":case"String":if(!(typeof t==typeof n&&wl(t.valueOf(),n.valueOf())))return!1;break;case"Date":if(!wl(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(!(t.source===n.source&&t.global===n.global&&t.ignoreCase===n.ignoreCase&&t.multiline===n.multiline&&t.sticky===n.sticky&&t.unicode===n.unicode))return!1;break;case"Map":case"Set":if(!e(Vd(t.entries()),Vd(n.entries()),r,i))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":break;case"ArrayBuffer":break;default:return!1}var o=Wd(t);if(o.length!==Wd(n).length)return!1;for(var s=r.length-1;s>=0;){if(r[s]===t)return i[s]===n;s-=1}for(r.push(t),i.push(n),s=o.length-1;s>=0;){var a=o[s];if(!(C1(a,n)&&e(n[a],t[a],r,i)))return!1;s-=1}return r.pop(),i.pop(),!0},b1=lf,P1=R1,A1=b1(function(t,n){return P1(t,n,[],[])}),T1=A1,N1=function(t,n,r){var i,o;if(typeof t.indexOf=="function")switch(typeof n){case"number":if(n===0){for(i=1/n;r<t.length;){if(o=t[r],o===0&&1/o===i)return r;r+=1}return-1}else if(n!==n){for(;r<t.length;){if(o=t[r],typeof o=="number"&&o!==o)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(n===null)return t.indexOf(n,r)}for(;r<t.length;){if(T1(t[r],n))return r;r+=1}return-1},j1=N1,D1=function(t,n){return j1(n,t,0)>=0},Gd=D1,I1=function(){function e(){this._nativeSet=typeof Set=="function"?new Set:null,this._items={}}e.prototype.add=function(n){return!t(n,!0,this)},e.prototype.has=function(n){return t(n,!1,this)};function t(n,r,i){var o=typeof n,s,a;switch(o){case"string":case"number":return n===0&&1/n===-1/0?i._items["-0"]?!0:(r&&(i._items["-0"]=!0),!1):i._nativeSet!==null?r?(s=i._nativeSet.size,i._nativeSet.add(n),a=i._nativeSet.size,a===s):i._nativeSet.has(n):o in i._items?n in i._items[o]?!0:(r&&(i._items[o][n]=!0),!1):(r&&(i._items[o]={},i._items[o][n]=!0),!1);case"boolean":if(o in i._items){var l=n?1:0;return i._items[o][l]?!0:(r&&(i._items[o][l]=!0),!1)}else return r&&(i._items[o]=n?[!1,!0]:[!0,!1]),!1;case"function":return i._nativeSet!==null?r?(s=i._nativeSet.size,i._nativeSet.add(n),a=i._nativeSet.size,a>s):i._nativeSet.has(n):o in i._items?Gd(n,i._items[o])?!0:(r&&i._items[o].push(n),!1):(r&&(i._items[o]=[n]),!1);case"undefined":return i._items[o]?!0:(r&&(i._items[o]=!0),!1);case"object":if(n===null)return i._items.null?!0:(r&&(i._items.null=!0),!1);default:return o=Object.prototype.toString.call(n),o in i._items?Gd(n,i._items[o])?!0:(r&&i._items[o].push(n),!1):(r&&(i._items[o]=[n]),!1)}}return e}(),L1=I1,M1=lf,$1=M1(function(t,n){for(var r=new L1,i=[],o=0,s,a;o<n.length;)a=n[o],s=t(a),r.add(s)&&i.push(a),o+=1;return i}),z1=m1,U1=$1,F1=U1(z1);const B1=ro(F1);var Mu={prefix:"_",separator:"-"},Lr={};["String","Boolean","Array","Object","Number"].forEach(function(e){Lr[e]=function(t){return fm(t)===e}});var H1=function(e){return e.filter(function(t){return Lr.String(t)&&t.trim()!==""}).map(function(t){return t.trim()})},V1=function(e){return e.trim().split(/ +/)},W1=function(e){return e.join(" ").trim()},G1=function(e,t,n,r){return Lr.String(t)||Lr.Number(t)?n+e+r+t:n+e},Kd=function(e,t,n,r){return n===void 0&&(n=""),r===void 0&&(r=""),Lr.Object(t)?Object.keys(t).filter(function(i){return t[i]}).map(function(i){return e[G1(i,t[i],n,r)]}):Lr.Array(t)?t.map(function(i){return e[i]||i}):[]},dm=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(!e)return"";var r=Mu.prefix,i=Mu.separator,o=function(a){switch(fm(a)){case"String":return Kd(e,V1(a),r,i);case"Array":case"Object":return Kd(e,a,r,i);default:return null}},s=f1(t.map(o));return W1(H1(B1(s)))},ma=function(e){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return dm.apply(void 0,[e].concat(t))}};dm.settings=Mu;function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(typeof e=="number"?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var K1={};function cf(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:K1}var pm=Object.assign,zs=Object.getOwnPropertyDescriptor,At=Object.defineProperty,ga=Object.prototype,$u=[];Object.freeze($u);var hm={};Object.freeze(hm);var Y1=typeof Proxy<"u",q1=Object.toString();function vm(){Y1||B("Proxy not available")}function mm(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var _r=function(){};function St(e){return typeof e=="function"}function Kn(e){var t=typeof e;switch(t){case"string":case"symbol":case"number":return!0}return!1}function ya(e){return e!==null&&typeof e=="object"}function qt(e){if(!ya(e))return!1;var t=Object.getPrototypeOf(e);if(t==null)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n.toString()===q1}function gm(e){var t=e==null?void 0:e.constructor;return t?t.name==="GeneratorFunction"||t.displayName==="GeneratorFunction":!1}function uo(e,t,n){At(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function ym(e,t,n){At(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function er(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(r){return ya(r)&&r[n]===!0}}function Xr(e){return e instanceof Map}function co(e){return e instanceof Set}var _m=typeof Object.getOwnPropertySymbols<"u";function Q1(e){var t=Object.keys(e);if(!_m)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter(function(r){return ga.propertyIsEnumerable.call(e,r)})):t}var Mr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:_m?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function Sm(e){return e===null?null:typeof e=="object"?""+e:e}function Ht(e,t){return ga.hasOwnProperty.call(e,t)}var X1=Object.getOwnPropertyDescriptors||function(t){var n={};return Mr(t).forEach(function(r){n[r]=zs(t,r)}),n};function Yd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,eS(r.key),r)}}function ff(e,t,n){return t&&Yd(e.prototype,t),n&&Yd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yn(){return Yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yn.apply(this,arguments)}function wm(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,zu(e,t)}function zu(e,t){return zu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},zu(e,t)}function Ol(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J1(e,t){if(e){if(typeof e=="string")return qd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qd(e,t)}}function qd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sr(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=J1(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z1(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eS(e){var t=Z1(e,"string");return typeof t=="symbol"?t:String(t)}var Rt=Symbol("mobx-stored-annotations");function Tt(e){function t(n,r){if(fo(r))return e.decorate_20223_(n,r);Jr(n,r,e)}return Object.assign(t,e)}function Jr(e,t,n){Ht(e,Rt)||uo(e,Rt,Yn({},e[Rt])),uS(n)||(e[Rt][t]=n)}function tS(e){return Ht(e,Rt)||uo(e,Rt,Yn({},e[Rt])),e[Rt]}function fo(e){return typeof e=="object"&&typeof e.kind=="string"}var j=Symbol("mobx administration"),po=function(){function e(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=H.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.reportObserved=function(){return zm(this)},t.reportChanged=function(){Ze(),Um(this),et()},t.toString=function(){return this.name_},e}(),df=er("Atom",po);function Em(e,t,n){t===void 0&&(t=_r),n===void 0&&(n=_r);var r=new po(e);return t!==_r&&pw(r,t),n!==_r&&Wm(r,n),r}function nS(e,t){return e===t}function rS(e,t){return _f(e,t)}function iS(e,t){return _f(e,t,1)}function oS(e,t){return Object.is?Object.is(e,t):e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Us={identity:nS,structural:rS,default:oS,shallow:iS};function qn(e,t,n){return Qm(e)?e:Array.isArray(e)?ye.array(e,{name:n}):qt(e)?ye.object(e,void 0,{name:n}):Xr(e)?ye.map(e,{name:n}):co(e)?ye.set(e,{name:n}):typeof e=="function"&&!Oa(e)&&!Ji(e)?gm(e)?zr(e):Xi(n,e):e}function sS(e,t,n){if(e==null||Zi(e)||xa(e)||nr(e)||Zr(e))return e;if(Array.isArray(e))return ye.array(e,{name:n,deep:!1});if(qt(e))return ye.object(e,void 0,{name:n,deep:!1});if(Xr(e))return ye.map(e,{name:n,deep:!1});if(co(e))return ye.set(e,{name:n,deep:!1})}function _a(e){return e}function aS(e,t){return _f(e,t)?t:e}var lS="override";function uS(e){return e.annotationType_===lS}function ho(e,t){return{annotationType_:e,options_:t,make_:cS,extend_:fS,decorate_20223_:dS}}function cS(e,t,n,r){var i;if((i=this.options_)!=null&&i.bound)return this.extend_(e,t,n,!1)===null?0:1;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if(Oa(n.value))return 1;var o=Om(e,this,t,n,!1);return At(r,t,o),2}function fS(e,t,n,r){var i=Om(e,this,t,n);return e.defineProperty_(t,i,r)}function dS(e,t){var n=t.kind,r=t.name,i=t.addInitializer,o=this,s=function(u){var c,p,h,y;return Qn((c=(p=o.options_)==null?void 0:p.name)!=null?c:r.toString(),u,(h=(y=o.options_)==null?void 0:y.autoAction)!=null?h:!1)};if(n=="field"){i(function(){Jr(this,r,o)});return}if(n=="method"){var a;return Oa(e)||(e=s(e)),(a=this.options_)!=null&&a.bound&&i(function(){var l=this,u=l[r].bind(l);u.isMobxAction=!0,l[r]=u}),e}B("Cannot apply '"+o.annotationType_+"' to '"+String(r)+"' (kind: "+n+"):"+(`
'`+o.annotationType_+"' can only be used on properties with a function value."))}function pS(e,t,n,r){t.annotationType_,r.value}function Om(e,t,n,r,i){var o,s,a,l,u,c,p;i===void 0&&(i=x.safeDescriptors),pS(e,t,n,r);var h=r.value;if((o=t.options_)!=null&&o.bound){var y;h=h.bind((y=e.proxy_)!=null?y:e.target_)}return{value:Qn((s=(a=t.options_)==null?void 0:a.name)!=null?s:n.toString(),h,(l=(u=t.options_)==null?void 0:u.autoAction)!=null?l:!1,(c=t.options_)!=null&&c.bound?(p=e.proxy_)!=null?p:e.target_:void 0),configurable:i?e.isPlainObject_:!0,enumerable:!1,writable:!i}}function km(e,t){return{annotationType_:e,options_:t,make_:hS,extend_:vS,decorate_20223_:mS}}function hS(e,t,n,r){var i;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if((i=this.options_)!=null&&i.bound&&(!Ht(e.target_,t)||!Ji(e.target_[t]))&&this.extend_(e,t,n,!1)===null)return 0;if(Ji(n.value))return 1;var o=xm(e,this,t,n,!1,!1);return At(r,t,o),2}function vS(e,t,n,r){var i,o=xm(e,this,t,n,(i=this.options_)==null?void 0:i.bound);return e.defineProperty_(t,o,r)}function mS(e,t){var n,r=t.name,i=t.addInitializer;return Ji(e)||(e=zr(e)),(n=this.options_)!=null&&n.bound&&i(function(){var o=this,s=o[r].bind(o);s.isMobXFlow=!0,o[r]=s}),e}function gS(e,t,n,r){t.annotationType_,r.value}function xm(e,t,n,r,i,o){o===void 0&&(o=x.safeDescriptors),gS(e,t,n,r);var s=r.value;if(Ji(s)||(s=zr(s)),i){var a;s=s.bind((a=e.proxy_)!=null?a:e.target_),s.isMobXFlow=!0}return{value:s,configurable:o?e.isPlainObject_:!0,enumerable:!1,writable:!o}}function pf(e,t){return{annotationType_:e,options_:t,make_:yS,extend_:_S,decorate_20223_:SS}}function yS(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function _S(e,t,n,r){return wS(e,this,t,n),e.defineComputedProperty_(t,Yn({},this.options_,{get:n.get,set:n.set}),r)}function SS(e,t){var n=this,r=t.name,i=t.addInitializer;return i(function(){var o=rr(this)[j],s=Yn({},n.options_,{get:e,context:this});s.name||(s.name="ObservableObject."+r.toString()),o.values_.set(r,new $r(s))}),function(){return this[j].getObservablePropValue_(r)}}function wS(e,t,n,r){t.annotationType_,r.get}function Sa(e,t){return{annotationType_:e,options_:t,make_:ES,extend_:OS,decorate_20223_:kS}}function ES(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function OS(e,t,n,r){var i,o;return xS(e,this),e.defineObservableProperty_(t,n.value,(i=(o=this.options_)==null?void 0:o.enhancer)!=null?i:qn,r)}function kS(e,t){var n=this,r=t.kind,i=t.name,o=new WeakSet;function s(a,l){var u,c,p=rr(a)[j],h=new zn(l,(u=(c=n.options_)==null?void 0:c.enhancer)!=null?u:qn,"ObservableObject."+i.toString(),!1);p.values_.set(i,h),o.add(a)}if(r=="accessor")return{get:function(){return o.has(this)||s(this,e.get.call(this)),this[j].getObservablePropValue_(i)},set:function(l){return o.has(this)||s(this,l),this[j].setObservablePropValue_(i,l)},init:function(l){return o.has(this)||s(this,l),l}}}function xS(e,t,n,r){t.annotationType_}var CS="true",RS=Cm();function Cm(e){return{annotationType_:CS,options_:e,make_:bS,extend_:PS,decorate_20223_:AS}}function bS(e,t,n,r){var i,o;if(n.get)return wa.make_(e,t,n,r);if(n.set){var s=Qn(t.toString(),n.set);return r===e.target_?e.defineProperty_(t,{configurable:x.safeDescriptors?e.isPlainObject_:!0,set:s})===null?0:2:(At(r,t,{configurable:!0,set:s}),2)}if(r!==e.target_&&typeof n.value=="function"){var a;if(gm(n.value)){var l,u=(l=this.options_)!=null&&l.autoBind?zr.bound:zr;return u.make_(e,t,n,r)}var c=(a=this.options_)!=null&&a.autoBind?Xi.bound:Xi;return c.make_(e,t,n,r)}var p=((i=this.options_)==null?void 0:i.deep)===!1?ye.ref:ye;if(typeof n.value=="function"&&(o=this.options_)!=null&&o.autoBind){var h;n.value=n.value.bind((h=e.proxy_)!=null?h:e.target_)}return p.make_(e,t,n,r)}function PS(e,t,n,r){var i,o;if(n.get)return wa.extend_(e,t,n,r);if(n.set)return e.defineProperty_(t,{configurable:x.safeDescriptors?e.isPlainObject_:!0,set:Qn(t.toString(),n.set)},r);if(typeof n.value=="function"&&(i=this.options_)!=null&&i.autoBind){var s;n.value=n.value.bind((s=e.proxy_)!=null?s:e.target_)}var a=((o=this.options_)==null?void 0:o.deep)===!1?ye.ref:ye;return a.extend_(e,t,n,r)}function AS(e,t){B("'"+this.annotationType_+"' cannot be used as a decorator")}var TS="observable",NS="observable.ref",jS="observable.shallow",DS="observable.struct",Rm={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(Rm);function $o(e){return e||Rm}var Uu=Sa(TS),IS=Sa(NS,{enhancer:_a}),LS=Sa(jS,{enhancer:sS}),MS=Sa(DS,{enhancer:aS}),bm=Tt(Uu);function zo(e){return e.deep===!0?qn:e.deep===!1?_a:zS(e.defaultDecorator)}function $S(e){var t;return e?(t=e.defaultDecorator)!=null?t:Cm(e):void 0}function zS(e){var t,n;return e&&(t=(n=e.options_)==null?void 0:n.enhancer)!=null?t:qn}function Pm(e,t,n){if(fo(t))return Uu.decorate_20223_(e,t);if(Kn(t)){Jr(e,t,Uu);return}return Qm(e)?e:qt(e)?ye.object(e,t,n):Array.isArray(e)?ye.array(e,t):Xr(e)?ye.map(e,t):co(e)?ye.set(e,t):typeof e=="object"&&e!==null?e:ye.box(e,t)}pm(Pm,bm);var US={box:function(t,n){var r=$o(n);return new zn(t,zo(r),r.name,!0,r.equals)},array:function(t,n){var r=$o(n);return(x.useProxies===!1||r.proxy===!1?Mw:Rw)(t,zo(r),r.name)},map:function(t,n){var r=$o(n);return new eg(t,zo(r),r.name)},set:function(t,n){var r=$o(n);return new rg(t,zo(r),r.name)},object:function(t,n,r){return Rn(function(){return Km(x.useProxies===!1||(r==null?void 0:r.proxy)===!1?rr({},r):Ow({},r),t,n)})},ref:Tt(IS),shallow:Tt(LS),deep:bm,struct:Tt(MS)},ye=pm(Pm,US),Am="computed",FS="computed.struct",Fu=pf(Am),BS=pf(FS,{equals:Us.structural}),wa=function(t,n){if(fo(n))return Fu.decorate_20223_(t,n);if(Kn(n))return Jr(t,n,Fu);if(qt(t))return Tt(pf(Am,t));var r=qt(n)?n:{};return r.get=t,r.name||(r.name=t.name||""),new $r(r)};Object.assign(wa,Fu);wa.struct=Tt(BS);var Qd,Xd,Fs=0,HS=1,VS=(Qd=(Xd=zs(function(){},"name"))==null?void 0:Xd.configurable)!=null?Qd:!1,Jd={value:"action",configurable:!0,writable:!1,enumerable:!1};function Qn(e,t,n,r){n===void 0&&(n=!1);function i(){return WS(e,n,t,r||this,arguments)}return i.isMobxAction=!0,i.toString=function(){return t.toString()},VS&&(Jd.value=e,At(i,"name",Jd)),i}function WS(e,t,n,r,i){var o=GS(e,t);try{return n.apply(r,i)}catch(s){throw o.error_=s,s}finally{KS(o)}}function GS(e,t,n,r){var i=!1,o=0,s=x.trackingDerivation,a=!t||!s;Ze();var l=x.allowStateChanges;a&&(tr(),l=hf(!0));var u=mf(!0),c={runAsAction_:a,prevDerivation_:s,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:HS++,parentActionId_:Fs};return Fs=c.actionId_,c}function KS(e){Fs!==e.actionId_&&B(30),Fs=e.parentActionId_,e.error_!==void 0&&(x.suppressReactionErrors=!0),vf(e.prevAllowStateChanges_),Ti(e.prevAllowStateReads_),et(),e.runAsAction_&&Vt(e.prevDerivation_),x.suppressReactionErrors=!1}function hf(e){var t=x.allowStateChanges;return x.allowStateChanges=e,t}function vf(e){x.allowStateChanges=e}var Tm;Tm=Symbol.toPrimitive;var zn=function(e){wm(t,e);function t(r,i,o,s,a){var l;return o===void 0&&(o="ObservableValue"),a===void 0&&(a=Us.default),l=e.call(this,o)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=i,l.name_=o,l.equals=a,l.value_=i(r,void 0,o),l}var n=t.prototype;return n.dehanceValue=function(i){return this.dehancer!==void 0?this.dehancer(i):i},n.set=function(i){this.value_,i=this.prepareNewValue_(i),i!==x.UNCHANGED&&this.setNewValue_(i)},n.prepareNewValue_=function(i){if(Qe(this)){var o=Xe(this,{object:this,type:Nt,newValue:i});if(!o)return x.UNCHANGED;i=o.newValue}return i=this.enhancer(i,this.value_,this.name_),this.equals(this.value_,i)?x.UNCHANGED:i},n.setNewValue_=function(i){var o=this.value_;this.value_=i,this.reportChanged(),ht(this)&&vt(this,{type:Nt,object:this,newValue:i,oldValue:o})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(i){return vo(this,i)},n.observe_=function(i,o){return o&&i({observableKind:"value",debugObjectName:this.name_,object:this,type:Nt,newValue:this.value_,oldValue:void 0}),mo(this,i)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return Sm(this.get())},n[Tm]=function(){return this.valueOf()},t}(po),Nm;Nm=Symbol.toPrimitive;var $r=function(){function e(n){this.dependenciesState_=H.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=H.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Hs(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Bs.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||B(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=Qn("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?Us.structural:Us.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){JS(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.get=function(){if(this.isComputing_&&B(32,this.name_,this.derivation),x.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)Bu(this)&&(this.warnAboutUntrackedRead_(),Ze(),this.value_=this.computeValue_(!1),et());else if(zm(this),Bu(this)){var r=x.trackingContext;this.keepAlive_&&!r&&(x.trackingContext=this),this.trackAndCompute()&&XS(this),x.trackingContext=r}var i=this.value_;if(rs(i))throw i.cause;return i},t.set=function(r){if(this.setter_){this.isRunningSetter_&&B(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,r)}finally{this.isRunningSetter_=!1}}else B(34,this.name_)},t.trackAndCompute=function(){var r=this.value_,i=this.dependenciesState_===H.NOT_TRACKING_,o=this.computeValue_(!0),s=i||rs(r)||rs(o)||!this.equals_(r,o);return s&&(this.value_=o),s},t.computeValue_=function(r){this.isComputing_=!0;var i=hf(!1),o;if(r)o=jm(this,this.derivation,this.scope_);else if(x.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(s){o=new Hs(s)}return vf(i),this.isComputing_=!1,o},t.suspend_=function(){this.keepAlive_||(Hu(this),this.value_=void 0)},t.observe_=function(r,i){var o=this,s=!0,a=void 0;return lw(function(){var l=o.get();if(!s||i){var u=tr();r({observableKind:"computed",debugObjectName:o.name_,type:Nt,object:o,newValue:l,oldValue:a}),Vt(u)}s=!1,a=l})},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return Sm(this.get())},t[Nm]=function(){return this.valueOf()},e}(),Ea=er("ComputedValue",$r),H;(function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"})(H||(H={}));var Bs;(function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"})(Bs||(Bs={}));var Hs=function(t){this.cause=void 0,this.cause=t};function rs(e){return e instanceof Hs}function Bu(e){switch(e.dependenciesState_){case H.UP_TO_DATE_:return!1;case H.NOT_TRACKING_:case H.STALE_:return!0;case H.POSSIBLY_STALE_:{for(var t=mf(!0),n=tr(),r=e.observing_,i=r.length,o=0;o<i;o++){var s=r[o];if(Ea(s)){if(x.disableErrorBoundaries)s.get();else try{s.get()}catch{return Vt(n),Ti(t),!0}if(e.dependenciesState_===H.STALE_)return Vt(n),Ti(t),!0}}return Im(e),Vt(n),Ti(t),!1}}}function jm(e,t,n){var r=mf(!0);Im(e),e.newObserving_=new Array(e.runId_===0?100:e.observing_.length),e.unboundDepsCount_=0,e.runId_=++x.runId;var i=x.trackingDerivation;x.trackingDerivation=e,x.inBatch++;var o;if(x.disableErrorBoundaries===!0)o=t.call(n);else try{o=t.call(n)}catch(s){o=new Hs(s)}return x.inBatch--,x.trackingDerivation=i,YS(e),Ti(r),o}function YS(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=H.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,s=0;s<o;s++){var a=n[s];a.diffValue_===0&&(a.diffValue_=1,i!==s&&(n[i]=a),i++),a.dependenciesState_>r&&(r=a.dependenciesState_)}for(n.length=i,e.newObserving_=null,o=t.length;o--;){var l=t[o];l.diffValue_===0&&Mm(l,e),l.diffValue_=0}for(;i--;){var u=n[i];u.diffValue_===1&&(u.diffValue_=0,QS(u,e))}r!==H.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}function Hu(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)Mm(t[n],e);e.dependenciesState_=H.NOT_TRACKING_}function Dm(e){var t=tr();try{return e()}finally{Vt(t)}}function tr(){var e=x.trackingDerivation;return x.trackingDerivation=null,e}function Vt(e){x.trackingDerivation=e}function mf(e){var t=x.allowStateReads;return x.allowStateReads=e,t}function Ti(e){x.allowStateReads=e}function Im(e){if(e.dependenciesState_!==H.UP_TO_DATE_){e.dependenciesState_=H.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=H.UP_TO_DATE_}}var is=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},os=!0,Lm=!1,x=function(){var e=cf();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(os=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==new is().version&&(os=!1),os?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new is):(setTimeout(function(){Lm||B(35)},1),new is)}();function qS(){if((x.pendingReactions.length||x.inBatch||x.isRunningReactions)&&B(36),Lm=!0,os){var e=cf();--e.__mobxInstanceCount===0&&(e.__mobxGlobals=void 0),x=new is}}function QS(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function Mm(e,t){e.observers_.delete(t),e.observers_.size===0&&$m(e)}function $m(e){e.isPendingUnobservation_===!1&&(e.isPendingUnobservation_=!0,x.pendingUnobservations.push(e))}function Ze(){x.inBatch++}function et(){if(--x.inBatch===0){Fm();for(var e=x.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof $r&&n.suspend_())}x.pendingUnobservations=[]}}function zm(e){var t=x.trackingDerivation;return t!==null?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&x.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),e.isBeingObserved_):(e.observers_.size===0&&x.inBatch>0&&$m(e),!1)}function Um(e){e.lowestObserverState_!==H.STALE_&&(e.lowestObserverState_=H.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===H.UP_TO_DATE_&&t.onBecomeStale_(),t.dependenciesState_=H.STALE_}))}function XS(e){e.lowestObserverState_!==H.STALE_&&(e.lowestObserverState_=H.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===H.POSSIBLY_STALE_?t.dependenciesState_=H.STALE_:t.dependenciesState_===H.UP_TO_DATE_&&(e.lowestObserverState_=H.UP_TO_DATE_)}))}function JS(e){e.lowestObserverState_===H.UP_TO_DATE_&&(e.lowestObserverState_=H.POSSIBLY_STALE_,e.observers_.forEach(function(t){t.dependenciesState_===H.UP_TO_DATE_&&(t.dependenciesState_=H.POSSIBLY_STALE_,t.onBecomeStale_())}))}var Vs=function(){function e(n,r,i,o){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=H.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Bs.NONE,this.name_=n,this.onInvalidate_=r,this.errorHandler_=i,this.requiresObservable_=o}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,x.pendingReactions.push(this),Fm())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){Ze(),this.isScheduled_=!1;var r=x.trackingContext;if(x.trackingContext=this,Bu(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(i){this.reportExceptionInDerivation_(i)}}x.trackingContext=r,et()}},t.track=function(r){if(!this.isDisposed_){Ze(),this.isRunning_=!0;var i=x.trackingContext;x.trackingContext=this;var o=jm(this,r,void 0);x.trackingContext=i,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&Hu(this),rs(o)&&this.reportExceptionInDerivation_(o.cause),et()}},t.reportExceptionInDerivation_=function(r){var i=this;if(this.errorHandler_){this.errorHandler_(r,this);return}if(x.disableErrorBoundaries)throw r;var o="[mobx] uncaught error in '"+this+"'";x.suppressReactionErrors||console.error(o,r),x.globalReactionErrorHandlers.forEach(function(s){return s(r,i)})},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(Ze(),Hu(this),et()))},t.getDisposer_=function(r){var i=this,o=function s(){i.dispose(),r==null||r.removeEventListener==null||r.removeEventListener("abort",s)};return r==null||r.addEventListener==null||r.addEventListener("abort",o),o[j]=this,o},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(r){},e}(),ZS=100,Vu=function(t){return t()};function Fm(){x.inBatch>0||x.isRunningReactions||Vu(ew)}function ew(){x.isRunningReactions=!0;for(var e=x.pendingReactions,t=0;e.length>0;){++t===ZS&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}x.isRunningReactions=!1}var Ws=er("Reaction",Vs);function tw(e){var t=Vu;Vu=function(r){return e(function(){return t(r)})}}function Ni(){return!1}function nw(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Bm="action",rw="action.bound",Hm="autoAction",iw="autoAction.bound",ow="<unnamed action>",Wu=ho(Bm),sw=ho(rw,{bound:!0}),Gu=ho(Hm,{autoAction:!0}),aw=ho(iw,{autoAction:!0,bound:!0});function Vm(e){var t=function(r,i){if(St(r))return Qn(r.name||ow,r,e);if(St(i))return Qn(r,i,e);if(fo(i))return(e?Gu:Wu).decorate_20223_(r,i);if(Kn(i))return Jr(r,i,e?Gu:Wu);if(Kn(r))return Tt(ho(e?Hm:Bm,{name:r,autoAction:e}))};return t}var wr=Vm(!1);Object.assign(wr,Wu);var Xi=Vm(!0);Object.assign(Xi,Gu);wr.bound=Tt(sw);Xi.bound=Tt(aw);function Oa(e){return St(e)&&e.isMobxAction===!0}function lw(e,t){var n,r,i,o,s;t===void 0&&(t=hm);var a=(n=(r=t)==null?void 0:r.name)!=null?n:"Autorun",l=!t.scheduler&&!t.delay,u;if(l)u=new Vs(a,function(){this.track(h)},t.onError,t.requiresObservable);else{var c=cw(t),p=!1;u=new Vs(a,function(){p||(p=!0,c(function(){p=!1,u.isDisposed_||u.track(h)}))},t.onError,t.requiresObservable)}function h(){e(u)}return(i=t)!=null&&(o=i.signal)!=null&&o.aborted||u.schedule_(),u.getDisposer_((s=t)==null?void 0:s.signal)}var uw=function(t){return t()};function cw(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:uw}var fw="onBO",dw="onBUO";function pw(e,t,n){return Gm(fw,e,t,n)}function Wm(e,t,n){return Gm(dw,e,t,n)}function Gm(e,t,n,r){var i=typeof r=="function"?Ur(t,n):Ur(t),o=St(r)?r:n,s=e+"L";return i[s]?i[s].add(o):i[s]=new Set([o]),function(){var a=i[s];a&&(a.delete(o),a.size===0&&delete i[s])}}var hw="never",Uo="always",vw="observed";function mw(e){e.isolateGlobalState===!0&&qS();var t=e.useProxies,n=e.enforceActions;if(t!==void 0&&(x.useProxies=t===Uo?!0:t===hw?!1:typeof Proxy<"u"),t==="ifavailable"&&(x.verifyProxies=!0),n!==void 0){var r=n===Uo?Uo:n===vw;x.enforceActions=r,x.allowStateChanges=!(r===!0||r===Uo)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(i){i in e&&(x[i]=!!e[i])}),x.allowStateReads=!x.observableRequiresReaction,e.reactionScheduler&&tw(e.reactionScheduler)}function Km(e,t,n,r){var i=X1(t);return Rn(function(){var o=rr(e,r)[j];Mr(i).forEach(function(s){o.extend_(s,i[s],n&&s in n?n[s]:!0)})}),e}function gw(e,t){return Ym(Ur(e,t))}function Ym(e){var t={name:e.name_};return e.observing_&&e.observing_.length>0&&(t.dependencies=yw(e.observing_).map(Ym)),t}function yw(e){return Array.from(new Set(e))}var _w=0;function qm(){this.message="FLOW_CANCELLED"}qm.prototype=Object.create(Error.prototype);var kl=km("flow"),Sw=km("flow.bound",{bound:!0}),zr=Object.assign(function(t,n){if(fo(n))return kl.decorate_20223_(t,n);if(Kn(n))return Jr(t,n,kl);var r=t,i=r.name||"<unnamed flow>",o=function(){var a=this,l=arguments,u=++_w,c=wr(i+" - runid: "+u+" - init",r).apply(a,l),p,h=void 0,y=new Promise(function(g,_){var C=0;p=_;function v(m){h=void 0;var S;try{S=wr(i+" - runid: "+u+" - yield "+C++,c.next).call(c,m)}catch(E){return _(E)}d(S)}function f(m){h=void 0;var S;try{S=wr(i+" - runid: "+u+" - yield "+C++,c.throw).call(c,m)}catch(E){return _(E)}d(S)}function d(m){if(St(m==null?void 0:m.then)){m.then(d,_);return}return m.done?g(m.value):(h=Promise.resolve(m.value),h.then(v,f))}v(void 0)});return y.cancel=wr(i+" - runid: "+u+" - cancel",function(){try{h&&Zd(h);var g=c.return(void 0),_=Promise.resolve(g.value);_.then(_r,_r),Zd(_),p(new qm)}catch(C){p(C)}}),y};return o.isMobXFlow=!0,o},kl);zr.bound=Tt(Sw);function Zd(e){St(e.cancel)&&e.cancel()}function Ji(e){return(e==null?void 0:e.isMobXFlow)===!0}function ww(e,t){return e?t!==void 0?Zi(e)?e[j].values_.has(t):!1:Zi(e)||!!e[j]||df(e)||Ws(e)||Ea(e):!1}function Qm(e){return ww(e)}function zt(e,t){t===void 0&&(t=void 0),Ze();try{return e.apply(t)}finally{et()}}function or(e){return e[j]}var Ew={has:function(t,n){return or(t).has_(n)},get:function(t,n){return or(t).get_(n)},set:function(t,n,r){var i;return Kn(n)?(i=or(t).set_(n,r,!0))!=null?i:!0:!1},deleteProperty:function(t,n){var r;return Kn(n)?(r=or(t).delete_(n,!0))!=null?r:!0:!1},defineProperty:function(t,n,r){var i;return(i=or(t).defineProperty_(n,r))!=null?i:!0},ownKeys:function(t){return or(t).ownKeys_()},preventExtensions:function(t){B(13)}};function Ow(e,t){var n,r;return vm(),e=rr(e,t),(r=(n=e[j]).proxy_)!=null?r:n.proxy_=new Proxy(e,Ew)}function Qe(e){return e.interceptors_!==void 0&&e.interceptors_.length>0}function vo(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),mm(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function Xe(e,t){var n=tr();try{for(var r=[].concat(e.interceptors_||[]),i=0,o=r.length;i<o&&(t=r[i](t),t&&!t.type&&B(14),!!t);i++);return t}finally{Vt(n)}}function ht(e){return e.changeListeners_!==void 0&&e.changeListeners_.length>0}function mo(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),mm(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function vt(e,t){var n=tr(),r=e.changeListeners_;if(r){r=r.slice();for(var i=0,o=r.length;i<o;i++)r[i](t);Vt(n)}}function kw(e,t,n){return Rn(function(){var r,i=rr(e,n)[j];(r=t)!=null||(t=tS(e)),Mr(t).forEach(function(o){return i.make_(o,t[o])})}),e}var xl=Symbol("mobx-keys");function ka(e,t,n){return qt(e)?Km(e,e,t,n):(Rn(function(){var r=rr(e,n)[j];if(!e[xl]){var i=Object.getPrototypeOf(e),o=new Set([].concat(Mr(e),Mr(i)));o.delete("constructor"),o.delete(j),uo(i,xl,o)}e[xl].forEach(function(s){return r.make_(s,t&&s in t?t[s]:!0)})}),e)}var ep="splice",Nt="update",xw=1e4,Cw={get:function(t,n){var r=t[j];return n===j?r:n==="length"?r.getArrayLength_():typeof n=="string"&&!isNaN(n)?r.get_(parseInt(n)):Ht(Gs,n)?Gs[n]:t[n]},set:function(t,n,r){var i=t[j];return n==="length"&&i.setArrayLength_(r),typeof n=="symbol"||isNaN(n)?t[n]=r:i.set_(parseInt(n),r),!0},preventExtensions:function(){B(15)}},gf=function(){function e(n,r,i,o){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=i,this.legacyMode_=o,this.atom_=new po(n),this.enhancer_=function(s,a){return r(s,a,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.dehanceValues_=function(r){return this.dehancer!==void 0&&r.length>0?r.map(this.dehancer):r},t.intercept_=function(r){return vo(this,r)},t.observe_=function(r,i){return i===void 0&&(i=!1),i&&r({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),mo(this,r)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(r){(typeof r!="number"||isNaN(r)||r<0)&&B("Out of range: "+r);var i=this.values_.length;if(r!==i)if(r>i){for(var o=new Array(r-i),s=0;s<r-i;s++)o[s]=void 0;this.spliceWithArray_(i,0,o)}else this.spliceWithArray_(r,i-r)},t.updateArrayLength_=function(r,i){r!==this.lastKnownLength_&&B(16),this.lastKnownLength_+=i,this.legacyMode_&&i>0&&ag(r+i+1)},t.spliceWithArray_=function(r,i,o){var s=this;this.atom_;var a=this.values_.length;if(r===void 0?r=0:r>a?r=a:r<0&&(r=Math.max(0,a+r)),arguments.length===1?i=a-r:i==null?i=0:i=Math.max(0,Math.min(i,a-r)),o===void 0&&(o=$u),Qe(this)){var l=Xe(this,{object:this.proxy_,type:ep,index:r,removedCount:i,added:o});if(!l)return $u;i=l.removedCount,o=l.added}if(o=o.length===0?o:o.map(function(p){return s.enhancer_(p,void 0)}),this.legacyMode_){var u=o.length-i;this.updateArrayLength_(a,u)}var c=this.spliceItemsIntoValues_(r,i,o);return(i!==0||o.length!==0)&&this.notifyArraySplice_(r,o,c),this.dehanceValues_(c)},t.spliceItemsIntoValues_=function(r,i,o){if(o.length<xw){var s;return(s=this.values_).splice.apply(s,[r,i].concat(o))}else{var a=this.values_.slice(r,r+i),l=this.values_.slice(r+i);this.values_.length+=o.length-i;for(var u=0;u<o.length;u++)this.values_[r+u]=o[u];for(var c=0;c<l.length;c++)this.values_[r+o.length+c]=l[c];return a}},t.notifyArrayChildUpdate_=function(r,i,o){var s=!this.owned_&&Ni(),a=ht(this),l=a||s?{observableKind:"array",object:this.proxy_,type:Nt,debugObjectName:this.atom_.name_,index:r,newValue:i,oldValue:o}:null;this.atom_.reportChanged(),a&&vt(this,l)},t.notifyArraySplice_=function(r,i,o){var s=!this.owned_&&Ni(),a=ht(this),l=a||s?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:ep,index:r,removed:o,added:i,removedCount:o.length,addedCount:i.length}:null;this.atom_.reportChanged(),a&&vt(this,l)},t.get_=function(r){if(this.legacyMode_&&r>=this.values_.length){console.warn("[mobx] Out of bounds read: "+r);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[r])},t.set_=function(r,i){var o=this.values_;if(this.legacyMode_&&r>o.length&&B(17,r,o.length),r<o.length){this.atom_;var s=o[r];if(Qe(this)){var a=Xe(this,{type:Nt,object:this.proxy_,index:r,newValue:i});if(!a)return;i=a.newValue}i=this.enhancer_(i,s);var l=i!==s;l&&(o[r]=i,this.notifyArrayChildUpdate_(r,i,s))}else{for(var u=new Array(r+1-o.length),c=0;c<u.length-1;c++)u[c]=void 0;u[u.length-1]=i,this.spliceWithArray_(o.length,0,u)}},e}();function Rw(e,t,n,r){return n===void 0&&(n="ObservableArray"),r===void 0&&(r=!1),vm(),Rn(function(){var i=new gf(n,t,r,!1);ym(i.values_,j,i);var o=new Proxy(i.values_,Cw);return i.proxy_=o,e&&e.length&&i.spliceWithArray_(0,0,e),o})}var Gs={clear:function(){return this.splice(0)},replace:function(t){var n=this[j];return n.spliceWithArray_(0,n.values_.length,t)},toJSON:function(){return this.slice()},splice:function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var s=this[j];switch(arguments.length){case 0:return[];case 1:return s.spliceWithArray_(t);case 2:return s.spliceWithArray_(t,n)}return s.spliceWithArray_(t,n,i)},spliceWithArray:function(t,n,r){return this[j].spliceWithArray_(t,n,r)},push:function(){for(var t=this[j],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(t.values_.length,0,r),t.values_.length},pop:function(){return this.splice(Math.max(this[j].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=this[j],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(0,0,r),t.values_.length},reverse:function(){return x.trackingDerivation&&B(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){x.trackingDerivation&&B(37,"sort");var t=this.slice();return t.sort.apply(t,arguments),this.replace(t),this},remove:function(t){var n=this[j],r=n.dehanceValues_(n.values_).indexOf(t);return r>-1?(this.splice(r,1),!0):!1}};Q("at",Ke);Q("concat",Ke);Q("flat",Ke);Q("includes",Ke);Q("indexOf",Ke);Q("join",Ke);Q("lastIndexOf",Ke);Q("slice",Ke);Q("toString",Ke);Q("toLocaleString",Ke);Q("toSorted",Ke);Q("toSpliced",Ke);Q("with",Ke);Q("every",wt);Q("filter",wt);Q("find",wt);Q("findIndex",wt);Q("findLast",wt);Q("findLastIndex",wt);Q("flatMap",wt);Q("forEach",wt);Q("map",wt);Q("some",wt);Q("toReversed",wt);Q("reduce",Xm);Q("reduceRight",Xm);function Q(e,t){typeof Array.prototype[e]=="function"&&(Gs[e]=t(e))}function Ke(e){return function(){var t=this[j];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function wt(e){return function(t,n){var r=this,i=this[j];i.atom_.reportObserved();var o=i.dehanceValues_(i.values_);return o[e](function(s,a){return t.call(n,s,a,r)})}}function Xm(e){return function(){var t=this,n=this[j];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(o,s,a){return i(o,s,a,t)},r[e].apply(r,arguments)}}var bw=er("ObservableArrayAdministration",gf);function xa(e){return ya(e)&&bw(e[j])}var Jm,Zm,Pw={},fn="add",Ks="delete";Jm=Symbol.iterator;Zm=Symbol.toStringTag;var eg=function(){function e(n,r,i){var o=this;r===void 0&&(r=qn),i===void 0&&(i="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[j]=Pw,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=r,this.name_=i,St(Map)||B(18),Rn(function(){o.keysAtom_=Em("ObservableMap.keys()"),o.data_=new Map,o.hasMap_=new Map,n&&o.merge(n)})}var t=e.prototype;return t.has_=function(r){return this.data_.has(r)},t.has=function(r){var i=this;if(!x.trackingDerivation)return this.has_(r);var o=this.hasMap_.get(r);if(!o){var s=o=new zn(this.has_(r),_a,"ObservableMap.key?",!1);this.hasMap_.set(r,s),Wm(s,function(){return i.hasMap_.delete(r)})}return o.get()},t.set=function(r,i){var o=this.has_(r);if(Qe(this)){var s=Xe(this,{type:o?Nt:fn,object:this,newValue:i,name:r});if(!s)return this;i=s.newValue}return o?this.updateValue_(r,i):this.addValue_(r,i),this},t.delete=function(r){var i=this;if(this.keysAtom_,Qe(this)){var o=Xe(this,{type:Ks,object:this,name:r});if(!o)return!1}if(this.has_(r)){var s=Ni(),a=ht(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:Ks,object:this,oldValue:this.data_.get(r).value_,name:r}:null;return zt(function(){var u;i.keysAtom_.reportChanged(),(u=i.hasMap_.get(r))==null||u.setNewValue_(!1);var c=i.data_.get(r);c.setNewValue_(void 0),i.data_.delete(r)}),a&&vt(this,l),!0}return!1},t.updateValue_=function(r,i){var o=this.data_.get(r);if(i=o.prepareNewValue_(i),i!==x.UNCHANGED){var s=Ni(),a=ht(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:Nt,object:this,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),a&&vt(this,l)}},t.addValue_=function(r,i){var o=this;this.keysAtom_,zt(function(){var u,c=new zn(i,o.enhancer_,"ObservableMap.key",!1);o.data_.set(r,c),i=c.value_,(u=o.hasMap_.get(r))==null||u.setNewValue_(!0),o.keysAtom_.reportChanged()});var s=Ni(),a=ht(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:fn,object:this,name:r,newValue:i}:null;a&&vt(this,l)},t.get=function(r){return this.has(r)?this.dehanceValue_(this.data_.get(r).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var r=this,i=this.keys();return eo({next:function(){var s=i.next(),a=s.done,l=s.value;return{done:a,value:a?void 0:r.get(l)}}})},t.entries=function(){var r=this,i=this.keys();return eo({next:function(){var s=i.next(),a=s.done,l=s.value;return{done:a,value:a?void 0:[l,r.get(l)]}}})},t[Jm]=function(){return this.entries()},t.forEach=function(r,i){for(var o=Sr(this),s;!(s=o()).done;){var a=s.value,l=a[0],u=a[1];r.call(i,u,l,this)}},t.merge=function(r){var i=this;return nr(r)&&(r=new Map(r)),zt(function(){qt(r)?Q1(r).forEach(function(o){return i.set(o,r[o])}):Array.isArray(r)?r.forEach(function(o){var s=o[0],a=o[1];return i.set(s,a)}):Xr(r)?(r.constructor!==Map&&B(19,r),r.forEach(function(o,s){return i.set(s,o)})):r!=null&&B(20,r)}),this},t.clear=function(){var r=this;zt(function(){Dm(function(){for(var i=Sr(r.keys()),o;!(o=i()).done;){var s=o.value;r.delete(s)}})})},t.replace=function(r){var i=this;return zt(function(){for(var o=Aw(r),s=new Map,a=!1,l=Sr(i.data_.keys()),u;!(u=l()).done;){var c=u.value;if(!o.has(c)){var p=i.delete(c);if(p)a=!0;else{var h=i.data_.get(c);s.set(c,h)}}}for(var y=Sr(o.entries()),g;!(g=y()).done;){var _=g.value,C=_[0],v=_[1],f=i.data_.has(C);if(i.set(C,v),i.data_.has(C)){var d=i.data_.get(C);s.set(C,d),f||(a=!0)}}if(!a)if(i.data_.size!==s.size)i.keysAtom_.reportChanged();else for(var m=i.data_.keys(),S=s.keys(),E=m.next(),O=S.next();!E.done;){if(E.value!==O.value){i.keysAtom_.reportChanged();break}E=m.next(),O=S.next()}i.data_=s}),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(r,i){return mo(this,r)},t.intercept_=function(r){return vo(this,r)},ff(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Zm,get:function(){return"Map"}}]),e}(),nr=er("ObservableMap",eg);function Aw(e){if(Xr(e)||nr(e))return e;if(Array.isArray(e))return new Map(e);if(qt(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}else return B(21,e)}var tg,ng,Tw={};tg=Symbol.iterator;ng=Symbol.toStringTag;var rg=function(){function e(n,r,i){var o=this;r===void 0&&(r=qn),i===void 0&&(i="ObservableSet"),this.name_=void 0,this[j]=Tw,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=i,St(Set)||B(22),this.enhancer_=function(s,a){return r(s,a,i)},Rn(function(){o.atom_=Em(o.name_),n&&o.replace(n)})}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.clear=function(){var r=this;zt(function(){Dm(function(){for(var i=Sr(r.data_.values()),o;!(o=i()).done;){var s=o.value;r.delete(s)}})})},t.forEach=function(r,i){for(var o=Sr(this),s;!(s=o()).done;){var a=s.value;r.call(i,a,a,this)}},t.add=function(r){var i=this;if(this.atom_,Qe(this)){var o=Xe(this,{type:fn,object:this,newValue:r});if(!o)return this}if(!this.has(r)){zt(function(){i.data_.add(i.enhancer_(r,void 0)),i.atom_.reportChanged()});var s=!1,a=ht(this),l=a||s?{observableKind:"set",debugObjectName:this.name_,type:fn,object:this,newValue:r}:null;a&&vt(this,l)}return this},t.delete=function(r){var i=this;if(Qe(this)){var o=Xe(this,{type:Ks,object:this,oldValue:r});if(!o)return!1}if(this.has(r)){var s=!1,a=ht(this),l=a||s?{observableKind:"set",debugObjectName:this.name_,type:Ks,object:this,oldValue:r}:null;return zt(function(){i.atom_.reportChanged(),i.data_.delete(r)}),a&&vt(this,l),!0}return!1},t.has=function(r){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(r))},t.entries=function(){var r=0,i=Array.from(this.keys()),o=Array.from(this.values());return eo({next:function(){var a=r;return r+=1,a<o.length?{value:[i[a],o[a]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var r=this,i=0,o=Array.from(this.data_.values());return eo({next:function(){return i<o.length?{value:r.dehanceValue_(o[i++]),done:!1}:{done:!0}}})},t.replace=function(r){var i=this;return Zr(r)&&(r=new Set(r)),zt(function(){Array.isArray(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):co(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):r!=null&&B("Cannot initialize set from "+r)}),this},t.observe_=function(r,i){return mo(this,r)},t.intercept_=function(r){return vo(this,r)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[tg]=function(){return this.values()},ff(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:ng,get:function(){return"Set"}}]),e}(),Zr=er("ObservableSet",rg),tp=Object.create(null),np="remove",ig=function(){function e(n,r,i,o){r===void 0&&(r=new Map),o===void 0&&(o=RS),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=r,this.name_=i,this.defaultAnnotation_=o,this.keysAtom_=new po("ObservableObject.keys"),this.isPlainObject_=qt(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(r){return this.values_.get(r).get()},t.setObservablePropValue_=function(r,i){var o=this.values_.get(r);if(o instanceof $r)return o.set(i),!0;if(Qe(this)){var s=Xe(this,{type:Nt,object:this.proxy_||this.target_,name:r,newValue:i});if(!s)return null;i=s.newValue}if(i=o.prepareNewValue_(i),i!==x.UNCHANGED){var a=ht(this),l=!1,u=a||l?{type:Nt,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),a&&vt(this,u)}return!0},t.get_=function(r){return x.trackingDerivation&&!Ht(this.target_,r)&&this.has_(r),this.target_[r]},t.set_=function(r,i,o){return o===void 0&&(o=!1),Ht(this.target_,r)?this.values_.has(r)?this.setObservablePropValue_(r,i):o?Reflect.set(this.target_,r,i):(this.target_[r]=i,!0):this.extend_(r,{value:i,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},t.has_=function(r){if(!x.trackingDerivation)return r in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var i=this.pendingKeys_.get(r);return i||(i=new zn(r in this.target_,_a,"ObservableObject.key?",!1),this.pendingKeys_.set(r,i)),i.get()},t.make_=function(r,i){if(i===!0&&(i=this.defaultAnnotation_),i!==!1){if(!(r in this.target_)){var o;if((o=this.target_[Rt])!=null&&o[r])return;B(1,i.annotationType_,this.name_+"."+r.toString())}for(var s=this.target_;s&&s!==ga;){var a=zs(s,r);if(a){var l=i.make_(this,r,a,s);if(l===0)return;if(l===1)break}s=Object.getPrototypeOf(s)}ip(this,i,r)}},t.extend_=function(r,i,o,s){if(s===void 0&&(s=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(r,i,s);var a=o.extend_(this,r,i,s);return a&&ip(this,o,r),a},t.defineProperty_=function(r,i,o){o===void 0&&(o=!1),this.keysAtom_;try{Ze();var s=this.delete_(r);if(!s)return s;if(Qe(this)){var a=Xe(this,{object:this.proxy_||this.target_,name:r,type:fn,newValue:i.value});if(!a)return null;var l=a.newValue;i.value!==l&&(i=Yn({},i,{value:l}))}if(o){if(!Reflect.defineProperty(this.target_,r,i))return!1}else At(this.target_,r,i);this.notifyPropertyAddition_(r,i.value)}finally{et()}return!0},t.defineObservableProperty_=function(r,i,o,s){s===void 0&&(s=!1),this.keysAtom_;try{Ze();var a=this.delete_(r);if(!a)return a;if(Qe(this)){var l=Xe(this,{object:this.proxy_||this.target_,name:r,type:fn,newValue:i});if(!l)return null;i=l.newValue}var u=rp(r),c={configurable:x.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(s){if(!Reflect.defineProperty(this.target_,r,c))return!1}else At(this.target_,r,c);var p=new zn(i,o,"ObservableObject.key",!1);this.values_.set(r,p),this.notifyPropertyAddition_(r,p.value_)}finally{et()}return!0},t.defineComputedProperty_=function(r,i,o){o===void 0&&(o=!1),this.keysAtom_;try{Ze();var s=this.delete_(r);if(!s)return s;if(Qe(this)){var a=Xe(this,{object:this.proxy_||this.target_,name:r,type:fn,newValue:void 0});if(!a)return null}i.name||(i.name="ObservableObject.key"),i.context=this.proxy_||this.target_;var l=rp(r),u={configurable:x.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(o){if(!Reflect.defineProperty(this.target_,r,u))return!1}else At(this.target_,r,u);this.values_.set(r,new $r(i)),this.notifyPropertyAddition_(r,void 0)}finally{et()}return!0},t.delete_=function(r,i){if(i===void 0&&(i=!1),this.keysAtom_,!Ht(this.target_,r))return!0;if(Qe(this)){var o=Xe(this,{object:this.proxy_||this.target_,name:r,type:np});if(!o)return null}try{var s,a;Ze();var l=ht(this),u=!1,c=this.values_.get(r),p=void 0;if(!c&&(l||u)){var h;p=(h=zs(this.target_,r))==null?void 0:h.value}if(i){if(!Reflect.deleteProperty(this.target_,r))return!1}else delete this.target_[r];if(c&&(this.values_.delete(r),c instanceof zn&&(p=c.value_),Um(c)),this.keysAtom_.reportChanged(),(s=this.pendingKeys_)==null||(a=s.get(r))==null||a.set(r in this.target_),l||u){var y={type:np,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:p,name:r};l&&vt(this,y)}}finally{et()}return!0},t.observe_=function(r,i){return mo(this,r)},t.intercept_=function(r){return vo(this,r)},t.notifyPropertyAddition_=function(r,i){var o,s,a=ht(this),l=!1;if(a||l){var u=a||l?{type:fn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:r,newValue:i}:null;a&&vt(this,u)}(o=this.pendingKeys_)==null||(s=o.get(r))==null||s.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),Mr(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function rr(e,t){var n;if(Ht(e,j))return e;var r=(n=t==null?void 0:t.name)!=null?n:"ObservableObject",i=new ig(e,new Map,String(r),$S(t));return uo(e,j,i),e}var Nw=er("ObservableObjectAdministration",ig);function rp(e){return tp[e]||(tp[e]={get:function(){return this[j].getObservablePropValue_(e)},set:function(n){return this[j].setObservablePropValue_(e,n)}})}function Zi(e){return ya(e)?Nw(e[j]):!1}function ip(e,t,n){var r;(r=e.target_[Rt])==null||delete r[n]}var jw=sg(0),Dw=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,e===!1}(),Cl=0,og=function(){};function Iw(e,t){Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):e.prototype.__proto__!==void 0?e.prototype.__proto__=t:e.prototype=t}Iw(og,Array.prototype);var yf=function(e,t,n){wm(r,e);function r(o,s,a,l){var u;return a===void 0&&(a="ObservableArray"),l===void 0&&(l=!1),u=e.call(this)||this,Rn(function(){var c=new gf(a,s,l,!0);c.proxy_=Ol(u),ym(Ol(u),j,c),o&&o.length&&u.spliceWithArray(0,0,o),Dw&&Object.defineProperty(Ol(u),"0",jw)}),u}var i=r.prototype;return i.concat=function(){this[j].atom_.reportObserved();for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return Array.prototype.concat.apply(this.slice(),a.map(function(u){return xa(u)?u.slice():u}))},i[n]=function(){var o=this,s=0;return eo({next:function(){return s<o.length?{value:o[s++],done:!1}:{done:!0,value:void 0}}})},ff(r,[{key:"length",get:function(){return this[j].getArrayLength_()},set:function(s){this[j].setArrayLength_(s)}},{key:t,get:function(){return"Array"}}]),r}(og,Symbol.toStringTag,Symbol.iterator);Object.entries(Gs).forEach(function(e){var t=e[0],n=e[1];t!=="concat"&&uo(yf.prototype,t,n)});function sg(e){return{enumerable:!1,configurable:!0,get:function(){return this[j].get_(e)},set:function(n){this[j].set_(e,n)}}}function Lw(e){At(yf.prototype,""+e,sg(e))}function ag(e){if(e>Cl){for(var t=Cl;t<e+100;t++)Lw(t);Cl=e}}ag(1e3);function Mw(e,t,n){return new yf(e,t,n)}function Ur(e,t){if(typeof e=="object"&&e!==null){if(xa(e))return t!==void 0&&B(23),e[j].atom_;if(Zr(e))return e.atom_;if(nr(e)){if(t===void 0)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||B(25,t,Ku(e)),n}if(Zi(e)){if(!t)return B(26);var r=e[j].values_.get(t);return r||B(27,t,Ku(e)),r}if(df(e)||Ea(e)||Ws(e))return e}else if(St(e)&&Ws(e[j]))return e[j];B(28)}function lg(e,t){if(e||B(29),t!==void 0)return lg(Ur(e,t));if(df(e)||Ea(e)||Ws(e)||nr(e)||Zr(e))return e;if(e[j])return e[j];B(24,e)}function Ku(e,t){var n;if(t!==void 0)n=Ur(e,t);else{if(Oa(e))return e.name;Zi(e)||nr(e)||Zr(e)?n=lg(e):n=Ur(e)}return n.name_}function Rn(e){var t=tr(),n=hf(!0);Ze();try{return e()}finally{et(),vf(n),Vt(t)}}var op=ga.toString;function _f(e,t,n){return n===void 0&&(n=-1),Yu(e,t,n)}function Yu(e,t,n,r,i){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;if(o!=="function"&&o!=="object"&&typeof t!="object")return!1;var s=op.call(e);if(s!==op.call(t))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++;break}e=sp(e),t=sp(t);var a=s==="[object Array]";if(!a){if(typeof e!="object"||typeof t!="object")return!1;var l=e.constructor,u=t.constructor;if(l!==u&&!(St(l)&&l instanceof l&&St(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}if(n===0)return!1;n<0&&(n=-1),r=r||[],i=i||[];for(var c=r.length;c--;)if(r[c]===e)return i[c]===t;if(r.push(e),i.push(t),a){if(c=e.length,c!==t.length)return!1;for(;c--;)if(!Yu(e[c],t[c],n-1,r,i))return!1}else{var p=Object.keys(e),h;if(c=p.length,Object.keys(t).length!==c)return!1;for(;c--;)if(h=p[c],!(Ht(t,h)&&Yu(e[h],t[h],n-1,r,i)))return!1}return r.pop(),i.pop(),!0}function sp(e){return xa(e)?e.slice():Xr(e)||nr(e)||co(e)||Zr(e)?Array.from(e.entries()):e}function eo(e){return e[Symbol.iterator]=$w,e}function $w(){return this}["Symbol","Map","Set"].forEach(function(e){var t=cf();typeof t[e]>"u"&&B("MobX requires global '"+e+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:nw,extras:{getDebugName:Ku},$mobx:j});if(!W.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!kw)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function zw(e){e()}function Uw(e){e||(e=zw),mw({reactionScheduler:e})}function Fw(e){return gw(e)}var Bw=1e4,Hw=1e4,Vw=function(){function e(t){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(r){r===void 0&&(r=Bw),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var i=Date.now();n.registrations.forEach(function(o,s){i-o.registeredAt>=r&&(n.finalize(o.value),n.registrations.delete(s))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,Hw))}}),e}(),Ww=typeof FinalizationRegistry<"u"?FinalizationRegistry:Vw,qu=new Ww(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),ug={exports:{}},cg={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=W;function Gw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kw=typeof Object.is=="function"?Object.is:Gw,Yw=Fr.useState,qw=Fr.useEffect,Qw=Fr.useLayoutEffect,Xw=Fr.useDebugValue;function Jw(e,t){var n=t(),r=Yw({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Qw(function(){i.value=n,i.getSnapshot=t,Rl(i)&&o({inst:i})},[e,n,t]),qw(function(){return Rl(i)&&o({inst:i}),e(function(){Rl(i)&&o({inst:i})})},[e]),Xw(n),n}function Rl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kw(e,n)}catch{return!0}}function Zw(e,t){return t()}var eE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Zw:Jw;cg.useSyncExternalStore=Fr.useSyncExternalStore!==void 0?Fr.useSyncExternalStore:eE;ug.exports=cg;var tE=ug.exports;function ap(e){e.reaction=new Vs("observer".concat(e.name),function(){var t;e.stateVersion=Symbol(),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function nE(e,t){t===void 0&&(t="observed");var n=wn.useRef(null);if(!n.current){var r={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(a){return qu.unregister(r),r.onStoreChange=a,r.reaction||(ap(r),r.stateVersion=Symbol()),function(){var l;r.onStoreChange=null,(l=r.reaction)===null||l===void 0||l.dispose(),r.reaction=null}},getSnapshot:function(){return r.stateVersion}};n.current=r}var i=n.current;i.reaction||(ap(i),qu.register(n,i,i)),wn.useDebugValue(i.reaction,Fw),tE.useSyncExternalStore(i.subscribe,i.getSnapshot,i.getSnapshot);var o,s;if(i.reaction.track(function(){try{o=e()}catch(a){s=a}}),s)throw s;return o}var bl,Pl,fg=typeof Symbol=="function"&&Symbol.for,rE=(Pl=(bl=Object.getOwnPropertyDescriptor(function(){},"name"))===null||bl===void 0?void 0:bl.configurable)!==null&&Pl!==void 0?Pl:!1,lp=fg?Symbol.for("react.forward_ref"):typeof W.forwardRef=="function"&&W.forwardRef(function(e){return null}).$$typeof,up=fg?Symbol.for("react.memo"):typeof W.memo=="function"&&W.memo(function(e){return null}).$$typeof;function Ca(e,t){var n;if(up&&e.$$typeof===up)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r=(n=t==null?void 0:t.forwardRef)!==null&&n!==void 0?n:!1,i=e,o=e.displayName||e.name;if(lp&&e.$$typeof===lp&&(r=!0,i=e.render,typeof i!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var s=function(a,l){return nE(function(){return i(a,l)},o)};return s.displayName=e.displayName,rE&&Object.defineProperty(s,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(s.contextTypes=e.contextTypes),r&&(s=W.forwardRef(s)),s=W.memo(s),oE(e,s),s}var iE={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function oE(e,t){Object.keys(e).forEach(function(n){iE[n]||Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}var Al;Uw(lm.unstable_batchedUpdates);Al=qu.finalizeAllImmediately;var dg={},Fo,sE=new Uint8Array(16);function pg(){if(!Fo&&(Fo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Fo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fo(sE)}const aE=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ra(e){return typeof e=="string"&&aE.test(e)}var me=[];for(var Tl=0;Tl<256;++Tl)me.push((Tl+256).toString(16).substr(1));function ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(me[e[t+0]]+me[e[t+1]]+me[e[t+2]]+me[e[t+3]]+"-"+me[e[t+4]]+me[e[t+5]]+"-"+me[e[t+6]]+me[e[t+7]]+"-"+me[e[t+8]]+me[e[t+9]]+"-"+me[e[t+10]]+me[e[t+11]]+me[e[t+12]]+me[e[t+13]]+me[e[t+14]]+me[e[t+15]]).toLowerCase();if(!Ra(n))throw TypeError("Stringified UUID is invalid");return n}var cp,Nl,jl=0,Dl=0;function lE(e,t,n){var r=t&&n||0,i=t||new Array(16);e=e||{};var o=e.node||cp,s=e.clockseq!==void 0?e.clockseq:Nl;if(o==null||s==null){var a=e.random||(e.rng||pg)();o==null&&(o=cp=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),s==null&&(s=Nl=(a[6]<<8|a[7])&16383)}var l=e.msecs!==void 0?e.msecs:Date.now(),u=e.nsecs!==void 0?e.nsecs:Dl+1,c=l-jl+(u-Dl)/1e4;if(c<0&&e.clockseq===void 0&&(s=s+1&16383),(c<0||l>jl)&&e.nsecs===void 0&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");jl=l,Dl=u,Nl=s,l+=122192928e5;var p=((l&268435455)*1e4+u)%4294967296;i[r++]=p>>>24&255,i[r++]=p>>>16&255,i[r++]=p>>>8&255,i[r++]=p&255;var h=l/4294967296*1e4&268435455;i[r++]=h>>>8&255,i[r++]=h&255,i[r++]=h>>>24&15|16,i[r++]=h>>>16&255,i[r++]=s>>>8|128,i[r++]=s&255;for(var y=0;y<6;++y)i[r+y]=o[y];return t||ba(i)}function hg(e){if(!Ra(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=t&255,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=t&255,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=t&255,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=t&255,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=t&255,n}function uE(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}var cE="6ba7b810-9dad-11d1-80b4-00c04fd430c8",fE="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function vg(e,t,n){function r(i,o,s,a){if(typeof i=="string"&&(i=uE(i)),typeof o=="string"&&(o=hg(o)),o.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var l=new Uint8Array(16+i.length);if(l.set(o),l.set(i,o.length),l=n(l),l[6]=l[6]&15|t,l[8]=l[8]&63|128,s){a=a||0;for(var u=0;u<16;++u)s[a+u]=l[u];return s}return ba(l)}try{r.name=e}catch{}return r.DNS=cE,r.URL=fE,r}function dE(e){if(typeof e=="string"){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return pE(hE(vE(e),e.length*8))}function pE(e){for(var t=[],n=e.length*32,r="0123456789abcdef",i=0;i<n;i+=8){var o=e[i>>5]>>>i%32&255,s=parseInt(r.charAt(o>>>4&15)+r.charAt(o&15),16);t.push(s)}return t}function mg(e){return(e+64>>>9<<4)+14+1}function hE(e,t){e[t>>5]|=128<<t%32,e[mg(t)-1]=t;for(var n=1732584193,r=-271733879,i=-1732584194,o=271733878,s=0;s<e.length;s+=16){var a=n,l=r,u=i,c=o;n=Oe(n,r,i,o,e[s],7,-680876936),o=Oe(o,n,r,i,e[s+1],12,-389564586),i=Oe(i,o,n,r,e[s+2],17,606105819),r=Oe(r,i,o,n,e[s+3],22,-1044525330),n=Oe(n,r,i,o,e[s+4],7,-176418897),o=Oe(o,n,r,i,e[s+5],12,1200080426),i=Oe(i,o,n,r,e[s+6],17,-1473231341),r=Oe(r,i,o,n,e[s+7],22,-45705983),n=Oe(n,r,i,o,e[s+8],7,1770035416),o=Oe(o,n,r,i,e[s+9],12,-1958414417),i=Oe(i,o,n,r,e[s+10],17,-42063),r=Oe(r,i,o,n,e[s+11],22,-1990404162),n=Oe(n,r,i,o,e[s+12],7,1804603682),o=Oe(o,n,r,i,e[s+13],12,-40341101),i=Oe(i,o,n,r,e[s+14],17,-1502002290),r=Oe(r,i,o,n,e[s+15],22,1236535329),n=ke(n,r,i,o,e[s+1],5,-165796510),o=ke(o,n,r,i,e[s+6],9,-1069501632),i=ke(i,o,n,r,e[s+11],14,643717713),r=ke(r,i,o,n,e[s],20,-373897302),n=ke(n,r,i,o,e[s+5],5,-701558691),o=ke(o,n,r,i,e[s+10],9,38016083),i=ke(i,o,n,r,e[s+15],14,-660478335),r=ke(r,i,o,n,e[s+4],20,-405537848),n=ke(n,r,i,o,e[s+9],5,568446438),o=ke(o,n,r,i,e[s+14],9,-1019803690),i=ke(i,o,n,r,e[s+3],14,-187363961),r=ke(r,i,o,n,e[s+8],20,1163531501),n=ke(n,r,i,o,e[s+13],5,-1444681467),o=ke(o,n,r,i,e[s+2],9,-51403784),i=ke(i,o,n,r,e[s+7],14,1735328473),r=ke(r,i,o,n,e[s+12],20,-1926607734),n=xe(n,r,i,o,e[s+5],4,-378558),o=xe(o,n,r,i,e[s+8],11,-2022574463),i=xe(i,o,n,r,e[s+11],16,1839030562),r=xe(r,i,o,n,e[s+14],23,-35309556),n=xe(n,r,i,o,e[s+1],4,-1530992060),o=xe(o,n,r,i,e[s+4],11,1272893353),i=xe(i,o,n,r,e[s+7],16,-155497632),r=xe(r,i,o,n,e[s+10],23,-1094730640),n=xe(n,r,i,o,e[s+13],4,681279174),o=xe(o,n,r,i,e[s],11,-358537222),i=xe(i,o,n,r,e[s+3],16,-722521979),r=xe(r,i,o,n,e[s+6],23,76029189),n=xe(n,r,i,o,e[s+9],4,-640364487),o=xe(o,n,r,i,e[s+12],11,-421815835),i=xe(i,o,n,r,e[s+15],16,530742520),r=xe(r,i,o,n,e[s+2],23,-995338651),n=Ce(n,r,i,o,e[s],6,-198630844),o=Ce(o,n,r,i,e[s+7],10,1126891415),i=Ce(i,o,n,r,e[s+14],15,-1416354905),r=Ce(r,i,o,n,e[s+5],21,-57434055),n=Ce(n,r,i,o,e[s+12],6,1700485571),o=Ce(o,n,r,i,e[s+3],10,-1894986606),i=Ce(i,o,n,r,e[s+10],15,-1051523),r=Ce(r,i,o,n,e[s+1],21,-2054922799),n=Ce(n,r,i,o,e[s+8],6,1873313359),o=Ce(o,n,r,i,e[s+15],10,-30611744),i=Ce(i,o,n,r,e[s+6],15,-1560198380),r=Ce(r,i,o,n,e[s+13],21,1309151649),n=Ce(n,r,i,o,e[s+4],6,-145523070),o=Ce(o,n,r,i,e[s+11],10,-1120210379),i=Ce(i,o,n,r,e[s+2],15,718787259),r=Ce(r,i,o,n,e[s+9],21,-343485551),n=dn(n,a),r=dn(r,l),i=dn(i,u),o=dn(o,c)}return[n,r,i,o]}function vE(e){if(e.length===0)return[];for(var t=e.length*8,n=new Uint32Array(mg(t)),r=0;r<t;r+=8)n[r>>5]|=(e[r/8]&255)<<r%32;return n}function dn(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function mE(e,t){return e<<t|e>>>32-t}function Pa(e,t,n,r,i,o){return dn(mE(dn(dn(t,e),dn(r,o)),i),n)}function Oe(e,t,n,r,i,o,s){return Pa(t&n|~t&r,e,t,i,o,s)}function ke(e,t,n,r,i,o,s){return Pa(t&r|n&~r,e,t,i,o,s)}function xe(e,t,n,r,i,o,s){return Pa(t^n^r,e,t,i,o,s)}function Ce(e,t,n,r,i,o,s){return Pa(n^(t|~r),e,t,i,o,s)}var gE=vg("v3",48,dE);const yE=gE;function _E(e,t,n){e=e||{};var r=e.random||(e.rng||pg)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return ba(r)}function SE(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function Il(e,t){return e<<t|e>>>32-t}function wE(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=[];for(var i=0;i<r.length;++i)e.push(r.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,s=Math.ceil(o/16),a=new Array(s),l=0;l<s;++l){for(var u=new Uint32Array(16),c=0;c<16;++c)u[c]=e[l*64+c*4]<<24|e[l*64+c*4+1]<<16|e[l*64+c*4+2]<<8|e[l*64+c*4+3];a[l]=u}a[s-1][14]=(e.length-1)*8/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=(e.length-1)*8&4294967295;for(var p=0;p<s;++p){for(var h=new Uint32Array(80),y=0;y<16;++y)h[y]=a[p][y];for(var g=16;g<80;++g)h[g]=Il(h[g-3]^h[g-8]^h[g-14]^h[g-16],1);for(var _=n[0],C=n[1],v=n[2],f=n[3],d=n[4],m=0;m<80;++m){var S=Math.floor(m/20),E=Il(_,5)+SE(S,C,v,f)+d+t[S]+h[m]>>>0;d=f,f=v,v=Il(C,30)>>>0,C=_,_=E}n[0]=n[0]+_>>>0,n[1]=n[1]+C>>>0,n[2]=n[2]+v>>>0,n[3]=n[3]+f>>>0,n[4]=n[4]+d>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,n[0]&255,n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,n[1]&255,n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,n[2]&255,n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,n[3]&255,n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,n[4]&255]}var EE=vg("v5",80,wE);const OE=EE,kE="00000000-0000-0000-0000-000000000000";function xE(e){if(!Ra(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}const CE=Object.freeze(Object.defineProperty({__proto__:null,NIL:kE,parse:hg,stringify:ba,v1:lE,v3:yE,v4:_E,v5:OE,validate:Ra,version:xE},Symbol.toStringTag,{value:"Module"})),RE=R0(CE);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ClickStream=void 0;var t=RE;function n(f,d){var m=Object.keys(f);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(f);d&&(S=S.filter(function(E){return Object.getOwnPropertyDescriptor(f,E).enumerable})),m.push.apply(m,S)}return m}function r(f){for(var d=1;d<arguments.length;d++){var m=arguments[d]!=null?arguments[d]:{};d%2?n(Object(m),!0).forEach(function(S){i(f,S,m[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(m)):n(Object(m)).forEach(function(S){Object.defineProperty(f,S,Object.getOwnPropertyDescriptor(m,S))})}return f}function i(f,d,m){return d in f?Object.defineProperty(f,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):f[d]=m,f}function o(f){return u(f)||l(f)||a(f)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(f,d){if(f){if(typeof f=="string")return c(f,d);var m=Object.prototype.toString.call(f).slice(8,-1);if(m==="Object"&&f.constructor&&(m=f.constructor.name),m==="Map"||m==="Set")return Array.from(f);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return c(f,d)}}function l(f){if(typeof Symbol<"u"&&Symbol.iterator in Object(f))return Array.from(f)}function u(f){if(Array.isArray(f))return c(f)}function c(f,d){(d==null||d>f.length)&&(d=f.length);for(var m=0,S=new Array(d);m<d;m++)S[m]=f[m];return S}function p(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function h(f,d){for(var m=0;m<d.length;m++){var S=d[m];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(f,S.key,S)}}function y(f,d,m){return d&&h(f.prototype,d),m&&h(f,m),f}var g=3,_=function(){function f(d){p(this,f),this.host=d.host,this.options=d.options,this.sessionId=this.generateSessionId()}return y(f,[{key:"send",value:function(m){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return fetch(this.host,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({subject:m,version:E.version||this.options.version,payload:S})})}},{key:"sendBeacon",value:function(m){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(navigator&&navigator.sendBeacon){var O=JSON.stringify({subject:m,version:E.version||this.options.version,payload:S});navigator.sendBeacon(this.host,O)}}},{key:"generateSessionId",value:function(){var m=new Date().getTime(),S=(0,t.v4)()+"-".concat(m),E=localStorage.getItem("clickstream-session-id")||"",O=localStorage.getItem("clickstream-timestamp")||"",R=Math.floor((m-Number(O))/6e4),I=30;return localStorage.setItem("clickstream-timestamp",m),!E||R>=I?(localStorage.setItem("clickstream-session-id",S),S):E}},{key:"pageView",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=m.customDimentions,O=E===void 0?{}:E,R=o(new Array(g)).reduce(function(ve,jt,ze){return r({},ve,i({},"cd".concat(ze+1),O["cd".concat(ze+1)]||""))},{}),I=r({full_url:window.location.href,referrer:m.referrer||document.referrer,created_at:"%%time%%",user_id:m.userId,user_type:m.userType,user_agent:navigator.userAgent,user_ip:"%%ip%%",guest_id:m.guestId||0},R);this.options.version===5&&(I.browser_session_id=this.sessionId),this.options.version===7&&(I.guest_uuid=m.guestUuid?{string:m.guestUuid}:null);var L="uchiru.pageviews";return this.send(S.subject||L,I)}},{key:"pageEvent",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=m.customDimentions,O=E===void 0?{}:E,R=o(new Array(g)).reduce(function(ve,jt,ze){return r({},ve,i({},"cd".concat(ze+1),O["cd".concat(ze+1)]||""))},{}),I=r({full_url:window.location.href,created_at:"%%time%%",user_id:m.userId,user_type:m.userType,guest_id:m.guestId||0,event_source:m.eventSource,event_type:m.eventType,event_info:m.eventInfo,event_info_type:m.eventInfoType},R);this.options.version===8&&(I.user_agent=navigator.userAgent||"undefined",I.browser_session_id=this.sessionId),this.options.version===11&&(I.user_agent=navigator.userAgent?{string:navigator.userAgent}:null,I.browser_session_id=this.sessionId?{string:this.sessionId}:null,I.event_sub_info=m.eventSubInfo?{string:m.eventSubInfo}:null,I.event_info_type=m.eventInfoType?{string:m.eventInfoType}:null,I.guest_uuid=m.guestUuid?{string:m.guestUuid}:null);var L="uchiru.page_events";return S.sendBeacon?this.sendBeacon(S.subject||L,I):this.send(S.subject||L,I)}},{key:"customEvent",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.send(S.subject,m,{version:S.version})}}]),f}();e.ClickStream=_;var C=function(d){var m=d.host,S=d.options,E=S===void 0?{version:1}:S,O=new _({host:m,options:E});return O},v=C;e.default=v})(dg);const bE=ro(dg);function gg(e,t){return function(){return e.apply(t,arguments)}}const{toString:PE}=Object.prototype,{getPrototypeOf:Sf}=Object,Aa=(e=>t=>{const n=PE.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Et=e=>(e=e.toLowerCase(),t=>Aa(t)===e),Ta=e=>t=>typeof t===e,{isArray:ei}=Array,to=Ta("undefined");function AE(e){return e!==null&&!to(e)&&e.constructor!==null&&!to(e.constructor)&&rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yg=Et("ArrayBuffer");function TE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yg(e.buffer),t}const NE=Ta("string"),rt=Ta("function"),_g=Ta("number"),Na=e=>e!==null&&typeof e=="object",jE=e=>e===!0||e===!1,ss=e=>{if(Aa(e)!=="object")return!1;const t=Sf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},DE=Et("Date"),IE=Et("File"),LE=Et("Blob"),ME=Et("FileList"),$E=e=>Na(e)&&rt(e.pipe),zE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||rt(e.append)&&((t=Aa(e))==="formdata"||t==="object"&&rt(e.toString)&&e.toString()==="[object FormData]"))},UE=Et("URLSearchParams"),[FE,BE,HE,VE]=["ReadableStream","Request","Response","Headers"].map(Et),WE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function go(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ei(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function Sg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const wg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Eg=e=>!to(e)&&e!==wg;function Qu(){const{caseless:e}=Eg(this)&&this||{},t={},n=(r,i)=>{const o=e&&Sg(t,i)||i;ss(t[o])&&ss(r)?t[o]=Qu(t[o],r):ss(r)?t[o]=Qu({},r):ei(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&go(arguments[r],n);return t}const GE=(e,t,n,{allOwnKeys:r}={})=>(go(t,(i,o)=>{n&&rt(i)?e[o]=gg(i,n):e[o]=i},{allOwnKeys:r}),e),KE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),YE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qE=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Sf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},QE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},XE=e=>{if(!e)return null;if(ei(e))return e;let t=e.length;if(!_g(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},JE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Sf(Uint8Array)),ZE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},eO=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},tO=Et("HTMLFormElement"),nO=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),fp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),rO=Et("RegExp"),Og=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};go(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},iO=e=>{Og(e,(t,n)=>{if(rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oO=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ei(e)?r(e):r(String(e).split(t)),n},sO=()=>{},aO=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ll="abcdefghijklmnopqrstuvwxyz",dp="0123456789",kg={DIGIT:dp,ALPHA:Ll,ALPHA_DIGIT:Ll+Ll.toUpperCase()+dp},lO=(e=16,t=kg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function uO(e){return!!(e&&rt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const cO=e=>{const t=new Array(10),n=(r,i)=>{if(Na(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ei(r)?[]:{};return go(r,(s,a)=>{const l=n(s,i+1);!to(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},fO=Et("AsyncFunction"),dO=e=>e&&(Na(e)||rt(e))&&rt(e.then)&&rt(e.catch),w={isArray:ei,isArrayBuffer:yg,isBuffer:AE,isFormData:zE,isArrayBufferView:TE,isString:NE,isNumber:_g,isBoolean:jE,isObject:Na,isPlainObject:ss,isReadableStream:FE,isRequest:BE,isResponse:HE,isHeaders:VE,isUndefined:to,isDate:DE,isFile:IE,isBlob:LE,isRegExp:rO,isFunction:rt,isStream:$E,isURLSearchParams:UE,isTypedArray:JE,isFileList:ME,forEach:go,merge:Qu,extend:GE,trim:WE,stripBOM:KE,inherits:YE,toFlatObject:qE,kindOf:Aa,kindOfTest:Et,endsWith:QE,toArray:XE,forEachEntry:ZE,matchAll:eO,isHTMLForm:tO,hasOwnProperty:fp,hasOwnProp:fp,reduceDescriptors:Og,freezeMethods:iO,toObjectSet:oO,toCamelCase:nO,noop:sO,toFiniteNumber:aO,findKey:Sg,global:wg,isContextDefined:Eg,ALPHABET:kg,generateString:lO,isSpecCompliantForm:uO,toJSONObject:cO,isAsyncFn:fO,isThenable:dO};function M(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xg=M.prototype,Cg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Cg[e]={value:e}});Object.defineProperties(M,Cg);Object.defineProperty(xg,"isAxiosError",{value:!0});M.from=(e,t,n,r,i,o)=>{const s=Object.create(xg);return w.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),M.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const pO=null;function Xu(e){return w.isPlainObject(e)||w.isArray(e)}function Rg(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function pp(e,t,n){return e?e.concat(t).map(function(i,o){return i=Rg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function hO(e){return w.isArray(e)&&!e.some(Xu)}const vO=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function ja(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,C){return!w.isUndefined(C[_])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!l&&w.isBlob(g))throw new M("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,_,C){let v=g;if(g&&!C&&typeof g=="object"){if(w.endsWith(_,"{}"))_=r?_:_.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&hO(g)||(w.isFileList(g)||w.endsWith(_,"[]"))&&(v=w.toArray(g)))return _=Rg(_),v.forEach(function(d,m){!(w.isUndefined(d)||d===null)&&t.append(s===!0?pp([_],m,o):s===null?_:_+"[]",u(d))}),!1}return Xu(g)?!0:(t.append(pp(C,_,o),u(g)),!1)}const p=[],h=Object.assign(vO,{defaultVisitor:c,convertValue:u,isVisitable:Xu});function y(g,_){if(!w.isUndefined(g)){if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));p.push(g),w.forEach(g,function(v,f){(!(w.isUndefined(v)||v===null)&&i.call(t,v,w.isString(f)?f.trim():f,_,h))===!0&&y(v,_?_.concat(f):[f])}),p.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return y(e),t}function hp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function wf(e,t){this._pairs=[],e&&ja(e,this,t)}const bg=wf.prototype;bg.append=function(t,n){this._pairs.push([t,n])};bg.toString=function(t){const n=t?function(r){return t.call(this,r,hp)}:hp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function mO(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pg(e,t,n){if(!t)return e;const r=n&&n.encode||mO,i=n&&n.serialize;let o;if(i?o=i(t,n):o=w.isURLSearchParams(t)?t.toString():new wf(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class gO{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const vp=gO,Ag={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yO=typeof URLSearchParams<"u"?URLSearchParams:wf,_O=typeof FormData<"u"?FormData:null,SO=typeof Blob<"u"?Blob:null,wO={isBrowser:!0,classes:{URLSearchParams:yO,FormData:_O,Blob:SO},protocols:["http","https","file","blob","url","data"]},Ef=typeof window<"u"&&typeof document<"u",EO=(e=>Ef&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),OO=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),kO=Ef&&window.location.href||"http://localhost",xO=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ef,hasStandardBrowserEnv:EO,hasStandardBrowserWebWorkerEnv:OO,origin:kO},Symbol.toStringTag,{value:"Module"})),mt={...xO,...wO};function CO(e,t){return ja(e,new mt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return mt.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function RO(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bO(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Tg(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&w.isArray(i)?i.length:s,l?(w.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!w.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&w.isArray(i[s])&&(i[s]=bO(i[s])),!a)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,i)=>{t(RO(r),i,n,0)}),n}return null}function PO(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Of={transitional:Ag,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=w.isObject(t);if(o&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return i?JSON.stringify(Tg(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return CO(t,this.formSerializer).toString();if((a=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ja(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),PO(t)):t}],transformResponse:[function(t){const n=this.transitional||Of.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?M.from(a,M.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{Of.headers[e]={}});const kf=Of,AO=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),TO=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&AO[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},mp=Symbol("internals");function hi(e){return e&&String(e).trim().toLowerCase()}function as(e){return e===!1||e==null?e:w.isArray(e)?e.map(as):String(e)}function NO(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jO=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ml(e,t,n,r,i){if(w.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function DO(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function IO(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Da{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const c=hi(l);if(!c)throw new Error("header name must be a non-empty string");const p=w.findKey(i,c);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||l]=as(a))}const s=(a,l)=>w.forEach(a,(u,c)=>o(u,c,l));if(w.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(w.isString(t)&&(t=t.trim())&&!jO(t))s(TO(t),n);else if(w.isHeaders(t))for(const[a,l]of t.entries())o(l,a,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=hi(t),t){const r=w.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return NO(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=hi(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ml(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=hi(s),s){const a=w.findKey(r,s);a&&(!n||Ml(r,r[a],a,n))&&(delete r[a],i=!0)}}return w.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ml(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return w.forEach(this,(i,o)=>{const s=w.findKey(r,o);if(s){n[s]=as(i),delete n[o];return}const a=t?DO(o):String(o).trim();a!==o&&delete n[o],n[a]=as(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[mp]=this[mp]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=hi(s);r[a]||(IO(i,s),r[a]=!0)}return w.isArray(t)?t.forEach(o):o(t),this}}Da.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Da.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});w.freezeMethods(Da);const gt=Da;function $l(e,t){const n=this||kf,r=t||n,i=gt.from(r.headers);let o=r.data;return w.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Ng(e){return!!(e&&e.__CANCEL__)}function ti(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits(ti,M,{__CANCEL__:!0});function jg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function LO(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function MO(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let p=o,h=0;for(;p!==i;)h+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=c&&u-c;return y?Math.round(h*1e3/y):void 0}}function $O(e,t){let n=0;const r=1e3/t;let i=null;return function(){const s=this===!0,a=Date.now();if(s||a-n>r)return i&&(clearTimeout(i),i=null),n=a,e.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),e.apply(null,arguments)),r-(a-n)))}}const Ys=(e,t,n=3)=>{let r=0;const i=MO(50,250);return $O(o=>{const s=o.loaded,a=o.lengthComputable?o.total:void 0,l=s-r,u=i(l),c=s<=a;r=s;const p={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&c?(a-s)/u:void 0,event:o,lengthComputable:a!=null};p[t?"download":"upload"]=!0,e(p)},n)},zO=mt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=w.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),UO=mt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];w.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),w.isString(r)&&s.push("path="+r),w.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FO(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function BO(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dg(e,t){return e&&!FO(t)?BO(e,t):t}const gp=e=>e instanceof gt?{...e}:e;function Xn(e,t){t=t||{};const n={};function r(u,c,p){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge.call({caseless:p},u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(u,c,p){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u,p)}else return r(u,c,p)}function o(u,c){if(!w.isUndefined(c))return r(void 0,c)}function s(u,c){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,p){if(p in t)return r(u,c);if(p in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>i(gp(u),gp(c),!0)};return w.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=l[c]||i,h=p(e[c],t[c],c);w.isUndefined(h)&&p!==a||(n[c]=h)}),n}const Ig=e=>{const t=Xn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:a}=t;t.headers=s=gt.from(s),t.url=Pg(Dg(t.baseURL,t.url),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(w.isFormData(n)){if(mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[u,...c]=l?l.split(";").map(p=>p.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(mt.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&zO(t.url))){const u=i&&o&&UO.read(o);u&&s.set(i,u)}return t},HO=typeof XMLHttpRequest<"u",VO=HO&&function(e){return new Promise(function(n,r){const i=Ig(e);let o=i.data;const s=gt.from(i.headers).normalize();let{responseType:a}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(i.method.toUpperCase(),i.url,!0),c.timeout=i.timeout;function p(){if(!c)return;const y=gt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),_={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};jg(function(v){n(v),u()},function(v){r(v),u()},_),c=null}"onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new M("Request aborted",M.ECONNABORTED,i,c)),c=null)},c.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,i,c)),c=null},c.ontimeout=function(){let g=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const _=i.transitional||Ag;i.timeoutErrorMessage&&(g=i.timeoutErrorMessage),r(new M(g,_.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,i,c)),c=null},o===void 0&&s.setContentType(null),"setRequestHeader"in c&&w.forEach(s.toJSON(),function(g,_){c.setRequestHeader(_,g)}),w.isUndefined(i.withCredentials)||(c.withCredentials=!!i.withCredentials),a&&a!=="json"&&(c.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&c.addEventListener("progress",Ys(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ys(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=y=>{c&&(r(!y||y.type?new ti(null,e,c):y),c.abort(),c=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const h=LO(i.url);if(h&&mt.protocols.indexOf(h)===-1){r(new M("Unsupported protocol "+h+":",M.ERR_BAD_REQUEST,e));return}c.send(o||null)})},WO=(e,t)=>{let n=new AbortController,r;const i=function(l){if(!r){r=!0,s();const u=l instanceof Error?l:this.reason;n.abort(u instanceof M?u:new ti(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{i(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=s,[a,()=>{o&&clearTimeout(o),o=null}]},GO=WO,KO=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},YO=async function*(e,t,n){for await(const r of e)yield*KO(ArrayBuffer.isView(r)?r:await n(String(r)),t)},yp=(e,t,n,r,i)=>{const o=YO(e,t,i);let s=0;return new ReadableStream({type:"bytes",async pull(a){const{done:l,value:u}=await o.next();if(l){a.close(),r();return}let c=u.byteLength;n&&n(s+=c),a.enqueue(new Uint8Array(u))},cancel(a){return r(a),o.return()}},{highWaterMark:2})},_p=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Ia=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Lg=Ia&&typeof ReadableStream=="function",Ju=Ia&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),qO=Lg&&(()=>{let e=!1;const t=new Request(mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Sp=64*1024,Zu=Lg&&!!(()=>{try{return w.isReadableStream(new Response("").body)}catch{}})(),qs={stream:Zu&&(e=>e.body)};Ia&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!qs[t]&&(qs[t]=w.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const QO=async e=>{if(e==null)return 0;if(w.isBlob(e))return e.size;if(w.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(w.isArrayBufferView(e))return e.byteLength;if(w.isURLSearchParams(e)&&(e=e+""),w.isString(e))return(await Ju(e)).byteLength},XO=async(e,t)=>{const n=w.toFiniteNumber(e.getContentLength());return n??QO(t)},JO=Ia&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:c,withCredentials:p="same-origin",fetchOptions:h}=Ig(e);u=u?(u+"").toLowerCase():"text";let[y,g]=i||o||s?GO([i,o],s):[],_,C;const v=()=>{!_&&setTimeout(()=>{y&&y.unsubscribe()}),_=!0};let f;try{if(l&&qO&&n!=="get"&&n!=="head"&&(f=await XO(c,r))!==0){let E=new Request(t,{method:"POST",body:r,duplex:"half"}),O;w.isFormData(r)&&(O=E.headers.get("content-type"))&&c.setContentType(O),E.body&&(r=yp(E.body,Sp,_p(f,Ys(l)),null,Ju))}w.isString(p)||(p=p?"cors":"omit"),C=new Request(t,{...h,signal:y,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let d=await fetch(C);const m=Zu&&(u==="stream"||u==="response");if(Zu&&(a||m)){const E={};["status","statusText","headers"].forEach(R=>{E[R]=d[R]});const O=w.toFiniteNumber(d.headers.get("content-length"));d=new Response(yp(d.body,Sp,a&&_p(O,Ys(a,!0)),m&&v,Ju),E)}u=u||"text";let S=await qs[w.findKey(qs,u)||"text"](d,e);return!m&&v(),g&&g(),await new Promise((E,O)=>{jg(E,O,{data:S,headers:gt.from(d.headers),status:d.status,statusText:d.statusText,config:e,request:C})})}catch(d){throw v(),d&&d.name==="TypeError"&&/fetch/i.test(d.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,C),{cause:d.cause||d}):M.from(d,d&&d.code,e,C)}}),ec={http:pO,xhr:VO,fetch:JO};w.forEach(ec,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const wp=e=>`- ${e}`,ZO=e=>w.isFunction(e)||e===null||e===!1,Mg={getAdapter:e=>{e=w.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!ZO(n)&&(r=ec[(s=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(wp).join(`
`):" "+wp(o[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ec};function zl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ti(null,e)}function Ep(e){return zl(e),e.headers=gt.from(e.headers),e.data=$l.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Mg.getAdapter(e.adapter||kf.adapter)(e).then(function(r){return zl(e),r.data=$l.call(e,e.transformResponse,r),r.headers=gt.from(r.headers),r},function(r){return Ng(r)||(zl(e),r&&r.response&&(r.response.data=$l.call(e,e.transformResponse,r.response),r.response.headers=gt.from(r.response.headers))),Promise.reject(r)})}const $g="1.7.2",xf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Op={};xf.transitional=function(t,n,r){function i(o,s){return"[Axios v"+$g+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new M(i(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!Op[s]&&(Op[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function ek(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new M("option "+o+" must be "+l,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const tc={assertOptions:ek,validators:xf},en=tc.validators;class Qs{constructor(t){this.defaults=t,this.interceptors={request:new vp,response:new vp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Xn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&tc.assertOptions(r,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:tc.assertOptions(i,{encode:en.function,serialize:en.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&w.merge(o.common,o[n.method]);o&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=gt.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,p=0,h;if(!l){const g=[Ep.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);p<h;)c=c.then(g[p++],g[p++]);return c}h=a.length;let y=n;for(p=0;p<h;){const g=a[p++],_=a[p++];try{y=g(y)}catch(C){_.call(this,C);break}}try{c=Ep.call(this,y)}catch(g){return Promise.reject(g)}for(p=0,h=u.length;p<h;)c=c.then(u[p++],u[p++]);return c}getUri(t){t=Xn(this.defaults,t);const n=Dg(t.baseURL,t.url);return Pg(n,t.params,t.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(t){Qs.prototype[t]=function(n,r){return this.request(Xn(r||{},{method:t,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Xn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Qs.prototype[t]=n(),Qs.prototype[t+"Form"]=n(!0)});const ls=Qs;class Cf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new ti(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Cf(function(i){t=i}),cancel:t}}}const tk=Cf;function nk(e){return function(n){return e.apply(null,n)}}function rk(e){return w.isObject(e)&&e.isAxiosError===!0}const nc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nc).forEach(([e,t])=>{nc[t]=e});const ik=nc;function zg(e){const t=new ls(e),n=gg(ls.prototype.request,t);return w.extend(n,ls.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return zg(Xn(e,i))},n}const ue=zg(kf);ue.Axios=ls;ue.CanceledError=ti;ue.CancelToken=tk;ue.isCancel=Ng;ue.VERSION=$g;ue.toFormData=ja;ue.AxiosError=M;ue.Cancel=ue.CanceledError;ue.all=function(t){return Promise.all(t)};ue.spread=nk;ue.isAxiosError=rk;ue.mergeConfig=Xn;ue.AxiosHeaders=gt;ue.formToJSON=e=>Tg(w.isHTMLForm(e)?new FormData(e):e);ue.getAdapter=Mg.getAdapter;ue.HttpStatusCode=ik;ue.default=ue;const Ug=ue;/*! js-cookie v3.0.5 | MIT */function Bo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var ok={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function rc(e,t){function n(i,o,s){if(!(typeof document>"u")){s=Bo({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in s)s[l]&&(a+="; "+l,s[l]!==!0&&(a+="="+s[l].split(";")[0]));return document.cookie=i+"="+e.write(o,i)+a}}function r(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var o=document.cookie?document.cookie.split("; "):[],s={},a=0;a<o.length;a++){var l=o[a].split("="),u=l.slice(1).join("=");try{var c=decodeURIComponent(l[0]);if(s[c]=e.read(u,c),i===c)break}catch{}}return i?s[i]:s}}return Object.create({set:n,get:r,remove:function(i,o){n(i,"",Bo({},o,{expires:-1}))},withAttributes:function(i){return rc(this.converter,Bo({},this.attributes,i))},withConverter:function(i){return rc(Bo({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var Fg=rc(ok,{path:"/"});function sk(e){var t=[];if(e.length===0)return"";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var i=e[r];if(typeof i!="string")throw new TypeError("Url must be a string. Received "+i);i!==""&&(r>0&&(i=i.replace(/^[\/]+/,"")),r<e.length-1?i=i.replace(/[\/]+$/,""):i=i.replace(/[\/]+$/,"/"),t.push(i))}var o=t.join("/");o=o.replace(/\/(\?|&|#[^!])/g,"$1");var s=o.split("?");return o=s.shift()+(s.length>0?"?":"")+s.join("&"),o}function La(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),sk(e)}const ak=bE({host:"https://evt.uchi.ru"}),Bg=window.location.origin,lk=Bg.includes("localhost");var Kp;const Ma=(Kp={}.VITE_APP_HOST_API)!=null&&Kp.length?{}.VITE_APP_HOST_API:lk?"http://localhost:3000":Bg,Hg=e=>{const t=new RegExp(/(\/active_user\/api)/);return e.interceptors.request.use(n=>([n.baseURL,n.url].some(i=>t.test(i||""))&&window.jwtProxy.state.authenticated&&(n.headers.Authorization=`Bearer ${window.jwtProxy.state.rawToken}`),n)),e.interceptors.response.use(n=>n,n=>(ak.sendBeacon("uchiru.page_events",{full_url:n.config.url,created_at:"%%time%%",user_id:0,user_type:"teacher",guest_id:0,event_source:"lk_teacher",event_type:n.response.status.toString(),event_info:"api_error",event_info_type:null,cd1:"",cd2:"",cd3:""},{version:10}),Promise.reject(n))),e};var Yp,qp;Hg(Ug.create({withCredentials:!0,headers:{"X-CSRF-TOKEN":decodeURIComponent(Fg.get("CSRF-TOKEN")||""),Authorization:`Bearer ${(qp=(Yp=window.jwtProxy)==null?void 0:Yp.state)==null?void 0:qp.rawToken}`}}));const Vg=(e="/api/teachers/lk/v1/")=>{var t,n;return Hg(Ug.create({baseURL:La(Ma,e),withCredentials:!0,headers:{"X-CSRF-TOKEN":Fg.get("CSRF-TOKEN")||"",Authorization:`Bearer ${(n=(t=window.jwtProxy)==null?void 0:t.state)==null?void 0:n.rawToken}`}}))},uk=()=>Vg().get(La(Ma,"/api/teachers/lk/v1/classes")).then(e=>e.data),ck=e=>{let t={};try{t=JSON.parse(e)}catch(n){console.error(n)}return t},Wg="uchiru-teacher-header";function fk(e){sessionStorage.setItem(Wg,JSON.stringify(e))}function ic(){const e=sessionStorage.getItem(Wg);return e?ck(e):{}}const kp=()=>({classbookId:ic().classbookId,className:ic().className}),dk=(e,t)=>{fk({...ic(),classbookId:e,className:t})},pk="/sidebar-teacher/assets/bio-c65e2a5f.svg",hk="/sidebar-teacher/assets/chemistry-8b4cd5c3.svg",vk="/sidebar-teacher/assets/eng-9f35beea.svg",mk="/sidebar-teacher/assets/env-9b3b3ef8.svg",gk="/sidebar-teacher/assets/geo-4c44788a.svg",yk="/sidebar-teacher/assets/history-6369dd4c.svg",_k="/sidebar-teacher/assets/lit_group-b52fdbcf.svg",Sk="/sidebar-teacher/assets/literature-8b85407b.svg",xp="/sidebar-teacher/assets/math-a2b3a8f3.svg",wk="/sidebar-teacher/assets/math_5_11-702af6ee.svg",Ek="/sidebar-teacher/assets/national_history-e325e9b3.svg",Ok="/sidebar-teacher/assets/oge-736ad4ca.svg",kk="/sidebar-teacher/assets/physics-a55498d0.svg",xk="/sidebar-teacher/assets/prog-fc2f5b69.svg",Ck="/sidebar-teacher/assets/prog-fc2f5b69.svg",Cp="/sidebar-teacher/assets/python_5_11-300e9b1c.svg",Rk="/sidebar-teacher/assets/rus-82f28755.svg",bk="/sidebar-teacher/assets/rus_5_11-e6cce101.svg",Pk="/sidebar-teacher/assets/soc-daf33adf.svg",T={MATH:"math",RUS:"rus",ENG:"eng",ENV:"env",PROG:"prog",VPR:"vpr",EGE:"ege",OGE:"oge",BIO:"bio",GEOMETRY:"geometry",PLAN:"plan",SAFE:"safe",ADVANCED_MATH:"advanced_math",MODERN_BIOLOGY:"modern_biology",MODERN_LITERATURE:"modern_literature",MODERN_OBSHESTVO:"modern_obshestvo",MODERN_HISTORY:"modern_history",MODERN_PHYSICS:"modern_physics",MODERN_GEO:"modern_geo",MODERN_CHEMISTRY:"modern_chemistry",MODERN_NATIONAL_HISTORY:"modern_national_history",PROGPYTHON:"progpython",FIN_GRAM:"fingram",FUNC_GRAM:"functgram",ETIQUETTE_VIDEO:"etiquette_video",MODERN_ANATOMY:"modern_anatomy",HOW_TO_LEARN:"how_to_learn",CUSTOM_SUBJECT:"custom_subject",INFORMATICS:"informatics",LIT_GROUP:"lit_group",READ:"read"},tt={PROGPYTHON:"progpython_5_11",PROG:"prog_5_11",MATH:"math_5_11",RUS:"rus_5_11"},Ak=e=>{switch(e){case T.MATH:case tt.MATH:return{nominative:"Математика",dative:"по математике",accusative:"математику"};case T.GEOMETRY:return{nominative:"Геометрия",dative:"по геометрии",accusative:"геометрию"};case T.RUS:case tt.RUS:return{nominative:"Русский язык",dative:"по русскому языку",accusative:"русский язык"};case T.ENG:return{nominative:"Английский язык",dative:"по английскому языку",accusative:"английский язык"};case T.ENV:return{nominative:"Окружающий мир",dative:"по окружающему миру",accusative:"окружающий мир"};case T.BIO:return{nominative:"Биология",dative:"по биологии",accusative:"биологию"};case T.INFORMATICS:return{nominative:"Информатика",dative:"по информатике",accusative:"информатику"};case T.MODERN_GEO:return{nominative:"География",dative:"по географии",accusative:"географию"};case T.MODERN_PHYSICS:return{nominative:"Физика",dative:"по физике",accusative:"физику"};case T.MODERN_CHEMISTRY:return{nominative:"Химия",dative:"по химии",accusative:"химию"};case T.MODERN_HISTORY:return{nominative:"История",dative:"по истории",accusative:"историю"};case T.MODERN_NATIONAL_HISTORY:return{nominative:"История России",dative:"по истории России",accusative:"историю России"};case T.MODERN_OBSHESTVO:return{nominative:"Обществознание",dative:"по обществознанию",accusative:"обществознание"};case T.PROG:case tt.PROG:return{nominative:"Программирование",dative:"по программированию",accusative:"программирование"};case T.PROGPYTHON:case tt.PROGPYTHON:return{nominative:"Программирование на Python",dative:"по программированию на Python",accusative:"программирование на Python"};case T.VPR:return{nominative:"ВПР",dative:"по ВПР",accusative:"ВПР"};case T.EGE:return{nominative:"ЕГЭ",dative:"по ЕГЭ",accusative:"ЕГЭ"};case T.OGE:return{nominative:"ОГЭ",dative:"по ОГЭ",accusative:"ОГЭ"};case T.FIN_GRAM:return{nominative:"Финансовая грамотность",dative:"по финансовой грамотности",accusative:"финансовую грамотность"};case T.FUNC_GRAM:return{nominative:"Функциональная грамотность",dative:"по функциональной грамотности",accusative:"функциональную грамотность"};case T.PLAN:return{nominative:"Планирование и достижение целей",dative:"по планированию",accusative:"планирование"};case T.ADVANCED_MATH:return{nominative:"Продвинутая математика",dative:"по продвинутой математике",accusative:"продвинутую математику"};case T.MODERN_BIOLOGY:return{nominative:"Биология",dative:"по биологии",accusative:"биологию"};case T.MODERN_LITERATURE:return{nominative:"Литература",dative:"по литературе",accusative:"литературу"};case T.READ:return{nominative:"Литературное чтение",dative:"по литературному чтению",accusative:"литературное чтение"};case T.ETIQUETTE_VIDEO:return{nominative:"Этикет",dative:"по этикету",accusative:"этикет"};case T.MODERN_ANATOMY:return{nominative:"Мое тело",dative:'по предмету "Мое тело"',accusative:'предмет "Мое тело"'};case T.HOW_TO_LEARN:return{nominative:"Уроки для мозга",dative:'по предмету "Уроки для мозга"',accusative:'предмет "Уроки для мозга"'};case T.SAFE:return{nominative:"Жизнь без опасностей",dative:'по предмету "Жизнь без опасностей"',accusative:'предмет "Жизнь без опасностей"'};case T.LIT_GROUP:return{nominative:"Литературный кружок",dative:'по предмету "Литературный кружок"',accusative:'предмет "Литературный кружок"'};case T.CUSTOM_SUBJECT:return{nominative:"Другой предмет",dative:"по другому предмету",accusative:"другой предмет"};default:return{nominative:"",dative:"",accusative:""}}},Rp={1:"math",2:"rus",5:"eng",6:"env",7:"prog",8:"bio",14:"vpr",15:"ege",16:"oge",18:"plan",19:"safe",21:"advanced_math",24:"fingram",25:"literature",26:"geometry",30:"how_to_learn",31:"functgram",32:"modern_biology",33:"modern_anatomy",34:"etiquette_video",36:"modern_literature",37:"modern_obshestvo",38:"modern_history",39:"modern_physics",40:"modern_geo",43:"modern_chemistry",47:"modern_national_history",77:"progpython",1e3:"custom_subject"};Object.keys(Rp).reduce((e,t)=>({...e,[Rp[t]]:t}),{});const bp={[T.MATH]:xp,[tt.MATH]:wk,[T.GEOMETRY]:xp,[T.RUS]:Rk,[tt.RUS]:bk,[T.MODERN_GEO]:gk,[T.ENV]:mk,[T.BIO]:pk,[T.MODERN_LITERATURE]:Sk,[T.LIT_GROUP]:_k,[T.ENG]:vk,[T.PROG]:xk,[tt.PROG]:Cp,[T.PROGPYTHON]:Ck,[tt.PROGPYTHON]:Cp,[T.MODERN_PHYSICS]:kk,[T.MODERN_CHEMISTRY]:hk,[T.MODERN_HISTORY]:yk,[T.MODERN_NATIONAL_HISTORY]:Ek,[T.MODERN_OBSHESTVO]:Pk,[T.OGE]:Ok};class Tk{constructor(t){ee(this,"loading",!1);ee(this,"error");ee(this,"data",[]);ee(this,"setLoading",t=>{this.loading=t});ee(this,"setGroups",t=>{let n=[];try{n=t.class_books.map(r=>({...r,groups:t.groups.filter(i=>i.class_code===r.class_code)}))}catch(r){console.log("error while deserializing fetchGroupsAPI",r)}this.data=n});ee(this,"fetchGroups",async()=>{this.data.length||(this.setLoading(!0),await uk().then(t=>this.setGroups(t)).catch(t=>{this.error=t}).finally(()=>{this.setLoading(!1)}))});this.root=t,ka(this)}get subjectsList(){const t=(n,r)=>{console.log("parallel",r);const i=r>4;switch(n){case T.PROGPYTHON:return i?tt.PROGPYTHON:T.PROGPYTHON;case T.PROG:return i?tt.PROG:T.PROG;case T.MATH:return i?tt.MATH:T.MATH;case T.RUS:return i?tt.RUS:T.MATH;default:return n}};return console.log("SubjectIcon",bp),Object.entries(bp).reduce((n,[r,i])=>{var s;const o=(s=this.currentClassBook)==null?void 0:s.groups.find(a=>a.subject===r);return o&&n.push({id:t(o.subject,o.parallel),link:`/teachers/lk/subjects/${o.subject}`,icon:i,name:Ak(o.subject).nominative}),n},[])}get currentClassBook(){const t=kp();return this.data.find(n=>n.id===t.classbookId)||this.data[0]}get currentClassBookName(){var n,r;const t=kp();return t.className?t.className:this.currentClassBook?`${(n=this.currentClassBook)==null?void 0:n.parallel} «${(r=this.currentClassBook)==null?void 0:r.letter}»`:""}get classBookList(){return this.data.map(t=>{const n=`${t.parallel} «${t.letter}»`;return{id:"class_book",name:n,onClick:()=>{dk(t.id,n),window.location.reload()}}})}}const Nk=()=>Vg().get(La(Ma,"/profiling/api/v1/users/me")).then(e=>e.data),jk=()=>fetch(La(Ma,"/active_user/api/v2/teacher/ranks"),{credentials:"include"}).then(e=>e.json()).catch(e=>console.error(e));class Dk{constructor(t){ee(this,"loading",!1);ee(this,"error");ee(this,"score");ee(this,"setActiveTeacherRanks",(t=void 0)=>{this.score=t});ee(this,"setLoading",t=>{this.loading=t});ee(this,"fetchActiveTeacherRanks",async()=>{try{this.setLoading(!0);const t=await jk();this.setActiveTeacherRanks(t),this.setLoading(!1)}catch(t){this.error=t}finally{this.setLoading(!1)}});this.root=t,ka(this)}get currentScore(){var r,i;const t=(r=this.root.groups.currentClassBook)==null?void 0:r.parallel,n=t&&t>4?"highschool":"elementary";return(i=this.score)==null?void 0:i[n].region_rank.score}}class Ik{constructor(t){ee(this,"loading",!1);ee(this,"error");ee(this,"profile");ee(this,"setProfile",t=>{this.profile=t});ee(this,"setLoading",t=>{this.loading=t});ee(this,"fetchUserData",async()=>{this.setLoading(!0);try{const{data:t}=await Nk();t?this.setProfile(t.attributes):this.setProfile(null)}catch(t){this.setProfile(null),this.error=t}finally{this.setLoading(!1)}});this.root=t,ka(this)}get profileItemslist(){const{profile:t}=this,n=[{id:"profile",link:"/teachers-account"},{id:"exit",link:"/logout"},{id:"termuse",link:"/termuse"},{id:"privacy",link:"/privacy"}];return t!=null&&t.is_headmaster&&n.splice(1,0,{id:"headteacher",link:"/headteacher"}),n}}class Gg{constructor(){ee(this,"user",new Ik(this));ee(this,"ranks",new Dk(this));ee(this,"groups",new Tk(this));ka(this)}}const Kg=W.createContext(new Gg),$a=()=>W.useContext(Kg),Lk="/sidebar-teacher/assets/uchi-aa75d0eb.svg",Yg="/sidebar-teacher/assets/right_bold_arrow-c2a5e414.svg",Mk="_skeletonBox_10ycv_1",$k="_shine_10ycv_7",zk="_shimmer_10ycv_1",oc={skeletonBox:Mk,"_height-40":"__height-40_10ycv_4",shine:$k,shimmer:zk},Uk=ma(oc),Fk=({height:e=40})=>A.jsx("div",{className:Uk(oc.skeletonBox,{height:e}),children:A.jsx("div",{className:oc.shine})}),Bk="/sidebar-teacher/assets/app_uchiru-28a35bc7.svg",Pp="/sidebar-teacher/assets/chat-7de352d2.svg",Hk="/sidebar-teacher/assets/dropdown_exit-e6b39d92.svg",Vk="/sidebar-teacher/assets/headteacher-6f1b24b3.svg",Wk="/sidebar-teacher/assets/profile-715067d4.svg",Gk="/sidebar-teacher/assets/subjects-2e1085d8.svg",Kk=({name:e})=>({subjects:{name:"Предметы",icon:Gk},app_uchiru:{name:"Приложение Учи.ру",icon:Bk},chat:{name:"Чат",icon:Pp},class_book:{name:e,icon:Pp},profile:{name:"Профиль",icon:Wk},headteacher:{name:"Перейти в кабинет завуча",icon:Vk},exit:{name:"Выход",icon:Hk},termuse:{name:"Условия использования",icon:null},privacy:{name:"Конфиденциальность",icon:null}}),Yk="_sidebarItem_zt6o7_1",qk="_sidebarItem_content_zt6o7_9",Qk="_sidebarItem_content_icon_zt6o7_19",Xk="_sidebarItem_content_text_zt6o7_26",Jk="_sidebarItem_content_arrow_zt6o7_38",vi={sidebarItem:Yk,sidebarItem_content:qk,sidebarItem_content_icon:Qk,sidebarItem_content_text:Xk,sidebarItem_content_arrow:Jk},qg=({id:e,withArrow:t=!1,name:n,icon:r=null,loading:i=!1})=>{const o=Kk({name:n})[e]||{name:n,icon:r};return console.log("item",o),!i&&!o.name?null:i&&!o.name?A.jsx(Fk,{height:40}):A.jsx("div",{className:vi.sidebarItem,children:A.jsxs("div",{className:vi.sidebarItem_content,children:[o.icon&&A.jsx("div",{className:vi.sidebarItem_content_icon,children:A.jsx("img",{src:o.icon,alt:o.name})}),A.jsx("div",{className:vi.sidebarItem_content_text,children:o.name}),t&&A.jsx("div",{className:vi.sidebarItem_content_arrow,children:A.jsx("img",{src:Yg,width:12,height:12,alt:"arrow"})})]})})},Zk="_sidebarItem_ugsye_1",e2="_sidebarItem_content_ugsye_9",t2="_sidebarItem_content_icon_ugsye_20",n2="_sidebarItem_content_text_ugsye_24",r2="_sidebarItem_content_arrow_ugsye_36",i2="__isActive_ugsye_42",o2={sidebarItem:Zk,sidebarItem_content:e2,sidebarItem_content_icon:t2,sidebarItem_content_text:n2,sidebarItem_content_arrow:r2,_isActive:i2},$t=({id:e,link:t,qaMarker:n,name:r,onClick:i,icon:o,isExternal:s=!1})=>{const a=l=>{if(l.preventDefault(),typeof i=="function")return i();window.navigate&&!s&&t?window.navigate(t):window.location.href=t||""};return A.jsx("div",{className:o2.sidebarItem,children:A.jsx("a",{href:t,onClick:a,"data-qa-type":"link","data-qa-marker":n||e,children:A.jsx(qg,{id:e,name:r,icon:o})})})},s2="_sidebarFooter_1g0nv_1",a2={sidebarFooter:s2},l2=()=>A.jsxs("div",{className:a2.sidebarFooter,children:[A.jsx($t,{id:"app_uchiru",link:"/"}),A.jsx($t,{id:"chat",link:"/"})]});var u2=Object.defineProperty,c2=(e,t,n)=>t in e?u2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t,n)=>(c2(e,typeof t!="symbol"?t+"":t,n),n),Qg={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function f2(){if(Ap)return mi;Ap=1;var e=wn,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(a,l,u){var c,p={},h=null,y=null;u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),l.ref!==void 0&&(y=l.ref);for(c in l)r.call(l,c)&&!o.hasOwnProperty(c)&&(p[c]=l[c]);if(a&&a.defaultProps)for(c in l=a.defaultProps,l)p[c]===void 0&&(p[c]=l[c]);return{$$typeof:t,type:a,key:h,ref:y,props:p,_owner:i.current}}return mi.Fragment=n,mi.jsx=s,mi.jsxs=s,mi}Qg.exports=f2();var tn=Qg.exports,Ie=function(){return Ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ie.apply(this,arguments)};function Xs(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var J="-ms-",ji="-moz-",V="-webkit-",Xg="comm",za="rule",Rf="decl",d2="@import",Jg="@keyframes",p2="@layer",Zg=Math.abs,bf=String.fromCharCode,sc=Object.assign;function h2(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function e0(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function us(e,t,n){return e.indexOf(t,n)}function pe(e,t){return e.charCodeAt(t)|0}function Br(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function t0(e){return e.length}function wi(e,t){return t.push(e),e}function v2(e,t){return e.map(t).join("")}function Tp(e,t){return e.filter(function(n){return!Lt(n,t)})}var Ua=1,Hr=1,n0=0,st=0,ae=0,ni="";function Fa(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ua,column:Hr,length:s,return:"",siblings:a}}function nn(e,t){return sc(Fa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sr(e){for(;e.root;)e=nn(e.root,{children:[e]});wi(e,e.siblings)}function m2(){return ae}function g2(){return ae=st>0?pe(ni,--st):0,Hr--,ae===10&&(Hr=1,Ua--),ae}function yt(){return ae=st<n0?pe(ni,st++):0,Hr++,ae===10&&(Hr=1,Ua++),ae}function Un(){return pe(ni,st)}function cs(){return st}function Ba(e,t){return Br(ni,e,t)}function ac(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y2(e){return Ua=Hr=1,n0=xt(ni=e),st=0,[]}function _2(e){return ni="",e}function Ul(e){return e0(Ba(st-1,lc(e===91?e+2:e===40?e+1:e)))}function S2(e){for(;(ae=Un())&&ae<33;)yt();return ac(e)>2||ac(ae)>3?"":" "}function w2(e,t){for(;--t&&yt()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Ba(e,cs()+(t<6&&Un()==32&&yt()==32))}function lc(e){for(;yt();)switch(ae){case e:return st;case 34:case 39:e!==34&&e!==39&&lc(ae);break;case 40:e===41&&lc(e);break;case 92:yt();break}return st}function E2(e,t){for(;yt()&&e+ae!==57&&!(e+ae===84&&Un()===47););return"/*"+Ba(t,st-1)+"*"+bf(e===47?e:yt())}function O2(e){for(;!ac(Un());)yt();return Ba(e,st)}function k2(e){return _2(fs("",null,null,null,[""],e=y2(e),0,[0],e))}function fs(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,p=s,h=0,y=0,g=0,_=1,C=1,v=1,f=0,d="",m=i,S=o,E=r,O=d;C;)switch(g=f,f=yt()){case 40:if(g!=108&&pe(O,p-1)==58){us(O+=$(Ul(f),"&","&\f"),"&\f",Zg(u?a[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:O+=Ul(f);break;case 9:case 10:case 13:case 32:O+=S2(g);break;case 92:O+=w2(cs()-1,7);continue;case 47:switch(Un()){case 42:case 47:wi(x2(E2(yt(),cs()),t,n,l),l);break;default:O+="/"}break;case 123*_:a[u++]=xt(O)*v;case 125*_:case 59:case 0:switch(f){case 0:case 125:C=0;case 59+c:v==-1&&(O=$(O,/\f/g,"")),y>0&&xt(O)-p&&wi(y>32?jp(O+";",r,n,p-1,l):jp($(O," ","")+";",r,n,p-2,l),l);break;case 59:O+=";";default:if(wi(E=Np(O,t,n,u,c,i,a,d,m=[],S=[],p,o),o),f===123)if(c===0)fs(O,t,E,E,m,o,p,a,S);else switch(h===99&&pe(O,3)===110?100:h){case 100:case 108:case 109:case 115:fs(e,E,E,r&&wi(Np(e,E,E,0,0,i,a,d,i,m=[],p,S),S),i,S,p,a,r?m:S);break;default:fs(O,E,E,E,[""],S,0,a,S)}}u=c=y=0,_=v=1,d=O="",p=s;break;case 58:p=1+xt(O),y=g;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&g2()==125)continue}switch(O+=bf(f),f*_){case 38:v=c>0?1:(O+="\f",-1);break;case 44:a[u++]=(xt(O)-1)*v,v=1;break;case 64:Un()===45&&(O+=Ul(yt())),h=Un(),c=p=xt(d=O+=O2(cs())),f++;break;case 45:g===45&&xt(O)==2&&(_=0)}}return o}function Np(e,t,n,r,i,o,s,a,l,u,c,p){for(var h=i-1,y=i===0?o:[""],g=t0(y),_=0,C=0,v=0;_<r;++_)for(var f=0,d=Br(e,h+1,h=Zg(C=s[_])),m=e;f<g;++f)(m=e0(C>0?y[f]+" "+d:$(d,/&\f/g,y[f])))&&(l[v++]=m);return Fa(e,t,n,i===0?za:a,l,u,c,p)}function x2(e,t,n,r){return Fa(e,t,n,Xg,bf(m2()),Br(e,2,-2),0,r)}function jp(e,t,n,r,i){return Fa(e,t,n,Rf,Br(e,0,r),Br(e,r+1,-1),r,i)}function r0(e,t,n){switch(h2(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return ji+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+ji+e+J+e+e;case 5936:switch(pe(e,t+11)){case 114:return V+e+J+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+J+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+J+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+J+e+e;case 6165:return V+e+J+"flex-"+e+e;case 5187:return V+e+$(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return V+e+J+"flex-item-"+$(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":J+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return V+e+J+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+J+$(e,"shrink","negative")+e;case 5292:return V+e+J+$(e,"basis","preferred-size")+e;case 6060:return V+"box-"+$(e,"-grow","")+V+e+J+$(e,"grow","positive")+e;case 4554:return V+$(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return J+"grid-column-align"+Br(e,t)+e;break;case 2592:case 3360:return J+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~us(e+(n=n[t].value),"span",0)?e:J+$(e,"-start","")+e+J+"grid-row-span:"+(~us(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":J+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:J+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+ji+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~us(e,"stretch",0)?r0($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return J+i+":"+o+u+(s?J+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(pe(e,t+6)===121)return $(e,":",":"+V)+e;break;case 6444:switch(pe(e,pe(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(pe(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+J+"$2box$3")+e;case 100:return $(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Js(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function C2(e,t,n,r){switch(e.type){case p2:if(e.children.length)break;case d2:case Rf:return e.return=e.return||e.value;case Xg:return"";case Jg:return e.return=e.value+"{"+Js(e.children,r)+"}";case za:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Js(e.children,r))?e.return=e.value+"{"+n+"}":""}function R2(e){var t=t0(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function b2(e){return function(t){t.root||(t=t.return)&&e(t)}}function P2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Rf:e.return=r0(e.value,e.length,n);return;case Jg:return Js([nn(e,{value:$(e.value,"@","@"+V)})],r);case za:if(e.length)return v2(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(nn(e,{props:[$(i,/:(read-\w+)/,":"+ji+"$1")]})),sr(nn(e,{props:[i]})),sc(e,{props:Tp(n,r)});break;case"::placeholder":sr(nn(e,{props:[$(i,/:(plac\w+)/,":"+V+"input-$1")]})),sr(nn(e,{props:[$(i,/:(plac\w+)/,":"+ji+"$1")]})),sr(nn(e,{props:[$(i,/:(plac\w+)/,J+"input-$1")]})),sr(nn(e,{props:[i]})),sc(e,{props:Tp(n,r)});break}return""})}}var A2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",i0="active",o0="data-styled-version",Ha="6.1.8",Pf=`/*!sc*/
`,Af=typeof window<"u"&&"HTMLElement"in window,T2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Va=Object.freeze([]),Wr=Object.freeze({});function N2(e,t,n){return n===void 0&&(n=Wr),e.theme!==n.theme&&e.theme||t||n.theme}var s0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),j2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D2=/(^-|-$)/g;function Dp(e){return e.replace(j2,"-").replace(D2,"")}var I2=/(a)(d)/gi,Ho=52,Ip=function(e){return String.fromCharCode(e+(e>25?39:97))};function uc(e){var t,n="";for(t=Math.abs(e);t>Ho;t=t/Ho|0)n=Ip(t%Ho)+n;return(Ip(t%Ho)+n).replace(I2,"$1-$2")}var Fl,a0=5381,Er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},l0=function(e){return Er(a0,e)};function L2(e){return uc(l0(e)>>>0)}function M2(e){return e.displayName||e.name||"Component"}function Bl(e){return typeof e=="string"&&!0}var u0=typeof Symbol=="function"&&Symbol.for,c0=u0?Symbol.for("react.memo"):60115,$2=u0?Symbol.for("react.forward_ref"):60112,z2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F2=((Fl={})[$2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fl[c0]=f0,Fl);function Lp(e){return("type"in(t=e)&&t.type.$$typeof)===c0?f0:"$$typeof"in e?F2[e.$$typeof]:z2;var t}var B2=Object.defineProperty,H2=Object.getOwnPropertyNames,Mp=Object.getOwnPropertySymbols,V2=Object.getOwnPropertyDescriptor,W2=Object.getPrototypeOf,$p=Object.prototype;function d0(e,t,n){if(typeof t!="string"){if($p){var r=W2(t);r&&r!==$p&&d0(e,r,n)}var i=H2(t);Mp&&(i=i.concat(Mp(t)));for(var o=Lp(e),s=Lp(t),a=0;a<i.length;++a){var l=i[a];if(!(l in U2||n&&n[l]||s&&l in s||o&&l in o)){var u=V2(t,l);try{B2(e,l,u)}catch{}}}}return e}function Gr(e){return typeof e=="function"}function Tf(e){return typeof e=="object"&&"styledComponentId"in e}function Ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zp(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function no(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cc(e,t,n){if(n===void 0&&(n=!1),!n&&!no(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cc(e[r],t[r]);else if(no(t))for(var r in t)e[r]=cc(e[r],t[r]);return e}function Nf(e,t){Object.defineProperty(e,"toString",{value:t})}function yo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var G2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw yo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Pf);return n},e}(),ds=new Map,Zs=new Map,ps=1,Vo=function(e){if(ds.has(e))return ds.get(e);for(;Zs.has(ps);)ps++;var t=ps++;return ds.set(e,t),Zs.set(t,e),t},K2=function(e,t){ps=t+1,ds.set(e,t),Zs.set(t,e)},Y2="style[".concat(Vr,"][").concat(o0,'="').concat(Ha,'"]'),q2=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Q2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},X2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Pf),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(q2);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(K2(c,u),Q2(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function J2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var p0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vr,i0),r.setAttribute(o0,Ha);var s=J2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Z2=function(){function e(t){this.element=p0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw yo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ex=function(){function e(t){this.element=p0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Up=Af,nx={isServer:!Af,useCSSOMInjection:!T2},h0=function(){function e(t,n,r){t===void 0&&(t=Wr),n===void 0&&(n={});var i=this;this.options=Ie(Ie({},nx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Af&&Up&&(Up=!1,function(o){for(var s=document.querySelectorAll(Y2),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Vr)!==i0&&(X2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Nf(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(p){var h=function(v){return Zs.get(v)}(p);if(h===void 0)return"continue";var y=o.names.get(h),g=s.getGroup(p);if(y===void 0||g.length===0)return"continue";var _="".concat(Vr,".g").concat(p,'[id="').concat(h,'"]'),C="";y!==void 0&&y.forEach(function(v){v.length>0&&(C+="".concat(v,","))}),l+="".concat(g).concat(_,'{content:"').concat(C,'"}').concat(Pf)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Vo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new tx(i):r?new Z2(i):new ex(i)}(this.options),new G2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rx=/&/g,ix=/^\s*\/\/.*$/gm;function v0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=v0(n.children,t)),n})}function ox(e){var t,n,r,i=e===void 0?Wr:e,o=i.options,s=o===void 0?Wr:o,a=i.plugins,l=a===void 0?Va:a,u=function(h,y,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===za&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(rx,n).replace(r,u))}),s.prefix&&c.push(P2),c.push(C2);var p=function(h,y,g,_){y===void 0&&(y=""),g===void 0&&(g=""),_===void 0&&(_="&"),t=_,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var C=h.replace(ix,""),v=k2(g||y?"".concat(g," ").concat(y," { ").concat(C," }"):C);s.namespace&&(v=v0(v,s.namespace));var f=[];return Js(v,R2(c.concat(b2(function(d){return f.push(d)})))),f};return p.hash=l.length?l.reduce(function(h,y){return y.name||yo(15),Er(h,y.name)},a0).toString():"",p}var sx=new h0,fc=ox(),m0=wn.createContext({shouldForwardProp:void 0,styleSheet:sx,stylis:fc});m0.Consumer;wn.createContext(void 0);function Fp(){return W.useContext(m0)}var ax=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=fc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Nf(this,function(){throw yo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=fc),this.name+t.hash},e}(),lx=function(e){return e>="A"&&e<="Z"};function Bp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;lx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var g0=function(e){return e==null||e===!1||e===""},y0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!g0(o)&&(Array.isArray(o)&&o.isCss||Gr(o)?r.push("".concat(Bp(i),":"),o,";"):no(o)?r.push.apply(r,Xs(Xs(["".concat(i," {")],y0(o),!1),["}"],!1)):r.push("".concat(Bp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in A2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fn(e,t,n,r){if(g0(e))return[];if(Tf(e))return[".".concat(e.styledComponentId)];if(Gr(e)){if(!Gr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Fn(i,t,n,r)}var o;return e instanceof ax?n?(e.inject(n,r),[e.getName(r)]):[e]:no(e)?y0(e):Array.isArray(e)?Array.prototype.concat.apply(Va,e.map(function(s){return Fn(s,t,n,r)})):[e.toString()]}function ux(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gr(n)&&!Tf(n))return!1}return!0}var cx=l0(Ha),fx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ux(t),this.componentId=n,this.baseHash=Er(cx,n),this.baseStyle=r,h0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ln(i,this.staticRulesId);else{var o=zp(Fn(this.rules,t,n,r)),s=uc(Er(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Ln(i,s),this.staticRulesId=s}else{for(var l=Er(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var h=zp(Fn(p,t,n,r));l=Er(l,h+c),u+=h}}if(u){var y=uc(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Ln(i,y)}}return i},e}(),_0=wn.createContext(void 0);_0.Consumer;var Hl={};function dx(e,t,n){var r=Tf(e),i=e,o=!Bl(e),s=t.attrs,a=s===void 0?Va:s,l=t.componentId,u=l===void 0?function(m,S){var E=typeof m!="string"?"sc":Dp(m);Hl[E]=(Hl[E]||0)+1;var O="".concat(E,"-").concat(L2(Ha+E+Hl[E]));return S?"".concat(S,"-").concat(O):O}(t.displayName,t.parentComponentId):l,c=t.displayName,p=c===void 0?function(m){return Bl(m)?"styled.".concat(m):"Styled(".concat(M2(m),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Dp(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;g=function(m,S){return _(m,S)&&C(m,S)}}else g=_}var v=new fx(n,h,r?i.componentStyle:void 0);function f(m,S){return function(E,O,R){var I=E.attrs,L=E.componentStyle,ve=E.defaultProps,jt=E.foldedComponentIds,ze=E.styledComponentId,_o=E.target,Ga=wn.useContext(_0),ri=Fp(),bn=E.shouldForwardProp||ri.shouldForwardProp,b=N2(O,Ga,ve)||Wr,N=function(Xt,Ue,Dt){for(var ii,An=Ie(Ie({},Ue),{className:void 0,theme:Dt}),Ka=0;Ka<Xt.length;Ka+=1){var So=Gr(ii=Xt[Ka])?ii(An):ii;for(var Jt in So)An[Jt]=Jt==="className"?Ln(An[Jt],So[Jt]):Jt==="style"?Ie(Ie({},An[Jt]),So[Jt]):So[Jt]}return Ue.className&&(An.className=Ln(An.className,Ue.className)),An}(I,O,b),D=N.as||_o,K={};for(var Y in N)N[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&N.theme===b||(Y==="forwardedAs"?K.as=N.forwardedAs:bn&&!bn(Y,D)||(K[Y]=N[Y]));var Pn=function(Xt,Ue){var Dt=Fp(),ii=Xt.generateAndInjectStyles(Ue,Dt.styleSheet,Dt.stylis);return ii}(L,N),at=Ln(jt,ze);return Pn&&(at+=" "+Pn),N.className&&(at+=" "+N.className),K[Bl(D)&&!s0.has(D)?"class":"className"]=at,K.ref=R,W.createElement(D,K)}(d,m,S)}f.displayName=p;var d=wn.forwardRef(f);return d.attrs=y,d.componentStyle=v,d.displayName=p,d.shouldForwardProp=g,d.foldedComponentIds=r?Ln(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=h,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(S){for(var E=[],O=1;O<arguments.length;O++)E[O-1]=arguments[O];for(var R=0,I=E;R<I.length;R++)cc(S,I[R],!0);return S}({},i.defaultProps,m):m}}),Nf(d,function(){return".".concat(d.styledComponentId)}),o&&d0(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Hp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Vp=function(e){return Object.assign(e,{isCss:!0})};function px(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gr(e)||no(e))return Vp(Fn(Hp(Va,Xs([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Fn(r):Vp(Fn(Hp(r,t)))}function dc(e,t,n){if(n===void 0&&(n=Wr),!t)throw yo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,px.apply(void 0,Xs([i],o,!1)))};return r.attrs=function(i){return dc(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return dc(e,t,Ie(Ie({},n),i))},r}var S0=function(e){return dc(dx,e)},Wa=S0;s0.forEach(function(e){Wa[e]=S0(e)});const hx=(e,t)=>{let n;function r(){clearTimeout(n)}function i(){r(),n=setTimeout(()=>{e()},t)}return i.cancel=r,i},Wp=(e,t,n)=>(t=!t&&t!==0?e:t,n=!n&&n!==0?e:n,t>n?(console.error("min limit is greater than max limit"),e):e<t?t:e>n?n:e),w0=(e,t)=>e.clientX>t.left&&e.clientX<t.right&&e.clientY>t.top&&e.clientY<t.top+t.height,vx=(e,t)=>{const n=t.getBoundingClientRect();return w0(e,n)},E0=Wa.div`
  position: absolute;
  height: 100%;
  width: 6px;
  right: 3px;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.4s ease-out;
  padding: 6px 0;
  box-sizing: border-box;
  will-change: opacity;
  pointer-events: none;

  &.rcs-custom-scrollbar-rtl {
    right: auto;
    left: 3px;
  }

  &.scroll-visible {
    opacity: 1;
    transition-duration: 0.2s;
  }
`,mx=Wa.div`
  height: calc(100% - 12px);
  margin-top: 6px;
  background-color: rgba(78, 183, 245, 0.7);
  border-radius: 3px;
`,gx=Wa.div`
  min-height: 0;
  min-width: 0;

  & .rcs-outer-container {
    overflow: hidden;

    & .rcs-positioning {
      position: relative;
    }
  }

  & .rcs-inner-container {
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.05) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      pointer-events: none;
      transition: height 0.1s ease-in;
      will-change: height;
    }

    &.rcs-content-scrolled:after {
      height: 5px;
      transition: height 0.15s ease-out;
    }
  }

  &.rcs-scroll-handle-dragged .rcs-inner-container {
    user-select: none;
  }

  &.rcs-scroll-handle-dragged ${E0} {
    opacity: 1;
  }

  & .rcs-custom-scroll-handle {
    position: absolute;
    width: 100%;
    top: 0;
  }
`;class yx extends W.Component{constructor(t){super(t),z(this,"scrollbarYWidth"),z(this,"hideScrollThumb"),z(this,"contentHeight",0),z(this,"visibleHeight",0),z(this,"scrollHandleHeight",0),z(this,"scrollRatio",1),z(this,"hasScroll",!1),z(this,"startDragHandlePos",0),z(this,"startDragMousePos",0),z(this,"customScrollRef",W.createRef()),z(this,"innerContainerRef",W.createRef()),z(this,"customScrollbarRef",W.createRef()),z(this,"scrollHandleRef",W.createRef()),z(this,"contentWrapperRef",W.createRef()),z(this,"adjustFreezePosition",n=>{if(!this.contentWrapperRef.current)return;const r=this.getScrolledElement(),i=this.contentWrapperRef.current;this.props.freezePosition&&(i.scrollTop=this.state.scrollPos),n.freezePosition&&(r.scrollTop=this.state.scrollPos)}),z(this,"toggleScrollIfNeeded",()=>{const n=this.contentHeight-this.visibleHeight>1;this.hasScroll!==n&&(this.hasScroll=n,this.forceUpdate())}),z(this,"updateScrollPosition",n=>{const r=this.getScrolledElement(),i=Wp(n,0,this.contentHeight-this.visibleHeight);r.scrollTop=i,this.setState({scrollPos:i})}),z(this,"onClick",n=>{if(!this.hasScroll||!this.isMouseEventOnCustomScrollbar(n)||this.isMouseEventOnScrollHandle(n))return;const r=this.calculateNewScrollHandleTop(n),i=this.getScrollValueFromHandlePosition(r);this.updateScrollPosition(i)}),z(this,"isMouseEventOnCustomScrollbar",n=>{if(!this.customScrollbarRef.current)return!1;const r=this.customScrollRef.current.getBoundingClientRect(),i=this.customScrollbarRef.current.getBoundingClientRect(),o=this.props.rtl?{left:r.left,right:i.right}:{left:i.left,width:r.right},s={right:r.right,top:r.top,height:r.height,...o};return w0(n,s)}),z(this,"isMouseEventOnScrollHandle",n=>{if(!this.scrollHandleRef.current)return!1;const r=this.scrollHandleRef.current;return vx(n,r)}),z(this,"calculateNewScrollHandleTop",n=>{const r=this.customScrollRef.current.getBoundingClientRect().top+window.pageYOffset,i=n.pageY-r,o=this.getScrollHandleStyle().top;let s;return i>o+this.scrollHandleHeight?s=o+Math.min(this.scrollHandleHeight,this.visibleHeight-this.scrollHandleHeight):s=o-Math.max(this.scrollHandleHeight,0),s}),z(this,"getScrollValueFromHandlePosition",n=>n/this.scrollRatio),z(this,"getScrollHandleStyle",()=>{const n=this.state.scrollPos*this.scrollRatio;return this.scrollHandleHeight=this.visibleHeight*this.scrollRatio,{height:this.scrollHandleHeight,top:n}}),z(this,"adjustCustomScrollPosToContentPos",n=>{this.setState({scrollPos:n})}),z(this,"onScroll",n=>{this.props.freezePosition||(this.hideScrollThumb(),this.adjustCustomScrollPosToContentPos(n.currentTarget.scrollTop),this.props.onScroll&&this.props.onScroll(n))}),z(this,"getScrolledElement",()=>this.innerContainerRef.current),z(this,"onMouseDown",n=>{!this.hasScroll||!this.isMouseEventOnScrollHandle(n)||(this.startDragHandlePos=this.getScrollHandleStyle().top,this.startDragMousePos=n.pageY,this.setState({onDrag:!0}),document.addEventListener("mousemove",this.onHandleDrag,{passive:!1}),document.addEventListener("mouseup",this.onHandleDragEnd,{passive:!1}))}),z(this,"onTouchStart",()=>{this.setState({onDrag:!0})}),z(this,"onHandleDrag",n=>{n.preventDefault();const r=n.pageY-this.startDragMousePos,i=Wp(this.startDragHandlePos+r,0,this.visibleHeight-this.scrollHandleHeight),o=this.getScrollValueFromHandlePosition(i);this.updateScrollPosition(o)}),z(this,"onHandleDragEnd",n=>{this.setState({onDrag:!1}),n.preventDefault(),document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd)}),z(this,"getInnerContainerClasses",()=>this.state.scrollPos&&this.props.addScrolledClass?"rcs-inner-container rcs-content-scrolled":"rcs-inner-container"),z(this,"getScrollStyles",()=>{const n=this.scrollbarYWidth||20,r=this.props.rtl?"marginLeft":"marginRight",i={height:this.props.heightRelativeToParent||this.props.flex?"100%":"",overscrollBehavior:this.props.allowOuterScroll?"auto":"none"};i[r]=-1*n;const o={height:this.props.heightRelativeToParent||this.props.flex?"100%":"",overflowY:this.props.freezePosition?"hidden":"visible"};return o[r]=this.scrollbarYWidth?0:n,{innerContainer:i,contentWrapper:o}}),z(this,"getOuterContainerStyle",()=>({height:this.props.heightRelativeToParent||this.props.flex?"100%":""})),z(this,"getRootStyles",()=>{const n={};return this.props.heightRelativeToParent?n.height=this.props.heightRelativeToParent:this.props.flex&&(n.flex=this.props.flex),n}),z(this,"enforceMinHandleHeight",n=>{const r=this.props.minScrollHandleHeight||38;if(n.height>=r)return n;const i=r-n.height,o=this.state.scrollPos/(this.contentHeight-this.visibleHeight),s=i*o,a=n.top-s;return{height:r,top:a}}),z(this,"onMouseEnter",()=>{this.setState({visible:!0})}),z(this,"onMouseLeave",()=>{this.setState({visible:!1})}),this.scrollbarYWidth=0,this.state={scrollPos:0,onDrag:!1,visible:!1},this.hideScrollThumb=hx(()=>{this.setState({onDrag:!1})},500)}componentDidMount(){typeof this.props.scrollTo<"u"?this.updateScrollPosition(this.props.scrollTo):this.forceUpdate()}componentDidUpdate(t,n){const r=this.contentHeight,i=this.visibleHeight,o=this.getScrolledElement(),s=n.scrollPos>=r-i;this.contentHeight=o.scrollHeight,this.scrollbarYWidth=o.offsetWidth-o.clientWidth,this.visibleHeight=o.clientHeight,this.scrollRatio=this.contentHeight?this.visibleHeight/this.contentHeight:1,this.toggleScrollIfNeeded();const a=this.state===n;(this.props.freezePosition||t.freezePosition)&&this.adjustFreezePosition(t),typeof this.props.scrollTo<"u"&&this.props.scrollTo!==t.scrollTo?this.updateScrollPosition(this.props.scrollTo):this.props.keepAtBottom&&a&&s&&this.updateScrollPosition(this.contentHeight-this.visibleHeight)}componentWillUnmount(){this.hideScrollThumb.cancel(),document.removeEventListener("mousemove",this.onHandleDrag),document.removeEventListener("mouseup",this.onHandleDragEnd)}render(){const t=this.getScrollStyles(),n=this.getRootStyles(),r=this.enforceMinHandleHeight(this.getScrollHandleStyle()),i=[this.props.className||"","rcs-custom-scroll",this.state.onDrag?"rcs-scroll-handle-dragged":""].join(" ");return tn.jsx(gx,{className:i,style:n,ref:this.customScrollRef,children:tn.jsxs("div",{"data-testid":"outer-container",className:"rcs-outer-container",style:this.getOuterContainerStyle(),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onClick:this.onClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:[this.hasScroll?tn.jsx("div",{className:"rcs-positioning",children:tn.jsx(E0,{"data-testid":"custom-scrollbar",ref:this.customScrollbarRef,className:`rcs-custom-scrollbar ${this.props.rtl?"rcs-custom-scrollbar-rtl":""} ${this.state.visible?"scroll-visible":""}`,children:tn.jsx("div",{"data-testid":"custom-scroll-handle",ref:this.scrollHandleRef,className:"rcs-custom-scroll-handle",style:r,children:tn.jsx(mx,{className:this.props.handleClass||"rcs-inner-handle"})})},"scrollbar")}):null,tn.jsx("div",{"data-testid":"inner-container",ref:this.innerContainerRef,className:this.getInnerContainerClasses(),style:t.innerContainer,onScroll:this.onScroll,children:tn.jsx("div",{ref:this.contentWrapperRef,style:t.contentWrapper,children:this.props.children})})]})})}}const _x="_menu_drpie_1",Sx="__isActive_drpie_16",O0={menu:_x,_isActive:Sx},wx=ma(O0),k0=({menuOpen:e,itemsList:t})=>t.length?(console.log("itemsList",t),A.jsx("div",{className:wx(O0.menu,{isActive:e}),children:A.jsx(yx,{heightRelativeToParent:"calc(100% - 300px)",children:A.jsx("ul",{children:t.map((n,r)=>A.jsx("li",{children:A.jsx($t,{id:n.id,link:n.link,name:n.name,icon:n.icon,onClick:n.onClick})},r))})})})):null,Ex={},Gp=({id:e,list:t,name:n,loading:r=!1})=>{const[i,o]=W.useState(!1),s=W.useRef(null);W.useEffect(()=>{const l=u=>{var c;u.target instanceof Node&&!((c=s.current)!=null&&c.contains(u.target))&&o(!1)};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)},[s,o]);const a=()=>{o(!i)};return A.jsxs("div",{role:"presentation",onClick:a,className:Ex.itemWrapper,ref:s,children:[A.jsx(k0,{menuOpen:i,itemsList:t}),A.jsx(qg,{id:e,withArrow:!0,name:n,loading:r})]})},Ox="_itemsWrapper_xq66m_1",kx="_sidebarItem_xq66m_10",xx={itemsWrapper:Ox,sidebarItem:kx},Cx=Ca(()=>{const{groups:{currentClassBookName:e,subjectsList:t,classBookList:n,loading:r}}=$a();return A.jsxs("div",{className:xx.itemsWrapper,children:[A.jsx(Gp,{id:"subjects",list:t,loading:r}),A.jsx(Gp,{id:"class_book",list:n,name:e,loading:r}),A.jsx($t,{id:"my_tasks",link:"/homeworks/teacher",isExternal:!0}),A.jsx($t,{id:"marathons",link:"/marathons/teachers",isExternal:!0}),A.jsx($t,{id:"olympiads",link:"/teachers/lk/olympiads"}),A.jsx($t,{id:"program",link:"/podgotovka-k-uroku",isExternal:!0}),A.jsx($t,{id:"webinars",link:"/webinars",isExternal:!0}),A.jsx($t,{id:"portfolio",link:"/portfolio",isExternal:!0})]})}),Rx="/sidebar-teacher/assets/active_teacher_coins-eb5014dd.svg",bx="/sidebar-teacher/assets/teacher_profile-a8553be4.svg",Px="_active_teacher_2ucod_1",Ax="_userWrapper_2ucod_6",Tx="_userDropdownWrapper_2ucod_9",Nx="__isActive_2ucod_22",jx="_userDropdownWrapper_icon_2ucod_25",Dx="_userDropdownWrapper_content_2ucod_29",Ix="_userDropdownWrapper_content_name_2ucod_35",Lx="_userDropdownWrapper_content_arrow_2ucod_47",Mx="_userDropdownWrapper_content_coinsWrap_2ucod_52",rn={active_teacher:Px,userWrapper:Ax,userDropdownWrapper:Tx,_isActive:Nx,userDropdownWrapper_icon:jx,userDropdownWrapper_content:Dx,userDropdownWrapper_content_name:Ix,userDropdownWrapper_content_arrow:Lx,userDropdownWrapper_content_coinsWrap:Mx},$x=ma(rn),zx=Ca(()=>{const[e,t]=W.useState(!1),n=W.useRef(null),{user:{profile:r,profileItemslist:i},ranks:{currentScore:o}}=$a(),s=r&&`${r==null?void 0:r.name} ${r==null?void 0:r.last_name}`;W.useEffect(()=>{const c=p=>{var h;p.target instanceof Node&&!((h=n.current)!=null&&h.contains(p.target))&&t(!1)};return document.addEventListener("click",c),()=>document.removeEventListener("click",c)},[n,t]);const a=()=>{t(!e)},l=s==null?void 0:s.split(" "),u=l&&`${l[0]} ${l[1][0]}.`;return A.jsx("div",{className:rn.userWrapper,children:A.jsxs("div",{role:"listbox",tabIndex:0,id:"user_profile",onKeyDown:a,className:$x("userDropdownWrapper",{isActive:e}),onClick:a,ref:n,children:[A.jsx(k0,{menuOpen:e,itemsList:i}),A.jsx("div",{className:rn.userDropdownWrapper_icon,children:A.jsx("img",{src:bx,alt:"аватар пользователя"})}),A.jsxs("div",{className:rn.userDropdownWrapper_content,children:[A.jsx("div",{className:rn.userDropdownWrapper_content_name,children:u}),A.jsx("div",{className:rn.userDropdownWrapper_content_arrow,children:A.jsx("img",{src:Yg,alt:"arrow",width:12,height:12})}),A.jsx("span",{className:rn.active_teacher,children:"Активный учитель"}),A.jsx("div",{className:rn.userDropdownWrapper_content_coinsWrap,children:A.jsxs(A.Fragment,{children:[A.jsx("img",{src:Rx,width:20,height:20,alt:"Баллы учителя"}),A.jsx("span",{children:o})]})})]})]})})}),Ux="_sidebar_1ohmu_1",Fx="__isOpened_1ohmu_11",Bx="_logo_1ohmu_14",Hx="_navbar_1ohmu_22",hs={sidebar:Ux,_isOpened:Fx,logo:Bx,navbar:Hx},Vx=Ca(({children:e})=>{const{groups:{setGroups:t}}=$a();return W.useEffect(()=>{document.addEventListener("teacherHeader.loaded",()=>{document.addEventListener("teacherHeader.selectedClassbookChanged",n=>{var i,o;console.log("e.detail",n.detail);const r={groups:((i=n.detail)==null?void 0:i.subjectGroups)||[],class_books:((o=n.detail)==null?void 0:o.groups)||[]};t(r)})})},[]),A.jsx(A.Fragment,{children:e})}),Wx=ma(hs),Gx=Ca(({classBook:e})=>{const{user:{fetchUserData:t},ranks:{fetchActiveTeacherRanks:n},groups:{fetchGroups:r}}=$a();return console.log("classBook",e),W.useEffect(()=>{t(),n(),r(),console.log("<%S3_HOST-%>"),console.log("<%CDN_HOST-%>")},[]),A.jsx(Vx,{children:A.jsx("div",{id:"teacher-sidebar",className:Wx(hs.sidebar,{isOpened:!0}),children:A.jsxs("nav",{className:hs.navbar,children:[A.jsx("a",{href:"/",className:hs.logo,children:A.jsx("img",{src:Lk,height:20,width:120,alt:"Uchi.ru логотип"})}),A.jsx(zx,{}),A.jsx(Cx,{}),A.jsx(l2,{})]})})})}),Kx=({children:e})=>A.jsx(Kg.Provider,{value:new Gg,children:e});class Yx extends HTMLElement{constructor(){super();ee(this,"updateClassBook");ee(this,"DynamicApp",n=>{const[r,i]=W.useState("");return this.updateClassBook=i,A.jsx(Gx,{app:this.app,classBook:r,...n})})}get app(){return this.getAttribute("app")||"noname"}get classBook(){return this.getAttribute("classbook")}static get observedAttributes(){return["classbook"]}connectedCallback(){const n=document.createElement("div");this.insertBefore(n,this.firstChild),Vl.createRoot(n).render(A.jsx(Kx,{children:A.jsx(this.DynamicApp,{app:this.app})}))}attributeChangedCallback(n,r,i){n==="classbook"&&this.updateClassBook&&this.updateClassBook(i)}}customElements.define("teacher-sidebar",Yx);

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],require("timers").setImmediate)
},{"_process":5,"buffer":3,"timers":6}],2:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],3:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":2,"buffer":3,"ieee754":4}],4:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],6:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":5,"timers":6}]},{},[1]);
