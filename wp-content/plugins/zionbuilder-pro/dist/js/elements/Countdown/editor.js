(()=>{var n={212:(n,t)=>{"use strict";t.Z=(n,t)=>{const o=n.__vccOpts||n;for(const[n,e]of t)o[n]=e;return o}}},t={};function o(e){var s=t[e];if(void 0!==s)return s.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var t=o.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n+"../../../"})(),o.p=window.zionBuilderPaths[{}.appName],(()=>{"use strict";const n=zb.vue,t=["data-zion-countdown-config"],e={class:"zb-el-countdown__wrapper",ref:"countdownWrapper"},s=[(0,n.createStaticVNode)('<div class="zb-el-countdownUnit"><span class="zb-el-countdownUnit__value">00</span><span class="zb-el-countdownUnit__unit">Days</span></div><div class="zb-el-countdownUnit"><span class="zb-el-countdownUnit__value">00</span><span class="zb-el-countdownUnit__unit">Hours</span></div><div class="zb-el-countdownUnit"><span class="zb-el-countdownUnit__value">00</span><span class="zb-el-countdownUnit__unit">Minutes</span></div><div class="zb-el-countdownUnit"><span class="zb-el-countdownUnit__value">00</span><span class="zb-el-countdownUnit__unit">Seconds</span></div>',4)],i=window.jQuery,u={name:"countdown",props:["options","api","element"],setup(t){const o=(0,n.ref)(null),e=(0,n.ref)(null);(0,n.onMounted)((()=>{d()})),(0,n.watch)((()=>[t.options.date,t.options.hour,t.options.minutes,t.options.days_text,t.options.hours_text,t.options.minutes_text,t.options.seconds_text,t.options.block_type,t.options.separator_type,t.options.label_inside,t.options.time_color,t.options.separator_color].toString()),((t,o)=>{(0,n.nextTick)((()=>{d()}))}));const s=(0,n.computed)((()=>{let n={finalDate:u.value,daysText:c.value,hoursText:r.value,minutesText:l.value,secondsText:p.value};return JSON.stringify(n)})),u=(0,n.computed)((()=>`${t.options.date} ${t.options.hour}:${t.options.minutes}:00`)),a=(0,n.computed)((()=>window.zionjQueryCountdown)),c=(0,n.computed)((()=>t.options.days_text||a.value.day)),r=(0,n.computed)((()=>t.options.hours_text||a.value.hour)),l=(0,n.computed)((()=>t.options.minutes_text||a.value.minute)),p=(0,n.computed)((()=>t.options.seconds_text||a.value.second));function d(){window.ZionBuilderFrontend.getScript("countdown")&&(i(o.value).countdown(u.value),i(o.value).on("update.countdown",(function(n){i(o.value).html(n.strftime(""+w("%D","%!D:"+c.value+";")+w("%H","%!H:"+r.value+";")+w("%M","%!M:"+l.value+";")+w("%S","%!S:"+p.value+";")))})))}function w(n,t){return`<div class="zb-el-countdownUnit"><span class="zb-el-countdownUnit__value">${n}</span><span class="zb-el-countdownUnit__unit">${t}</span></div>`}return{root:e,countdownWrapper:o,finalDate:u,countdownConfig:s}}},a=(0,o(212).Z)(u,[["render",function(o,i,u,a,c,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{ref:"root","data-zion-countdown-config":a.countdownConfig},[(0,n.renderSlot)(o.$slots,"start"),(0,n.createElementVNode)("div",e,s,512),(0,n.renderSlot)(o.$slots,"end")],8,t)}]]);(0,zb.editor.registerElementComponent)({elementType:"countdown",component:a})})()})();