<template>
	<view>
		<graceSwiper :swiperItems="swiperItems" :width="749" :height="400" :indicatorActiveWidth="38" @swiperchange="swiperchange"
		 @taped="taped"></graceSwiper>
		<gracePage :customHeader="false">
			<view slot="gBody" class="grace-body">
				<view class="grace-icon-classes grace-wrap grace-space-between">
					<view @click="navigeteTo(item.path)" class=" ripple" :class="index != 1 && index != 2 ? 'grace-ic-item': 'grace-ic-item-two'" :style="'background-image:linear-gradient(135deg,'+item.bgColor[0]+','+item.bgColor[1]+')'"
					 v-for="(item, index) in classes" :key="index">
						<image :src="item.icon" class="grace-ic-image" mode="widthFix"></image>
						<view class="grace-ic-content">
							<text class="grace-ic-title grace-white">{{item.txt}}</text>
							<text class="grace-text-small grace-white">{{item.smallTxt}}</text>
						</view>
						<image :src="item.icon" class="grace-ic-bg-image" mode="widthFix"></image>
					</view>
				</view>
				<foodlist />
			</view>
		</gracePage>
	</view>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import graceSwiper from "../../graceUI/components/graceSwiper.vue";
	import foodlist from "../customer/foodlist2.vue";

	export default {
		components: {
			gracePage,
			graceSwiper,
			foodlist
		},
		data() {
			return {
				swiperItems: [],
				options: {
					count: '299.674',
					downloads: '下载量',
					downloadImage: '/static/hm-downloads-card/images/img_24402_0_0.png'
				},
				classes: [{
						icon: '/static/id-card.png',
						txt: '每日营养分析',
						smallTxt: "Analysis",
						bgColor: ["#8ed99a", "#d4fc79"],
						path: "/pages/customer/customer",
						openType: "switchTab"
					},
					{
						icon: '/static/canteen.png',
						txt: '食堂',
						smallTxt: "Canteen",
						bgColor: ["#f78ca0", "#fe9a8b"],
						path: "/pages/customer/shitang",
						openType: "navigate"
					},
					{
						icon: '/static/mall.png',
						txt: '档口',
						smallTxt: "Stall",
						bgColor: ["#fe9a8b", "#9fa5ff"],
						path: "/pages/customer/dangkou",
						openType: "navigate"
					},
					{
						icon: '/static/order.png',
						txt: '我的预定',
						smallTxt: "Order",
						bgColor: ["#6e45e2", "#9fa5ff"],
						path: "/pages/order/order",
						openType: "navigate"
					},
					{
						icon: '/static/news.png',
						txt: '食品安全资讯',
						smallTxt: "News",
						bgColor: ["#4facfe", "#00f2fe"],
						path: "/pages/news/newslist",
						openType: "navigate"
					}
				]
			}
		},
		methods: {
			swiperchange: function(e) {
				// console.log(e);
			},
			taped: function(e) {
				uni.showToast({
					// title: "您点击了第 " + e + " 个项目",
					title: "活动暂未上线",
					icon: "none"
				});
			}
		},

		onLoad() {
			uniCloud.callFunction({
				name: 'getHomeBanner',
				data: this.pageData
			}).then((res) => {
				// console.log('res', res)
				this.swiperItems = res.result.data
			}).catch((err) => {
				uni.hideLoading()
				uni.showModal({
					content: `查询失败，错误信息为：${err.message}`,
					showCancel: false
				})
				console.error(err)
			}).finally(() => {
				this.listLoading = false
				uni.stopPullDownRefresh()
			})
		}
	}
</script>
<style>
	.grace-icon-classes {}

	.home-body {
		padding: 0 12px;
	}

	.grace-ic-item {
		width: 700rpx;
		height: 158rpx;
		font-size: 0;
		border-radius: 14px;
		position: relative;
		margin: 10rpx 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.grace-ic-item-two{
		width: 340rpx;
		height: 158rpx;
		font-size: 0;
		border-radius: 14px;
		position: relative;
		margin: 10rpx 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.grace-ic-image {
		width: 60rpx;
		height: 56rpx;
		margin-left: 20rpx;
	}

	.grace-ic-bg-image {
		width: 70rpx;
		height: 66rpx;
		position: absolute;
		opacity: 0.1;
		right: 6px;
		bottom: 6px;
	}

	.grace-ic-content {
		padding: 10rpx 20rpx;
	}

	.grace-ic-title {
		line-height: 40rpx;
		font-size: 28rpx;
		margin-right: 3px;
	}
</style>
