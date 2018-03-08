<template>
<div class="c1">
	<ul class="goodlist">
		<router-link tag="li" class="good-item" v-for="(a,index) in aa" :to="{name:'houselist',params:{house_id:a.house_id}}" :key="index" >
			<div class="gt-left">
				<img :src="a.house_main_image"  />
				<span class="pingfen">评分:{{a.comprehensive_score}}</span>
			</div>
			<ul class="gt-right">
				<li class="housename">{{a.subdistrict_name}}</li>
				<li class="housemoney">{{a.month_rent}}</li>
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
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>