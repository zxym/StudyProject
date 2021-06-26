<template>
	<view>
		<view>
		<template v-for="m in s" >{{m.title}}</template>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				s: [{title:'222'},{title:'333'}]
			}
		},
		mounted(){
			let that = this;
			uni.request({
				url:"http://localhost:8080/index",
				success(res){
					that.s = res.data.results;
					console.log('request', that.s);
				}
			})
		},
		methods:{
			get(){
				
			}
		}
	}
</script>

<style>
</style>
