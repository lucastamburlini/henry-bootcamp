(()=>{var t={791:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){var n,i,c;n=t,i=e,c=r[e],(i=o(i))in n?Object.defineProperty(n,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[i]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}r.r(e),r.d(e,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>E,bindActionCreators:()=>v,combineReducers:()=>d,compose:()=>b,createStore:()=>l,legacy_createStore:()=>y});var f="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function l(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(u(1));return r(l)(t,e)}if("function"!=typeof t)throw new Error(u(2));var o=t,i=e,c=[],a=c,y=!1;function d(){a===c&&(a=c.slice())}function s(){if(y)throw new Error(u(3));return i}function v(t){if("function"!=typeof t)throw new Error(u(4));if(y)throw new Error(u(5));var e=!0;return d(),a.push(t),function(){if(e){if(y)throw new Error(u(6));e=!1,d();var r=a.indexOf(t);a.splice(r,1),c=null}}}function b(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw new Error(u(7));if(void 0===t.type)throw new Error(u(8));if(y)throw new Error(u(9));try{y=!0,i=o(i,t)}finally{y=!1}for(var e=c=a,r=0;r<e.length;r++)(0,e[r])();return t}return b({type:p.INIT}),(n={dispatch:b,subscribe:v,getState:s,replaceReducer:function(t){if("function"!=typeof t)throw new Error(u(10));o=t,b({type:p.REPLACE})}})[f]=function(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(u(11));function r(){t.next&&t.next(s())}return r(),{unsubscribe:e(r)}}})[f]=function(){return this},t},n}var y=l;function d(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,c=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:p.INIT}))throw new Error(u(12));if(void 0===r(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},f=0;f<c.length;f++){var a=c[f],p=r[a],l=t[a],y=p(l,e);if(void 0===y)throw e&&e.type,new Error(u(14));o[a]=y,n=n||y!==l}return(n=n||c.length!==Object.keys(t).length)?o:t}}function s(t,e){return function(){return e(t.apply(this,arguments))}}function v(t,e){if("function"==typeof t)return s(t,e);if("object"!=typeof t||null===t)throw new Error(u(16));var r={};for(var n in t){var o=t[n];"function"==typeof o&&(r[n]=s(o,e))}return r}function b(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function E(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(u(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=b.apply(void 0,i)(r.dispatch),c(c({},r),{},{dispatch:n})}}}},883:t=>{t.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(t,e,r)=>{const{INCREMENTO:n,DECREMENTO:o}=r(883);t.exports={incremento:t=>({type:n,payload:t}),decremento:t=>({type:o,payload:t})}},616:(t,e,r)=>{const{INCREMENTO:n,DECREMENTO:o}=r(883),i={contador:0};t.exports=function(t=i,e){switch(e.type){case n:return{...t,contador:t.contador+e.payload};case o:return{...t,contador:t.contador-1};default:return{...t}}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{createStore:t}=r(791),e=r(616),{incremento:n,decremento:o}=r(518),i=t(e);let c=document.getElementById("valor");function u(){let t=i.getState().contador;c.innerHTML=t}u(),i.subscribe(u);let f=document.getElementById("incremento"),a=document.getElementById("decremento"),p=document.getElementById("incrementoImpar"),l=document.getElementById("incrementoAsync");f.addEventListener("click",(()=>{i.dispatch(n(1))})),a.addEventListener("click",(()=>{i.dispatch(o())})),p.addEventListener("click",(()=>{i.getState().contador%2!=0&&i.dispatch(n(1))})),l.addEventListener("click",(()=>{setTimeout((()=>{i.dispatch(n(1))}),2e3)}))})()})();