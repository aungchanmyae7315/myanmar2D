(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{364:function(e,t,o){e.exports=o.p+"img/33bc24f.png"},409:function(e,t,o){e.exports=o.p+"img/c82feee.jpg"},410:function(e,t,o){e.exports=o.p+"img/870e30c.png"},411:function(e,t,o){e.exports=o.p+"img/924043b.png"},412:function(e,t,o){e.exports=o.p+"img/3dc4ae8.png"},413:function(e,t,o){var content=o(543);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(8).default)("e88044f2",content,!0,{sourceMap:!1})},534:function(e,t,o){e.exports=o.p+"img/bdb23f3.png"},535:function(e,t,o){e.exports=o.p+"img/b224336.png"},542:function(e,t,o){"use strict";var r=o(413);o.n(r).a},543:function(e,t,o){(e.exports=o(7)(!1)).push([e.i,".share{padding:0 20px}.share .el-header{background-color:#fff}.share .el-page-header{line-height:43px;padding-top:20px;color:#000;cursor:pointer}.share .el-page-header__content{color:#000;font-weight:700}.share{padding:0 20px 100px;text-align:center}.share .logo{width:105px;height:auto;margin-top:20px}.share .el-card{margin:20px auto 40px}.share_page .el-dialog{max-width:480px;width:90%}.share_page{padding:0 20px}.facebook{background-color:#4b70ab}.facebook:hover{background-color:#405f91}.email{background-color:#d63533}.email:hover{background-color:#b62d2b}.linkedin{background-color:#0087be}.linkedin:hover{background-color:#0073a2}.twitter{background-color:#32b9e7}.twitter:hover{background-color:#2b9dc4}.googleplus{background-color:#fa5432}.googleplus:hover{background-color:#d5472b}.whatsapp{background-color:#00aff0}.whatsapp:hover{background-color:#0095cc}.telegram{background-color:#6291b2}.telegram:hover{background-color:#537b97}.skype{background-color:#00aff0}.skype:hover{background-color:#0095cc}.social_icons ul{padding:0;margin:0;list-style:none}.social_icons ul li{display:inline-block;padding:0 12px}.social_icons ul li h6{font-size:13px}.social_icons i{font-size:1.4em;color:#fff;text-decoration:none;border-radius:100%;margin:5px 10px;width:2.2em;height:2.2em;text-align:center;display:inline-flex;align-items:center;justify-content:center}.social_img{width:60px}.share_page .el-header{background-color:#fff}.el-page-header__left{margin:0}.share_page .el-page-header{line-height:43px;padding-top:20px;color:#000;cursor:pointer}.share_page .el-page-header__content{color:#000;font-weight:700}.share_page{text-align:center}.share_page .el-card{margin-top:30px;margin-bottom:20px;border-radius:19px}.share_page .card_img{width:100%;height:auto;margin-bottom:20px;border-radius:19px}.share_btn{flex:1 1 auto;margin:10px;padding:30px;text-align:center;transition:.5s;background-size:200% auto;color:#fff;box-shadow:0 0 20px #eee;border-radius:10px}.share_item_page .share_btn:hover{background-position:100%;color:#fff;font-weight:700}.share_page .el-button:focus{color:#fff}.share_img{background-image:linear-gradient(180deg,#f5763c 0,#ed5a49 51%,#e54656);color:#fff}.share_text{background-image:linear-gradient(180deg,#239de7 0,#204fc3 51%,#204fc3);color:#fff}.share_page .el-drawer{max-width:480px;width:100%;border-top-left-radius:25px;border-top-right-radius:25px}.share_page .el-drawer__body{padding:0}.choose_lang .el-radio__input{display:none}.choose_lang{text-align:center}.choose_lang .el-radio{margin:10px 0}.choose_lang .el-button.is-round{max-width:480px;width:88%}.share_icon{width:30px;margin-bottom:10px;height:auto}.share_t_btn .el-button--text{color:#36793f}.el-button--text:hover,.share_t_btn .el-button--text:focus{color:#36793f;font-weight:700}",""])},655:function(e,t,o){"use strict";o.r(t);o(48);var r=o(450),n=o.n(r),c=o(369),l=o.n(c),d={install:function(e,t){e.component("SocialSharing",l.a)}};o(0).default.use(d);var h={mounted:function(){var e=this,t=localStorage.getItem("token");t&&(this.$axios.get("/v2/v1/profile",{headers:{Authorization:"Bearer "+t}}).then((function(t){console.log(t),e.device_id=t.data.data.device_id})),this.$axios.get("/v2/v1/referal_code",{headers:{Authorization:"Bearer "+t}}).then((function(t){e.referal_code=t.data.data.generate_code,console.log(e.referal_code)})))},data:function(){return{overriddenNetworks:{viber:{sharer:"https://account.viber.com/en/login",type:"popup"},weChat:{sharer:"https://web.wechat.com/",type:"popup"},messeager:{sharer:"https://www.messenger.com/login.php",type:"popup"}},url:this.url,share_img:"",share_url:"",device_id:"",referal_code:"",drawer:!1,drawerone:!1,drawertwo:!1,direction:"btt",centerDialogVisible:!1,radio:"1"}},methods:{isMobile:function(){var a,e=!1;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},share:function(){navigator.share&&navigator.share({title:"Shwe La MIn",text:this.$t("share_first_text")+"("+this.referal_code+")"+this.$t("share_second_second")+"shorturl.at/nxKS6"}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)}))},SavePhoto:function(){this.$message({showClose:!0,message:"Downloading photo",type:"success"});var e=document.getElementById("my-node");n.a.toPng(e).then((function(e){(new Image).src=e;var link=document.createElement("a");link.download="shwelamin.jpeg",link.href=e,link.click()})).catch((function(e){console.error("oops, something went wrong!",e)}))},goBack:function(){this.$router.push("/me?lang=".concat(this.$store.state.locale))}}},m=(o(542),o(2)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main_container share"},[r("el-page-header",{attrs:{title:""},on:{back:e.goBack}}),e._v(" "),r("section",[r("img",{staticClass:"logo",attrs:{src:o(534),alt:"logo"}}),e._v(" "),r("h6",[e._v("Shwe La Min App ကိုမျှဝေ၍ 5000 ပွိုင့် ရယူလိုက်ပါ")]),e._v(" "),r("div",{staticClass:"share_page"},[r("section",{staticClass:"share_item_page"},[r("div",{attrs:{id:"my-node"}},[r("el-card",[r("img",{staticClass:"card_img",attrs:{src:o(409)}}),e._v(" "),r("h6",[e._v(" ကျွန်တော်ရည်ညွန်းကုဒ် "),r("span",{staticStyle:{color:"green"}},[e._v(e._s(this.referal_code))]),e._v(" ထည့်ပြီးအကောင့်သစ်ဖွင့်လိုက်ပါနော်")])])],1),e._v(" "),null!==this.device_id?r("div",[r("span",[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.SavePhoto()}}},[r("img",{staticClass:"share_icon",attrs:{src:o(364),alt:""}}),r("br"),e._v("\n                           "+e._s(e.$t("save_photo")))])],1)]):null==this.device_id&&e.isMobile()?r("div",{staticClass:"share_t_btn"},[r("el-row",{staticClass:"share_t_btn"},[r("el-col",{attrs:{span:12}},[r("span",[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.SavePhoto()}}},[r("img",{staticClass:"share_icon",attrs:{src:o(364),alt:""}}),r("br"),e._v("\n                           "+e._s(e.$t("save_photo")))])],1)]),e._v(" "),r("el-col",{attrs:{span:12}},[r("span",[r("el-button",{staticClass:" ",attrs:{type:"text"},on:{click:function(t){return e.share()}}},[r("img",{staticClass:"share_icon",attrs:{src:o(535),alt:""}}),r("br"),e._v("\n                            "+e._s(e.$t("app_share_btn")))])],1)])],1)],1):e.isMobile()?e._e():r("div",[r("span",[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.SavePhoto()}}},[r("img",{staticClass:"share_icon",attrs:{src:o(364),alt:""}}),r("br"),e._v("\n                           "+e._s(e.$t("save_photo")))])],1)])]),e._v(" "),r("el-drawer",{attrs:{title:"I am the title",visible:e.drawer,direction:e.direction,size:"35%","with-header":!1},on:{"update:visible":function(t){e.drawer=t}}},[r("social-sharing",{attrs:{networks:e.overriddenNetworks,url:e.url,title:"ShweLaMin",description:"Share Referal Code From ShweLaMin",quote:e.$t("ကျွန်တော်ရည်ညွန်းကုဒ်")+" "+this.referal_code+"  ထည့်ပြီးအကောင့်သစ်ဖွင့်လိုက်ပါနော်",hashtags:"ShweLaMin","twitter-user":"ShweLaMin"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"social_icons"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("ul",[r("li",[r("network",{attrs:{network:"sms"}},[r("i",{staticClass:"fa fa-commenting-o linkedin"}),e._v(" "),r("h6",{},[e._v("SmS")])])],1),e._v(" "),r("li",[r("network",{attrs:{network:"facebook"}},[r("i",{staticClass:"fa fa-facebook facebook"}),e._v(" "),r("h6",{},[e._v("Facebook")])])],1),e._v(" "),r("li",[r("network",{attrs:{network:"messeager"}},[r("img",{staticClass:"social_img",attrs:{src:o(410)}}),e._v(" "),r("h6",{},[e._v("Messeager")])])],1)])]),e._v(" "),r("el-col",{attrs:{span:24}},[r("ul",[r("li",[r("network",{attrs:{network:"whatsapp"}},[r("i",{staticClass:"fa fa-whatsapp whatsapp"}),e._v(" "),r("h6",{},[e._v("WhatsApp")])])],1),e._v(" "),r("li",[r("network",{attrs:{network:"viber"}},[r("img",{staticClass:"social_img",attrs:{src:o(411)}}),e._v(" "),r("h6",{},[e._v("Viber")])])],1),e._v(" "),r("li",[r("network",{attrs:{network:"weChat"}},[r("img",{staticClass:"social_img",attrs:{src:o(412)}}),e._v(" "),r("h6",{},[e._v("WeChat")])])],1)])])],1)],1)},staticRenderFns:[]}})],1)],1),e._v(" "),r("el-card",{staticStyle:{margin:"20px","border-radius":"19px"}},[r("h6",{staticStyle:{"text-align":"left","font-weight":"bold"}},[e._v("(၁) ပွိင့်ကို ဘယ်လိုယူမလဲ?")]),e._v(" "),r("p",{staticStyle:{"text-align":"left"}},[e._v("သင့်မိတ်ဆွေအား Shwe La Min App ကိုအသုံးပြုရန်မျှဝေလိုက်ပါ။ သင့်ရည်ညွန်းကုဒ်ဖြည့်ပြီး အကောင့်ဖွင့်သောသူ၏ ထီထိုးငွေ (၂၀,၀၀၀) ကျပ်ကျော်သည်နှင့် သင်သည် (၅,၀၀၀) ပွိင့်ကို ဆုလာဘ်အဖြစ်ရရှိပါမည်။")]),e._v(" "),r("h6",{staticStyle:{"text-align":"left","font-weight":"bold"}},[e._v("(၂) ၅,၀၀၀ ပွိင့်ကို ဘာလုပ်လိုရသလဲ?")]),e._v(" "),r("p",{staticStyle:{"text-align":"left"}},[e._v("ပွိင့်ကို ငွေသားဖြင့် တိုက်ရိုက်မထုတ်နိုင်ပါ။ သိုသော် ပွိင့်ဖြင့် ထီထိုးနိုင်ပြီး ထီပေါက်ပါက ပိုက်ဆံအိတ်သိုငွေသားဖြင့် လျော်ပေးပါသည်။ ထိုအချိန်တွင် ပိုက်ဆံထုတ်နိုင်ပါသည်။")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);