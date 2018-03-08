import Vue from 'vue'
import axios from 'axios'
import {BASE_URL} from "@/common/base.js"
import { Field } from 'mint-ui';
 
Vue.component(Field.name, Field);

export default{
	data(){
		return{
			cc:[]
		}
	},
	mounted(){
		var url = BASE_URL +"/shoucang_list";
		var that = this
		axios.get(url)
		.then((response)=>{
			var data = response.data[0].shoucang_list
			that.cc =data
			console.log(data)
		}).catch((error)=>{
			console.log(error)
		})
	},
	computed:{
		
	},
	methods:{
		
	},
	components:{
		
	},
	watch:{
		
	}
}
