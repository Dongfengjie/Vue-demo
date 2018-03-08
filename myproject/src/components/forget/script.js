import Vue from 'vue'
import { Field,Button,Toast  } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

import axios from "axios"
import {BASE_URL} from  "@/common/base.js"

//注册 login

export default {
  data(){
    return {
      password:"",
      phone:"",
      captcha:"",
      phoneState:"",
      passwordState:"",
      msg:"获取验证码",
      timer:"",
      codeState: false,
      registerState: "default"
    }
  },
  mounted(){
    
  },
  methods:{
    validatePhone(phone){
      if(phone == ""){  //填写手机
        this.phoneState = "error"
      }else{
        this.phoneState = "success"
      }
    },
    validatePassword(password){
      if(this.phone == ""){
        this.phoneState = "error"
      }
      if(password == ""){ //填写密码
        this.passwordState = "error"
      }else{
        this.passwordState = "success"
      }
    },
    sendCode(){
      var num = 59;
      clearInterval(this.timer);
      this.timer =  setInterval(() =>{
        if(num == 0){
          num = 59;
          clearInterval(this.timer);
          this.msg = "获取验证码";
          this.codeState = false
        }else{
          this.msg = num + "s后再发送";
          this.codeState = true
        }
        num--;
      },1000)
      //向后端请求数据
    	var that = this;
      var url = BASE_URL + "/sendmsg"
      
      var random = Math.floor(Math.random()*900000+100000);
//    console.log(random)
      this.sui = random;
      axios.get(url,{
      	params:{
      		phone:that.phone,
      		captcha:random
      	}
      }).then((response)=>{
      	
      }).catch((error)=>{
      	
      })
      
    },
    register(){
      var that = this;
      if(this.phone == ""){
        this.phoneState = "error"
      }else{
        if(this.password == ""){
          this.passwordState = "error"
        }else{
          if(this.captcha == ""){
            Toast({
              message: '验证码不能为空',
              position: 'bottom',
              duration: 2000
            });
          }else{
            //提交数据到服务器，进行验证
            var url = BASE_URL + "/passupdate"
            axios.get(url, {
              params:{
              phone:that.phone,
              pass: that.password,
            }
            }).then((response) => {
//            console.log(response)
              if(response.data.code == '1'){
              	Toast({
              		message:'修改成功',
              		position:'bottom',
              		duration:2000
              	});
              	this.$router.push('/user')
              }else if(response.data.code == '2'){
              	Toast({
              		message:'修改失败',
              		position:'center',
              		duration:2000
              	});
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        }
      }
      
    }
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    phone(newVal,oldVal){
//    console.log(newVal)
     
      if(newVal == ""){
        this.registerState = "default"
      }else{
         this.registerState = "primary"
          this.validatePhone(newVal)
      }
     
    },
    password(newVal,oldVal){
//    console.log(newVal)
      this.validatePassword(newVal)
    }
  }
}
