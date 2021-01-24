<template>
	<gracePage :customHeader="false">
		<view class="grace-body" slot="gBody">
			<view class="grace-title grace-margin-top">功能入口</view>
			<view class="demo">
				<view>
					<button type="primary" class="grace-button" @click="navigateTo('/pages/login/login')">登录页</button>
				</view>
				<view>
					<button type="warn" class="grace-button" @click="navigateTo('/pages/customer/customer')">营养分析</button>
					<!-- <button type="warn" class="grace-button" @click="navigateTo('/pages/customer/customer2')">customer2</button> -->
					<!-- <button type="warn" class="grace-button" @click="navigateTo('/pages/customer/customer3')">customer3</button> -->
				</view>
			</view>
			<view class="demo">
				<view>
<!-- 					<button type="primary" class="grace-button" plain="true" @click="navigateTo('/pages/analysis/analysis')">analysis</button>
					<button type="primary" class="grace-button" plain="true" @click="navigateTo('/pages/analysis/analysis2')">analysis2</button> -->
					<button type="primary" class="grace-button" plain="true" @click="navigateTo('/pages/analysis/index')">食堂情况分析</button>
				</view>
			</view>
			<view class="grace-title grace-margin-top" >其他入口</view>
			<view class="demo">
				<view>
					<button @click="navigateTo('/pages/screen/screen1')" type="primary" class="grace-button grace-gtbg-green">screen1</button>
				</view>
				<view>
					<button @click="navigateTo('/pages/screen/screen2')" type="primary" class="grace-button  grace-gtbg-blue">screen2</button>
				</view>
			</view>
			<view style="height:50px;"></view>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	export default {
		data() {
			return {}
		},
		methods: {
			navigateTo(url) {
				uni.navigateTo({
					url: url
				});
			}
		},
		components: {
			gracePage
		}
	}
</script>
<style>
	.demo {
		display: flex;
		flex-wrap: nowrap;
		border-left: 1px solid #F8F8F8;
	}

	.demo view {
		width: 100%;
		text-align: center;
		margin: 10rpx;
	}
</style>
