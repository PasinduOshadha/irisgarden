!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ZBVideo=t():e.ZBVideo=t()}(window,(function(){return function(e){var t={};function o(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist/",o(o.s=1)}([,function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return l}));class i{constructor(){this.callbacks={}}addEventListener(e,t){void 0===this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}removeEventListener(e,t){if(void 0!==this.callbacks[e]){const o=this.callbacks[e].indexOf(t);-1!==o&&this.callbacks[e].splice(o)}}dispatchEvent(e,t={}){void 0!==this.callbacks[e]&&this.callbacks[e].forEach(e=>{e({detail:t})})}}var s=function(e,t){var o="string"==typeof e?document.querySelectorAll(e):e,i=t||"js-reframe";"length"in o||(o=[o]);for(var s=0;s<o.length;s+=1){var n=o[s];if(!(-1!==n.className.split(" ").indexOf(i)||n.style.width.indexOf("%")>-1)){var r=(n.getAttribute("height")||n.offsetHeight)/(n.getAttribute("width")||n.offsetWidth)*100,a=document.createElement("div");a.className=i;var u=a.style;u.position="relative",u.width="100%",u.paddingTop=r+"%";var d=n.style;d.position="absolute",d.width="100%",d.height="100%",d.left="0",d.top="0",n.parentNode.insertBefore(a,n),n.parentNode.removeChild(n),a.appendChild(n)}}};let n=0,r=0,a=0,u=1;const d=new i;class l{constructor(e,t={}){this.options={autoplay:!0,muted:!0,loop:!0,controls:!0,controlsPosition:"bottom-left",videoSource:"local",responsive:!0,...t},this.eventBusInstance=new i,this.on=this.eventBusInstance.addEventListener.bind(this.eventBusInstance),this.off=this.eventBusInstance.removeEventListener.bind(this.eventBusInstance),this.trigger=this.eventBusInstance.dispatchEvent.bind(this.eventBusInstance),this.domNode=e,this.videoIndex=a++,this.videoContainer=null,this.options.responsive&&this.on("video_ready",()=>{s(this.videoContainer)}),this.domNode.zionVideo=this,this.nextTick(()=>{"local"===this.options.videoSource&&this.options.mp4?(this.videoSource="local",this.setupLocal()):"youtube"===this.options.videoSource&&this.options.youtubeURL?(this.videoSource="youtube",this.YoutubeId=function(e){let t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!==t[7].length)&&t[7]}(this.options.youtubeURL),this.setupYoutube()):"vimeo"===this.options.videoSource&&this.options.vimeoURL&&(this.videoSource="vimeo",this.setupVimeo())})}nextTick(e){setTimeout(()=>{e()},0)}setupYoutube(){const e={mute:this.options.muted?1:0,autoplay:this.options.autoplay?1:0,iv_load_policy:3,showinfo:0,controls:this.options.controls?1:0,modestbranding:1,rel:0,wmode:"transparent"};let t="";for(let[o,i]of Object.entries(e))t+=`&${o}=${i}`;const o=document.createElement("iframe");if(o.src=`https://www.youtube-nocookie.com/embed/${this.YoutubeId}?enablejsapi=1${t}`,o.id="znpb-video-bg-youtube-"+this.videoIndex,o.allow="autoplay; fullscreen",o.width=425,o.height=239,this.domNode.appendChild(o),0===n){var i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(i,s);const e=this;window.onYouTubeIframeAPIReady=function(){e.enableYoutube(),d.dispatchEvent("youtube_api_ready"),n=2},n=1}else 1===n?d.addEventListener("youtube_api_ready",this.enableYoutube.bind(this)):2===n&&this.enableYoutube()}enableYoutube(){this.player=new window.YT.Player("znpb-video-bg-youtube-"+this.videoIndex,{height:"100%",width:"100%",videoId:this.YoutubeId}),this.videoContainer=this.player.getIframe(),this.trigger("video_ready")}setupVimeo(){const e=document.createElement("div");if(e.id="znpb-video-bg-vimeo-"+this.videoIndex,this.domNode.appendChild(e),0===r){const e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js";let t=document.getElementsByTagName("script")[1];const o=this;t.parentNode.insertBefore(e,t),e.onload=function(){o.enableVimeo(),d.dispatchEvent("vimeo_api_ready"),r=2},r=1}else 1===r?d.addEventListener("vimeo_api_ready",this.enableVimeo.bind(this)):2===r&&this.enableVimeo()}enableVimeo(){this.player=new window.Vimeo.Player("znpb-video-bg-vimeo-"+this.videoIndex,{id:this.options.vimeoURL,background:this.options.autoplay,muted:this.options.muted,transparent:!0,autoplay:this.options.autoplay,controls:this.options.controls}),this.player.ready().then(()=>{this.videoContainer=this.player.element,this.trigger("video_ready")})}setupLocal(){let e=this.options.autoplay?"autoplay":"",t=this.options.muted?"muted":"",o=this.options.loop?"loop":"",i=document.createElement("video");if(i.muted=t,i.autoplay=e,i.loop=o,this.options.controls&&(i.controls=!0),this.options.mp4){var s=document.createElement("source");s.src=this.options.mp4,i.appendChild(s)}this.domNode.appendChild(i),this.player=i,this.videoContainer=i,this.trigger("video_ready")}getVideoContainer(){return this.videoContainer}play(){"youtube"===this.videoSource&&this.player.playVideo(),"vimeo"===this.videoSource&&this.player.play(),"local"===this.videoSource&&this.player.play(),this.playing=!0}pause(){"youtube"===this.videoSource&&this.player.pauseVideo(),"vimeo"===this.videoSource&&this.player.pause(),"local"===this.videoSource&&this.player.pause(),this.playing=!1}togglePlay(){this.playing?this.pause():this.play()}mute(){"youtube"===this.videoSource&&this.player.mute(),"vimeo"===this.videoSource&&(this.player.getVolume().then(e=>{u=e}),this.player.setVolume(0)),"local"===this.videoSource&&(this.player.muted=!0),this.muted=!0}unMute(){"youtube"===this.videoSource&&this.player.unMute(),"vimeo"===this.videoSource&&this.player.setVolume(u),"local"===this.videoSource&&(this.player.muted=!1),this.muted=!1}toggleMute(){this.muted?this.unMute():this.mute()}destroy(){for(this.trigger("beforeDestroy"),this.player=null;this.domNode.firstChild;)this.domNode.removeChild(this.domNode.firstChild)}}}]).default}));