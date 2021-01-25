<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			
			<view class="grace-title grace-margin-top">开放档口</view>
			<view class="grace-list">
				<navigator class="grace-list-items" :url="'/pages/customer/foodlist?name='+item.name+'&rate='+item.rate+'&rate2='+item.rate2" v-for="(item,index) in dangkouList">
					<text class="grace-list-icon grace-icons icon-face" :class="index%2?'grace.name-green':'grace-blue'"></text>
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
		data() {
			return {
				dangkouList: [{
					name: '川味小炒',
					rate: 100,
					rate2: 90,
				}, {
					name: '山西面馆',
					rate2: 100,
					rate: 98
				}, {
					name: '过桥米线',
					rate: 90,
					rate2: 95,
				}, {
					name: '好粥道',
					rate: 100,
					rate2: 88,
				}, {
					name: '土家酱香饼',
					rate: 90,
					rate2: 88,
				}, {
					name: '煲仔饭档口',
					rate: 88,
					rate2: 90,
				}]
			}
		},
		onLoad: function() {
			
		},
		methods: {},
		components: {
			gracePage,
			graceFlex
		}
	}
</script>
<style>
</style>
