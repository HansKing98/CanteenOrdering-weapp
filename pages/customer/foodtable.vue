<template>
	<view class="grace-card-view">
		<view class="grace-card-body grace-border-b">
			<view class="">
				<view class="grace-card-title">
					<text class="grace-card-name grace-text-small grace-blue">今日食用菜品的人</text>
					<button type="primary" size="mini">导出</button>
				</view>
				<view class="grace-body">
					<view class="grace-table grace-margin-top">
						<view class="grace-theader grace-bg-blue">
							<text class="grace-td grace-bold">姓名</text>
							<text class="grace-td grace-bold">学院</text>
							<text class="grace-td grace-bold">班级</text>
						</view>
						<view class="grace-tbody" v-for="(item, index) in students" :key="index">
							<text class="grace-td">{{item[0]}}</text>
							<text class="grace-td">{{item[1]}}</text>
							<text class="grace-td">{{item[2]}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				students: [
					['高兰馨', '海洋与环境学院', '181401'],
					['李侦翼', '海洋与环境学院', '181402'],
					['张三', '化工学院', '181122'],
					['李四', '理学院', '181122'],
					['王二', '海洋与环境学院', '181122'],
				]
			}
		},
		methods: {},
	}
</script>
<style>
	.grace-table {
		overflow: hidden;
		width: 600rpx;
	}
</style>
