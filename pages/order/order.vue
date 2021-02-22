<template>
	<view>

		<view class="swiperMain">
			<view class="swiperHead">

				<!--组件-->
				<swiperNavBar :scrollIntoView="scrollIntoView" :swiperTabList='swiperTabList' :swiperTabIdx='swiperTabIdx'
				 :currentSwiperWidth='currentSwiperWidth' :currentSwiperHeight='currentSwiperHeight' :swiperCurrentSize='swiperCurrentSize'
				 :swiperColor='swiperColor' :swiperCurrentColor='swiperCurrentColor' :currentSwiperLineShow="currentSwiperLineShow"
				 :currentSwiperLineActiveWidth="currentSwiperLineActiveWidth" :currentSwiperLineActiveHeight="currentSwiperLineActiveHeight"
				 :currentSwiperLineActiveBg="currentSwiperLineActiveBg" :currentSwiperLineAnimatie="currentSwiperLineAnimatie" v-if=" swiperTabList.length > 1 "
				 @change="CurrentTab">
				</swiperNavBar>
				<!--组件-->

			</view>

			<!--内容-->
			<view class="swiperCont" :style="{ paddingTop:currentSwiperHeight + 'rpx' }">
				<swiper class="swiper" style="height:100vh" :current="swiperTabIdx" @change="SwiperChange">
					<swiper-item class="swiperItem" v-for="(item,index) in swiperTabList" :key='index'>
						<!-- {{ item }} -->
						<order-item />
					</swiper-item>
				</swiper>
			</view>
			<!--内容-->

		</view>

	</view>
</template>
<script>
	import swiperNavBar from "../../components/swiperNavBar.vue";
	import orderItem from "./order-item.vue"
	export default {
		data() {
			return {
				//导航
				scrollIntoView: 0, //设置哪个方向可滚动，则在哪个方向滚动到该元素
				swiperTabList: ['全部', '待取餐', '待评价','已取消'], //导航列表
				swiperTabIdx: 0,
				swiperCurrentSize: '26rpx', //导航的字体大小
				swiperColor: '#333333', //导航栏字体未选中前颜色
				swiperCurrentColor: '#1D63FF', //选中当前导航栏字体颜色
				currentSwiperWidth: '25%', //当前导航的宽度 % upx rpx px  （导航超出可左右滑动 ）
				currentSwiperHeight: 70, //当前导航的高度度 rpx px
				mainHeight: 1000, //全屏或者局部滑动设置的高度
				currentSwiperLineShow: true, //是否显示导航栏的线条 （线条距离标题太近的话可自行修改.swiperLine的css）
				currentSwiperLineActiveBg: '#1D63FF', //当前选中的导航栏线条颜色
				currentSwiperLineActiveWidth: '30rpx', //当前选中的导航栏线条的宽度 upx rpx px
				currentSwiperLineActiveHeight: '6rpx', //当前选中的导航栏线条的高度度 upx rpx px
				currentSwiperLineAnimatie: 300, //当前选中的导航栏线条过渡效果


				//（全屏出现滚动条 去掉paddingTop 但导航栏会遮住部分内容 自行改.swiperCont .swiper里css）
				//也可获取导航栏的高度  屏幕高度减去导航栏高度 = 你的内容全屏高度  不会出现滚动条
			}
		},
		onLoad() {

		},
		components: {
			swiperNavBar,
			orderItem
		},
		onReady() {

			//this.mainHeight = uni.getSystemInfoSync().windowHeight;//获取屏幕的高度使得全屏左右滑动
			//console.log(this.mainHeight)

		},
		methods: {

			//tab点击事件 自行完善需要的代码
			CurrentTab: function(index, item) {
				this.swiperTabIdx = index;
				this.scrollIntoView = Math.max(0, index - 1);
				//console.log(index + '----' + item)
			},
			//滑动事件  自行完善需要的代码
			SwiperChange: function(e) {
				//console.log(e)
				//console.log(e.detail)
				//console.log(e.detail.current);
				this.swiperTabIdx = e.detail.current;
				this.scrollIntoView = Math.max(0, e.detail.current - 1);
			},
		}

	}
</script>
<style>
	page {
		background: #F8F8F8;
	}

	.swiperMain {
		width: 100%;
	}

	.swiperHead {
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;
		background: #FFFFFF;
	}

	.swiperHead scroll-view {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.swiperTab {
		display: inline-flex;
		flex-direction: column;
		text-align: center;
	}

	.swiperCont {
		width: 100%;
		padding-top: 70rpx;
	}

	/* #ifdef H5 */
	.swiperHead {
		position: fixed;
		top: 44px;
		z-index: 10;
		width: 100%;
		background: #FFFFFF;
	}

	/* #endif */

	.swiper {
		width: 100%;
		height: 400rpx;
	}

	.swiperItem {
		overflow: auto;
	}

	.swiperItem image {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
