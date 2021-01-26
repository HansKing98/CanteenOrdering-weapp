<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<skeleton :loading="loading" :avatarSize="skeleton1.avatarSize" :row="skeleton1.row" :showTitle="skeleton1.showTitle"
			 :animate="skeleton1.animate" v-for="(i,index) in 6" :key="index"></skeleton>
			<view class="grace-list">
				<navigator class="grace-list-items" :url="'/pages/customer/dangkou?name='+item.name+'&rate='+item.rate+'&rate2='+item.rate2"
				 v-for="(item,index) in shitang" :key="index">
					<view style="position:relative;width: 100upx;height: 120upx;">
						<text class="grace-list-icon grace-icons icon-img grace-gray uni-media-list-logo img-abs" style="font-size: 60upx;"></text>
						<image class="uni-media-list-logo img-abs" mode="aspectFill" :src="'https://www.dute.org/imgplaceholder/160x200?forecolor=3688FF&bgcolor=F8F8F8&text='+ item.name.slice(-3,-1)"></image>
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
				shitang: [],
				loading: true,
				skeleton1: {
					avatarSize: '40px',
					row: 1,
					showTitle: true,
					animate: true
				}
			}
		},
		created: function() {
			this.loading = true
			uniCloud.callFunction({
				name: 'getShitangList'
			}).then((res) => {
				// console.log('res',res.result.data)
				this.shitang = res.result.data
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
		},
		methods: {}
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
