!function(){var t={407:function(t,e){"use strict";e.Z=(t,e)=>{const o=t.__vccOpts||t;for(const[t,n]of e)o[t]=n;return o}}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../../../"}(),o.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";var t=zb.editor,e=zb.vue;const n={key:1,class:"zb-el-button__text"};var i={name:"zion_button",props:["options","api","element"],computed:{iconConfig(){return this.options.icon},getTag(){return this.options.link&&this.options.link.link?"a":"div"},getButtonAttributes(){const t={};return this.options.link&&this.options.link.link&&(t.href=this.options.link.link,t.target=this.options.link.target,t.title=this.options.link.title),t}}},r=(0,o(407).Z)(i,[["render",function(t,o,i,r,s,c){const l=(0,e.resolveComponent)("ElementIcon");return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.renderSlot)(t.$slots,"start"),((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(c.getTag),(0,e.mergeProps)(i.api.getAttributesForTag("button_styles",c.getButtonAttributes),{ref:"button",class:["zb-el-button",[i.api.getStyleClasses("button_styles"),{"zb-el-button--has-icon":i.options.icon}]]}),{default:(0,e.withCtx)((()=>[i.options.icon?((0,e.openBlock)(),(0,e.createBlock)(l,(0,e.mergeProps)({key:0,class:"zb-el-button__icon"},i.api.getAttributesForTag("icon_styles"),{iconConfig:c.iconConfig,class:i.api.getStyleClasses("icon_styles")}),null,16,["iconConfig","class"])):(0,e.createCommentVNode)("v-if",!0),i.options.button_text?((0,e.openBlock)(),(0,e.createElementBlock)("span",n,(0,e.toDisplayString)(i.options.button_text),1)):(0,e.createCommentVNode)("v-if",!0)])),_:1},16,["class"])),(0,e.renderSlot)(t.$slots,"end")])}]]);(0,t.registerElementComponent)({elementType:"zion_button",component:r})}()}();