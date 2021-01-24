<template>
	<view class="layout">
		<view class="left">
			<view v-for="(i,index) in 4" :key="index" class="cards">
				<view class="card">
					<view class="content">
						{{list[i]}}
					</view>
				</view>
				<view v-if="i<2" class="status">
					待取餐
				</view>
				<view v-else-if="i<4" class="status status2">
					烹饪中
				</view>
				<view v-else class="status status3">
					待确认
				</view>
			</view>
		</view>
		<view class="right">
			<view>取餐队列</view>
			<br>
			<view>6002</view>
			<view>6004</view>
			<view>6005</view>
			<view>6006</view>
			<view>6007</view>
			<view>6010</view>
			<view class="bottom">.   待取餐：6人</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['糖醋素里脊',
				'红烧冬瓜',
				'鱼香肉丝',
				'糖醋小排',
				'肉沫烧豆腐',
				'糖醋小排',
				'完成',
				
]
			}
		},
		methods: {
			navigateTo(url) {
				uni.navigateTo({
					url: url
				});
			}
		},
		components: {}
	}
</script>

<style>
	.layout{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
	.left{
		width: 75%;
		height: 100%;
		border: #f7f8ff 4px solid;
	}
	.right{
		width: 25%;
		height: 100%;
		background-color: #3688FF;
		text-align: center;
		color: #fffcfd;
	}
	.right view{
		margin: 10px 0;
	}
	.bottom{
		position: absolute;
		margin-left: 30px;
		bottom: 40px;
	}
	.left{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.cards{
		margin-top: 40px;
		display: flex;
		align-items: center;
	}
	.card{
		background-color: #3688FF;
		box-shadow: #3688FF 2px 1px 14px 2px;
		border-radius: 10px;
		margin: 20px;
		width: 400px;
		text-align: center;		
		color: #ffffff;
	}
	.prog{
		height: 20px;
		width: 90%;
		/* background-color: #70a1ff; */
		border-radius: 30px;
	}
	.content{
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.status{
		width: 240px;
		height: 80px;
		background-color: #ffa502;
		border-radius: 10px;
		color: #ffffff;
		text-align: center;
		margin-left: 60px;
		box-shadow: #ffa502 2px 1px 14px 2px;
		font-size: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.status2{
				background-color: #2ed573;
				box-shadow: #2ed573 2px 1px 14px 2px;
	}
	.status3{
				background-color: #a4b0be;
				box-shadow: #a4b0be 2px 1px 14px 2px;
	}
</style>
