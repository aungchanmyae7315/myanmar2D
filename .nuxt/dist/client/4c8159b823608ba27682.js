(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(t,e,r){var content=r(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("799c1ce7",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";var n=r(322);r.n(n).a},329:function(t,e,r){(t.exports=r(32)(!1)).push([t.i,".el-page-header__left{margin:0}.result_threed .el-page-header{padding:0 25px;line-height:43px;color:#000}.result_threed .el-page-header__content{margin-left:50px;color:#000}.result_item{padding:20px}.result_item h4{font-size:15px}.result_threed .el-card{color:#fff;margin:5px auto;border-radius:10px;text-align:center}.result_item .el-col .result_number{width:52px;background:#222c36;float:right;font-weight:700;color:#fff;font-size:32px;padding:5px 10px;border-radius:13px;margin-right:3px}.result_threed .el-card__body{background:#54b24f;padding:10px 20px;border-radius:10px}.result_date,.result_time{margin:17px 10px;padding-left:12px;font-size:11px}.result_item .el-divider{background:#696767;margin:12px auto}.result_item span{font-size:13px}.result .table th{border:0}.threed_result h4{font-size:20px;font-weight:700}.threed_result span{font-size:11px}",""])},338:function(t,e,r){"use strict";r.r(e);r(55);var n={mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()}))},data:function(){return{threed_result:""}},methods:{goBack:function(){this.$router.push("/?lang=".concat(this.$store.state.locale))}},created:function(){var t=this;this.$axios.get("/v2/v1/threed-result").then((function(e){console.log(e.data.data),t.threed_result=e.data.data,t.$nuxt.$loading.finish()}))}},l=(r(328),r(34)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main_container result_threed"},[r("el-header",{staticClass:"header"},[r("el-page-header",{attrs:{title:"",content:"3D results"},on:{back:t.goBack}})],1),t._v(" "),r("div",{staticStyle:{"padding-top":"70px"}},t._l(t.threed_result,(function(e,n){return r("div",{key:n,staticClass:"threed_result",staticStyle:{padding:"0 20px"},attrs:{"data-aos":"fade-up","data-aos-easing":"linear"}},[r("el-card",{attrs:{shadow:"always"}},[r("el-row",[r("el-col",{attrs:{span:16}},[r("span",[t._v("Date")]),t._v(" "),r("h4",[t._v(t._s(e.datetime))])]),t._v(" "),r("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[r("span",{staticStyle:{"padding-right":"9px"}},[t._v("3D")]),t._v(" "),r("h4",{staticStyle:{"text-align":"right",color:"#FFEB3C","font-weight":"bold"}},[t._v(t._s(e.result))])])],1)],1)],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);