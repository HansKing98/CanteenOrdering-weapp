<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt grace-blue" @click="navigateTo('/pages/customer/customer3de')">
			膳食均衡达标率
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasArea" id="canvasArea" class="chartsa" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
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
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(340);
			this.arcbarWidth = uni.upx2px(26);
			this.getServerData();
		},
		methods: {
			navigateTo(url) {
				uni.navigateTo({
					url: url
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
