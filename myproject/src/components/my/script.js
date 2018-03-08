import axios from 'axios'
import {BASE_URL} from "@/common/base.js"

export default{
	data(){
		return{
			
		}
	},
	mounted(){
		var url = BASE_URL + "/login"
		axios.get(url)
		.then((response)=>{
			console.log(response)
		})
		
	},
	computed:{
		
	},
	methods:{
		tuichu(){
			var storage = window.localStorage
			storage.clear();		
			this.$router.push("/user")
		}
	},
	components:{
		
	},
	watch:{
		
	}
}
