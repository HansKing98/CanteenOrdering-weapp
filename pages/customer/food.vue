<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="grace-card-view">
				<view class="grace-card-body grace-border-b">
					<image :src="'../../static/caipin/'+ src +'.jpg'" class="grace-card-img" mode="aspectFill"></image>
					<view class="grace-card-desc">
						<view class="grace-card-title">
							<text class="grace-card-name grace-text-small">{{name}}</text>
							<text class="grace-card-name grace-text-small grace-blue">{{last}}份</text>
						</view>
						<text class="grace-card-text">202003180820</text>
						<text class="grace-card-text">能量：<text class="grace-red">1100kcal </text> </text>
						<text class="grace-card-text">脂肪：<text class="grace-light-yellow">25g </text></text>
						<text class="grace-card-text">维生素：<text class="grace-yellow">10mg </text></text>
						<text class="grace-card-text">蛋白质：<text class="grace-green">10g </text></text>
						<text class="grace-card-text">水分：<text class="grace-blue">50ml </text></text>
					</view>
					<view class="grace-flex grace-columns grace-flex-vcenter">
						<text class="grace-card-text">档口：<text class="grace-blue">{{dangkou}}</text></text>
						<view class="grace-flex grace-flex1 grace-flex-vcenter">
							<button type="primary" class=" grace-button grace-gtbg-green">预约</button>
						</view>
					</view>
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
			return {
				name:'菜名',
				last:0,
				dangkou:'川味小炒'
			}
		},
		methods: {},
		components: {
			gracePage,
			foodtable,
			queuetable
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			if(JSON.stringify(option) !== '{}'){
				this.name= option.name
				this.src= option.src
				this.last= option.last
				this.dangkou= option.dangkou
			}
		},
	}
</script>
<style>
	page {
		background-color: #F6F7F8;
	}
</style>
