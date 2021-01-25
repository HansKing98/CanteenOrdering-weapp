<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<view class="grace-margin-top">
				<view class="grace-title grace-margin-top">档口评分</view>
					菜品综合评分：<graceSingleSlider ref="graceSingleSlider1" :barText="'好评：'+ rate" :canSlide='false'></graceSingleSlider>
					档口卫生评分：<graceSingleSlider ref="graceSingleSlider2" :barText="'好评：'+ rate2" :canSlide='false'></graceSingleSlider>
			</view>
			<view class="grace-title grace-margin-top">现有菜品</view>
			<view class="grace-list">
				<navigator class="grace-list-items" v-for="item in foodlist" :url="'/pages/customer/food?name='+item.name+'&dangkou='+ dangkou +'&last='+item.last+'&src='+item.src">
					<view class="grace-list-image grace-relative">
						<image class="grace-list-image" :src="'../../static/caipin/'+ item.src +'.jpg'" mode="aspectFill"></image>
						<view class="grace-badge-point"></view>
					</view>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">{{item.name}}</text>
							<text class="grace-list-title-desc">余：{{item.last}}</text>
						</view>
						<view class="grace-list-body-desc">{{dangkou}}</view>
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
	import graceSingleSlider from "../../graceUI/components/graceSingleSlider.vue";
	export default {
		data() {
			return {
				dangkou:'档口名称',
				foodlist:[
					{
						name:'红烧肉',
						src:'u1',
						last:18
					},
					{
						name:'糖醋里脊',
						src:'u2',
						last:9
					},
					{
						name:'鱼香肉丝',
						src:'u3',
						last:7
					},
					{
						name:'醋溜土豆丝',
						src:'u4',
						last:22
					},
					{
						name:'鱼香茄子',
						src:'u5',
						last:34
					},
					{
						name:'京酱肉丝',
						src:'u6',
						last:15
					},
					
					{
						name:'红烧茄夹',
						src:'u7',
						last:22
					},
					{
						name:'北京烤鸭',
						src:'u8',
						last:7
					},
					{
						name:'八珍豆腐',
						src:'u9',
						last:6
					},
				],
				rate : '98',
				rate2 : '98',
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			if(JSON.stringify(option) !== '{}'){
				this.dangkou= option.name
				this.rate= option.rate
				this.rate2= option.rate2
			}
			setTimeout(() => {
				this.$refs.graceSingleSlider1.setProgress(this.rate);
				this.$refs.graceSingleSlider2.setProgress(this.rate2);
			});
		},
		methods: {},
		components: {
			graceSingleSlider,
			gracePage,
			graceFlex
		}
	}
</script>
<style>
</style>
