<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<view class="grace-list">
				<navigator class="grace-list-items" :url="'/pages/customer/foodlist?name='+item.name+'&rate='+item.rate+'&rate2='+item.rate2"
				 v-for="(item,index) in dangkouList" :key="index">
					<view style="position:relative;width: 100upx;height: 120upx;">
						<text class="grace-list-icon grace-icons icon-img grace-gray uni-media-list-logo img-abs" style="font-size: 60upx;"></text>
						<image class="uni-media-list-logo img-abs" mode="aspectFill" :src="getAvatar(item.name.slice(0,2))"></image>
					</view>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">{{item.name}}</text>
							<view class="">
								<text class="grace-badge demo grace-bg-blue">{{item.rate}}</text>
								<text class="grace-badge demo grace-bg-green">{{item.rate2}}</text>
							</view>
						</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
			</view>
			<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :row="skeleton1.row" :showTitle="skeleton1.showTitle"
			 :animate="skeleton1.animate" v-for="(i,index) in 6" :key="index"></skeleton>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import graceFlex from "../../graceUI/components/graceFlex.vue";
	export default {
		components: {
			gracePage,
			graceFlex,
		},
		data() {
			return {
				dangkouList: [],
				loading: true,
				skeleton1: {
					avatarSize: '40px',
					row: 1,
					showTitle: true,
					animate: true
				}
			}
		},
		onLoad: function(option) {
			if (JSON.stringify(option) !== '{}') {
				uni.setNavigationBarTitle({
					title: option.name
				});
			}
			this.loading = true
			this.getDangkouList()
			
			
			
		},
		onPullDownRefresh: function() {
			this.loading = true
			this.getDangkouList().then(res => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			getDangkouList() {
				uniCloud.callFunction({
					name: 'getDangkouList'
				}).then((res) => {
					// console.log('res',res.result.data)
					this.dangkouList = res.result.data
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				}).finally(() => {
					this.loading = false
				})
				return Promise.resolve()
			}
		}
	}
</script>
<style>
	.uni-media-list-logo {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin: 10upx;
	}

	.img-abs {
		position: absolute
	}
</style>
