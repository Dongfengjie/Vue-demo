<template>
<div class="home">
	<div class="hbanlist">
		<!--<router-link to="/home" tag="div"  class="backhome">
			
		</router-link>-->
		<div class="backhome" @click="back">
			<span></span>
		</div>
		
		<mt-swipe :auto="0"  :show-indicators="false">
			<mt-swipe-item v-for="(item,index) in aa" :key="index">
				<img :src="item.src" />
			</mt-swipe-item>
		</mt-swipe>
	</div>
	
	<div class="hdetail bk">
		<h2>{{cc.hire_way}} - {{cc.sub_name}} </h2>
		<p class="house-price">
			<span class="hmp">￥{{cc.yuan_month_rent}}</span>/季<span>&nbsp;{{cc.way_rent}}</span>
		</p>
		<p class="house-price bot">
			<span class="hmp">￥{{cc.yuefujia}}</span>/月<span>{{cc.yuefutext}}</span>
		</p>
		
		<ul class="house-ms" >
			<li >{{cc.roommate_count}}</li>
			<li>{{cc.direction}}</li>
			<li>{{cc.rent_area}}.M²</li>
			<li>{{cc.elevator}}</li>
		</ul>
		
		<div class="house-label" >
			<span v-for="(item,index) in dd.house_labels" :key="index">{{item}}</span>
		</div>
	</div>
	
	<div class="modularSt bk">
		<span class="inof">房源实拍</span>
		<p class="pinfor">巴乐兔管家亲自上门拍照，承诺100% 真实</p>
	</div>
	
	<div class="maptop bk">
		<ul class="matab">
			<li @click="tab(1)">
				<span :class="{active:isActive ==1}"><i class="l1"></i>地址</span>
			</li>
			
			<li @click="tab(2)">
				<span :class="{active:isActive ==2}"><i class="l2"></i>交通</span>
			</li>
			
			<li @click="tab(3)">
				<span :class="{active:isActive ==3}"><i class="l3"></i>周边配套</span>
			</li>
		</ul>
		<template v-if="num == 1">
		<div class="mapTextConter">{{cc.fname}}&nbsp;{{cc.name}}&nbsp;{{cc.address}}</div>
		</template>
		
		<template v-else-if="num ==2">
		<div class="mapTextConter">{{cc.bus_desc}}  <br /> {{cc.subway_desc}}</div>
		</template>
		
		<template v-else>
		<div class="mapTextConter">
			<ul>
				<li>饮食：{{cc.foods}}</li>
				<li>购物：{{cc.shops}}</li>
				<li>生活：{{cc.lives}}</li>
			</ul>
		</div>
		</template>
	</div>
	
	<router-link tag="div" to="/home" class="map bk">
		<img :src="cc.location_url" />
	</router-link>
	
	<div class="romateinfo bk">
		<h2>— 室友信息 —</h2>
		<ul>
			<li v-for="(item,index) in dd.roomMatelist" :key="index">
				<span>{{item.roomName}}</span>
				<span>{{item.info}}</span>
				<span>{{item.is_danqian}}</span>
			</li>
		</ul>
	</div>
	
	<div class="romateinfo bk">
		<h2>— 最近访问记录 —</h2>
		<ul>
			<li v-for="(item,index) in dd.visit_record_list" :key="index">
				<span>{{item.day}}</span>
				<span>{{item.mobile}}</span>
				<span>{{item.type}}</span>
			</li>
		</ul>
	</div>
	
	<div class="baozhang  bk">
		<h2>— 认证保障 —</h2>
		<ul>
			<li ><span >证</span><p>认证房东</p></li>
			<li><span >免</span><p>免佣</p></li>
			<li><span >月</span><p>月付</p></li>
			<li><span >管</span><p>专属管家</p></li>
		</ul>
	</div>
	
	<div class="goodhouse">
		<h2>— 相似房源 —</h2>
		<ul class="goodlist">
			<router-link tag="li" class="good-item" v-for="(a,index) in gh" :to="{name:'houselist',params:{house_id:a.house_id}}" :key="index" >
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
	
	<div class="jubao">
		<img src="../../../static/img/jubao.png" alt="" />
	</div>
	
	<footer>
		<ul>
			<li class="like" @click="dian()" >
				<img src="../../../static/img/sc.png"  v-show="!isShow"  class="s1"/>
				<img src="../../../static/img/ysc.png" v-show="isShow"   class="s2"/>
			</li>
			<li class="seehouse">预约看房</li>
			<li class="telnum">电话客服</li>
		</ul>
	</footer>
		
</div>
</template>


<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>