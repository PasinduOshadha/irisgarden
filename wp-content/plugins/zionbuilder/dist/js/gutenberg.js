!function(){var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"}();var e={};t.p=window.zionBuilderPaths.zionbuilder,function(){"use strict";t.r(e);const n=window.jQuery,i=window.wp;(function(t){const e="undefined"!==i.data;let o=t.is_editor_enabled;const a=t.post_id;let d=!1;const r=n("body");let l=null,s=null,c=null,u=null;function b(t){if(!o){if(t.preventDefault(),d)return;d=!0,n(".znpb-admin-post__edit-button--activate").addClass("znpb-admin-post__edit-button--loading"),i.data.select("core/editor").getEditedPostAttribute("title")||i.data.dispatch("core/editor").editPost({title:`ZionBuilder #${a}`}),i.data.dispatch("core/editor").editPost({zion_builder_status:!0}),_((function(){location.href=n(".znpb-admin-post__edit-button--activate").attr("href")}))}}function p(){o?r.addClass("znpb-admin-post-editor--active"):r.removeClass("znpb-admin-post-editor--active")}function _(t){i.data.dispatch("core/editor").savePost(),function(t){const e=setInterval((function(){i.data.select("core/editor").isSavingPost()||(clearInterval(e),t&&t.call(),o=i.data.select("core/editor").getEditedPostAttribute("zion_builder_status"),p(),d=!1,n(".znpb-admin-post__edit-button--activate").removeClass("znpb-admin-post__edit-button--loading"),n(".znpb-admin-post__edit-button--deactivate").removeClass("znpb-admin-post__edit-button--loading"))}),300)}(t)}function g(t){t.preventDefault(),o&&(n(".znpb-admin-post__edit-button--deactivate").addClass("znpb-admin-post__edit-button--loading"),i.data.dispatch("core/editor").editPost({zion_builder_status:!1}),_())}return{init:function(){e&&(i.data.subscribe((()=>{setTimeout((()=>{l=n(n("#zionbuilder-gutenberg-buttons").html()),s=n(n("#zionbuilder-gutenberg-editor-block").html()),c=n(".edit-post-header-toolbar"),u=n(".editor-block-list__layout"),console.log("attach buttons"),u.length||(u=n(".block-editor-block-list__layout")),c.length&&u.length&&(!c.find(".znpb-admin-post__edit").length&&c.length&&c.append(l),!u.find(".znpb-admin-post__edit-block").length&&u.length&&u.append(s),p())}),100)})),n(document).on("click",".znpb-admin-post__edit-button--activate",b),n(document).on("click",".znpb-admin-post__edit-button--deactivate",g))}}})(window.ZnPbEditPostData.data).init()}(),(window.zb=window.zb||{}).gutenberg=e}();