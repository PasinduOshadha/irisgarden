(()=>{var e={212:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"})(),n.p=window.zionBuilderPaths[{}.appName],(()=>{"use strict";const e=zb.vue,t={name:"tabs_item",props:["options","element","api"],setup(e){e.element.content&&0===e.element.content.length&&e.element.addChild({element_type:"zion_text"})}},r=(0,n(212).Z)(t,[["render",function(t,n,r,o,i,s){const c=(0,e.resolveComponent)("SortableContent");return(0,e.openBlock)(),(0,e.createBlock)(c,{element:r.element},{start:(0,e.withCtx)((()=>[(0,e.renderSlot)(t.$slots,"start")])),end:(0,e.withCtx)((()=>[(0,e.renderSlot)(t.$slots,"end")])),_:3},8,["element"])}]]);(0,zb.editor.registerElementComponent)({elementType:"tabs_item",component:r})})()})();