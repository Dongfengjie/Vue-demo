import Vue from 'vue'
import axios from "axios"
import { Field, Button, Toast } from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

import { BASE_URL } from "@/common/base.js"
export default {
	data() {
		return {
//			msg: "获取验证码",
//			timer: "",
//			flage:true,
//			captcha:"",
//			se: 1,
//			isActive: true,
			phone: "",
			phoneState: "",
			password: "",
			passwordState: ""
		}
	},
	mounted() {

	},
	computed: {

	},
	methods: {
//		tab(type){
//			this.se = type;
//			this.isActive = type == 1?true:false;
//		},
		validatePhone(phone) {
			var zp = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/ig;
			if(this.phone.match(zp)) {
				this.phoneState = "success"
			} else {
				this.phoneState = "error"
			}
		},
		validatePassword(password) {
			var zm = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,21}$/ig;
			if(this.phone == "") {
				this.phoneState = "error"
			}
			if(this.password.match(zm)) {
				this.passwordState = "success"
			} else {
				this.passwordState = "error"
			}
		},
		//		sendCode(){
		//			if (!this.flage){
		//				return false	
		//			}
		//			this.flage = false
		//			var num = 3;
		//			clearInterval(this.timer);
		//			this.timer = setInterval(()=>{
		//				if(num == 0){
		//					num = 3;
		//					clearInterval(this.timer);
		//					this.msg = "获取验证码";
		//					this.flage = true
		//				}else{
		//					this.msg = num +"s"
		//					this.flage = false
		//				}
		//				num --;
		//			},1000)
		//		}
		login() {
			var that = this;
			
			//将用户名用localStorage存入本地
			if(!window.localStorage){
				console.log("浏览器不支持localstorage")
			}else{
				var storage = window.localStorage;
				storage.num = this.phone
			}
			
			if(this.phone == "") {
				this.phoneState = "error"
			} else {
				if(this.password == "") {
					this.passwordState = "error"
				} else {
					//提交数据到服务器，进行验证            
					var url = BASE_URL + "/login"
					axios.get(url, {
						params: {
							phone: that.phone,
							pass: that.password,
							type: "login"
						}
					}).then((response) => {
						console.log(response)
						if(response.data.code == 3) {
							Toast({
								message: '该手机号未注册',
								position: 'center',
								duration: 2000
							});
						} else {
							if(response.data.code == 0) {
								Toast({
									message: '密码错误',
									position: 'center',
									duration: 2000
								});
							} else {
								if(response.data.code == 1) {
									Toast({
										message: '登录成功',
										position: 'center',
										duration: 2000
									});
									//跳转至用户页
									this.$router.push('/my')
								} else {
									console.log('登录失败')
								}
							}
						}
					}).catch((error) => {
						console.log(error)
					})
				}
			}
		}

	},
	components: {

	},
	watch: {
		phone(newVal, oldVal) {
			if(newVal == "") {
				this.registerState = "default"
			} else {
				this.registerState = "primary"
				this.validatePhone(newVal)
			}
		},
		password(newVal, oldVal) {
			this.validatePassword(newVal)
		}
	}
}