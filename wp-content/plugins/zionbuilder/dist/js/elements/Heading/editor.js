!function(){var t={407:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,o]of e)n[t]=o;return n}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../../../"}(),n.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";var t=zb.editor,e=zb.vue;const o=["href","title","target"];var r={name:"zion_heading",props:["options","element","api"],computed:{hasLink(){return this.options.link&&this.options.link.link}}},i=(0,n(407).Z)(r,[["render",function(t,n,r,i,c,s){const l=(0,e.resolveComponent)("RenderValue");return(0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(r.options.tag||"h1"),null,{default:(0,e.withCtx)((()=>[(0,e.renderSlot)(t.$slots,"start"),s.hasLink?((0,e.openBlock)(),(0,e.createElementBlock)("a",{key:0,onClick:n[0]||(n[0]=(0,e.withModifiers)((t=>{t.preventDefault()}),["prevent"])),href:r.options.link.link,title:r.options.link.title,target:r.options.link.target},[(0,e.createVNode)(l,{option:"content","forced-root-node":!1})],8,o)):((0,e.openBlock)(),(0,e.createBlock)(l,{key:1,option:"content","forced-root-node":!1})),(0,e.renderSlot)(t.$slots,"end")])),_:3})}]]);(0,t.registerElementComponent)({elementType:"zion_heading",component:i})}()}();