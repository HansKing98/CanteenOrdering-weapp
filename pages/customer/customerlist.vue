<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<view class="grace-title grace-margin-top">左侧图片模式</view>
			<view class="grace-list">
				<navigator class="grace-list-items">
					<view class="grace-list-image grace-relative">
						<image class="grace-list-image" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
						<view class="grace-badge-point"></view>
					</view>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">标题信息</text>
							<text class="grace-list-title-desc">20190318</text>
						</view>
						<view class="grace-list-body-desc">描述信息</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
				<view class="grace-list-items">
					<view class="grace-list-image">
						<image class="grace-list-image" src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png" mode="widthFix"></image>
					</view>
					<view class="grace-list-body">
						<view class="grace-list-title">
							<text class="grace-list-title-text">标题信息</text>
							<text class="grace-list-title-desc">20190318</text>
						</view>
						<view class="grace-list-body-desc">描述信息</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
			</view>
			<view class="grace-title grace-margin-top">左侧图标模式</view>
			<view class="grace-list">
				<view class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-comments grace-blue"></text>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">标题信息</text>
							<text class="grace-list-title-desc">20190318</text>
						</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
				<navigator class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-help1 grace-green"></text>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">帮助中心</text>
						</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
				<navigator class="grace-list-items">
					<text class="grace-list-icon grace-icons icon-shoucang grace-red"></text>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">我的收藏</text>
						</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
			</view>
			<view class="grace-title grace-margin-top">无图模式</view>
			<view class="grace-list">
				<navigator class="grace-list-items">
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">这个标题文字很多比较长有点长很长很长很长很长很长很长很长很长很很长很长很长很长</text>
						</view>
						<view class="grace-list-body-desc">描述信息</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
				<view class="grace-list-items">
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">标题文本</text>
						</view>
						<view class="grace-list-body-desc">描述信息</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceFlex from "../../graceUI/components/graceFlex.vue";
export default {
	data() {
		return {}
	},
	onLoad:function(){},
	methods:{},
	components:{
		gracePage, graceFlex
	}
}
</script>
<style>
</style>