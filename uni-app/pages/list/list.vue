<template>
	<view>
		<view>这是列表页面</view>
		<view class="box-item" v-for="item in list">
			{{item}}
		</view>
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:["前端","JAVA","UI","测试","大数据"]
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log("触发了下拉刷新")
			setTimeout(()=>{
				this.list = ["大数据","测试","JAVA","UI","前端"]
				uni.stopPullDownRefresh();
			},2000)
		},
		// 检测是否滚动到底部
		onReachBottom(){
			console.log("到底部了");
			this.list = [...this.list,...["大数据","测试","JAVA","UI","前端"]]
		},
		methods:{
			pullDown(){
				uni.startPullDownRefresh();
			}
		}
	}
</script>

<style>
	.box-item{
		height: 400rpx; line-height: 300px;
	}
</style>
