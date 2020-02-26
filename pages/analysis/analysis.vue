<template>
	<view class="qiun-columns">



		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<!--#endif-->
		</view>
		<!--#ifdef H5 -->
		<button class="qiun-button" @tap="changeData()">更新图表</button>
		<!--#endif-->
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import  { isJSON } from '@/common/checker.js';
	var _self;
	var canvaMix=null;
   
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:''
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let Mix={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Mix.categories=res.data.data.Mix.categories;
						Mix.series=res.data.data.Mix.series;
            //这里后台数据没有指定数据用哪个Y轴，我人为定义了一下，仅做示例
            Mix.series[1].index=1;
            Mix.series[2].index=1;
            Mix.series[5].index=2;
						//第二根线为虚线的设置
						Mix.series[4].lineType='dash';
						Mix.series[4].dashLength=10;
						Mix.series[4].pointShape='triangle';
						Mix.series[4].addPoint=true;
						_self.textarea = JSON.stringify(res.data.data.Mix);
						_self.showMix("canvasMix",Mix);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showMix(canvasId,chartData){
				canvaMix=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'mix',
					fontSize:11,
					padding:[5,5,0,5],
					legend:{
						show:true,
            position:'bottom',
            float:'center',
						padding:5,
						lineHeight:11,
						margin:6,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
					yAxis: {
            data:[{
              calibration:true,
              position:'right',
              min:0,
              max:200,
              title:'销售额',
              titleFontSize:12,
              format:(val)=>{return val.toFixed(0)+'元'}
            }],
            showTitle:true,
						gridType:'dash',
						dashLength:4,
						splitNumber:5
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
            column:{
              width:20*_self.pixelRatio
            },
						tooltip:{
							showBox:false,//是否显示半透明黑色的提示区域
							bgColor:'#000000',
							bgOpacity:0.7,
							gridType:'dash',
							dashLength:8,
							gridColor:'#1890ff',
							fontColor:'#FFFFFF',
							horizentalLine:true,
							xAxisLabel:true,
							yAxisLabel:true,
							labelBgColor:'#DFE8FF',
							labelBgOpacity:0.95,
							labelAlign:'left',
							labelFontColor:'#666666'
						}
					},
				});
				/*下面是渲染完成时的事件，不需要请删除，注：拖动和图表交互的时候都会重新渲染
				canvaMix.addEventListener('renderComplete', () => {
				    console.log("图表渲染完成");
				});
				*/
				//下面是拖动滚动条到尽头的事件，不需要请删除
				canvaMix.addEventListener('scrollLeft', () => {
				    console.log("已经到最【左】边啦");
				});
				//下面是拖动滚动条到尽头的事件，不需要请删除
				canvaMix.addEventListener('scrollRight', () => {
				    console.log("已经到最【右】边啦");
				});
			},
			touchMix(e){
				canvaMix.scrollStart(e);
			},
			moveMix(e) {
				canvaMix.scroll(e);
			},
			touchEndMix(e) {
				canvaMix.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaMix.touchLegend(e);
				canvaMix.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaMix.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
