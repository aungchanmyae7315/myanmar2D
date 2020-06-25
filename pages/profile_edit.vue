<template>
   <div class="main_container profile_edit">
      <el-header class="header">
               <el-page-header title="" @back="goBack"  content="Edit Phone Number">
                </el-page-header>
      </el-header><br>
       <div class="longText" id="hidingScrollBar">
         <div class="hideScrollBar">

                 <el-form  @submit.native.prevent :model="ruleForm" ref="ruleForm"  class="demo-ruleForm" >
                    <el-form-item 
                      prop="phone"
                    :rules="[
                        { required: true, message: 'Enter Phone Number' },
                        
                    ]"
                     class="edit_name" >
                        <el-input  required type="text"  id="ok" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==11) return false;"  placeholder="09XXX" prefix-icon="el-icon-phone" v-model="phone"  ></el-input>
                    </el-form-item>
                </el-form>
                  <el-button type="info" round @click="profileUpdate('ruleForm')">Update</el-button>
         </div>
       </div>


   
</div>

</template>


<style>

    .el-page-header__left {
        margin:0;
    }
    .profile_edit .el-page-header {
        padding:0 24px;
        line-height:52px;
        color:#000;
    }
    .profile_edit .el-page-header__content {
        margin-left:50px;
        color:#000;
    }
    .profile_edit {
        text-align: center;
    }
   

</style>


<script>
import axios from 'axios'
export default {
    mounted() {

    },
    data() {
        
        return {
            ruleForm: {
          phone:'',

      },
      phone:localStorage.getItem('userInfo'),
           
         
        }
    },
     methods: {
        goBack() {
             this.$router.push(`/?lang=${this.$store.state.locale}`); 
         },
        profileUpdate(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
              var data_name = {
                    name: $('#ok').val(),

                  }
               
                // this.$axios.post("/v2/v1/profile/update",data_name,
                //     {headers: {
                //                "Authorization": "Bearer "+token
                //          }
                //         })
                //     .then(response => {
                //       console.log(response)
                     

                // })   
            } else {
                console.log('error submit!!');
                return false;
            }
            })
        }
     },
     created() {
            
        
     }
}
</script>