(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{415:function(e,t,o){var content=o(547);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(8).default)("099e2891",content,!0,{sourceMap:!1})},546:function(e,t,o){"use strict";var r=o(415);o.n(r).a},547:function(e,t,o){(e.exports=o(7)(!1)).push([e.i,".signup .el-button--success{background:#ffeb3c;color:#000;border:0;box-shadow:-2px 4px 15px -5px #000}.signup .el-step__icon.is-text{border-color:#ffeb3c;color:#ffeb3c}.signup .el-step__head.is-success{color:#ffeb3c}.signup .el-page-header__left{margin:0;padding:20px 5px}.sign_page{padding:15px 20px;max-width:480px;width:100%}.el-step__head.is-process,.el-step__title.is-process{color:#b8b8b8}.step_bar{max-width:480px;width:100%;margin-top:20px}.sign_up_text{text-align:center;margin:15px auto}.phone_input .el-input__inner{background:#eee8e8;border-radius:22px;color:#000}.phone_input{margin-bottom:50px}.sign_page .el-button.is-round{width:100%}.phone_input .el-input__prefix{color:green}",""])},650:function(e,t,o){"use strict";o.r(t);o(48);var r={layout:"loginLayout",mounted:function(){this.$nextTick((function(){}))},data:function(){var e=this;return{active:1,fullscreenLoading:!1,ruleForm:{phone:"",pass:"",checkPass:""},rules:{pass:[{validator:function(t,o,r){""===o?r(new Error(e.$t("sign_up_password_invalid"))):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{validator:function(t,o,r){""===o?r(new Error(e.$t("sign_up_password_invalid_again"))):o!==e.ruleForm.pass?r(new Error(e.$t("two_input_do_not_match"))):r()},trigger:"blur"}]}}},methods:{isMobile:function(){var a,e=!1;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},next:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.active++>1&&(t.active=0)}))},submitForm:function(e){var t=this;this.$nuxt.$loading.start(),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.$axios.post("/v2/v1/register",{phone:t.ruleForm.phone,password:t.ruleForm.pass}).then((function(e){console.log(e),t.token=e.data.access_token,t.device_id=e.data.device_id,console.log(t.device_id),t.userInfo=e.data,t.$nuxt.$loading.finish(),t.$store.commit("logIn",t.userInfo),t.$store.commit("accessToken",t.token),t.$router.push("/signup_refel?lang=".concat(t.$store.state.locale))})).catch((function(e){e.response.data.errors.password?(console.log(e.response.data.errors.password[0]),t.$message({showClose:!0,center:!0,message:e.response.data.errors.password[0],type:"error"})):e.response.data.errors.phone?(console.log("pal"),console.log(e.response.data.errors.phone[0]),t.$message({showClose:!0,center:!0,message:e.response.data.errors.phone[0],type:"error"}),t.active++>1&&(t.active=1),t.$nuxt.$loading.finish()):console.log("ok")}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},n=(o(546),o(2)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("div",{staticClass:"sign_page signup"},[o("nuxt-link",{attrs:{to:e.$t("/login")+"?lang="+e.$store.state.locale}},[o("el-page-header",{staticStyle:{color:"#000"},attrs:{title:""}})],1),e._v(" "),1===e.active?o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm},nativeOn:{submit:function(e){e.preventDefault()}}},[o("div",{staticClass:"sign_up_text"},[o("h4",[e._v(e._s(e.$t("What_phone_number")))])]),e._v(" "),o("div",{staticClass:"phone_input"},[o("el-form-item",{attrs:{label:e.$t("phone")+" (09 ပါထည့်ဖြည့်ပါ )",prop:"phone",rules:[{required:!0,message:e.$t("What_phone_number")}]}},[o("el-input",{attrs:{type:"number",placeholder:"09 xxx xxx xxx","prefix-icon":"el-icon-phone"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next("ruleForm")}},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1),e._v(" "),o("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.next("ruleForm")}}},[e._v(e._s(e.$t("Next")))])],1):e._e(),e._v(" "),2===e.active?o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[o("div",{staticClass:"sign_up_text"},[o("h4",[e._v(e._s(e.$t("set_your_password")))])]),e._v(" "),o("div",{staticClass:"phone_input"},[o("el-form-item",{attrs:{prop:"pass"}},[o("el-input",{attrs:{type:"password","show-password":"",placeholder:e.$t("password"),"prefix-icon":"el-icon-lock"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"checkPass"}},[o("el-input",{attrs:{type:"password","show-password":"",placeholder:e.$t("confirm_password"),"prefix-icon":"el-icon-lock"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("ruleForm")}},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1)],1),e._v(" "),o("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.$t("Confirm")))])],1):e._e(),e._v(" "),o("div",{staticClass:"step_bar",staticStyle:{width:"50%"}},[o("el-steps",{attrs:{active:e.active,"align-center":"","finish-status":"success"}},[o("el-step",[e._v("Hello")]),e._v(" "),o("el-step",[e._v("Tow")])],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);