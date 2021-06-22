<template>
	<view>
		<view>数据绑定的学习</view>
		<view>{{msg}}</view>
		<view>{{1+'你好'}}</view>
		<view>{{'hello'+'你好'}}</view>
		<view>{{flag?'这是反话':'这是真话'}}</view>
		<image :src="imgUrl"></image>
		<view v-for="(item,index) in arr" :key="item.id">
			序号：{{index}}
			名字：{{item.name}}
			年龄：{{item.age}}
		</view>
		<button type="primary" @click="clickHandle(20,$event)">按钮</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				msg:'hello',
				flag:true,
				imgUrl: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2192265457,2884791613&fm=26&gp=0.jpg',
				arr:[
					{
						"id":1,
						"name":"zzz",
						"age": 20
					},
					{
						"id":2,
						"name":"xxx",
						"age": 12
					},
					{
						"id":3,
						"name":"yyy",
						"age": 23
					}
				]
			}
		},
		methods:{
			clickHandle(num,e){
				console.log("点击我了",num,e)
			}
		}
	}
</script>

<style>
</style>
