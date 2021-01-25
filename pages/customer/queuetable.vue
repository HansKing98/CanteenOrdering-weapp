<template>
	<view class="grace-card-view">
		<view class="grace-card-body grace-border-b">
			<view class="">
				<view class="grace-card-title">
					<text class="grace-card-name grace-text-small grace-blue">取餐密切接触名单</text>
				</view>
				<view class="grace-body">
					<view class="grace-table grace-margin-top">
						<view class="grace-theader grace-bg-blue">
							<text class="grace-td grace-bold">姓名</text>
							<text class="grace-td grace-bold">购买方式</text>
							<text class="grace-td grace-bold">排队距离</text>
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
					['张三', 'APP预约', '2人'],
					['李侦翼', 'APP预约', '1人'],
					['高兰馨', 'APP预约', '-'],
					['李四', 'APP预约', '1人'],
					['王二', '直接购买', '2人'],
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
