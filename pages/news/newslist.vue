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
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
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
	</view>
</template>

<script>
	var dateUtils = require('./common/util.js').dateUtils;

	export default {
		data() {
			return {
				banner: {},
				listData: [],
				last_id: "",
				reload: false,
				bannerLoading: true,
				listLoading: true
			}
		},
		onLoad() {
			// this.getBanner();
			this.getList();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.last_id = "";
			// this.getBanner();
			this.getList();
		},
		onReachBottom() {
			this.getList();
		},
		methods: {
			// getBanner() {
			// 	uniCloud.callFunction({
			// 		name: 'getNewsBanner'
			// 	}).then((res) => {
			// 		uni.stopPullDownRefresh();
			// 		if (res.success) {
			// 			this.banner = res.result.list[0];
			// 		}
			// 	}).catch((err) => {
			// 		uni.hideLoading()
			// 		uni.showModal({
			// 			content: `查询失败，错误信息为：${err.message}`,
			// 			showCancel: false
			// 		})
			// 		console.error(err)
			// 	}).finally(() => {
			// 		this.bannerLoading = false
			// 	})
			// },
			getList() {
				var data = {
					column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
				};
				if (this.last_id) { //说明已有数据，目前处于上拉加载
					data.minId = this.last_id;
					data.time = new Date().getTime() + "";
					data.pageSize = 10;
				}
				uniCloud.callFunction({
					name: 'getNewsLists'
				}).then((res) => {
					if (res.success) {
						this.banner = res.result.list[0]
						this.bannerLoading = false
						let list = res.result.list.slice(1);
						// this.listData = list
						// console.log('data',this.listData)
						this.listData = this.reload ? list : this.listData.concat(list);
						this.last_id = list[list.length - 1].id;
						this.reload = false;
					}
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				}).finally(() => {
					this.listLoading = false
				})
			},
			goDetail: function(e) {
				// 				if (!/前|刚刚/.test(e.published_at)) {
				// 					e.published_at = dateUtils.format(e.published_at);
				// 				}
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
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: dateUtils.format(e.time),
						title: e.title
					});
				});
				return newItems;
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
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
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
