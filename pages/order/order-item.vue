<template>
	<view @touchstart="start" @touchend="end">

		<!-- 订单列表页面 -->
		<view class="ddlistvbg">
			<view class="ddlistv" v-for="(item,lidx) in dataList" :key="lidx" @click="detaildid(lidx)">
				<view class="titbgv">
					<view class="titbgv_l">订单号：{{item.ordernum}}</view>
					<view class="titbgv_r">{{getOrderState(item.state)}}</view>
				</view>
				<view class="listv" v-for="(goods,gsidx) in 1" :key="gsidx" @click="navigeteTo('/pages/order/complete')">
					<image class="imgv" mode="aspectFill" :src="item.img"></image>
					<view class="listv_r">
						<view class="listv_r_l">
							<view class="listv_r_l_top">{{item.tit}}</view>
							<view class="listv_r_l_btm"><text style="margin-right: 10px;">规格</text> {{item.sku}}</view>
							<view class="listv_r_l_btm2"><text style="margin-right: 10px;">菜品属性</text> {{item.attribute}}</view>
						</view>
						<view class="listv_r_r">x{{item.num}}<text style="">\n\n¥{{item.price}}</text> </view>
					</view>
				</view>
				<view class="listbg_btm">
					<view class="listbg_btm_r">实付金额：<text style="color: #f31c20; font-size: 14px;">¥{{item.cprice}}</text></view>
				</view>
				<!-- 底部模块 -->
				<view class="btmv1">下单时间：{{item.date}}
				</view>
				<view class="btmv2">
					<view class="btmv2_btn" :class="{'btmv2_btn_wc':str == '去取餐' || str == '确认取餐' || (str == '食堂评价' && item.state == 3) || str == '菜品评价'}"
					 v-for="(str,sidx) in btnlist[item.state]" :key="sidx" @click.stop="btnclick(str,lidx)">{{str}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titsel: 0,
				offsetnum: 0,
				titlist: [
					'全部',
					'待烹饪',
					'已取消',
					'待取餐',
					'已完成',
					'待评价',
					'退款售后'
				],
				dataList: [{
						name: '天津科技大学',
						addess: '新食堂二楼',
						state: 0,
						img: '../../static/caipin/u1.jpg',
						tit: '红烧肉',
						attribute: '热菜',
						num: '1',
						sku: '300g',
						date: '2021-2-07',
						price: '6',
						cprice: '6',
						ordernum: '4545245824515545'
					},
					{
						name: '天津科技大学',
						addess: '新食堂二楼',
						state: 1,
						img: '../../static/caipin/u2.jpg',
						tit: '糖醋里脊',
						attribute: '热菜',
						num: '1',
						sku: '300g',
						date: '2021-2-07',
						price: '5',
						cprice: '5',
						ordernum: '4545245824515234'
					},
					{
						name: '天津科技大学',
						addess: '新食堂二楼',
						state: 2,
						img: '../../static/caipin/u3.jpg',
						tit: '鱼香肉丝',
						attribute: '热菜',
						num: '1',
						sku: '300g',
						date: '2021-2-07',
						price: '6',
						cprice: '6',
						ordernum: '4545245824514892'
					},
					{
						name: '天津科技大学',
						addess: '新食堂二楼',
						state: 3,
						img: '../../static/caipin/u4.jpg',
						tit: '醋溜土豆丝',
						attribute: '热菜',
						num: '1',
						sku: '300g',
						date: '2021-2-07',
						price: '3',
						cprice: '3',
						ordernum: '4545245824423443'
					},
					{
						name: '天津科技大学',
						addess: '新食堂二楼',
						state: 4,
						img: '../../static/caipin/u3.jpg',
						tit: '鱼香茄子',
						attribute: '热菜',
						num: '1',
						sku: '300g',
						date: '2021-2-07',
						price: '6',
						cprice: '6',
						ordernum: '4545245824423443'
					}
				],
				btnlist: [
					['联系食堂', '取消订单', '去取餐'],
					['重新预定'],
					['联系食堂', '查看食堂位置', '确认取餐'],
					['申请售后', '评价订单', '联系食堂', '食堂评价', '待确认'],
					['联系食堂','食堂评价','菜品评价'],
					['联系食堂', '食堂评价', '菜品评价'],
					['联系食堂', '申请退款售后']
				],
				startData: {
					clientX: '',
					clientY: ''
				}
			}
		},
		methods: {


			btnclick(str, idx) {
				console.log(str, idx);
				if (str.indexOf('查看食堂位置') != -1) {
					uni.navigateTo({
						url: '../orderdetail/YSHLookLocation'
					})
				}
				if (str.indexOf('食堂评价') != -1) {
					uni.navigateTo({
						url: '../orderBtnClick/YSHRiderExceptional'
					})
				}
				if (str.indexOf('菜品评价') != -1 || str.indexOf('评价订单') != -1) {
					uni.navigateTo({
						url: '../orderBtnClick/YSHGoodsEvaluation'
					})
				}
				if (str.indexOf('申请退款售后') != -1 || str.indexOf('申请售后') != -1) {
					uni.navigateTo({
						url: '../orderBtnClick/YSHApplyForRefundAfterSale'
					})
				}
				if (str.indexOf('去取餐') != -1 || str.indexOf('再来一单') != -1) {
					uni.navigateTo({
						url: '../orderBtnClick/YSHSGoodsSureOrder'
					})
				}
				if (str.indexOf('联系食堂') != -1) {
					uni.makePhoneCall({
						// 手机号
						phoneNumber: '18595857565',
						// 成功回调
						success: (res) => {
							console.log('调用成功!')
						},
						// 失败回调
						fail: (res) => {
							console.log('调用失败!')
						},
					});
				}
			},
			// 获取对应的状态
			getOrderState(state) {
				let str = this.titlist[state + 1];

				return str;
			},
			detaildid(idx) {
				console.log(idx);
				if (idx == 2) {
					uni.navigateTo({
						url: '../orderdetail/YSHShopOrderDetail2?type=' + idx
					})
				} else {
					uni.navigateTo({
						url: '../orderdetail/YSHShopOrderDetail?type=' + idx
					})
				}

			}
		}
	}
