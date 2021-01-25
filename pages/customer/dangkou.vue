<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view class="grace-body" slot="gBody">
			<view class="grace-title grace-margin-top">开放档口</view>
			<view class="grace-list">
				<navigator class="grace-list-items" :url="'/pages/customer/foodlist?name='+item" v-for="(item,index) in dangkouList">
					<text class="grace-list-icon grace-icons icon-face" :class="index%2?'grace-green':'grace-blue'"></text>
					<view class="grace-list-body grace-border-b">
						<view class="grace-list-title">
							<text class="grace-list-title-text">{{item}}</text>
						</view>
					</view>
					<text class="grace-list-arrow-right grace-icons icon-arrow-right"></text>
				</navigator>
			</view>
		</view>
	</gracePage>
</template>
<script>
import gracePage from "../../graceUI/components/gracePage.vue";
import graceFlex from "../../graceUI/components/graceFlex.vue";
export default {
	data() {
		return {
			dangkouList:['川味小炒', '山西面馆', '过桥米线', '好粥道', '土家酱香饼', '煲仔饭档口']
		}
	},
	onLoad:function(){},
	methods:{},
	components:{
		gracePage, graceFlex
	}
}
</script>
<style>
</style>