<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<view class="dangkou-card">
				<image class="dangkou-icon" :src="getAvatar(dangkou.slice(0,2))" mode="aspectFill"></image>
				<view class="dangkou-detail">
					<view class="name">{{dangkou}}</view>
					<view class="place">位置：{{dangkou}}</view>
					<view class="time">营业：{{dangkou}}</view>
				</view>
				<view class="button">
					<text class="grace-grids-icon grace-icons grace-h3 grace-bold" :class="'icon-address'"></text>
				</view>
			</view>
			<view class="card">
				<view class="grace-margin-top">
					<view class="grace-title grace-gray grace-margin-top">档口评分</view>
					<view class="rate-box grace-list-items">菜品综合评分：<htz-rate v-model="rate" :readonly="true" /></view>
					<view class="rate-box grace-list-items">档口卫生评分：<htz-rate v-model="rate2" :readonly="true" /></view>
				</view>
				<navigator url="/pages/analysis/index">
					<view class="grace-list-items">
						<view class="grace-list-body">
							<view class="grace-list-title">
								<text class="grace-list-title-text">月销售：1998份</text>
								<text class="grace-list-title-desc">查看统计详情</text>
							</view>
						</view>
						<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
					</view>
				</navigator>
			</view>
			<div class="hm-goods-card">
				<div class="box">
					<div class="titleClass">
						<text class="title">热门菜品</text>
						<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
					</div>

					<navigator class="goods" v-for="item in foodlist" :url="'/pages/customer/food?name='+item.name+'&dangkou='+ dangkou +'&last='+item.last+'&src='+item.src">
						<div class="wrap">
							<image class="pic" :src="'../../static/caipin/'+ item.src +'.jpg'" />
						</div>
						<div class="block">
							<text class="tradeName">{{ item.name }}</text>
							<text class="commodity">售：{{ item.last }}</text>
							<text class="commodity">余：{{ item.last }}</text>
						</div>
						<button type="primary" class="grace-button grace-gtbg-green">预约</button>						
					</navigator>
					<div class="row" />

				</div>
			</div>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import graceFlex from "../../graceUI/components/graceFlex.vue";
	export default {
		data() {
			return {
				dangkou: '档口名称',
				foodlist: [{
						name: '红烧肉',
						src: 'u1',
						last: 18
					},
					{
						name: '糖醋里脊',
						src: 'u2',
						last: 9
					},
					{
						name: '鱼香肉丝',
						src: 'u3',
						last: 7
					},
					{
						name: '醋溜土豆丝',
						src: 'u4',
						last: 22
					},
					{
						name: '鱼香茄子',
						src: 'u5',
						last: 34
					},
					{
						name: '京酱肉丝',
						src: 'u6',
						last: 15
					},

					{
						name: '红烧茄夹',
						src: 'u7',
						last: 22
					},
					{
						name: '北京烤鸭',
						src: 'u8',
						last: 7
					},
					{
						name: '八珍豆腐',
						src: 'u9',
						last: 6
					},
				],
				rate: 5,
				rate2: 2.5,
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			if (JSON.stringify(option) !== '{}') {
				this.dangkou = option.name
				this.rate = option.rate
				this.rate2 = option.rate2
				this.dangkou = option.name
				uni.setNavigationBarTitle({
					title: this.dangkou
				});
			}
		},
		methods: {},
		components: {
			gracePage,
			graceFlex
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.8);
		border-radius: 30upx;
		padding: 20upx 20upx;
	}

	.dangkou-card {
		margin-top: 60upx;
		margin-bottom: 30upx;
		padding: 20upx 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 30upx;
		box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.8);

		.dangkou-icon {
			width: 140upx;
			height: 140upx;
			border-radius: 10upx;
			margin: 10upx 20upx;
		}

		.dangkou-detail {
			flex: 1;

			.name {
				font-size: 20px;
				margin-bottom: 10upx;
			}

			.place,
			.time {
				font-size: 12px;
				line-height: 16px;
				color: #808080;
			}
		}

		.button {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			color: #61b756;

			&:before {
				content: ".";
				visibility: hidden;
			}
		}
	}
</style>
