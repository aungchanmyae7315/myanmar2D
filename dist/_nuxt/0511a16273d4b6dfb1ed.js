(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{353:function(t,e,n){t.exports=n.p+"img/4f00e5a.png"},354:function(t,e,n){t.exports=n.p+"img/d49fb22.png"},355:function(t,e,n){t.exports=n.p+"img/cc395c5.png"},389:function(t,e,n){var content=n(503);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("570651d1",content,!0,{sourceMap:!1})},502:function(t,e,n){"use strict";var o=n(389);n.n(o).a},503:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".lang{text-align:center;margin:100px auto}.footer_btn .el-button--success{border:0;color:#000;background:#ffbe3c}.lang .el-dropdown{padding:27px;box-shadow:1px 0 17px -13px rgba(0,0,0,.75)}.lang .el-dropdown-menu__item{margin:20px auto}.lang .el-dropdown-link{font-size:18px;font-weight:700}.language_type .el-dropdown-menu__item:not(.is-disabled):hover{background:#ffbe3c;color:#fff;border-radius:21px;font-weight:700}.lang .el-button.is-round{width:100%;position:absolute;right:0;left:0;margin:20px;bottom:0}.language_type{padding:20px}.language_type .el-header{background-color:#fff}.language_type ul{padding:0;margin:150px auto;list-style:none}.language_type ul li{max-width:480px;width:50%;padding:10px;text-align:center;border-radius:23px;margin:20px auto;color:#000;text-transform:capitalize}.language_type ul li a{text-decoration:none}.language_type .active{background:#158220;color:#fff;display:block;font-weight:700}.el-page-header__left{margin:0}.language_type .el-page-header{line-height:43px;color:#000}.language_type .el-page-header__content{color:#000;font-weight:700}",""])},656:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{fullscreenLoading:!1}},components:{},methods:{goBack:function(){this.$router.push("/me?lang=".concat(this.$store.state.locale))},changeLang:function(t){this.$store.commit("SET_LANG",t),this.$router.push({path:"".concat(this.$router.currentRoute.path,"?lang=").concat(t)}),this.$axios.get("/v2/v1/add_language?language=".concat(t)).then((function(t){console.log(t)})),this.$axios.get("/v2/v1/get_language").then((function(t){console.log(t)}))},submitLang:function(){var t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout((function(){t.close()}),1e3),this.$store.commit("SET_LANG","hello")}},computed:{locales:function(){}}},l=(n(502),n(2)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"language_type"},[o("el-page-header",{attrs:{title:"",content:""+t.$t("Language")},on:{back:t.goBack}}),t._v(" "),o("div",{staticClass:"lang lang_icon"},[o("el-dropdown",{staticStyle:{"text-align":"center"},on:{command:t.changeLang}},[o("el-dropdown-item",{attrs:{round:"",command:"en"}},[o("img",{attrs:{src:n(353),alt:""}}),t._v("English")]),t._v(" "),o("el-dropdown-item",{attrs:{round:"",command:"uni"}},[o("img",{attrs:{src:n(354),alt:""}}),t._v("မြန်မာ")]),t._v(" "),o("el-dropdown-item",{attrs:{round:"",command:"zh"}},[o("img",{attrs:{src:n(355),alt:""}}),t._v("中文")])],1)],1),t._v(" "),o("div",{staticClass:"footer_btn"},[o("nuxt-link",{attrs:{to:t.$t("/")+"?lang="+t.$store.state.locale}},[o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{width:"100%"},attrs:{type:"success",round:""},on:{click:function(e){return t.submitLang("")}}},[t._v(t._s(t.$t("Submit")))])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);