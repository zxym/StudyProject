<template>
	<view>
		<view>
			样式的学习
		</view>
		<view class="box1">
			测试文字
			<text>1111</text>
			</view>
		<view class="iconfont icon-shipin"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import url("a.css");
	.box1 { width: 375rpx; background-color: $global-color; height: 375rpx; font-size: 30rpx; color: #fff;
		> text{
			color: #008000;
		}
	}
	.iconfont::after { content: '\e5ec'; font-family: iconfont; display: block; }
</style>
