import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from "@/components/home";
import House from "@/components/house";
import User from "@/components/user";
import Search from "@/components/search";
import Forget from "@/components/forget";
import Register from "@/components/register";
import C1 from "@/components/c1";
import C2 from "@/components/c2";
import C3 from "@/components/c3";
import C4 from "@/components/c4";
import Comheader from "@/components/comheader";
import My from "@/components/my";
import Shoucang from "@/components/shoucang";

export default new Router({
  mode:"history", //去掉地址栏的#
  routes: [
		{path:"/",redirect:"/home"},
		{
		  path: '/home',
		  name: 'home',
		  components: {
		  	content:Home
		  }
		},
		{
			path: "/user",
			name: 'user',
			components:{
				content:User
			}
		},
		{
			path:"/search",
			name:'search',
			components:{
				content:Search
			}
		},
		{
			path:"/forget",
			name:'forget',
			components:{
				content:Forget
			}
		},
		{
			path:"/register",
			name:'register',
			components:{
				content:Register
			}
		},
		{
			path:"/c1",
			name:'c1',
			components:{
				header:Comheader,
				content:C1
			}
		},
		{
			path:"/c2",
			name:'c2',
			components:{
				header:Comheader,
				content:C2
			}
		},
		{
			path:"/c3",
			name:"c3",
			components:{
				header:Comheader,
				content:C3
				}
		},
		{
			path:"/c4",
			name:"c4",
			components:{
				content:C4
			}
		},
		{
			path:"/house/:house_id",
			name:'houselist',
			components:{
				content:House
			}
		},
		{
			path:"/my",
			name:'my',
			components:{
				content:My
			}
		},
		{
			path:"/shoucang",
			name:'shoucang',
			components:{
				header:Comheader,
				content:Shoucang
			}
		}
  ]
});
