!function(){var e={407:function(e,t){"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../../../"}(),r.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";var e=zb.editor,t=zb.vue;const o=["src"];var n={name:"gallery",props:["options","element","api"],computed:{getImages(){return this.options.images},getWrapperAttributes(){return this.options.use_modal?{"data-zion-lightbox":JSON.stringify({selector:""})}:{}}},methods:{getImageWrapperAttrs(e){return this.options.use_modal?{"data-src":e.image}:{}}}},i=(0,r(407).Z)(n,[["render",function(e,r,n,i,s,a){return(0,t.openBlock)(),(0,t.createElementBlock)("div",(0,t.normalizeProps)((0,t.guardReactiveProps)(a.getWrapperAttributes)),[(0,t.renderSlot)(e.$slots,"start"),((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(a.getImages,((e,r)=>((0,t.openBlock)(),(0,t.createElementBlock)("div",(0,t.mergeProps)({class:["zb-el-gallery-item",n.api.getStyleClasses("image_wrapper_styles")],key:r},n.api.getAttributesForTag("image_wrapper_styles",a.getImageWrapperAttrs(e))),[(0,t.createElementVNode)("img",{src:e.image},null,8,o)],16)))),128)),(0,t.renderSlot)(e.$slots,"end")],16)}]]);(0,e.registerElementComponent)({elementType:"gallery",component:i})}()}();