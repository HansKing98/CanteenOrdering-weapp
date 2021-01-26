<template>
	<view>
		<!-- 这里将 /pages/detail/detail.nvue 页面作为一个组件使用 -->
		<!-- 路径 “/pages/detail/detail” 转为 “pages-detail-detail” 组件 -->
		<!-- <pages-detail-detail ref="detailPage"></pages-detail-detail> -->
		<view class="home-page">
			<image src="../static/logo.png" class="icon"></image>
			<div class="name">智点点</div>
			<div class="text">高校食堂预约点餐系统</div>
			<div class="footer">
				<div class="left">
					<div class="title">初衷</div>
					<div class="content">本应用由天津科技大学智点点团队开发，致力于为广大师生提供优质便捷的食堂点餐预定服务。</div>
				</div>
				<div class="right">
					<div class="title">简述</div>
					<div class="content">我们的团队富有朝气，始终保持龙马精神。</div>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		created(e) {
			//监听自定义事件，该事件由详情页列表的点击触发
			uni.$on('updateDetail', (e) => {
				// 执行 /pages/detail/detail.nvue页面的load方法
				this.$refs.detailPage.load(e.detail);
			})
		},
		onLoad() {},
		methods: {}
	}
</script>

<style scoped>
	.home-page {
		height: 100vh;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #3a5169;
	}

	.icon {
		width: 100px;
		height: 100px;
		border-radius: 10px;
	}

	.name {
		font-size: 24px;
	}

	.text {
		font-size: 20px;
		margin-bottom: 100px;
		color: ;
	}

	.footer {
		width: 100%;
		display: flex;
		justify-content: space-around;
		
	}
	.left,.right{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title {
		font-size: 16px;
	}

	.content {
		font-size: 12px;
		width: 300px;
	}
</style>
