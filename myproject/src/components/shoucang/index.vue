<template>
<div class="home">
	<div class="goodhouse">
	<ul class="goodlist">
		<router-link tag="li" class="good-item" v-for="(a,index) in cc" :to="{name:'houselist',params:{house_id:a.house_id}}" :key="index" >
			<div class="gt-left">
				<img :src="a.data.agency_house_photo_info[0].src"  />
			<!--	<span class="pingfen">评分:{{a.data.comprehensive_score}}</span>-->
			</div>
			<ul class="gt-right">
				<li class="housename">{{a.data.info_test.sub_name}}</li>
				<li class="housemoney">￥{{a.data.info_test.yuefujia}}</li>
				<li class="houseinfo">{{a.data.info_test.way_rent}}</li>
				<li class="houselocation">{{a.data.info_test.name}}</li>
				<li class="houseserver">
					<span>{{a.data.info_test.hire_way}}</span>	
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