</script>

<style lang="scss">
	.headerv {
		width: 100%;
		// height: 40px;
		background-color: #ffffff;
		border-top: 1px solid #f1f1f1;
		// display: flex;
		// justify-content: flex-start;
		position: fixed;
		top: 0;
		left: 0;
		// padding: 0 30upx;
		z-index: 10;

		white-space: nowrap;
		// box-sizing: border-box;
		// overflow-x: scroll;
		// overflow-y: hidden;

		.headerv_list {
			font-size: 14px;
			height: 40px;
			line-height: 40px;
			margin-left: 15px;
			padding-right: 15px;
			text-align: center;
			display: inline-block;
		}

		.headerv_list_sc {
			color: #1a73e8;
		}
	}

	.ddlistvbg {
		width: 100%;
		// margin-top: 41px;
		height: calc(100% - 41px);
		position: absolute;
		// background-color: #4CD964;

		.ddlistv {
			width: calc(100% - 30px);
			margin-left: 15px;
			margin-top: 10px;
			border-radius: 5px;
			background-color: #fff;

			.titbgv {
				width: calc(100% - 20px);
				height: 40px;
				line-height: 35px;
				margin-left: 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.titbgv_l {
					font-size: 14px;
					color: #999999;
				}

				.titbgv_r {
					font-size: 14px;
				}
			}

			.listbg_btm {
				// background-color: #4CD964;
				height: 35px;
				width: calc(100% - 20px);
				margin-left: 10px;
				display: flex;
				justify-content: flex-end;
				border-bottom: 0.6px solid #f1f1f1;

				.listbg_btm_r {
					line-height: 30px;
					// background-color: #4CD964;
					font-size: 13px;
					margin-bottom: 10px;
					color: #999999;
				}
			}

			.btmv1 {
				// height: 35px;
				width: calc(100% - 20px);
				margin-left: 10px;
				font-size: 13px;
				line-height: 20px;
				color: #999999;
				// background-color: #007AFF;
				margin-top: 10px;
			}

			.btmv2 {
				// height: 50px;
				width: calc(100% - 20px);
				margin-left: 10px;
				margin-top: 5px;
				display: flex;
				justify-content: flex-end;
				flex-wrap: wrap;

				.btmv2_btn {
					color: #999999;
					font-size: 13px;
					height: 28px;
					line-height: 28px;
					text-align: center;
					padding: 0 13px;
					margin-left: 12px;
					border: 1px solid #999999;
					border-radius: 28px;
					margin-bottom: 15px;
				}

				.btmv2_btn_wc {
					color: #f31c20;
					border: 1px solid #f31c20;
				}
			}

			.listv {
				margin-top: 10px;
				height: 80px;
				width: 100%;
				background-color: #fff;
				display: flex;
				justify-content: space-between;

				// background-color: #4CD964;
				.imgv {
					width: 70px;
					height: 70px;
					margin-top: 5px;
					margin-left: 10px;
				}

				.listv_r {
					// background-color: #4CD964;
					width: calc(100% - 70px - 20px);
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.listv_r_l {
						// background-color: #fc02ff;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						overflow: hidden;
						width: 65%;
						height: 100%;

						.listv_r_l_top {
							font-size: 14px;
							// margin-top: 10px;
							height: 37px;
							overflow: hidden;
						}

						.listv_r_l_btm {
							font-size: 12px;
							color: #999999;
							// margin-bottom: 10px;
							height: 16px;
							overflow: hidden;
						}

						.listv_r_l_btm2 {
							font-size: 12px;
							color: #999999;
							// margin-bottom: 10px;
							height: 17px;
							overflow: hidden;
						}
					}

					.listv_r_r {
						// background-color: #ff3434; 
						width: 33%;
						height: 100%;
						line-height: 100%;
						display: flex;
						// align-items: center;
						justify-content: flex-end;
						flex-direction: column;
						margin-right: 10px;
						font-size: 13px;
						text-align: right;
					}
				}
			}
		}
	}
</style>
