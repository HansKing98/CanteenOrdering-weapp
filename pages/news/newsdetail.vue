<template>
	<view>
		<view class="banner">
			<image class="banner-img" :src="banner.cover"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.author_name}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.published_at}}</text>
		</view>
		<view class="article-content">
			<rich-text :nodes="banner.content"></rich-text>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<ad v-if="htmlString" unit-id="adunit-01b7a010bf53d74e"></ad>
		<!-- #endif -->
		<!-- <div v-html="content"></div> -->
		<!-- <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'list-triplex-row',
				banner: {},
				htmlString: "",
			}
		},
		// onShareAppMessage() {
		// 	return {
		// 		title: this.banner.title,
		// 		path: '/pages/template/list2detail-detail/list2detail-detail?detailDate=' + JSON.stringify(this.banner)
		// 	}
		// },
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			console.log(123)
			console.log(event)
			try {
				this.banner = JSON.parse(decodeURIComponent(event.detailDate));
			} catch (error) {
				this.banner = JSON.parse(event.detailDate);
			}

			uni.setNavigationBarTitle({
				title: this.banner.title
			});
			// 图片转换格式
			this.banner.content = this.banner.content.replace(/\\/g, "").replace(/<img/g,
				"<img style=\"width:100%;\"");
			// 删除第一张图片
			this.banner.content = this.banner.content.replace(/\\/, "").replace(/<img/,
				"<img style=\"display:none;\"");
		},
		methods: {},
	}
</script>

<style>
	view {
		font-size: 28upx;
		line-height: 1.8;
	}

	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
</style>
