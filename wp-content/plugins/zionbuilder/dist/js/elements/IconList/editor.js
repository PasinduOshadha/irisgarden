!function(){var e={407:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../../"}(),n.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";var e=zb.editor,t=zb.vue;const o=["innerHTML"];var i={name:"icon_list",props:["options","element","api"],computed:{iconListConfig(){return this.options.icons?this.options.icons:[]}}},r=(0,n(407).Z)(i,[["render",function(e,n,i,r,s,c){const l=(0,t.resolveComponent)("ElementIcon");return(0,t.openBlock)(),(0,t.createElementBlock)("div",null,[(0,t.renderSlot)(e.$slots,"start"),((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(c.iconListConfig,((e,n)=>((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(e.link&&e.link.link?"a":"span"),(0,t.mergeProps)({key:n,class:["zb-el-iconList__item",[`zb-el-iconList__item--${n} `,i.api.getStyleClasses("item_styles")]]},i.api.getAttributesForTag("item_styles")),{default:(0,t.withCtx)((()=>[(0,t.createVNode)(l,(0,t.mergeProps)({class:["zb-el-iconList__itemIcon",i.api.getStyleClasses("icon_styles")]},i.api.getAttributesForTag("icon_styles"),{iconConfig:e.icon}),null,16,["class","iconConfig"]),e.text?((0,t.openBlock)(),(0,t.createElementBlock)("span",(0,t.mergeProps)({key:0,class:["zb-el-iconList__itemText",i.api.getStyleClasses("text_styles")]},i.api.getAttributesForTag("text_styles"),{innerHTML:e.text}),null,16,o)):(0,t.createCommentVNode)("v-if",!0)])),_:2},1040,["class"])))),128)),(0,t.renderSlot)(e.$slots,"end")])}]]);(0,e.registerElementComponent)({elementType:"icon_list",component:r})}()}();