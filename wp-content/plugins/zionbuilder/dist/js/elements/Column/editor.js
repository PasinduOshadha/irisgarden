!function(){var t={407:function(t,o){"use strict";o.Z=(t,o)=>{const e=t.__vccOpts||t;for(const[t,r]of o)e[t]=r;return e}}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return t[r](s,s.exports,e),s.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var r=o.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../../"}(),e.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";var t=zb.editor,o=zb.vue,r=zb.utils,n={name:"zion_column",props:["options","api","element"],computed:{htmlTag(){return this.options.link&&this.options.link.link?"a":/^[a-z0-9]+$/i.test(this.options.tag)?this.options.tag:"div"},extraAttributes(){return(0,r.getLinkAttributes)(this.options.link)},topMask(){return this.shapes.top},bottomMask(){return this.shapes.bottom},shapes(){return this.options.shapes||{}}}},s=(0,e(407).Z)(n,[["render",function(t,e,r,n,s,i){const a=(0,o.resolveComponent)("SvgMask"),p=(0,o.resolveComponent)("SortableContent");return(0,o.openBlock)(),(0,o.createBlock)(p,(0,o.mergeProps)({class:"zb-column",element:r.element,tag:i.htmlTag},i.extraAttributes),{start:(0,o.withCtx)((()=>[(0,o.renderSlot)(t.$slots,"start"),void 0!==i.topMask&&i.topMask.shape?((0,o.openBlock)(),(0,o.createBlock)(a,{key:0,shapePath:i.topMask.shape,color:i.topMask.color,flip:i.topMask.flip,position:"top"},null,8,["shapePath","color","flip"])):(0,o.createCommentVNode)("v-if",!0),void 0!==i.bottomMask&&i.bottomMask.shape?((0,o.openBlock)(),(0,o.createBlock)(a,{key:1,shapePath:i.bottomMask.shape,color:i.bottomMask.color,flip:i.bottomMask.flip,position:"bottom"},null,8,["shapePath","color","flip"])):(0,o.createCommentVNode)("v-if",!0)])),end:(0,o.withCtx)((()=>[(0,o.renderSlot)(t.$slots,"end")])),_:3},16,["element","tag"])}]]);(0,t.registerElementComponent)({elementType:"zion_column",component:s})}()}();