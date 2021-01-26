<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="chartsa" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="chartsa"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt grace-blue pad">
			今日饮食
		</view>
			<view class="grace-list pad">
				<navigator class="grace-list-items">
					<view class="grace-list-image grace-relative">
						<image class="grace-list-image" src="../../static/caipin/u1.jpg" mode="widthFix"></image>
						<view class="grace-badge-point"></view>
					</view>
					<view class="grace-list-body grace-border-b" @click="navigateTo('/pages/customer/food?name=糖醋里脊&src=u1&last=9')">
						<view class="grace-list-title">
							<text class="grace-list-title-text">糖醋里脊</text>
							<text class="grace-list-title-desc">202003180820</text>
						</view>
						<view class="grace-list-body-desc">营养详情</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
				<view class="grace-list-items">
					<view class="grace-list-image">
						<image class="grace-list-image" src="../../static/caipin/u6.jpg" mode="widthFix"></image>
					</view>
					<view class="grace-list-body" @click="navigateTo('/pages/customer/food?name=京酱肉丝&src=u6&last=12')">
						<view class="grace-list-title">
							<text class="grace-list-title-text">京酱肉丝</text>
							<text class="grace-list-title-desc">202003181223</text>
						</view>
						<view class="grace-list-body-desc">营养详情</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
			</view>
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt grace-blue pad">
				营养总值
			</view>
						<view class="grace-list">
							<view class="grace-list-items pad2">
								<text class="grace-list-icon grace-icons icon-arrow-right grace-red"></text>
								<view class="grace-list-body">
									<view class="grace-list-title">
										<text class="grace-list-title-text">能量</text>
										<text class="grace-list-title-desc">2000/2400kcal</text>
									</view>
								</view>
							</view>
							<view class="grace-list-items pad2">
								<text class="grace-list-icon grace-icons icon-arrow-right grace-light-yellow"></text>
								<view class="grace-list-body">
									<view class="grace-list-title">
										<text class="grace-list-title-text">脂肪</text>
										<text class="grace-list-title-desc">30/55g</text>
									</view>
								</view>
							</view>
							<view class="grace-list-items pad2">
								<text class="grace-list-icon grace-icons icon-arrow-right grace-yellow"></text>
								<view class="grace-list-body">
									<view class="grace-list-title">
										<text class="grace-list-title-text">维生素</text>
										<text class="grace-list-title-desc">200/500mg</text>
									</view>
								</view>
							</view>
							<view class="grace-list-items pad2">
								<text class="grace-list-icon grace-icons icon-arrow-right grace-green"></text>
								<view class="grace-list-body">
									<view class="grace-list-title">
										<text class="grace-list-title-text">蛋白质</text>
										<text class="grace-list-title-desc">34/60g</text>
									</view>
								</view>
							</view>
							<view class="grace-list-items pad2">
								<text class="grace-list-icon grace-icons icon-arrow-right grace-blue"></text>
								<view class="grace-list-body">
									<view class="grace-list-title">
										<text class="grace-list-title-text">水分</text>
										<text class="grace-list-title-desc">600/2500ml</text>
									</view>
								</view>
							</view>
						</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import graceShade from "../../graceUI/components/graceShade.vue";
	import {
		isJSON
	} from '@/common/checker.js';
	var _self;
	var canvaArea = null;

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				arcbarWidth: 0,
				pixelRatio: 1,
				textarea: ''
			}
		},
		components:{
		},
		mounted() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(700);
			this.cHeight = uni.upx2px(340);
			this.arcbarWidth = uni.upx2px(26);
			this.getServerData();
		},
		methods: {
			navigateTo(url) {
				uni.navigateTo({
					url
				});
			},
			getServerData() {
				let Area = {
					series: [{
						name: '能量',
						data: 0.83
					}, {
						name: '脂肪',
						data: 0.55
					}, {
						name: '维生素',
						data: 0.4
					}, {
						name: '蛋白质',
						data: 0.57
					}, {
						name: '水',
						data: 0.24
					}]
				};
				this.textarea = JSON.stringify(Area);
				this.showArea("canvasArea", Area);
			},
			showArea(canvasId, chartData) {
				let border = this.arcbarWidth;
				let aWidth = this.cWidth / 2 - border;
				let aHeight = this.cHeight - border;
				let radius = (aWidth * aWidth + aHeight * aHeight) / aHeight / 2;
				let centerPoint = {
					x: this.cWidth / 2 * this.pixelRatio,
					y: (radius + border) * this.pixelRatio
				};
				canvaArea = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					colors: ['#fc5c65', '#fd9644', '#fed330', '#26de81', '#45aaf2', '#2bcbba', '#45aaf2', '#a55eea'],
					legend: {
						show: false
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						arcbar: {
							type: 'default',
							width: border * _self.pixelRatio,
							backgroundColor: 'rgba(233,233,233,0.4)',
							startAngle: 0.9999,
							endAngle: 0.0001,
							radius: radius * _self.pixelRatio,
							gap: 5 * _self.pixelRatio,
							center: centerPoint
						}
					}
				});

			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					canvaArea.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.pad{
		padding:16rpx 20rpx;
	}
	.pad2{
		padding:0 20rpx;
	}
	.qiun-charts {
		width: 750rpx;
		height: 340rpx;
		/* background: linear-gradient(to top, #28E5A0, #0BB7D6); */
		background-size: 100% 100%;
	}

	.chartsa {
		width: 750rpx;
		height: 340rpx;
	}
</style>
