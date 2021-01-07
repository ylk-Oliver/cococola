<template>
	<div>
		<div class="user-main">
			<div class="user-header">
				<div class="user-logo">
					<img src="../assets/imgs/logo3.png" alt="" />
				</div>
			</div>
			<div class="user-title">
				<img src="../assets/imgs/end6.png" alt="" />
			</div>
			<div class="user-animation">
				<img src="../assets/imgs/end8.png" alt="" />
			</div>
			<div class="user-bottle">
				<img src="../assets/imgs/end7.png" alt="" />
			</div>
			<div class="user-button">
				<div @click="skipIndex()" class="bg2"></div>
			</div>
		</div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
export default {
	name: 'UserEnd',
	data() {
		return {};
	},
	watch: {},
	computed: {},
	methods: {
		// 首页pages/index/index
		skipIndex() {
			wx.miniProgram.navigateTo({
				url: `/pages/index/index`
			});
		}
	},
	mounted() {},
	created() {}
};
</script>

<style lang="scss" scoped>
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
			width: 44%;
			margin: 0 auto;
			text-align: center;
			background: red;
			border-radius: 0.3rem;
			color: #fff;
			font-size: 1.2rem;
			font-weight: bold;
			top: 14vh;
			left: 28%;
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
						width: 70%;
						margin: 0 auto;
						img {
							width: 100%;
						}
					}
					.bg3 {
						margin-top: 1rem;
						width: 70%;
						margin: 0 auto;
						img {
							width: 100%;
						}
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
.user-main {
	.user-header {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.user-logo {
			width: 3rem;
			height: 3rem;
			img {
				width: 100%;
			}
		}
		.user-logo-word {
			height: 3rem;
			line-height: 3rem;
			font-size: 0.8rem;
			font-weight: bold;
			text-decoration: underline;
		}
	}
	.user-title {
		margin-top: 1vh;
		img {
			display: block;
			height: 13vh;
			margin: 0 auto;
			object-fit: contain;
		}
	}
	.user-animation {
		margin-top: 1vh;
		img {
			display: block;
			height: 45vh;
			object-fit: contain;
			margin: 0 auto;
		}
	}
	.user-bottle {
		margin-top: 1vh;
		img {
			display: block;
			height: 8vh;
			margin: 0 auto;
			object-fit: contain;
		}
	}
	.user-button {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 1vh;
		.bg2 {
			margin-top: 1vh;
			height: 8vh;
			color: red;
			line-height: 7.5vh;
			text-align: center;
			background-image: url('src/assets/imgs/end5.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
}
</style>
