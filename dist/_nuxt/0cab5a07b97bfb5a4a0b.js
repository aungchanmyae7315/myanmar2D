(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{384:function(t,o,e){var content=e(487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(8).default)("47d9c187",content,!0,{sourceMap:!1})},486:function(t,o,e){"use strict";var n=e(384);e.n(n).a},487:function(t,o,e){(t.exports=e(7)(!1)).push([t.i,".forgot_password .el-header{background-color:#fff}.el-page-header__left{margin:0}.forgot_password .el-page-header{line-height:43px;color:#000;padding:0 20px}.forgot_password .el-page-header__content{color:#000;font-weight:700}.forgot_password_item{text-align:center;padding:20px}.forgot_password_item .el-card{margin:15px auto}",""])},647:function(t,o,e){"use strict";e.r(o);e(48);var n={mounted:function(){},data:function(){return{contact:[]}},methods:{goBack:function(){this.$router.push("/login?lang=".concat(this.$store.state.locale))},dial:function(data){window.location="tel:"+data}},created:function(){var t=this;this.$axios.get("v2/v1/contact").then((function(o){t.contact=o.data.data[0].phone_number}))}},r=(e(486),e(2)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"main_container forgot_password"},[e("el-header",[e("el-page-header",{attrs:{title:"",content:"စကားဝှက်မေ့သွားပါသလား? "},on:{back:t.goBack}})],1),t._v(" "),e("section",{staticClass:"forgot_password_item"},[e("p",[t._v("စကားဝှက်မေ့သွားပါက အောက်ပါ ဝန်ဆောင်မှု ဖုန်းနံပါတ်တစ်ခုသို့ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။")]),t._v(" "),e("p",[t._v("အကောင့်ပိုင်ဆိုင်‌ကြောင်း အထောက်အထား မေးခွန်းများ ဖြေဆိုရပါမည်။")]),e("br"),t._v(" "),t._l(t.contact,(function(o,p){return e("el-card",{key:p,attrs:{shadow:"always"}},[e("div",{staticStyle:{float:"left","margin-top":"6px"}},[e("i",{staticClass:"el-icon-mobile-phone",staticStyle:{color:"#5AAF46",padding:"0 10px","font-size":"21","font-weight":"bold"}}),t._v(t._s(o.phone))]),t._v(" "),e("el-button",{staticStyle:{float:"right",margin:"0 auto 20px auto",background:"#F0F0FF",color:"#5AAF46"},attrs:{round:""},on:{click:function(e){return t.dial(o)}}},[t._v("Call Now")])],1)}))],2)],1)}),[],!1,null,null,null);o.default=component.exports}}]);