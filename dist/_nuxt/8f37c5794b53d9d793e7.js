(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{356:function(e,t,r){e.exports=r.p+"img/4db7a56.png"},416:function(e,t,r){var content=r(549);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("5f769cf2",content,!0,{sourceMap:!1})},548:function(e,t,r){"use strict";var o=r(416);r.n(o).a},549:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,'.signup_refel_page{max-width:480px;width:100%;height:100vh;margin:0 auto;text-align:center}.signup_refel_page .el-button--success{background-color:#ffbe3c;border:0;color:#000}.refel_img{width:140px;height:auto;margin:0 auto}.refel_img_two img{width:80px;height:auto;position:relative;top:43px}.signup_refel_page h2.background{position:relative;margin:25px auto;z-index:1}.signup_refel_page .box-card h3{margin:40px auto 10px;color:#5aaf46;font-weight:700;font-size:21px}.signup_refel_page .box-card h5{color:#35343a;font-size:16px}.signup_refel_page .box-card p{color:#35343a}.signup_refel_page .el-card{border-radius:13px}.signup_refel_page h2.background:before{border-top:1px solid #bfbfbf;content:"";margin:4px auto 0;position:absolute;top:50%;left:0;right:0;bottom:0;width:95%;z-index:-1}.signup_refel_page h2.background span{background:#fff;padding:0 15px;font-size:17px}.signup_refel_page .el-form-item{margin:0}.submitRefel{margin-top:20px;margin-bottom:20px}.hideScrollBar_refel{width:100%;height:100%;overflow:auto;margin-left:17px;padding-right:28px}',""])},648:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"refel_img_two"},[t("img",{attrs:{src:r(356)}})])}],n=(r(48),{mounted:function(){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start(),setTimeout((function(){return e.$nuxt.$loading.finish()}),500)}))},data:function(){return{ruleForm:{referal_code:""},errors:[],accessToken:""}},methods:{submitRefel:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r=localStorage.getItem("token"),o={referal_code:t.ruleForm.referal_code};t.$axios.post("/v2/v1/upload_referal_code",o,{headers:{Authorization:"Bearer "+r}}).then((function(e){t.res_data=e.data.data,t.error_msg=e.data.message,console.log(t.res_data),console.log(t.error_msg),"fail"==t.error_msg?t.$message({message:t.$t("refel_code_invalid"),type:"warning",showClose:!0}):(t.$message({showClose:!0,message:t.$t("you_had_refel_code"),type:"success"}),t.$router.push("/?lang=".concat(t.$store.state.locale)))}))}))},skip:function(){this.$router.push("/?lang=".concat(this.$store.state.locale))}}}),l=(r(548),r(2)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"signup_refel_page"},[r("div",{staticClass:"longText",attrs:{id:"hidingScrollBar"}},[r("div",{staticClass:"hideScrollBar_refel"},[e._m(0),e._v(" "),r("el-card",{staticClass:"box-card"},[r("h3",[e._v(e._s(e.$t("registartion_success")))]),e._v(" "),r("h5",[e._v(e._s(e.$t("we_are_so_delighted")))]),e._v(" "),r("h2",{staticClass:"background"},[r("span",[e._v(e._s(e.$t("optional")))])]),e._v(" "),r("h4",[e._v(e._s(e.$t("have_referral_code")))]),e._v(" "),r("p",[e._v(e._s(e.$t("please_enter_referral_code"))+"\n                        ")]),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{prop:"referal_code",rules:[{required:!0,message:e.$t("enter_referral_code")}]}},[r("el-input",{attrs:{placeholder:e.$t("enter_referral_code")},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitRefel("ruleForm")}},model:{value:e.ruleForm.referal_code,callback:function(t){e.$set(e.ruleForm,"referal_code",t)},expression:"ruleForm.referal_code"}}),e._v(" "),r("div",{staticStyle:{"padding-top":"20px"}},[r("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.submitRefel("ruleForm")}}},[e._v(" တင်ပြမည်")])],1)],1)],1)],1),e._v(" "),r("p",{staticStyle:{"padding-top":"20px"}},[e._v("ရည်ညွှန်းကုဒ်မရှိလျှင် ကျော်သွားနိုင်ပါသည်။")]),e._v(" "),r("el-button",{staticClass:"submitRefel",attrs:{type:"info",round:""},on:{click:function(t){return e.skip()}}},[e._v("ရည်ညှန်းကုဒ်မရှိပါ")])],1)])])}),o,!1,null,null,null);t.default=component.exports}}]);