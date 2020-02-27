<template>
	<view class="grace-body">
		<view class="grace-margin-top">
			<text class="grace-title">常用文本样式</text>
		</view>
		<view class="grace-nowrap demo">
			<text class="grace-blue grace-h1">H1</text>
			<text class="grace-light-blue grace-h2">H2</text>
			<text class="grace-gray grace-h3">H3</text>
			<text class="grace-blue-sky grace-h4">H4</text>
		</view>
		<view class="grace-nowrap demo">
			<text class="grace-red grace-h5">H5</text>
			<text class="grace-green grace-h6">H6</text>
			<text class="grace-yellow">普通</text>
			<text class="grace-bold">加粗</text>
		</view>
		<view class="grace-nowrap demo">
			<text class="grace-blue grace-text-small">小字体</text>
			<text class="grace-red grace-line-through">删除</text>
			<text class="grace-gray grace-italic">倾斜</text>
			<text class="grace-yellow grace-indent">缩进</text>
		</view>
		<view class="grace-margin-top">
			<text class="grace-title">溢出省略</text>
		</view>
		<view class="grace-nowrap">
			<text class="grace-ellipsis" style="width:200rpx;">长文本溢出长文本溢出长文本溢出</text>
		</view>
		<view class="grace-margin-top">
			<text class="grace-title">文本段落</text>
		</view>
		<view>
			<text  class="grace-text">GraceUI 是一套兼容微信小程序及uni-app的优秀前端框架，以flex布局为基础，提供了丰富的组件及界面库。大幅度提高开发速度 ^_^</text>
		</view>
		<view class="grace-margin-top">
			<text class="grace-title">描述文本</text>
		</view>
		<view>
			<text class="grace-desc grace-black9">GraceUI 来自于近3年的及上百个小程序、APP项目经验，我们是一线开发者，更懂开发！我们打造简洁、轻快的框架！</text>
		</view>
	</view>
</template>
<script>
</script>
<style>
.demo{text-align:center;}
.demo > text{width:25%; line-height:100upx;}
</style>复制代码
