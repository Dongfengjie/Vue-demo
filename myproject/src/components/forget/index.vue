<template>
 <div class="home">
 	<div class="rtop">
 		<router-link tag="span" to="/user" ></router-link>
 		<p>忘记密码</p>
 	</div>
 	
	 <div class="tlogin">
 		<div class="lon_1">
 			<mt-field  placeholder="手机号码" type="tel" v-model="phone" :state = "phoneState" class="phone"></mt-field>
			<mt-field  placeholder="请输入新的密码" type="password" v-model="password" :state = "passwordState" class="psw"></mt-field>
			
			<mt-field placeholder="验证码"  v-model="captcha">
		      <mt-button type="default"  :disabled = "codeState" @click="sendCode()">{{msg}}</mt-button>
			</mt-field>
		</div>
			<mt-button class="denglu" :type="registerState" @click="register()" size="large">修改完成</mt-button>
 	</div>
 	
 </div>
</template>



<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>