<template>
<div class="home">
	<div class="Myheader">
		<h2><router-link tag="span" to="/home" ><img src="../../../static/img/left.png"  /></router-link>我的</h2>
		
		<div class="Myinfor">
			<div class="touxiang">
				<img src="../../../static/img/defaultHeadImage1.png" />
			</div>
			
			<ul class="userout">
				<li class="myphone">13298116025</li>
				
				<li class="loginout">
					<img src="../../../static/img/signout.png" />
					<span @click="tuichu()">退出登录</span>
				</li>
			</ul>
		</div>			
	</div>
	
	<div class="pay">
		<img src="../../../static/img/jiaozu.png" class="le" />
		<span>在线交租</span>
		<img src="../../../static/img/right.png"  class="ri"/>
	</div>
	<div  class="kong"></div>
	
	<div class="pay">
		<img src="../../../static/img/tuijian.png" class="le" />
		<span>推荐房源</span>
		<img src="../../../static/img/right.png"  class="ri"/>
	</div>
	
	<router-link tag="div" to="/shoucang" class="pay">
		<img src="../../../static/img/shoucang.png" class="le" />
		<span>收藏房源</span>
		<img src="../../../static/img/right.png"  class="ri"/>
	</router-link>
	
	
	<div class="pay">
		<img src="../../../static/img/yuyue.png" class="le" />
		<span>预约房源</span>
		<img src="../../../static/img/right.png"  class="ri"/>
	</div>
	
	<div  class="kong"></div>
	
	<div class="pay">
		<img src="../../../static/img/yijian.png" class="le" />
		<span>意见反馈</span>
		<img src="../../../static/img/right.png"  class="ri"/>
	</div>
	
	<div  class="kong"></div>
	
	<div class="pay">
		<img src="../../../static/img/download.png" class="le" />
		<span>下载APP</span>
		<img src="../../../static/img/right.png"  class="ri"/>
	</div>
</div>

</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>