import axios from 'axios';
import {BASE_URL} from "@/common/base.js";

export default{
	data(){
		return{	
			num:1,
			se:1,
			isActive:1,
			c:true,
			isShow:false,
			gh:[],	//相似房源数据 data
			aa:[],  //顶部轮播数据 banlist
			cc:[],   //N多数据 big
			dd:[],	//bbig
			house_id:""
		};
	},
	mounted(){
		var url = BASE_URL +"/house_id";
		var ac = location.href.split("/");
		var that = this;
		
		ac = ac[ac.length-1];
		
		that.house_id = ac;
//		相似房屋
		axios.get(url,{params:{house_id:ac}})
		.then(function(response){

			var bbig = response.data[0].result;
			var data = response.data[0].result.housesimilar;
			var banlist = response.data[0].result.agency_house_photo_info;
			var big = response.data[0].result.info_test;
			
			console.log(response.data[0]);
			
			that.gh = data;
			that.aa = banlist ;
			that.cc = big;
			that.dd = bbig;
		}).catch(function(error){
			console.log(error);
		});

	},
	computed:{
		
	},
	

	methods:{
		tab(type){
			this.num = type;
			this.isActive = type;
		},
		mtab(type){
			this.se = type;
			this.c = type == 1?true:false;
		},
		//点击收藏
		dian(){
			this.isShow = this.isShow ? false:true;
			
			var crl = BASE_URL +"/sc";
			axios.get(crl,{params:{house_id:this.house_id,sc:this.isShow}})
			.then((response)=>{
				
			}).catch((error)=>{
				
			});
		},
		back(){
			this.$router.go(-1);  //返回上一页
		}
	},
	components:{
		
	},
	watch:{
		
	}
};
