<template>
	<view class="container home">
		<view class="cont head">
			 <view class="wrap">
				 <view>
					 {{111}}
				 </view>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		onLoad(options){
			console.log("页面加载了",options)
		},
		onShow(){
			console.log("页面显示了")
		},
		onReady(){
			console.log("页面初次渲染完成了")
		},
		onHide(){
			console.log("页面隐藏了")
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
