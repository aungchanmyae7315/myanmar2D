(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{421:function(t,e,o){t.exports=o.p+"img/7e313a5.jpeg"},422:function(t,e,o){var content=o(570);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("17d0bfe7",content,!0,{sourceMap:!1})},569:function(t,e,o){"use strict";var r=o(422);o.n(r).a},570:function(t,e,o){e=t.exports=o(7)(!1);var r=o(137)(o(421));e.push([t.i,'.topup{padding:0 20px 50px}.topup .el-header{background-color:#fff}.el-page-header__left{margin:0}.topup .el-page-header{line-height:43px;color:#000}.topup .el-page-header__content{color:#000;font-weight:700}.tran_input .el-input__inner{background-color:#e6e6e6;color:#666}.topup .upload-demo{box-shadow:1px 4px 15px -6px rgba(0,0,0,.75);text-align:center;padding:30px}.topup p{color:#666}.topup .el-form-item__label{color:#000}.topup .el-icon-plus:before{position:absolute;left:0;right:0;width:40px;height:40px;z-index:999;bottom:76px;content:"\\e6d9";font-size:27px;color:#0187e0;background:#fff;border-radius:50px;padding:7px;font-weight:700}.topup .el-button.is-round{position:relative;max-width:480px;width:100%;background-color:#158220;color:#fff}.topup .avatar-upload{position:relative;margin-bottom:30px}.topup .avatar-upload .avatar-edit{margin:0 auto;text-align:center;z-index:1}.topup .avatar-upload .avatar-edit input{display:none}#imagePreview_top,.topup .avatar-upload .avatar-preview{width:100%;height:190px;border-radius:9px;position:relative;text-align:center;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}.topup .avatar-upload .avatar-preview>div{width:100%;height:auto;border-radius:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.topup .upload_icon_top{width:100%;opacity:.5;border-radius:9px;background-color:#0092d9}.wallet_type .el-avatar--circle{border-radius:22%}.wallet_type .el-button{font-size:11px}.wallet_type .el-avatar ul{padding:5px}.wallet_type .el-avatar ul li{color:#000}.wallet_type img{width:50px;height:auto;float:left;border-radius:9px}.topup .avatar_text{color:#000}.see_more_list{list-style:none;padding:20px;margin:0}.see_more_list img{box-shadow:0 5px 23px -7px rgba(0,0,0,.75)}#bank_copy_list{margin-bottom:30px;border-radius:9px;box-shadow:3px 6px 28px -7px rgba(0,0,0,.75)}.see_more_list .copy-btn{cursor:pointer;color:#fff;background:#158220;padding:4px 7px;border-radius:23px;font-size:11px}.show_more{text-align:center;padding:8px;border-top:1px solid #b8b8b8}.topup_contact{margin:0;padding:0;text-align:center;list-style:none}.topup_contact li{margin:20px auto}.upload_img_bg{position:absolute;top:16%;left:25%;background-image:url('+r+");background-size:100% 100%;max-width:480px;width:50%;height:50%;background-repeat:no-repeat;z-index:-1}.upload_over_lay{width:100%;height:150px;background-color:rgba(22,131,218,.22);z-index:99}",""])},641:function(t,e,o){"use strict";o.r(e);var r=o(40),n=(o(48),{mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))},data:function(){var t;return t={default_limit:2,limit_by:2,contact:[],bank_account:"",card_number:"",visible:!1,profile:"",message:"",display:!1,submitted:!1,ruleForm:{tran_amount:""},lee:!1,image:"",url:""},Object(r.a)(t,"image",""),Object(r.a)(t,"amount",""),Object(r.a)(t,"error",""),t},created:function(){var t=this;this.$axios.get("/v1/admin-bank").then((function(e){t.bank_account=e.data.data}));var e=localStorage.getItem("token");e&&this.$axios.get("/v2/v1/profile",{headers:{Authorization:"Bearer "+e}}).then((function(e){t.profile=e.data.data})),this.$axios.get("/v1/contact").then((function(e){t.contact=e.data.data[0].phone_number}))},methods:{simple_toggle:function(t,e){this.limit_by=this.limit_by===t?e:t},dial:function(data){window.location="tel:"+data},copyTestingCode:function(data){var t=document.querySelector("#code"+data);t.setAttribute("type","text"),t.setAttribute("readonly",!0),t.select();try{document.execCommand("copy");this.$message({message:this.$t("copy_success"),position:"top",showClose:!0})}catch(t){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},goBack:function(){this.$router.push("/wallet?lang=".concat(this.$store.state.locale))},toggleDropdown:function(){this.display=!this.display},onFileChange:function(t){(t.target.files||t.dataTransfer.files).length&&(this.image=t.target.files[0],this.url=URL.createObjectURL(this.image))},removeImage:function(t){this.url=""},slip_upload:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var o=localStorage.getItem("token"),r=new FormData;r.append("image",e.image),r.append("amount",e.ruleForm.tran_amount),e.image?(e.lee=!1,e.$axios.post("/v2/v1/slip_post",r,{headers:{Authorization:"Bearer "+o,"content-type":"multipart/form-data"}}).then((function(t){console.log(t)})),e.submitted=!0,e.$router.push("/topup_success?lang=".concat(e.$store.state.locale))):e.lee=!0}))}}}),l=(o(569),o(2)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"topup"},[o("el-header",[o("el-page-header",{attrs:{title:"",content:""+t.$t("Top Up")},on:{back:t.goBack}})],1),t._v(" "),o("p",[t._v(t._s(t.$t("please_transfer_top-up_money_to_one")))]),t._v(" "),o("p",[t._v(t._s(t.$t("upload_he_image_of_the_bank")))]),t._v(" "),o("div",{staticClass:"avatar-upload"},[t.url?o("div",{staticClass:"avatar-preview"},[o("img",{attrs:{src:t.url,alt:"",id:"imagePreview_top"}}),t._v(" "),o("el-button",{attrs:{type:"text"},on:{click:t.removeImage}},[t._v(t._s(t.$t("remove_image")))])],1):o("div",{staticClass:"avatar-edit"},[o("label",{staticClass:"upload_icon_top",attrs:{for:"imageUpload"}},[t._m(0),t._v(" "),o("span",[t._v(t._s(t.$t("please_upload_photo_here")))]),t._v(" "),o("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),t._v(" "),o("input",{attrs:{type:"file",id:"imageUpload",accept:".jpg, .jpeg, .png"},on:{change:t.onFileChange}}),t._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"})])]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:t.lee,expression:"lee"}],staticStyle:{color:"red","font-size":"12px"}},[t._v(t._s(t.$t("please_upload_slip_file")))]),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("p",[t._v(t._s(t.$t("if_the_photo_can_not_upload_on_your_device")))])]),t._v(" "),o("p",[t._v(t._s(t.$t("Please_enter_transferred")))]),t._v(" "),o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm}},[o("el-form-item",{staticClass:"tran_input",attrs:{prop:"tran_amount",rules:[{required:!0,message:t.$t("amount_required")}]}},[o("el-input",{attrs:{type:"number",placeholder:t.$t("Enter transferred amount")},model:{value:t.ruleForm.tran_amount,callback:function(e){t.$set(t.ruleForm,"tran_amount",e)},expression:"ruleForm.tran_amount"}})],1)],1),t._v(" "),o("el-button",{attrs:{round:"",disabled:t.submitted},on:{click:function(e){return t.slip_upload("ruleForm")}}},[t._v(t._s(t.$t("Submit")))]),t._v(" "),o("el-divider"),t._v(" "),o("p",[t._v(t._s(t.$t("need_help?_please_contact")))]),t._v(" "),t._l(t.contact,(function(e,p){return o("ul",{key:p,staticClass:"topup_contact"},[o("li",[o("el-button",{attrs:{size:"medium",type:"info",icon:"el-icon-phone"},on:{click:function(o){return t.dial(e)}}},[t._v(t._s(e))])],1)])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"upload_over_lay"},[e("div",{staticClass:"upload_img_bg"})])}],!1,null,null,null);e.default=component.exports}}]);