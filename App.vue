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

<style lang="scss">
	@import "uview-ui/index.scss";

	/* #ifndef APP-PLUS-NVUE */
	@import "./graceUI/graceUI.css";
	@import "./graceUI/graceIcons.css";
	@import './components/hm-goods-card/index.response.css';
	/* #endif */
	* {
		font-family: Helvetica, Arial, "microsoft yahei", "PingFang";
	}
	.rate-box{
		display: flex;
		align-items: center;
		line-height: 70upx;
	}
	/* 宽屏适配 */
	@media (min-width: 768px) {
		uni-page-wrapper {
			display: block;
			height: 100%;
			position: relative;
			/* overflow: hidden auto; */
			overflow-y: scroll;
			/* overflow-x: auto; */
		}

		/* 可滚动但不显示滚动条 */
		::-webkit-scrollbar {
			width: 0 !important;
		}

		::-webkit-scrollbar {
			width: 0 !important;
			height: 0;
		}
	}
</style>
