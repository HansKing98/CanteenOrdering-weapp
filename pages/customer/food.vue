<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="grace-card-view">
				<view class="grace-card-body grace-border-b">
					<image :src="'../../static/caipin/'+ src +'.jpg'" class="grace-card-img" mode="aspectFill"></image>
					<view class="grace-card-desc">
						<view class="grace-card-title">
							<text class="grace-card-name grace-text-small">{{name}}</text>
							<text class="grace-card-name grace-text-small grace-blue">{{last}}份</text>
						</view>
						<text class="grace-card-text">202003180820</text>
						<text class="grace-card-text">能量：<text class="grace-red">1100kcal </text> </text>
						<text class="grace-card-text">脂肪：<text class="grace-light-yellow">25g </text></text>
						<text class="grace-card-text">维生素：<text class="grace-yellow">10mg </text></text>
						<text class="grace-card-text">蛋白质：<text class="grace-green">10g </text></text>
						<text class="grace-card-text">水分：<text class="grace-blue">50ml </text></text>
					</view>
					<view class="grace-flex grace-columns grace-flex-vcenter">
						<text class="grace-card-text">档口：<text class="grace-blue">{{dangkou}}</text></text>
						<view class="grace-flex grace-flex1 grace-flex-vcenter">
							<button type="primary">预约</button>
						</view>

					</view>
				</view>
				<view class="grace-comments">
					<view class="grace-comments-items" v-for="(item, index) in commentContents" :key="index">
						<image :src="item.face" class="grace-comments-face"></image>
						<view class="grace-comments-body">
							<view class="grace-comments-header grace-flex">
								<text class="grace-comments-header-text" style="margin-right: 10px;">{{item.name}}</text>
								<htz-rate v-model="item.rate" :readonly="true" :size="35" class="grace-flex1" />
							</view>
							<text class="grace-comments-content">{{item.content}}</text>
							<view class="grace-comments-imgs" v-if="item.imgs">
								<view class="grace-comments-image" v-for="(img, indexImg) in item.imgs" :key="indexImg">
									<image :src="'../../static/caipin/'+ src +'.jpg'" mode="widthFix" class="grace-comments-img" @click.stop="showImgs(index, indexImg)"></image>
								</view>
							</view>
							<view v-if="item.Reply">
								<text v-for="(itemRe, indexRe) in item.Reply" :key="indexRe" class="grace-comments-replay">{{itemRe.name}} :
									{{itemRe.content}}</text>
							</view>
							<navigator class="grace-comments-info" url="/pages/customer/pingjia">
								<text class="grace-comments-info-text">查看更多评价</text>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<foodtable />
			<queuetable />
		</view>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	import foodtable from "./foodtable.vue";
	import queuetable from "./queuetable.vue";
	import graceComment from '../../graceUI/components/graceComment.vue';
	export default {
		data() {
			return {
				src: '',
				name: '菜名',
				last: 0,
				dangkou: '川味小炒',
				commentContents: [{
					"content": "故国三千里，深宫二十年。一声何满子，双泪落君前。",
					"name": "小码",
					"imgs": [
						"../../static/caipin/u2.jpg"
					],
					"face": "https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png",
					"date": "08/10 08:00",
					"rate": 5,
					"zan": 22
				}]
			}
		},
		methods: {},
		components: {
			gracePage,
			foodtable,
			queuetable,
			graceComment
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			if (JSON.stringify(option) !== '{}') {
				this.name = option.name
				this.src = option.src
				this.last = option.last
				this.dangkou = option.dangkou
			}
		},
	}
</script>
<style>
	page {
		background-color: #F6F7F8;
	}
</style>
