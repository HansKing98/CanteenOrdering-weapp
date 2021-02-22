<template>
	<view class="container">
		<image src="../../static/order-detail.png" style="height: 1450rpx;width: 749rpx; padding-left: 1rpx;" mode=""></image>
	</view>
</template>

<script>
	// import listCell from '@/components/list-cell/list-cell.vue'
	
	export default {
		components: {
			// listCell
		},
		data() {
			return {
				order: {}
			}
		},
		computed: {
			materialsText() {
				return materials => {
					let arr = []
					materials.forEach(item => arr.push(item.name))
					return arr.join(',')
				}
			}
		},
		async onLoad(options) {
			/* 为了方便测试，这里使用同一个订单数据 */
			this.order = await this.$api('orderDetail')
		}
	}
</script>

<style lang="scss" scoped>
.container {
	background-color: #f7f7f7;
	// padding: 0 40rpx;
	display: flex;
	height: 100vh;
	flex-direction: column;
	overflow: auto;
}

</style>
