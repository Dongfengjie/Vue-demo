<template>
	<div class="home">
		<div class="banner">
			<!--banner图-->
			<a class="bannerlink"><img src="https://cdn.baletoo.cn/Uploads/bnanerImageUrl/1/114/oss_5a38825c589c4.png"/></a>
			<!--用户登录跳转-->
			<span class="userimg" @click="tiaozhuan()">
				<img src="../../../static/img/my.png"/>
			</span>
			<!--首页地理位置-->
			<div class="locationselect">
				<span class="cityname">上海</span>
				<span class="square"></span>
			</div>
			<!--首页伪搜索框-->
			<router-link tag="div" to="/search" class="searchBox">
				<img src="../../../static/img/fangdajin.png"/>输入区域，小区搜索房源
			</router-link>	
		</div>
		<!--分类甄选-->
		<ul class="lei">
			<router-link tag="li" v-for="(item,index) in namelist" :to="item.path" :key="index" ><img :src="item.src" /></router-link>
		</ul>
		<!--微型轮播-->
		<div class="banner-list">
			<mt-swipe :auto="4000" >
				<mt-swipe-item v-for="(item,index) in aa" :key="index">
					<img :src="item.banners_image_url" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--优秀房源-->
		<div class="goodhome">
			<h2>优选房源</h2>
			<ul class="ghlist">
				<router-link tag="li"  v-for="(item,index) in bb" :to="item.theme_id" :key="index">
					<img :src="item.apt_img_url"/>
					<p>{{item.apt_name}}</p>
					<span>{{item.desc}}</span>
				</router-link>
				
				<!--<mt-swipe :auto="0" :show-indicators="false" >
				  <mt-swipe-item class="dc" v-for="index in Math.ceil(bb.length/3)" :key="index">
				  	<router-link tag="li" v-for="i in 3" to="/user">
					  	<img :src="bb[i].apt_img_url"/>
						<p>{{bb[i].apt_name}}</p>
						<span>{{bb[i].desc}}</span>
					</router-link>				 
				  </mt-swipe-item>
				</mt-swipe>-->
		
			</ul>
			

		</div>
		<!--下拉菜单-->
		<div class="goodhouse">
			<h2>推荐好房</h2>
			<ul class="goodlist">
				<!--修改-->
				<router-link tag="li" class="good-item" v-for="(a,index) in cc" :to="{name:'houselist',params:{house_id:a.house_id}}" :key="index" >
					<div class="gt-left">
						<img :src="a.house_main_image"  />
						<span class="pingfen">评分:{{a.comprehensive_score}}</span>
					</div>
					<ul class="gt-right">
						<li class="housename">{{a.subdistrict_name}}</li>
						<li class="housemoney">￥{{a.month_rent}}</li>
						<li class="houseinfo">{{a.house_info_concat}}</li>
						<li class="houselocation">{{a.area_list}}</li>
						<li class="houseserver">
							<span v-for="(b,index) in a.house_labels" >{{b}}</span>	
						</li>
						
						<span class="pdata">{{a.publish_date}}</span>
					</ul>
				</router-link>			
			</ul>
		</div>
	</div>
</template>



<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>