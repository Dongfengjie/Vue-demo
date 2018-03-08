import Vue from 'vue'
import axios from 'axios'
import {BASE_URL} from "@/common/base.js"


export default{
	data(){
		return{
			cc:[]
		}
	},
	mounted(){
		var url = BASE_URL +"/query"+ "?page=0"
		var that = this; 
		
		axios.get(url)
		.then(function(response){
			var hdata = response.data[0].result
			that.cc=hdata	
		}).catch(function(error){
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
