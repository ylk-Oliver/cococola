<template>
	<div>
		<div class="store-main">
			<div class="store-main-top"></div>
			<div class="store-main-middle"></div>
			<div class="store-main-bottom"></div>
			<div class="index-main">
				<div class="index-header">
					<img src="../assets/imgs/logo.jpg" alt="" />
				</div>
				<div class="index-title">
					<img src="../assets/imgs/end2.png" alt="" />
				</div>
				<div class="index-bottle">
					<img src="../assets/imgs/end4.png" alt="" />
				</div>
				<div class="end-store">
					<img src="../assets/imgs/end3.png" alt="" />
				</div>
				<div class="index-btn">
					<div class="bg2" @click="skipIndex()">前往【可口可乐】商店小程序</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
export default {
	name: 'StoreEnd',
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
	created() {}
};
</script>

<style lang="scss" scoped>
.index-state {
	width: 100%;
	height: 100vh;
	.index-activity-box {
		.index-close {
			width: 96%;
			height: 6vh;
			align-items: center;
			margin: 0 auto;
			display: flex;
			justify-content: flex-end;
			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
		.index-activity-main {
			width: 96%;
			margin: 0 auto;
			height: 90vh;
			position: relative;
			.store-img1 {
				position: absolute;
				width: 32vw;
				left: 32vw;
				top: 3vh;
			}
			.store-img2 {
				width: 96%;
				height: 88vh;
				margin: 0 auto;
				display: block;
			}
			.store-word {
				position: absolute;
				font-size: 0.8rem;
				color: #fff;
				z-index: 12;
				height: 60vh;
				line-height: 1.2rem;
				overflow: auto;
				top: 19vh;
				width: 80vw;
				left: 10vw;
				.huanhang {
					height: 1vh;
				}
			}
		}
	}
}
.index-main {
	position: absolute;
	top: 5vh;
	width: 96%;
	height: 90vh;
	.index-header {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 2vh;
		img {
			width: 3rem;
			height: 3rem;
		}
		span {
			height: 2rem;
			line-height: 2rem;
			z-index: 14;
			text-decoration: underline;
			font-size: 0.8rem;
			font-weight: bold;
		}
	}
	.index-title {
		width: 76%;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
	.index-bottle {
		img {
			height: 36vh;
			object-fit: contain;
			display: block;
			margin: 0 auto;
		}
	}
	.end-store {
		width: 58%;
		margin: 0 auto;
		margin-top: 1vh;
		img {
			width: 100%;
		}
	}
	.index-btn {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 1vh;
		.bg2 {
			margin-top: 1vh;
			height: 8vh;
			color: #fff;
			line-height: 7.5vh;
			text-align: center;
			background-image: url('src/assets/imgs/btnRed.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 90%;
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
}
</style>
