<template>
<div class="comhome">
	<header>
		<router-link tag="span" to="/home"><img src="../../../static/img/home.png"/></router-link>
		
		<div class="locationselect">
			<span class="cityname">上海</span>
			<span class="square"></span>
		</div>
		
		<router-link tag="div" to="/search" class="topsearch">
			<img src="../../../static/img/fangdajin.png"/>输入区域，小区搜索房源
		</router-link>
	
		<router-link tag="span" to="/user" class="userico">
				<img src="../../../static/img/my.png"/>
		</router-link>	
	</header>
</div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>