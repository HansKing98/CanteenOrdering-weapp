<template>
	<view>
		<skeleton :loading="bannerLoading" avatarSize="40px" :row="5" :showTitle="true" :animate="true" :showAvatar="false"></skeleton>
		<view class="banner" @click="goDetail(banner)" v-show="!bannerLoading">
			<image class="banner-img" :src="banner.pic"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<skeleton :loading="listLoading" avatarSize="80px" avatarShape="square" :row="2" :showTitle="true" :animate="true"
		 :showAvatar="index%2==0?true:false" v-for="(i,index) in 10" :key="index"></skeleton>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData.slice(1)" :key="key"
			 @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.pic" v-if="value.pic"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.src}}</text>
							<text>{{value.time}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<graceLoading :loadingType="loadingType"></graceLoading>
	</view>
</template>

<script>
	var dateUtils = require('./common/util.js').dateUtils;
	import graceLoading from '../../graceUI/components/graceLoading.vue';
	export default {
		components: {
			graceLoading
		},
		data() {
			return {
				banner: {},
				listData: [],
				haveDate: false,
				reload: false,
				bannerLoading: true,
				listLoading: true,
				pageData: {
					page: 0,
					pageSize: 11
				},
				loadingType: 3
			}
		},
		onLoad() {
			this.getNews()
		},
		onPullDownRefresh() {
			this.reload = true;
			this.haveDate = false;
			this.getNews();
		},
		onReachBottom() {
			//避免多次触发
			this.loadingType = 0
			if (this.loadingType == 1 || this.loadingType == 2) {
				return;
			}
			this.getUniCloudNews();
		},
		methods: {
			getNews() {
				this.getUniCloudNews();
				this.getList();
			},
			getUniCloudNews() {
				// 获取云数据库数据
				this.loadingType = 1;
				if (this.haveDate) { //说明已有数据，目前处于上拉加载
					// console.log('1', this.haveDate)
					this.pageData.page = this.pageData.page + 1;

				} else {
					// console.log('2', this.haveDate)
					this.pageData.page = 0
				}
				// console.log('data', data.pageSize)
				uniCloud.callFunction({
					name: 'getNews',
					data: this.pageData
				}).then((res) => {

					this.bannerLoading = false
					// 是否到底
					if (res.result.data.length == 0) {
						// 已经加载了全部数据
						this.loadingType = 2
					}
					let list = res.result.data

					this.listData = this.reload ? list : this.listData.concat(list);
					this.banner = this.listData[0]
					// console.log('length', this.listData.length)
					this.haveDate = true;
					this.reload = false;

				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				}).finally(() => {
					this.listLoading = false
					uni.stopPullDownRefresh()
				})
			},
			getList() {
				// 获取网络 Api 数据
				uniCloud.callFunction({
					name: 'getNewsLists'
				})
			},
			goDetail: function(e) {
				let detail = {
					author_name: e.src,
					cover: e.pic,
					id: e.id,
					post_id: e.post_id,
					published_at: e.time,
					title: e.title,
					content: e.content
				}
				// console.log('detail', encodeURIComponent(JSON.stringify(detail)))
				uni.navigateTo({
					url: "/pages/news/newsdetail?detailDate=" + encodeURIComponent(JSON.stringify(
						detail))
				})
			}
		},
	}
</script>

<style>
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
		/* left: 30upx; */
		bottom: 0;
		padding-left: 30upx;
		width: 100%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 100upx;
		color: white;
		z-index: 11;
		background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.4) 60%);
	}

	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list::before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-hover {
		background-color: #eee;
	}

	.uni-list-cell::after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list .uni-list-cell:last-child::after {
		height: 0upx;
	}

	/* 图文列表 */
	.uni-media-list {
		padding: 22upx 30upx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}

	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}

	.uni-pull-right {
		flex-direction: row-reverse;
	}

	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}

	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}


	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 26upx;
		color: #8f8f94;
	}

	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
		margin-right: 20upx;
	}

	.uni-media-list-body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
		height: auto;
	}

	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 30upx;
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
