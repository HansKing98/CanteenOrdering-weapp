<template>
	<view class="qiun-columns">
		<!--#ifdef H5 -->
		<!-- <view class="grace-form-item grace-border-b">
			<text class="grace-form-label grace-blue grace-h3">选择食堂</text>
			<view class="grace-form-body">
				<picker class="grace-form-picker" @change="pickerChange" :value="genderIndex" :range="gender" name="gender">
					<text class="grace-text grace-gray">{{gender[genderIndex]}}</text>
					<text class="grace-icons icon-arrow-down" style="margin-left:5px;"></text>
				</picker>
			</view>
		</view> -->

		<!--#endif-->
		<view class="grace-flex grace-title grace-margin-top grace-space-between" >
			<text class="grace-form-label grace-blue grace-h3">日销售额</text>
			<button type="primary" class="grace-button">导出</button>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn"
			 @touchend="touchEndColumn"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" disable-scroll=true @touchstart="touchColumn"
			 @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import {
		isJSON
	} from '@/common/checker.js';
	import TESTdata from '@/common/data.json';
	var _self;
	var canvaColumn = null;

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				genderIndex: 0,
				gender: ['学五食堂', '学六食堂'],
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
			this.cWidth = uni.upx2px(758);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			pickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.genderIndex = e.target.value
			},
			getServerData() {
				// uni.request({
				// 	url: 'https://www.ucharts.cn/data.json',
				// 	data:{
				// 	},
				// 	success: function(res) {
				console.log("1", TESTdata)
				let Column = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories = TESTdata.data.LineA.categories;
				Column.series = TESTdata.data.LineA.series;
				_self.textarea = JSON.stringify(TESTdata.data.LineA);
				_self.showColumn("canvasColumn", Column);
				// 	},
				// 	fail: () => {
				// 		_self.tips="网络错误，小程序端请检查合法域名";
				// 	},
				// });

			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					fontSize: 11,
					padding: [5, 15, 15, 15],
					legend: {
						show: true,
						position: 'top',
						float: 'center',
						itemGap: 30,
						padding: 5,
						margin: 5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth: 1
					},
					dataLabel: true,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4,
						scrollShow: true,
						scrollAlign: 'left',
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 4,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0) + '元'
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio * 0.9,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					},
				});

			},
			touchColumn(e) {
				canvaColumn.scrollStart(e);
			},
			moveColumn(e) {
				canvaColumn.scroll(e);
			},
			touchEndColumn(e) {
				canvaColumn.scrollEnd(e);
				canvaColumn.touchLegend(e, {
					animation: true,
				});
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					canvaColumn.updateData({
						series: newdata.series,
						categories: newdata.categories,
						scrollPosition: 'right',
						animation: false
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
		width: 355px;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 355px;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
