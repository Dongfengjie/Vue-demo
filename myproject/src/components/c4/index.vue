<template>
<div class="c4">
	<div class="c-top">
		<router-link tag="span" to="/home"><img src="../../../static/img/home.png"/></router-link>	
		<div class="locationselect">
			<span class="cityname">上海</span>
			<span class="square"></span>
		</div>	
		<p class="roommate">找室友专区</p>	
		<router-link tag="span" to="/user" class="userico">
				<img src="../../../static/img/my.png"/>
		</router-link>	
	</div>	
	
	<ul class="goodlist">
		<li  class="good-item" v-for="(a,index) in List"  :key="index" >
			<div class="gt-left">
				<img :src="a.photo2"  />				
			</div>
			
			<ul class="gt-right">
				<li class="hang">
					<div class="housename">{{a.address}}</div>
					<div class="housemoney">￥{{a.rent_amount}}</div>
				</li>
			
				<li class="houseserver">
					<span>{{a.room_type}}</span>
					<span>{{a.roommate_req}}</span>	
					<span>{{a.checkin_date}}入住</span>					
				</li>				
				<li class="houselocation">{{a.address}}</li>
				
				<li>
					<span class="style">{{a.type == 1 ?"室友合租":"转租"}}</span>
					<span class="pata">{{a.refresh_time}}</span>
				</li>
			</ul>
		</li>			
	</ul>
</div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>