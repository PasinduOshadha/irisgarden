!function(){var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../../../"}(),t.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";function t(t){if(!t.classList.contains("zb-el-accordions-accordionTitle"))return;const i=t.closest(".zb-el-accordions"),o=i.dataset.accordionType||"accordion",c=t.closest(".zb-el-accordions-accordionWrapper");"accordion"===o?(null==c?void 0:c.classList.contains("zb-el-accordions--active"))?e(c):(i.querySelectorAll(".zb-el-accordions--active").forEach((t=>{t instanceof HTMLElement&&e(t)})),n(c)):(null==c?void 0:c.classList.contains("zb-el-accordions--active"))?e(c):n(c)}function e(t){const e=t.querySelector(".zb-el-accordions-accordionContent");e&&window.requestAnimationFrame((()=>{const n=e.clientHeight;e.style.height=`${n}px`,t.classList.add("zb-el-accordions--transition"),window.requestAnimationFrame((()=>{e.style.height="0px"}));const i=()=>{e.style.height=null,t.classList.remove("zb-el-accordions--transition"),t.classList.remove("zb-el-accordions--active"),e.removeEventListener("transitionend",i)};e.addEventListener("transitionend",i)}))}function n(t){const e=t.querySelector(".zb-el-accordions-accordionContent");window.requestAnimationFrame((()=>{t.classList.add("zb-el-accordions--active");const n=e.clientHeight;t.classList.remove("zb-el-accordions--active"),e.style.height="0px",window.requestAnimationFrame((()=>{t.classList.add("zb-el-accordions--transition"),t.classList.add("zb-el-accordions--active"),e.style.height=`${n}px`}))}));const n=()=>{e.style.height=null,t.classList.remove("zb-el-accordions--transition"),e.removeEventListener("transitionend",n)};e.addEventListener("transitionend",n)}document.addEventListener("click",(function(e){e.target&&t(e.target)})),document.addEventListener("keydown",(function(e){"Space"==e.code&&t(e.target)}))}()}();