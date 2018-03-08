import Vue from 'vue';
import axios from 'axios';
import {BASE_URL} from "@/common/base.js";

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default{
	
	data(){
		return{
		namelist:[
			{path:"/c1",src:"../../../static/img/zhengzu.png"},
			{path:"/c2",src:"../../../static/img/hezu.png"},
			{path:"/c3",src:"../../../static/img/pinpaigongyu.png"},
			{path:"/c4",src:"../../../static/img/zhaoshiyou1130.png"}
			],
		aa:[],
		bb:[],
		cc:[]
			
		};
	},
	mounted(){//钩子函数
		var url = BASE_URL +"/query"+ "?page=0";
		var arl = BASE_URL +"/home" ;
		
		var that = this; //指向data数据

//		推荐好房
		axios.get(url)
		.then(function(response){
			var hdata = response.data[0].result;
			that.cc=hdata;	
		}).catch(function(error){
			console.log(error);
		});

//		优秀房源
		axios.get(arl)
		.then(function(response){
		var tdata = response.data[0].result.theme_list;
		//轮播地址
		var bdata = response.data[0].result.banner_list;

		that.aa= bdata;
		
		that.bb= tdata;
		}).catch(function(error){
			console.log(error);
		});

	},
	methods:{
		tiaozhuan(){
			if(!window.localStorage){
				return false;
			}else{
				var storage = window.localStorage;
				
				if(storage.num){
					this.$router.push("/My");
				}else{
					this.$router.push("/user");
				}
			}
			
		}
	},
	computed:{
		
	},
	components:{
		
	},
	watch:{
		
	}
};
