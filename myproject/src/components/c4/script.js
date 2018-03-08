import axios from 'axios'
import {BASE_URL} from "@/common/base.js"


export default{
	data(){
		return{
			List:[]
		}
	},
	mounted(){
		var url = BASE_URL + "/getList"
		var that = this
		
		axios.get(url,{parmas:{page:0}})
		.then(function(response){
			var data = response.data[0].result.list.result.list
			console.log(response.data[0])
			that.List = data
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
