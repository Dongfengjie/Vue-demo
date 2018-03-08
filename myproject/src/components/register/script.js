import Vue from 'vue'
import { Field,Button,Toast  } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

import axios from "axios"
import {BASE_URL} from  "@/common/base.js"



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
      registerState: "default",
      sui:""
    }
  },
  mounted(){
    
  },
  methods:{
    validatePhone(phone){
    	var yphone=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/ig;
      if(phone.match(yphone)){  //填写手机
        this.phoneState = "success"
      }else{
        this.phoneState = "error"
      }
    },
    validatePassword(password){
    	var ym=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/ig;
      if(this.phone == ""){
        this.phoneState = "error"
      }
      if(password.match(ym)){ //填写密码
        this.passwordState = "success"
      }else{
        this.passwordState = "error"
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
              position: 'center',
              duration: 2000
            });
          }else{
            //提交数据到服务器，进行验证
            var url = BASE_URL + "/login"
            axios.get(url, {
              params:{
              phone:that.phone,
              pass: that.password,
              type:'register'
            	}
            }).then((response) => {
//            console.log(response)
              if(response.data.code =='1'){
              	Toast({
              		message:'注册成功！',
              		position:'center',
              		duration:2000
              	});
              	this.$router.push('/user')
              }else if(response.data.code == '0'){
              	Toast({
              		message:'该账号已存在',
              		position:'center',
              		duration:2000
              	});
              }else{
              	console.log('注册失败')
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
