<template>
	<gracePage :customHeader="false">
		<!-- 页面主体 -->
		<view slot="gBody" class="grace-body">
			<view class="marginTop">
				<text class="	grace-blue" style="font-size: 20px;">食堂点餐系统-weapp</text>
			</view>
			<form @submit="loginNow" class="grace-form" style="margin-top:80rpx;">
				<view class="grace-form-item">
					<text class="grace-form-label">学号</text>
					<view class="grace-form-body">
						<input type="number" class="grace-form-input" name="yzm" placeholder="请输入学号" />
					</view>
				</view>
				<view class="grace-form-item">
					<text class="grace-form-label">密码</text>
					<view class="grace-form-body">
						<input type="number" class="grace-form-input" name="yzm" placeholder="请输入验证码" />
					</view>
				</view>
				<view class="grace-margin-top">
					<button form-type="submit" type="primary" class="grace-button grace-gtbg-green">
						登录 <text class="grace-icons icon-arrow-right"></text>
					</button>
				</view>
			</form>
			<view class="grace-text grace-black9 grace-margin-top" style="text-align:right;" @tap="navTo('/pages/login/register')">
				还没有账号？点击注册
			</view>
			<!-- 第三方登录 -->
			<view style="position:fixed; left:25rpx; bottom:100rpx; width:700rpx;">
				<view class="grace-line-title">
					<view class="line"></view>
					<view class="title">
						<text class="grace-h5 grace-black9">密码登录</text>
					</view>
					<view class="title">
						<text style="width: 68px;"></text>
						<text class="grace-h5 grace-black9">微信登录</text>
					</view>
					<view class="line"></view>
				</view>
				<view class="grace-login-three" style="margin-top:8px;">
					<view class="grace-icons icon-keyboard grace-green" @tap="navTo('/pages/login/password')"></view>
					<text style="width: 74px;"></text>
					<view class="grace-icons icon-weixin grace-blue" @tap="loginWithWx"></view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
	import gracePage from "../../graceUI/components/gracePage.vue";
	var graceChecker = require("../../graceUI/jsTools/graceChecker.js");
	export default {
		data() {
			return {
				pnpre: 0,
				pnpres: ['86', '01', '11', '26', '520'],
				vcodeBtnName: "获取验证码",
				countNum: 120,
				countDownTimer: null,
				phoneno: ''
			}
		},
		methods: {
			loginWithWx: function() {
				uni.showToast({
					title: "请完善登录功能",
					icon: "none"
				})
			},
			changePre: function(e) {
				this.pnpre = e.detail.value;
			},
			loginNow: function(e) {
				// 表单验证
				var rule = [{
						name: "pn",
						checkType: "phoneno",
						errorMsg: "请填写正确的手机号"
					},
					{
						name: "yzm",
						checkType: "string",
						checkRule: "4,6",
						errorMsg: "请正确填写短信验证码"
					},
				];
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				// 验证通过
				if (checkRes) {
					uni.showToast({
						title: "请观察控制台",
						icon: "none"
					});
					console.log(e);
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			getVCode: function() {
				var myreg = /^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;
				if (!myreg.test(this.phoneno)) {
					uni.showToast({
						title: '请正确填写手机号码',
						icon: "none"
					});
					return false;
				}
				// 手机号码为 :  this.phoneno
				// vcodeBtnName 可以阻止按钮被多次点击 多次发送 return 会终止函数继续运行
				if (this.vcodeBtnName != '获取验证码' && this.vcodeBtnName != '重新发送') {
					return;
				}
				this.vcodeBtnName = "发送中...";
				// 与后端 api 交互，发送验证码 【自己写的具体业务代码】
				// 假设发送成功，给用户提示
				uni.showToast({
					title: '短信已发送，请注意查收',
					icon: "none"
				});
				// 倒计时
				this.countNum = 120;
				this.countDownTimer = setInterval(function() {
					this.countDown();
				}.bind(this), 1000);
			},
			countDown: function() {
				if (this.countNum < 1) {
					clearInterval(this.countDownTimer);
					this.vcodeBtnName = "重新发送";
					return;
				}
				this.countNum--;
				this.vcodeBtnName = this.countNum + '秒重发';
			},
			reg: function() {
				wx.showToast({
					title: "注册页面类似登录，请自行完善 (:",
					icon: "none"
				});
			}
		},
		components: {
			gracePage
		}
	}
</script>
<style>
	.marginTop {
		margin-top: 100rpx;
	}

	.logo {
		width: 250rpx;
		height: 68rpx
	}

	.login-sendmsg-btn {
		height: 60rpx;
		width: 200rpx;
		flex-shrink: 0;
		margin-left: 30rpx;
		text-align: center;
		background-color: #3688FF;
		line-height: 60rpx;
		font-size: 26rpx;
	}

	.grace-pnper {
		width: 168rpx;
		flex-shrink: 0;
	}

	.grace-form-label {
		width: 168rpx;
	}

	.grace-form-input {
		text-align: left;
	}

	.grace-form-item {
		padding: 10rpx 0;
	}

	.grace-login-three-items {
		display: block;
		width: 88rpx;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 60rpx;
		color: #3688FF;
		text-align: center;
		margin: 10rpx;
	}


	.login-sendmsg-btn {
		border: 1px solid #3688FF !important;
		background: none !important;
		color: #3688FF !important;
		width: 100%;
		height: 32px;
		line-height: 32px;
		font-size: 12px !important;
	}

	.grace-login-three {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
	}

	.grace-login-three view {
		width: 50px;
		height: 50px;
		line-height: 50px;
		font-size: 38px;
		color: #3688FF;
		text-align: center;
		margin: 10rpx;
	}

	.marginTop50 {
		margin-top: 50px;
	}

	.marginTop30 {
		margin-top: 30px;
	}

	.grace-line-title {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}

	.grace-line-title>.line {
		width: 50rpx;
		flex: auto;
		height: 1px;
		background: #F9F9F9;
	}

	.grace-line-title>.title {
		padding: 0 80rpx;
		line-height: 80rpx;
	}
</style>
