<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="grace-icon-classes grace-wrap grace-space-between">
				<navigator :url="item.path"
				class="grace-ic-item" :style="{background:item.bgColor}" v-for="(item, index) in classes" :key="index">
					<image :src="item.icon" class="grace-ic-image" mode="widthFix"></image>
					<view class="grace-ic-content">
						<text class="grace-ic-title grace-white">{{item.txt}}</text>
						<text class="grace-text-small grace-white">{{item.smallTxt}}</text>
					</view>
					<image :src="item.icon" class="grace-ic-bg-image" mode="widthFix"></image>
				</navigator>
			</view>
			<foodlist />
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import foodlist from "../customer/foodlist2.vue";
export default {
    data() {
    	return {
			classes : [
				{
					icon:'https://graceui.oss-cn-beijing.aliyuncs.com/classes/card.png', 
					txt:'每日营养分析', smallTxt:"Analysis", bgColor:"#6DCD70",
					path:"/pages/customer/customer", openType:"switchTab"
				},
				{
					icon:'https://graceui.oss-cn-beijing.aliyuncs.com/classes/mall.png',
					txt:'档口列表', smallTxt:"Mall", bgColor:"#4D5CBC",
					path:"/pages/customer/dangkou", openType:"navigate"
				},
				{
					icon:'https://graceui.oss-cn-beijing.aliyuncs.com/classes/msg.png', 
					txt:'食品安全资讯', smallTxt:"News", bgColor:"#1296fe",
					path:"/pages/news/newslist", openType:"navigate"
				}
			]
		}
    },
	methods:{
		
	},
	components:{
		gracePage,
		foodlist
	}
}
</script>
<style>
.grace-icon-classes{}
.grace-ic-item{width:700rpx; height:158rpx; font-size:0; border-radius:5px; position:relative; margin:10rpx 0; overflow:hidden; display:flex; flex-direction:column; justify-content:center;}
.grace-ic-image{width:60rpx; height:56rpx; margin-left:20rpx;}
.grace-ic-bg-image{width:70rpx; height:66rpx; position:absolute; opacity:0.1; right:6px; bottom:6px;}
.grace-ic-content{padding:10rpx 20rpx;}
.grace-ic-title{line-height:40rpx; font-size:28rpx; margin-right:3px;}
</style>