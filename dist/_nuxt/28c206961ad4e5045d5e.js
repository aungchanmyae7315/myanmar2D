(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{359:function(t,e,l){t.exports=l.p+"img/d0e3444.png"},432:function(t,e,l){var content=l(590);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("c65b9f28",content,!0,{sourceMap:!1})},589:function(t,e,l){"use strict";var n=l(432);l.n(n).a},590:function(t,e,l){(t.exports=l(7)(!1)).push([t.i,".bet_detail .el-header{background-color:#fff}.el-page-header__left{margin:0}.bet_detail .el-page-header{line-height:43px;color:#000;padding:0 20px}.bet_detail .el-page-header__content{color:#000;font-weight:700}.bet_detail_item{display:flex;position:absolute;top:72px}.bet_detail .table thead th{border:unset}.bet_detail_list{list-style:none;padding:20px;margin:0;border-bottom:1px solid #b9b9b9}.bet_detail_list li{display:inline-block}",""])},622:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-image"},[e("img",{staticClass:"seinlucky_icon",attrs:{src:l(359),alt:""}}),this._v(" "),e("span",{staticClass:"seinlucky_text"},[this._v("SeinLucky")])])}],o=(l(48),{mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()}))},data:function(){return{bet_detail:""}},methods:{goBack:function(){this.$router.push("/bet_history?lang=".concat(this.$store.state.locale))}},created:function(){var t=this,e=localStorage.getItem("token"),l=localStorage.getItem("bet_date");this.$axios.get("/v2/v1/threed/historyByDate?date="+l,{headers:{Authorization:"Bearer "+e}}).then((function(e){t.$nuxt.$loading.finish(),t.bet_detail=e.data.data}))}}),r=(l(589),l(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main_container bet_detail"},[l("el-header",[l("el-page-header",{attrs:{title:" ",content:""+t.$t("bet_detail_title")},on:{back:t.goBack}})],1),t._v(" "),t._m(0),t._v(" "),l("el-row",{staticStyle:{padding:"23px"}},[l("el-col",{attrs:{span:12}},[l("div",{},[t._v(t._s(t.$t("date_time")))])]),t._v(" "),l("el-col",{attrs:{span:6}},[l("div",{},[t._v(t._s(t.$t("no")))])]),t._v(" "),l("el-col",{attrs:{span:6}},[l("div",{staticStyle:{"text-align":"right","padding-right":"20px"}},[t._v(t._s(t.$t("Amount")))])])],1),t._v(" "),t._l(t.bet_detail,(function(e,b){return l("ul",{key:b,staticClass:"bet_detail_list"},[l("el-row",[l("el-col",{attrs:{span:12}},[l("li",{staticStyle:{margin:"0"}},[t._v(" "+t._s(e.datetime))])]),t._v(" "),l("el-col",{attrs:{span:6}},[l("li",{staticStyle:{"margin-right":"0"}},[t._v(" "+t._s(e.number))])]),t._v(" "),l("el-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[l("li",{staticStyle:{"margi-right":"0","text-align":"right"}},[t._v(t._s(e.amount)+" ကျပ်")])])],1)],1)}))],2)}),n,!1,null,null,null);e.default=component.exports}}]);