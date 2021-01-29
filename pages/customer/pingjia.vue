<template>
	<gracePage :customHeader="false" footerBg="#FFFFFF">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="grace-comments">
				<view class="grace-comments-items" v-for="(item, index) in commentContents" :key="index">
					<image :src="item.face" class="grace-comments-face"></image>
					<view class="grace-comments-body">
						<view class="grace-comments-header grace-flex">
							<text class="grace-comments-header-text"  style="margin-right: 10px;">{{item.name}}</text>
							<htz-rate v-model="item.rate" :readonly="true" :size="35" class="grace-flex1"/>
							<text class="grace-comments-header-text grace-icons icon-zan grace-blue" style="font-size: 15px;">{{item.zan}}</text>
						</view>
						<text class="grace-comments-content">{{item.content}}</text>
						<view class="grace-comments-imgs" v-if="item.imgs">
							<view class="grace-comments-image" v-for="(img, indexImg) in item.imgs" :key="indexImg">
								<image :src="img" mode="widthFix" class="grace-comments-img" @click.stop="showImgs(index, indexImg)"></image>
							</view>
						</view>
						<view v-if="item.Reply">
							<text v-for="(itemRe, indexRe) in item.Reply" :key="indexRe" class="grace-comments-replay">{{itemRe.name}} :
								{{itemRe.content}}</text>
						</view>
						<view class="grace-comments-info">
							<text class="grace-comments-replay-btn">回复</text>
							<text class="grace-comments-info-text">{{item.date}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 占位视图 用于避开底部遮盖 -->
			<view style="height:120rpx;"></view>
			<graceComment ref="graceComment" @submit="submit"></graceComment>
		</view>
		<!-- 底部提交输入框 -->
		<view class="grace-nowrap grace-flex-vcenter grace-bg-white" slot="gFooter">
			<view class="grace-footer-input-body" style="margin-right:25rpx;" @tap="openComment">
				<text class="grace-footer-input-icon grace-icons icon-write"></text>
				<input type="text" placeholder="说点什么吧..." class="grace-footer-input" disabled />
			</view>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import graceComment from '../../graceUI/components/graceComment.vue';
	export default {
		data() {
			return {
				// 模拟评论数据 (实际项目来自api请求)
				commentContents: [{
						"content": "故国三千里，深宫二十年。一声何满子，双泪落君前。",
						"name": "小码",
						"imgs": [
							"../../static/caipin/u2.jpg",
						],
						"face": "https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png",
						"date": "08/10 08:00",
						"rate":5,
						"zan": 22,
						"Reply": [{
								'name': "张晓曦",
								"content": "这家可以常吃"
							},
							{
								'name': "王大陆",
								"content": "赞了~"
							},
						]
					},
					{
						"content": "图片回复，点击图片可以预览......",
						"name": "林夕阳",
						"imgs": [
							"../../static/caipin/u1.jpg",
							"../../static/caipin/u2.jpg",
							"../../static/caipin/u3.jpg", 
						],
						"face": "https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png",
						"date": "08/12 09:00",
						"rate":3,
						"zan": 0
					},
					{
						"content": "饭菜量大，一个人吃很饱",
						"name": "路过繁华",
						"face": "https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png",
						"date": "02/10 18:00",
						"rate":4,
						"zan": 7
					},
					{
						"content": "每次来我都要进行评价",
						"name": "路过繁华",
						"face": "https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png",
						"date": "02/10 18:00",
						"zan": 1
					},
					{
						"content": "还是原来的味道",
						"name": "路过繁华",
						"face": "https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png",
						"date": "02/10 18:00",
						"rate":4,
						"zan": 1
					},
				]
			}
		},
		methods: {
			openComment: function() {
				this.$refs.graceComment.open();
				this.$refs.graceComment.setAt('小码'); // 设置 at 信息
			},
			submit: function(e) {
				console.log(e);
				// 评论数据以对象形式报错在 e 变量内，您可以连接 api 进行后续的功能开发
				// e.at - at 用户昵称
				// e.content 评论内容 , 可以此处进行字数验证
				// e.img 评论图片, 临时地址，可以结合 api 进行上传 
			},
			showImgs: function(commentsIndex, imgIndex) {
				console.log(commentsIndex, imgIndex);
				uni.previewImage({
					urls: this.commentContents[commentsIndex].imgs,
					current: this.commentContents[commentsIndex].imgs[imgIndex]
				})
			}
		},
		components: {
			gracePage,
			graceComment
		}
	}
</script>
<style>
	/* 请根据项目来规划自己的图片大小，请对图片进行等比缩放 
.grace-comments-image{width:190rpx; height:138rpx; margin:5rpx; font-size:0; overflow:hidden;}
.grace-comments-img{width:190rpx; height:138rpx; border-radius:3rpx;}
*/
</style>
