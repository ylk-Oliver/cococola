<template>
	<div class="user-index" :class="{ shade: showState }">
		<div class="user-state" v-if="showState">
			<div class="user-state-main">
				<img class="main-bg" src="../assets/imgs/state-bg.png" alt="" />
				<div class="state">"解锁开业福利"活动攻略</div>
				<div class="store-activity-main">
					<div class="content">
						<div class="store-word">
							<p>1.点击“邀请好友”，则自动生成分享海报，您可将生成的分享海报分享给微信好友，邀请好友扫码海报中二维码参与活动；</p>
							<p>
								2.当您邀请的好友扫码进入【可口可乐】商店小程序并注册为新会员时，则该好友视为用户“邀请成功”的好友，此时您与该好友将各获得一张【可口可乐】商店小程序优惠券；
							</p>
							<p>
								3.您可邀请多位好友，当邀请的好友满足上述“邀请成功”情况时，您才可再次获得【可口可乐】商店小程序优惠券奖励，获得的【可口可乐】商店小程序优惠券数量与“邀请成功”的好友数量相同，上不封顶。
							</p>
						</div>
					</div>
				</div>
			</div>
			<div @click="stateFn" class="sp">
				<img class="close" src="../assets/imgs/close.png" alt="" />
			</div>
		</div>
		<div class="user-main" v-else>
			<div class="user-header">
				<div class="user-logo" style="display:flex;align-items: center;">
					<div style="width: 3rem;height: 3rem;display: flex;align-items: center;z-index: 999;" @click="$router.push('/finish')">
						<img style="width:1rem;height:1rem;" src="../assets/imgs/arrow.png" alt="" />
					</div>
					<img src="../assets/imgs/logo3.png" alt="" />
				</div>
				<div @click="showState = true" class="user-logo-word">活动攻略</div>
			</div>
			<div class="invite-main">
				<div class="invite-header">
					<img src="../assets/imgs/invite-header.png" alt="" />
					<div class="invite-word">已成功邀请{{ tableData.length }}人</div>
				</div>
				<div class="invite-content">
					<div class="invite-two" v-if="hasInvited">
						<div class="two-title">成功邀请的好友越多，收获的惊喜福利就越多哦！</div>
						<div class="invite-table">
							<div v-for="(val, index) in tableData" :key="index" class="box">
								<div class="circle">
									<img class="invite-img" :src="val.avatar" alt="" />
								</div>
								<div style="font-size:0.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ val.nickname }}</div>
							</div>
						</div>
					</div>
					<div class="invite-one" v-else>
						<div style="text-align: center; line-height: 1.2rem">
							<div style="color: red; font-weight: bold">成功邀请的好友越多</div>
							<div style="color: red; font-weight: bold">收获的惊喜福利就越多哦！</div>
							<div style="font-size: 0.8rem">暂未成功邀请好友</div>
						</div>
					</div>
					<img v-if="!hasInvited" class="img1" src="../assets/imgs/invite-star.png" alt="" />
					<img v-if="!hasInvited" class="img2" src="../assets/imgs/invite-star.png" alt="" />
					<img v-if="!hasInvited" class="img3" src="../assets/imgs/invite-star.png" alt="" />
					<img v-if="!hasInvited" class="img4" src="../assets/imgs/invite-star.png" alt="" />
				</div>
			</div>
			<div class="invite-btn">
				<div @click="$router.push('/inviteshare')" class="bg1">
					<img src="../assets/imgs/invite-btn.png" alt="" />
				</div>

				<div @click="skipIndex()" class="bg2">
					<img src="../assets/imgs/invite-red.png" alt="" />
				</div>
			</div>
			<div @click="goMyQuan()" class="my-quan">我的优惠券</div>
		</div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
import { init, yaoQing, state } from '@/request/cococola';
export default {
	name: 'Invite',
	data() {
		return {
			showState: false,
			hasInvited: false,
			tableData: []
		};
	},
	watch: {},
	computed: {},
	methods: {
		stateFn() {
			this.showState = false;
			const params = {
				inviteState: false
			};
			state(params).then(() => {});
		},
		goMyQuan() {
			// pages/my/coupons
			wx.miniProgram.navigateTo({
				url: `/pages/my/coupons`
			});
		},
		// 首页pages/index/index
		skipIndex() {
			wx.miniProgram.navigateTo({
				url: `/pages/index/index`
			});
		}
	},
	mounted() {
		const params = {
			openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
			nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
			avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
			phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
			trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
			code: JSON.parse(localStorage.getItem('code')) // test
		};
		init(params).then((res) => {
			this.showState = res.dialogStatus.inviteState;
		});
		yaoQing().then((res) => {
			this.tableData = res;
			this.hasInvited = res.length > 0;
		});
	}
};
</script>

