"use strict";(self.webpackChunkzb_editor=self.webpackChunkzb_editor||[]).push([[308],{4308:function(e,o,t){t.r(o),t.d(o,{default:function(){return n}});var r=t(4965);const a=["innerHTML"],c={key:0,class:"znpb-editor-library-modal-category__number"};var i={name:"CategoriesLibraryItem",components:{CategoriesLibrary:(0,r.defineAsyncComponent)((()=>Promise.resolve().then(t.bind(t,1393))))},props:{category:{type:Object,required:!1},isActive:{type:Boolean,required:!1},showCount:{type:Boolean,required:!1},onCategoryActivate:{type:Function,required:!0}},setup(e,{emit:o}){const t=(0,r.computed)((()=>e.category.subcategories&&e.category.subcategories.length>0)),a=(0,r.ref)(e.isActive);return(0,r.watch)((()=>e.isActive),(e=>{a.value=e})),{hasSubcategories:t,activeDropdown:a}}},n=(0,t(4407).Z)(i,[["render",function(e,o,t,i,n,s){const l=(0,r.resolveComponent)("Icon"),d=(0,r.resolveComponent)("CategoriesLibrary");return(0,r.openBlock)(),(0,r.createElementBlock)("li",{class:(0,r.normalizeClass)(["znpb-editor-library-modal-category__item",{"znpb-editor-library-modal-category__item--active":t.category.isActive}])},[(0,r.createElementVNode)("div",{class:"znpb-editor-library-modal-category__header",onClick:o[1]||(o[1]=e=>t.onCategoryActivate(t.category))},[(0,r.createElementVNode)("h6",{class:"znpb-editor-library-modal-category__title",innerHTML:t.category.name},null,8,a),t.showCount?((0,r.openBlock)(),(0,r.createElementBlock)("span",c,(0,r.toDisplayString)(t.category.count),1)):(0,r.createCommentVNode)("v-if",!0),i.hasSubcategories?((0,r.openBlock)(),(0,r.createBlock)(l,{key:1,icon:"select",rotate:i.activeDropdown?"180":"0",class:"znpb-editor-library-modal-category__header-icon",onClick:o[0]||(o[0]=(0,r.withModifiers)((e=>i.activeDropdown=!i.activeDropdown),["stop"]))},null,8,["rotate"])):(0,r.createCommentVNode)("v-if",!0)]),i.hasSubcategories&&i.activeDropdown?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,categories:t.category.subcategories,"on-category-activate":t.onCategoryActivate},null,8,["categories","on-category-activate"])):(0,r.createCommentVNode)("v-if",!0)],2)}]])}}]);