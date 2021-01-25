<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<view class="grace-title grace-margin-top">
				<view class="grace-title-border"></view>
				<text class="grace-title-text grace-blue">今日推荐菜品</text>
			</view>
			<view class="grace-list grace-flex grace-rows grace-wrap ">
				<navigator class="grace-list-items list" v-for="item in foodlist" :url="'/pages/customer/food?name='+item.name+'&dangkou='+ dangkou +'&last='+item.last+'&src='+item.src">
					<view class="grace-list-image">
						<image class="grace-list-image" :src="'../../static/caipin/'+ item.src +'.jpg'" mode="aspectFill"></image>
					</view>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">{{item.name}}</text>
						</view>
					</view>
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
				dangkou:'川味小炒',
				foodlist:[
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
	.list{
		height: 160rpx;
		width: 350rpx;
	}
</style>
