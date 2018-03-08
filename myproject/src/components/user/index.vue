<template>
<div class="home">
	<div class="login">
		<!--返回主页-->
		<div class="topico"><router-link tag="span" to="/home" ><img src="../../../static/img/left.png"/></router-link></div>
		<!--用户页Logo-->
		<div class="bomico"><img src="../../../static/img/login_logo.png"></div>
		<!--登录tab按键-->
		<div class="tablogin">
			<ul>
				<!--<li  :class="{active:isActive}" @click="tab(1)">快速登录</li>-->
				<li>账号登录</li>
			</ul>				
		</div>
		<!--登录框-->
		<div class="tlogin">
			<!--<template v-if="se == 1">
				<div class="lon_1">
					<mt-field  placeholder="手机号" type="tel" v-model="phone" class="phone" :state = "phoneState"></mt-field>
					<span @click="sendCode()" v-model="captcha">{{msg}}</span>
					<mt-field placeholder="验证码"  v-model="captcha" class="pws"></mt-field>
				</div>
				<p class="tishi"> 收不到验证码?&nbsp;试试语音验证码</p>
			</template>-->
			
			<!--<template v-else>-->
				<div class="lon_1">
					<mt-field  type="tel" placeholder="手机号码"  v-model="phone" class="phone" :state = "phoneState"></mt-field>
					<!--<input type="text" class="phone" v-model="phone" :state = "phoneState" placeholder="手机号码" />-->
    				<mt-field  type="password" placeholder="密码"  v-model="password" :state = "passwordState"></mt-field>
					<!--<input type="password" class="psw" v-model="password" :state = "passwordState" placeholder="密码" />-->
					
					<p class="tishi">
						<router-link tag="a" to="/forget" class="t1" >忘记密码</router-link>
						<router-link tag="a" to="/register" class = "t2">手机号注册</router-link>
					</p>
				</div>
			<!--</template>-->				
			<span class="denglu"  @click="login()">登录</span>
		</div>
		
		<p class="warn">登录即视为同意 <span>《巴乐兔服务协议》</span></p>
	</div>
</div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" ></style>