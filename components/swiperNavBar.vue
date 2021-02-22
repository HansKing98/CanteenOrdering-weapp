<template>
	<!--组件-->
	<scroll-view scroll-x='false' scroll-with-animation 
		:scroll-into-view=" 'tab-' + scrollIntoView"
		:style="{ height:currentSwiperHeight + 'rpx' }">
		<view class="swiperTab" v-for="(item,index) in swiperTabList" :key='index' 
			:style="{ width:currentSwiperWidth,lineHeight:currentSwiperHeight + 'rpx' }" 
			:id=" 'tab-' + index " @tap="CurrentTab(index,item)">
			
			<!--导航标题-->
			<text :style="{ color:swiperTabIdx == index ? swiperCurrentColor:swiperColor, fontSize:swiperCurrentSize }">
				{{ item }}
			</text>
			<!--导航标题-->
			
			<!--线条-->
			<view class="swiperLine" v-show="currentSwiperLineShow">
				<view class="swiperLineActive" 
					:class="[ swiperTabIdx == index && currentSwiperLineAnimatie ?'currentLine':'' ]"
					:style="{ 
						width:currentSwiperLineActiveWidth,
						height:currentSwiperLineActiveHeight,
						background:currentSwiperLineActiveBg
					}" v-if=" swiperTabIdx == index ">
				</view>
			</view>
			<!--线条-->
			
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		onLoad() { },
		props:{
			scrollIntoView:{ type:Number },//设置哪个方向可滚动，则在哪个方向滚动到该元素
			swiperTabList:{ type:Array },//导航列表
			swiperTabIdx:{ type:Number },//导航对应列表下标
			swiperCurrentSize:{ type:String },//导航的字体大小
			swiperColor:{ type:String },//导航栏字体未选中前颜色
			swiperCurrentColor:{ type:String },//选中当前导航栏字体颜色
			currentSwiperWidth:{ type:String },//当前导航的宽度 % upx rpx px
			currentSwiperHeight:{ type:Number },//当前导航的高度度 rpx px
			currentSwiperLineShow:{ type:Boolean },//是否显示线条
			currentSwiperLineActiveWidth:{ type:String },//当前选中的导航栏线条的宽度
			currentSwiperLineActiveHeight:{ type:String },//当前选中的导航栏线条的高度度
			currentSwiperLineActiveBg:{ type:String },//当前选中的导航栏线条颜色
			currentSwiperLineAnimatie:{ type:Number },//当前选中的导航栏线条过渡效果
		},
		methods:{
			
			CurrentTab:function (index,item){
				this.$emit('change',index,item);
			},
			
		}
	}
</script>

<style>
	.swiperHead scroll-view{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		white-space: nowrap;
	}
	.swiperTab{
		display: inline-flex;
		flex-direction: column;
		text-align: center;
		position: relative;
	}
	.swiperLine{ position: absolute;bottom: 10upx;left: 0;width: 100%;z-index: 10; }
	.swiperLineActive{ margin: 0 auto;border-radius: 30upx; }
	@keyframes currentLine{ 
		0%{
			transform: scale(0.5);
		} 
		100%{
			transform: scale(1);
		}
	}
	.currentLine{ animation:currentLine 300ms forwards; }
</style>
