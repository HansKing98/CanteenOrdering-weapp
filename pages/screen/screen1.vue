<template>
	<view class="layout">
		<view class="left">
			<view class="caipin">
				<view class="cai" v-for="(i,index) in 9" :key="index">
					<view class="image">
						<image :src="'../../static/caipin/u'+ i + '.jpg'" mode="aspectFill"></image>
						
					</view>
					<view class="caiming">
						{{list[i-1]}} ￥{{list[(i+9)-1]}}元
					</view>
				</view>
			</view>
		</view>
		<view class="right">
			<view class="top">
				<view class="date">
					2月20日
				</view>
				<view class="time">
					12：12：23
				</view>
			</view>
			<view class="middle">
				<view class="caipin">
					{{list[2]}}
				</view>
				<view class="caipin">
					{{list[7]}}
				</view>
			</view>
			<view class="bottom">
				<view class="price">
					￥8.50
				</view>
				<view class="bt">
					支付
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['糖醋素里脊',
				'红烧冬瓜',
				'回锅肉',
				'醋溜土豆',
				'肉沫茄子',
				'鱼香肉丝',
				'糖醋小排',
				'红烧排骨',
				'肉沫烧豆腐',
				4.00,5.00,3.00,6.00,2.50,10.00,12.50,5.50,6.5]
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
		/* height: 100vh; */
	}
	.left{
		width: 80%;
		height: 100%;
		border: #f7f8ff 4px solid;
	}
	.right{
		width: 20%;
		height: 100%;
	}
	.caipin{
		display: flex;
		flex-wrap:wrap;
		margin-top: 27px;
		margin-bottom: 27px;
		align-items: center;
		justify-content: space-around;
	}
	.cai{
		width: 220px;
		height: 160px;
		margin: 30px 0;
		border-radius: 10px;
		box-shadow: #ced6e0 2px 2px 20px 2px;
	}
	.cai .image{
		height: 130px;
		overflow: hidden;
	}
	.cai .image image{
		width: 100%;
		height: 130px;
		border-radius: 10px 10px 0 0;
		
	}
	.caiming{
		height: 30px;
		font-size: 14px;
		text-align: center;
		margin-top: 4px;
	}
	.right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.right .top{
		height: 60px;
		color: #007AFF;
		margin-top: -110px;
		padding-top: 20px;
	}
	.date,.time{
		font-size: 18px;
		text-align: center;
	}
	.right .middle{
		height: 450px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.middle .caipin{
		height: 60px;
		width: 100%;
		background-color: #007AFF;
		border-radius: 10px;
		color: white;
		text-align: center;
		font-weight: 300;
		box-shadow: #007AFF 2px 1px 14px 2px;
	}
	.right .bottom{
		width: 90%;
		background-color: #ff930f;
		color: white;
		text-align: center;
		border-radius: 6px;
		box-shadow: #ff930f 6px 6px 16px 2px;
	}
</style>
