<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="grace-card-view">
				<view class="grace-card-body grace-border-b">
					<image src="../../static/caipin/u1.jpg" class="grace-card-img"></image>
					<view class="grace-card-desc">
						<view class="grace-card-title">
							<text class="grace-card-name grace-text-small grace-blue">糖醋里脊</text>
						</view>
						<text class="grace-card-text">202003180820</text>
						<text class="grace-card-text">能量：<text class="grace-red">1100kcal </text> </text>
						<text class="grace-card-text">脂肪：<text class="grace-light-yellow">25g </text></text>
						<text class="grace-card-text">维生素：<text class="grace-yellow">10mg </text></text>
						<text class="grace-card-text">蛋白质：<text class="grace-green">10g </text></text>
						<text class="grace-card-text">水分：<text class="grace-blue">50ml </text></text>
					</view>
					<text class="grace-card-text">档口：<text class="grace-blue">川味小炒</text></text>
				</view>
			</view>
			<foodtable />
			<queuetable />
		</view>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import foodtable from "./foodtable.vue";
	import queuetable from "./queuetable.vue";
	export default {
		data() {
			return {}
		},
		methods: {},
		components: {
			gracePage,
			foodtable,
			queuetable
		}
	}
</script>
<style>
	page {
		background-color: #F6F7F8;
	}
</style>
