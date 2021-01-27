<style lang="scss" scoped>
	.dangkou-card {
		margin: 20upx 40upx;
		padding: 20upx 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 10upx;
		box-shadow: 0px 4px 10px 5px #e6e6e6 ;
		.dangkou-icon{
			width: 140upx;
			height: 140upx;
			border-radius: 10upx;
			margin: 10upx 20upx;
		}
		.dangkou-detail {
			flex: 1;
			.name{
				font-size: 20px;
				margin-bottom: 10upx;
			}
			.place,.time{
				font-size: 12px;
				line-height: 16px;
				color: #808080;
			}
		}
		.button{
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
			<view class="grace-margin-top">
				<view class="grace-title grace-margin-top">档口评分</view>
				菜品综合评分：<graceSingleSlider ref="graceSingleSlider1" :barText="'好评：'+ rate" :canSlide='false'></graceSingleSlider>
				档口卫生评分：<graceSingleSlider ref="graceSingleSlider2" :barText="'好评：'+ rate2" :canSlide='false'></graceSingleSlider>
			</view>
			<view class="grace-title grace-margin-top">销售统计</view>
			<navigator url="/pages/analysis/index">
				<view class="grace-list-items">
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">月销售：1998份</text>
							<text class="grace-list-title-desc">查看统计详情</text>
						</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
			</navigator>
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
				rate: '100',
				rate2: '100',
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
