(()=>{var e={78:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},674:(e,t,n)=>{e.exports=n(554)},268:(e,t,n)=>{"use strict";var o=n(770),r=n(499),s=n(966),a=n(787),i=n(643),u=n(451),c=n(968),l=n(839);e.exports=function(e){return new Promise((function(t,n){var f=e.data,p=e.headers,d=e.responseType;o.isFormData(f)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+v)}var g=i(e.baseURL,e.url);function y(){if(h){var o="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,s={data:d&&"text"!==d&&"json"!==d?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:o,config:e,request:h};r(t,n,s),h=null}}if(h.open(e.method.toUpperCase(),a(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,"onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(y)},h.onabort=function(){h&&(n(l("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(l("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},o.isStandardBrowserEnv()){var b=(e.withCredentials||c(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}"setRequestHeader"in h&&o.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),o.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),d&&"json"!==d&&(h.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),n(e),h=null)})),f||(f=null),h.send(f)}))}},554:(e,t,n)=>{"use strict";var o=n(770),r=n(542),s=n(930),a=n(842);function i(e){var t=new s(e),n=r(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var u=i(n(130));u.Axios=s,u.create=function(e){return i(a(u.defaults,e))},u.Cancel=n(831),u.CancelToken=n(86),u.isCancel=n(777),u.all=function(e){return Promise.all(e)},u.spread=n(769),u.isAxiosError=n(997),e.exports=u,e.exports.default=u},831:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},86:(e,t,n)=>{"use strict";var o=n(831);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new o(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},777:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},930:(e,t,n)=>{"use strict";var o=n(770),r=n(787),s=n(239),a=n(705),i=n(842),u=n(33),c=u.validators;function l(e){this.defaults=e,this.interceptors={request:new s,response:new s}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var n=[],o=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var r,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var l=[a,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(s),r=Promise.resolve(e);l.length;)r=r.then(l.shift(),l.shift());return r}for(var f=e;n.length;){var p=n.shift(),d=n.shift();try{f=p(f)}catch(e){d(e);break}}try{r=a(f)}catch(e){return Promise.reject(e)}for(;s.length;)r=r.then(s.shift(),s.shift());return r},l.prototype.getUri=function(e){return e=i(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),o.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,o){return this.request(i(o||{},{method:e,url:t,data:n}))}})),e.exports=l},239:(e,t,n)=>{"use strict";var o=n(770);function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},643:(e,t,n)=>{"use strict";var o=n(125),r=n(446);e.exports=function(e,t){return e&&!o(t)?r(e,t):t}},839:(e,t,n)=>{"use strict";var o=n(793);e.exports=function(e,t,n,r,s){var a=new Error(e);return o(a,t,n,r,s)}},705:(e,t,n)=>{"use strict";var o=n(770),r=n(672),s=n(777),a=n(130);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return i(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(i(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},793:e=>{"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},842:(e,t,n)=>{"use strict";var o=n(770);e.exports=function(e,t){t=t||{};var n={},r=["url","method","data"],s=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function u(e,t){return o.isPlainObject(e)&&o.isPlainObject(t)?o.merge(e,t):o.isPlainObject(t)?o.merge({},t):o.isArray(t)?t.slice():t}function c(r){o.isUndefined(t[r])?o.isUndefined(e[r])||(n[r]=u(void 0,e[r])):n[r]=u(e[r],t[r])}o.forEach(r,(function(e){o.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),o.forEach(s,c),o.forEach(a,(function(r){o.isUndefined(t[r])?o.isUndefined(e[r])||(n[r]=u(void 0,e[r])):n[r]=u(void 0,t[r])})),o.forEach(i,(function(o){o in t?n[o]=u(e[o],t[o]):o in e&&(n[o]=u(void 0,e[o]))}));var l=r.concat(s).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return o.forEach(f,c),n}},499:(e,t,n)=>{"use strict";var o=n(839);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},672:(e,t,n)=>{"use strict";var o=n(770),r=n(130);e.exports=function(e,t,n){var s=this||r;return o.forEach(n,(function(n){e=n.call(s,e,t)})),e}},130:(e,t,n)=>{"use strict";var o=n(770),r=n(642),s=n(793),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(268)),u),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)||t&&"application/json"===t["Content-Type"]?(i(t,"application/json"),function(e,t,n){if(o.isString(e))try{return(0,JSON.parse)(e),o.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||r&&o.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw s(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){c.headers[e]=o.merge(a)})),e.exports=c},542:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},787:(e,t,n)=>{"use strict";var o=n(770);function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var a=[];o.forEach(t,(function(e,t){null!=e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,(function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},446:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},966:(e,t,n)=>{"use strict";var o=n(770);e.exports=o.isStandardBrowserEnv()?{write:function(e,t,n,r,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),o.isString(r)&&i.push("path="+r),o.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},125:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},997:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},968:(e,t,n)=>{"use strict";var o=n(770);e.exports=o.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var o=e;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=o.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},642:(e,t,n)=>{"use strict";var o=n(770);e.exports=function(e,t){o.forEach(e,(function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])}))}},451:(e,t,n)=>{"use strict";var o=n(770),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,a={};return e?(o.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=o.trim(e.substr(0,s)).toLowerCase(),n=o.trim(e.substr(s+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},769:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},33:(e,t,n)=>{"use strict";var o=n(78),r={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){r[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={},a=o.version.split(".");function i(e,t){for(var n=t?t.split("."):a,o=e.split("."),r=0;r<3;r++){if(n[r]>o[r])return!0;if(n[r]<o[r])return!1}return!1}r.transitional=function(e,t,n){var r=t&&i(t);function a(e,t){return"[Axios v"+o.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new Error(a(o," has been removed in "+t));return r&&!s[o]&&(s[o]=!0,console.warn(a(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}},e.exports={isOlderVersion:i,assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var o=Object.keys(e),r=o.length;r-- >0;){var s=o[r],a=t[s];if(a){var i=e[s],u=void 0===i||a(i,s,e);if(!0!==u)throw new TypeError("option "+s+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:r}},770:(e,t,n)=>{"use strict";var o=n(542),r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function a(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===r.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,o){u(t[o])&&u(n)?t[o]=e(t[o],n):u(n)?t[o]=e({},n):s(n)?t[o]=n.slice():t[o]=n}for(var o=0,r=arguments.length;o<r;o++)l(arguments[o],n);return t},extend:function(e,t,n){return l(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},212:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})();var o={};n.p=window.zionBuilderPaths[{}.appName],(()=>{"use strict";n.r(o);const e=window.zb.vue,t=zb.i18n,r=zb.components,s={key:0,class:"zb-mmModalLoadingWrapper"},a={key:0,class:"zb-mmModalEditButtonWrapper"},i={class:"zb-themebuilderEditModalTitle"},u={class:"zb-themebuilderEditModalTitleLabel"},c={class:"zb-themebuilderEditModalClose"},l=["src"],f={class:"zb-mmModalFooter"},p=(0,e.ref)({show:!1,menuItemID:null});function d(){return{modalData:p,openModal:function(e){const{menuItemID:t,itemDepth:n}=e;p.value={show:!0,menuItemID:t,itemDepth:n}},closeModal:function(){p.value.show=!1}}}const h=zb.rest,m=Array.isArray,v="object"==typeof global&&global&&global.Object===Object&&global;var g="object"==typeof self&&self&&self.Object===Object&&self;const y=v||g||Function("return this")(),b=y.Symbol;var _=Object.prototype,w=_.hasOwnProperty,x=_.toString,j=b?b.toStringTag:void 0;var O=Object.prototype.toString;var k=b?b.toStringTag:void 0;const E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?function(e){var t=w.call(e,j),n=e[j];try{e[j]=void 0;var o=!0}catch(e){}var r=x.call(e);return o&&(t?e[j]=n:delete e[j]),r}(e):function(e){return O.call(e)}(e)},C=function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==E(e)};var S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/;const T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=y["__core-js_shared__"];var A,B=(A=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";var z=Function.prototype.toString;var M=/^\[object .+?Constructor\]$/,R=Function.prototype,L=Object.prototype,U=R.toString,D=L.hasOwnProperty,F=RegExp("^"+U.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const V=function(e){return!(!T(e)||(t=e,B&&B in t))&&(function(e){if(!T(e))return!1;var t=E(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}(e)?F:M).test(function(e){if(null!=e){try{return z.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t},I=function(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return V(n)?n:void 0},$=I(Object,"create");var q=Object.prototype.hasOwnProperty;var G=Object.prototype.hasOwnProperty;function J(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}J.prototype.clear=function(){this.__data__=$?$(null):{},this.size=0},J.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},J.prototype.get=function(e){var t=this.__data__;if($){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return q.call(t,e)?t[e]:void 0},J.prototype.has=function(e){var t=this.__data__;return $?void 0!==t[e]:G.call(t,e)},J.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$&&void 0===t?"__lodash_hash_undefined__":t,this};const H=J,Z=function(e,t){return e===t||e!=e&&t!=t},W=function(e,t){for(var n=e.length;n--;)if(Z(e[n][0],t))return n;return-1};var X=Array.prototype.splice;function K(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}K.prototype.clear=function(){this.__data__=[],this.size=0},K.prototype.delete=function(e){var t=this.__data__,n=W(t,e);return!(n<0||(n==t.length-1?t.pop():X.call(t,n,1),--this.size,0))},K.prototype.get=function(e){var t=this.__data__,n=W(t,e);return n<0?void 0:t[n][1]},K.prototype.has=function(e){return W(this.__data__,e)>-1},K.prototype.set=function(e,t){var n=this.__data__,o=W(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this};const Q=K,Y=I(y,"Map"),ee=function(e,t){var n,o,r=e.__data__;return("string"==(o=typeof(n=t))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?r["string"==typeof t?"string":"hash"]:r.map};function te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}te.prototype.clear=function(){this.size=0,this.__data__={hash:new H,map:new(Y||Q),string:new H}},te.prototype.delete=function(e){var t=ee(this,e).delete(e);return this.size-=t?1:0,t},te.prototype.get=function(e){return ee(this,e).get(e)},te.prototype.has=function(e){return ee(this,e).has(e)},te.prototype.set=function(e,t){var n=ee(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this};const ne=te;function oe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],s=n.cache;if(s.has(r))return s.get(r);var a=e.apply(this,o);return n.cache=s.set(r,a)||s,a};return n.cache=new(oe.Cache||ne),n}oe.Cache=ne;var re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,se=/\\(\\)?/g;const ae=(ie=oe((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(re,(function(e,n,o,r){t.push(o?r.replace(se,"$1"):n||e)})),t}),(function(e){return 500===ue.size&&ue.clear(),e})),ue=ie.cache,ie);var ie,ue;var ce=b?b.prototype:void 0,le=ce?ce.toString:void 0;const fe=function e(t){if("string"==typeof t)return t;if(m(t))return function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}(t,e)+"";if(C(t))return le?le.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},pe=function(e,t){return m(e)?e:function(e,t){if(m(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||N.test(e)||!S.test(e)||null!=t&&e in Object(t)}(e,t)?[e]:ae(function(e){return null==e?"":fe(e)}(e))},de=function(e){if("string"==typeof e||C(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},he=function(e,t){for(var n=0,o=(t=pe(t,e)).length;null!=e&&n<o;)e=e[de(t[n++])];return n&&n==o?e:void 0},me=function(){try{var e=I(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var ve=Object.prototype.hasOwnProperty;const ge=function(e,t,n){var o=e[t];ve.call(e,t)&&Z(o,n)&&(void 0!==n||t in e)||function(e,t,n){"__proto__"==t&&me?me(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}(e,t,n)};var ye=/^(?:0|[1-9]\d*)$/;const be=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ye.test(e))&&e>-1&&e%1==0&&e<t},_e=function(e,t,n,o){return function(e,t,n,o){if(!T(e))return e;for(var r=-1,s=(t=pe(t,e)).length,a=s-1,i=e;null!=i&&++r<s;){var u=de(t[r]),c=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(r!=a){var l=i[u];void 0===(c=o?o(l,u,i):void 0)&&(c=T(l)?l:be(t[r+1])?[]:{})}ge(i,u,c),i=i[u]}return e}(e,t,n(he(e,t)),o)},we=function(e){return e},xe=function(e,t,n){return null==e?e:_e(e,t,"function"==typeof(o=n)?o:we);var o},je=(0,e.ref)(!1),Oe=(0,e.ref)(!1),ke=(0,e.ref)({allowed_post_types:["post","page"],google_fonts:[],custom_fonts:[],typekit_token:"",typekit_fonts:[],local_colors:[],global_colors:[],local_gradients:[],global_gradients:[],user_roles_permissions:{},users_permissions:{}}),Ee=()=>{const e=()=>(je.value=!0,(0,h.saveOptions)(ke.value).finally((()=>{je.value=!1})));return{fetchOptions:(e=!1)=>Oe.value&&!e?Promise.resolve(ke.value):(0,h.getSavedOptions)().then((e=>{const t=e.data;Array.isArray(t.user_roles_permissions)&&(t.user_roles_permissions={}),Array.isArray(t.users_permissions)&&(t.users_permissions={});const n={...ke.value,...t};ke.value=n})),getOptionValue:(e,t=null)=>function(e,t,n){var o=null==e?void 0:he(e,t);return void 0===o?n:o}(ke.value,e,t),updateOptionValue:(t,n,o=!0)=>{xe(ke.value,t,(()=>n)),o&&e()},saveOptionsToDB:e,addGoogleFont:t=>{ke.value.google_fonts.push({font_family:t,font_variants:["regular"],font_subset:["latin"]}),e()},removeGoogleFont:t=>{const n=ke.value.google_fonts.find((e=>e.font_family===t));if(n){const e=ke.value.google_fonts.indexOf(n);ke.value.google_fonts.splice(e,1)}else console.warn("Font for deletion was not found");e()},updateGoogleFont:(t,n)=>{const o=ke.value.google_fonts.find((e=>e.font_family===t));if(o){const e=ke.value.google_fonts.indexOf(o);ke.value.google_fonts.splice(e,1,n)}e()},addLocalColor:t=>{ke.value.local_colors.push(t),e()},deleteLocalColor:t=>{const n=ke.value.local_colors.indexOf(t);-1!==n&&ke.value.local_colors.splice(n,1),e()},editLocalColor:(t,n,o=!0)=>{const r=ke.value.local_colors.indexOf(t);-1!==r&&ke.value.local_colors.splice(r,1,n),o&&e()},addGlobalColor:t=>{ke.value.global_colors.push(t),e()},deleteGlobalColor:t=>{const n=ke.value.global_colors.indexOf(t);-1!==n&&ke.value.global_colors.splice(n,1),e()},editGlobalColor:(t,n,o=!0)=>{let r={...ke.value.global_colors[t]};r.color=n,ke.value.global_colors.splice(t,1,r),o&&e()},addCustomFont:t=>{ke.value.custom_fonts.push(t),e()},updateCustomFont:(t,n)=>{const o=ke.value.custom_fonts.find((e=>e.font_family===t));if(o){const e=ke.value.custom_fonts.indexOf(o);ke.value.custom_fonts.splice(e,1,n)}e()},deleteCustomFont:t=>{const n=ke.value.custom_fonts.find((e=>e.font_family===t));if(n){const e=ke.value.custom_fonts.indexOf(n);ke.value.custom_fonts.splice(e,1)}else console.warn("Font for deletion was not found");e()},addLocalGradient:t=>{ke.value.local_gradients.push(t),e()},deleteLocalGradient:t=>{const n=ke.value.local_gradients.indexOf(t);-1!==n&&ke.value.local_gradients.splice(n,1),e()},editLocalGradient:(e,t)=>{const n=ke.value.local_gradients.find((t=>t.id===e));n&&(n.config=t)},addGlobalGradient:t=>{ke.value.global_gradients.push(t),e()},deleteGlobalGradient:t=>{const n=ke.value.global_gradients.indexOf(t);-1!==n&&ke.value.global_gradients.splice(n,1),e()},editGlobalGradient:(e,t)=>{const n=ke.value.global_gradients.find((t=>t.id===e));n&&(n.config=t)},addTypeKitToken:e=>{ke.value.typekit_token=e},removeFontProject:t=>{const n=ke.value.typekit_fonts.indexOf(t);-1!==n&&ke.value.typekit_fonts.splice(n,1),e()},addFontProject:t=>{-1===ke.value.typekit_fonts.indexOf(t)&&ke.value.typekit_fonts.push(t),e()},addUserPermissions:t=>{ke.value.users_permissions[t.id]={allowed_access:!0,permissions:{only_content:!1,features:[],post_types:[]}},e()},getUserPermissions:e=>ke.value.users_permissions[e],deleteUserPermission:t=>{delete ke.value.users_permissions[t],e()},editUserPermission:(t,n)=>{ke.value.users_permissions[t]=n,e()},getRolePermissions:e=>ke.value.user_roles_permissions[e]||{allowed_access:!1,permissions:{only_content:!1,features:[],post_types:[]}},editRolePermission:(t,n)=>{ke.value.user_roles_permissions[t]=n,e()},options:ke,isLoading:je}};var Ce=n(674),Se=n.n(Ce);let Ne=window.ZionProRestConfig;const Te=Se().create({baseURL:`${Ne.rest_root}zionbuilder-pro/`,headers:{"X-WP-Nonce":Ne.nonce,Accept:"application/json","Content-Type":"application/json"}}),Pe={name:"App",setup(){const{modalData:t}=d(),{fetchOptions:n}=Ee(),o=(0,e.ref)({}),r=(0,e.ref)(!0),s=(0,e.ref)(!1),a=(0,e.ref)(!1),i=(0,e.ref)(!1),u=(0,e.ref)("");(0,e.provide)("builderOptions",Ee);const c=(0,e.computed)((()=>window.ZionProRestConfig.options_schema.filter((e=>void 0===e.depth||0===t.value.itemDepth&&"first"===e.depth))));n(),(0,e.watchEffect)((()=>{const{show:e,menuItemID:n}=t.value;r.value=e,e&&function(e){return Te.get(`v1/mega-menu/${e}`)}(n).then((e=>{o.value=e.data})).finally((()=>{r.value=!1}))}));const l=(0,e.computed)({get:()=>o.value||{},set(e){o.value=e||{}}});return{modalData:t,tabs:c,menuValues:l,onEditButtonClick:function(){const{menuItemID:e}=t.value;a.value=!0,function(e){return Te.post(`v1/mega-menu/${e}/enable`)}(e).then((e=>{u.value=e.data.edit_url,i.value=!0})).finally((()=>{a.value=!1}))},saveLoading:s,onSaveClick:function(){const{menuItemID:e}=t.value;s.value=!0,function(e,t){return Te.post(`v1/mega-menu/${e}`,{config:t})}(e,o.value).finally((()=>{s.value=!1}))},loading:r,enableMegaMenuLoading:a,showEditModal:i,editUrl:u}}},Ae=(0,n(212).Z)(Pe,[["render",function(t,n,o,r,p,d){const h=(0,e.resolveComponent)("Loader"),m=(0,e.resolveComponent)("OptionsForm"),v=(0,e.resolveComponent)("Button"),g=(0,e.resolveComponent)("Tab"),y=(0,e.resolveComponent)("Tabs"),b=(0,e.resolveComponent)("Modal");return(0,e.openBlock)(),(0,e.createBlock)(b,{show:r.modalData.show,"onUpdate:show":n[2]||(n[2]=e=>r.modalData.show=e),"append-to":"body","show-maximize":!1,width:500,"enable-drag":!1,title:t.$translate("mega_menu_options"),class:"zb-mmModal","close-on-outside-click":!1},{default:(0,e.withCtx)((()=>[r.loading?((0,e.openBlock)(),(0,e.createElementBlock)("div",s,[(0,e.createVNode)(h)])):((0,e.openBlock)(),(0,e.createBlock)(y,{key:1,class:"zb-mmModalTabs"},{default:(0,e.withCtx)((()=>[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.tabs,(o=>((0,e.openBlock)(),(0,e.createBlock)(g,{key:o.id,name:o.title},{default:(0,e.withCtx)((()=>[(0,e.createVNode)(m,{schema:o.schema,modelValue:r.menuValues,"onUpdate:modelValue":n[0]||(n[0]=e=>r.menuValues=e)},null,8,["schema","modelValue"]),"content"===o.id?((0,e.openBlock)(),(0,e.createElementBlock)("div",a,[r.menuValues.content_enabled?((0,e.openBlock)(),(0,e.createBlock)(v,{key:0,onClick:r.onEditButtonClick,class:"znpb-button--secondary zb-mmModalEditButton"},{default:(0,e.withCtx)((()=>[r.enableMegaMenuLoading?((0,e.openBlock)(),(0,e.createBlock)(h,{key:0,size:12})):(0,e.createCommentVNode)("v-if",!0),(0,e.createTextVNode)(" "+(0,e.toDisplayString)(t.$translate("edit_with_zion_builder")),1)])),_:1},8,["onClick"])):(0,e.createCommentVNode)("v-if",!0)])):(0,e.createCommentVNode)("v-if",!0)])),_:2},1032,["name"])))),128))])),_:1})),r.showEditModal?((0,e.openBlock)(),(0,e.createBlock)(b,{key:2,show:!0,"show-backdrop":!1,onCloseModal:n[1]||(n[1]=e=>r.showEditModal=!1),"append-to":"body",fullscreen:!0,"enable-drag":!1,class:"znpb-mmEditModal","show-maximize":!1},{title:(0,e.withCtx)((()=>[(0,e.createElementVNode)("span",i,[(0,e.createElementVNode)("span",u,(0,e.toDisplayString)(t.$translate("editing_menu_item")),1)])])),close:(0,e.withCtx)((()=>[(0,e.createElementVNode)("span",c,(0,e.toDisplayString)(t.$translate("close_menu_item")),1)])),default:(0,e.withCtx)((()=>[(0,e.createElementVNode)("iframe",{class:"znpb-mmEditModalIframe",src:r.editUrl},null,8,l)])),_:1})):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",f,[(0,e.createVNode)(v,{onClick:(0,e.withModifiers)(r.onSaveClick,["stop"]),class:"znpb-button znpb-button--secondary"},{default:(0,e.withCtx)((()=>[r.saveLoading?((0,e.openBlock)(),(0,e.createBlock)(h,{key:0,size:12})):(0,e.createCommentVNode)("v-if",!0),(0,e.createTextVNode)(" "+(0,e.toDisplayString)(t.$translate("save_changes")),1)])),_:1},8,["onClick"])])])),_:1},8,["show","title"])}]]),Be=window.jQuery,ze=document.getElementById("menu-to-edit"),Me=new MutationObserver((function(e,t){for(const{addedNodes:t}of e)Array.from(t).filter((({classList:e,nodeType:t,hasZnMegaMenu:n})=>1===t&&e.contains("menu-item")&&!n)).forEach((e=>Re(e)))}));function Re(e){if(e.hasZnMegaMenu)return;e.hasZnMegaMenu=!0;let t=Be(e);Be(".item-title",t).append('<a class="zbpro-megaMenuTrigger">Mega menu options</a>')}ze&&Me.observe(ze,{childList:!0,subtree:!0}),Be(document).ready((function(){Be(ze).find(".menu-item").each((function(){Re(this)}))})),Be(document).on("click",".zbpro-megaMenuTrigger",(function(){const{openModal:e}=d(),t=Be(this).closest(".menu-item"),n=parseInt(t.attr("id").match(/\d+/)[0]),o=Array.from(t[0].classList).find((e=>e.match(/menu-item-depth-(\d+)/)));o&&n&&e({menuItemID:n,itemDepth:parseInt(o.match(/\d+/)[0])})})),Be("body").append('<div id="znbpro-megaMenuApp"></div>');const Le=(0,e.createApp)(Ae);Le.use({install:t.install},window.ZnI18NStrings),Le.use(r.install),Le.mount("#znbpro-megaMenuApp")})(),(window.zbpro=window.zbpro||{})["mega-menu"]=o})();