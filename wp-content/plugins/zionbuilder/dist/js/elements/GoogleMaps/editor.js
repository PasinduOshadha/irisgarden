!function(){var t={407:function(t,e){"use strict";e.Z=(t,e)=>{const o=t.__vccOpts||t;for(const[t,r]of e)o[t]=r;return o}}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../../../"}(),o.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";var t=zb.editor,e=zb.vue;const r=["src"];var n={name:"google_maps",props:["options","element","api"],computed:{location(){return encodeURIComponent(this.options.location||"Chicago")},zoom(){return this.options.zoom||15},mapType(){return"terrain"===this.options.map_type?"k":""}}},i=(0,o(407).Z)(n,[["render",function(t,o,n,i,c,s){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.renderSlot)(t.$slots,"start"),(0,e.createElementVNode)("iframe",{src:`https://www.google.com/maps?api=1&q=${s.location}&z=${s.zoom}&output=embed&t=${s.mapType}`,frameborder:"0",style:{border:"0","margin-bottom":"0"},allowfullscreen:""},null,8,r),(0,e.renderSlot)(t.$slots,"end")])}]]);(0,t.registerElementComponent)({elementType:"google_maps",component:i})}()}();