<style lang="scss" scoped>
.sp {
	width: 100%;
	height: 10vh;
}
.user-state {
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	.user-state-main {
		width: 100%;
		margin: 0 auto;
		position: relative;
		.main-bg {
			display: block;
			width: 92%;
			margin: 0 auto;
			height: 90vh;
		}
		.state {
			position: absolute;
			height: 2.5rem;
			line-height: 2.5rem;
			width: 64%;
			margin: 0 auto;
			text-align: center;
			background: red;
			border-radius: 0.3rem;
			color: #fff;
			font-size: 1.2rem;
			font-weight: bold;
			top: 14vh;
			left: 18%;
		}
		.imgLogo {
			display: flex;
			justify-content: flex-start;
			position: absolute;
			top: 13vh;
			left: 12%;
			img {
				width: 3rem;
				height: 3rem;
			}
		}
		.imgYou {
			position: absolute;
			top: 16vh;
			object-fit: contain;
			width: 98%;
		}
		.imgUserBox {
			width: 100%;
			height: auto;
			position: absolute;
			top: 14rem;
			.imgContent {
				width: 100%;
				position: relative;
				.imgState {
					font-size: 0.8rem;
					font-weight: bold;
					position: absolute;
					top: 0;
					width: 80%;
					left: 10%;
					text-align: center;
				}
				.imgQuan {
					width: 70%;
					height: auto;
					position: absolute;
					top: 4vh;
					left: 15%;
				}
				.bgBox {
					position: absolute;
					top: 20vh;
					width: 100%;
					.bg1 {
						color: #fff;
						line-height: 9.5vh;
						text-align: center;
						background-image: url('src/assets/imgs/btn.jpg');
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 80%;
						width: 80%;
						height: 10vh;
						margin: 0 auto;
						font-size: 1.2rem;
						font-weight: bold;
					}
					.bg3 {
						margin-top: 1rem;
						color: #fff;
						line-height: 9.5vh;
						text-align: center;
						background-image: url('src/assets/imgs/btnRed2.png');
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 80%;
						width: 80%;
						height: 10vh;
						margin: 0 auto;
						font-size: 1.2rem;
						font-weight: bold;
					}
				}
			}
		}
		.store-activity-main {
			position: absolute;
			top: 20vh;
			width: 80%;
			left: 10%;
			.content {
				width: 100%;
				margin: 0 auto;
				position: relative;
			}
			.store-word {
				position: absolute;
				font-size: 0.8rem;
				color: #000;
				z-index: 12;
				height: 54vh;
				line-height: 1.2rem;
				overflow: auto;
				top: 1rem;
				font-weight: bold;
				.huanhang {
					height: 2rem;
				}
			}
		}
	}
	.close {
		height: 4vh;
		object-fit: contain;
		position: absolute;
		bottom: 4vh;
		left: 46vw;
	}
}
.user-header {
	width: 94%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.user-logo {
		width: 3rem;
		height: 3rem;
		img {
			width: 100%;
		}
	}
	.user-logo-word {
		text-decoration: underline;
		font-weight: bold;
	}
}
.invite-main {
	margin-top: 1rem;
	width: 90%;
	height: 55vh;
	margin-left: 5%;
	background-image: url('src/assets/imgs/invite-main.png');
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	.invite-header {
		width: 100%;
		margin: 0 auto;
		position: relative;
		img {
			position: absolute;
			width: 70%;
			left: 15%;
			top: -1rem;
			height: 4rem;
		}
		.invite-word {
			color: #fff;
			font-size: 1.5rem;
			font-weight: bold;
			position: absolute;
			width: 80%;
			left: 10%;
			text-align: center;
		}
	}
	.invite-content {
		width: 80%;
		margin: 0 auto;
		margin-top: 2rem;
		position: relative;
		.invite-one {
			padding-top: 8rem;
		}
		.img1 {
			width: 1.2rem;
			position: absolute;
			top: 7.5rem;
			left: 1.5rem;
		}
		.img2 {
			position: absolute;
			width: 2rem;
			top: 6rem;
			right: 2rem;
		}
		.img3 {
			position: absolute;
			width: 1rem;
			top: 8.4rem;
			right: 1.5rem;
		}
		.img4 {
			position: absolute;
			width: 1rem;
			bottom: -5rem;
			right: 2rem;
		}
		.invite-two {
			padding-top: 5rem;
			.two-title {
				font-size: 1rem;
				transform: scale(0.7);
				text-align: center;
				margin-top: -2rem;
			}
			.invite-table {
				display: flex;
				flex-wrap: wrap;
				max-height: 30vh;
				overflow: auto;
				margin-left: 5vw;
				.box {
					margin-top: 1rem;
					margin-right: 0.2rem;
					width: 40%;
					height: 2rem;
					display: flex;
					align-items: center;
					.circle {
						width: 2rem;
						height: 2rem;
						background: #000;
						margin-right: 0.3rem;
						.invite-img {
							width: 2rem;
							height: 2rem;
						}
					}
				}
			}
			.invite-roll {
				width: 100%;
			}
		}
	}
	.inivte-bottom {
		text-align: center;
		margin-top: 4rem;
		font-size: 1.3rem;
		color: #eeeeee;
	}
}
.invite-btn {
	display: flex;
	flex-direction: column;
	margin-top: 2vh;
	.bg1 {
		width: 80%;
		margin: 0 auto;
		img {
			width: 100%;
			object-fit: contain;
		}
	}
	.bg2 {
		width: 80%;
		margin: 0 auto;
		margin-top: 1vh;
		img {
			width: 100%;
			object-fit: contain;
		}
		margin-top: 1vh;
	}
}
.my-quan {
	text-align: center;
	color: #fff;
	font-size: 0.8rem;
	margin-top: 1rem;
	text-decoration: underline;
}
</style>
