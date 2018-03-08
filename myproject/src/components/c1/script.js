import axios from 'axios'
import {BASE_URL} from "@/common/base.js"

export default{
	data(){
		return{
			aa:[]
		}
	},
	mounted(){
		var url = BASE_URL + "/c1"
		var that = this
		
		axios.get(url)
		.then(function(response){
			var data = response.data[0].result.house_list
			that.aa = data		
			console.log(data)
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
