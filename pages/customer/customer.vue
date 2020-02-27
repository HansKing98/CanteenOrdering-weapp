<template>
	<gracePage :customHeader="false">
		<view slot="gBody" class="grace-body">
			<view class="grace-margin-top" style="padding:20rpx 0;">
				<text class="grace-h4 grace-bold">个人中心</text>
			</view>
			<view class="grace-list">
				<view class="grace-list-items">
					<view class="grace-list-image ucenter-face grace-relative">
						<image class="grace-list-image ucenter-face-image" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
					</view>
					<view class="grace-list-body">
						<view class="grace-list-title">
							<text class="grace-list-title-text">李侦翼</text>
						</view>
						<view class="grace-list-body-desc">17062211</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
			</view>
			<view class="ucenter-line"></view>
			<view>
				<graceBoxBanner :items="items"></graceBoxBanner>
			</view>
			<view class="ucenter-line"></view>
			<customer2 />
			<customer3 />
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceBoxBanner from "../../graceUI/components/graceBoxBanner.vue";
import customer2 from "./customer2.vue";
import customer3 from "./customer3.vue";
export default {
	data() {
		return {
			items: [
				[80, '', '签到'],
				[100, '', '达标'],
				['￥83.50', '', '余额']
			]
		}
	},
	methods:{},
	components:{
		gracePage, graceBoxBanner,customer2,customer3
	}
}
</script>
<style>
.ucenter-face{width:100rpx !important; height:100rpx !important;}
.ucenter-face-image{width:100rpx !important; height:100rpx !important;}
.ucenter-line{height:12rpx; background-color:#F4F5F6; margin:16rpx 0;}
</style>