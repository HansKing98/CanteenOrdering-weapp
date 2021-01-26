<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	@import "./graceUI/graceUI.css";
	@import "./graceUI/graceIcons.css";
	/* #endif */
	* {
	  font-family: Helvetica, Arial, "microsoft yahei", "PingFang";
	}
	/* 宽屏适配 */
	uni-page-wrapper{
		overflow: hidden auto;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	/* 可滚动但不显示滚动条 */
	::-webkit-scrollbar {  
	width: 0 !important;  
	}  
	::-webkit-scrollbar {  
	width: 0 !important;height: 0;  
	} 
</style>
