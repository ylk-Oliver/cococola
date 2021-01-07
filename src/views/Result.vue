<template>
	<div class="store-main">
		<div class="store-main-top"></div>
		<div class="store-main-middle"></div>
		<div class="store-main-bottom"></div>
		<div class="result">
			<div class="result-header">
				<img src="../assets/imgs/logo.jpg" alt="" />
			</div>
			<div class="result-score">
				<span>答题完成！</span>
				<div class="question-xing">
					<img src="../assets/imgs/onestarminmin.jpg" alt="" />
					<div style="color:red;font-weight:bold;font-family: HYDaHeiJ;">你的最终得分是</div>
					<img src="../assets/imgs/onestarminmin.jpg" alt="" />
				</div>
				<div class="question-xing">
					<img src="../assets/imgs/onestarminmin.jpg" style="width: 1.2rem;" alt="" />
					<div
						style="color:red;font-weight:bold;font-size:2.5rem;line-height:2rem;font-family: HYDaHeiJ;display:flex;align-items: flex-end;"
					>
						{{ score }}
						<div style="color:red;font-weight:bold;font-size:1.5rem;line-height:1.5rem;font-family: HYDaHeiJ;">分</div>
					</div>
					<img src="../assets/imgs/onestarminmin.jpg" style="width: 1.2rem;" alt="" />
				</div>
				<div class="result-rank">
					<div class="result-bottle">
						<div class="box">
							<img src="../assets/imgs/bottle-header.png" alt="" />
							<div class="rank">全国排名第{{ rankValue }}名</div>
						</div>
					</div>
					<div style="text-align:center;color:red;font-weight:bold;height: 3rem;line-height: 2rem;">总用时：{{ time }}</div>
				</div>
			</div>
			<img class="quan-class" @click="getQuan()" :src="quanList[couponType - 1]" alt="" />
			<div class="rank-text">
				<div>恭喜你获得【可口可乐】商店小程序{{ coupon }}元优惠券</div>
				<div>12月22日，一起期待【可口可乐】商店小程序开业吧！</div>
			</div>
			<div class="index-btn">
				<div @click="$router.push('/rank')" class="bg1">我的排名</div>
				<div @click="$router.push('/presell')" class="bg2">开业限定好物抢先拍</div>
			</div>
		</div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
import { getMyRank } from '@/request/cococola';
import { getQuan } from '@/request/service';
import quan5 from '@/assets/imgs/quan5.png';
import quan10 from '@/assets/imgs/quan10.png';
import quan15 from '@/assets/imgs/quan15.png';
export default {
	name: 'Result',
	data() {
		return {
			rankValue: 0,
			score: 0,
			time: 0,
			quanList: [quan5, quan10, quan15],
			couponType: 0,
			coupon: 0
		};
	},
	watch: {},
	computed: {},
	methods: {
		getQuan() {
			// pages/my/coupons
			wx.miniProgram.navigateTo({
				url: `/pages/my/coupons`
			});
		},
		fract(num) {
			return num - Math.trunc(num);
		}
	},
	created() {
		getMyRank().then((res) => {
			this.rankValue = res.rank;
			this.score = res.score;
			this.time = res.timeElapsed;
			this.coupon = res.couponType;
			this.couponType = res.couponType / 5;
			const params = {
				code_type: res.couponType / 5
			};
			getQuan(params);
		});
	}
};
</script>

<style lang="scss" scoped>
.result {
	position: absolute;
	top: 5vh;
	width: 96%;
	height: 90vh;
	.result-header {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 2vh;
		img {
			width: 3rem;
			height: 3rem;
		}
	}
	.result-score {
		span {
			display: block;
			text-align: center;
			font-weight: bold;
			font-size: 1.2rem;
			margin-left: 1.2rem;
		}
		.question-xing {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.result-rank {
			height: 5rem;
			position: relative;
			.result-bottle {
				position: absolute;
				width: 100%;
				.box {
					width: 100%;
					position: relative;
					img {
						width: 60%;
						display: block;
						margin: 0 auto;
					}
					.rank {
						text-align: center;
						margin-top: -2.1rem;
						color: #fff;
					}
				}
			}
		}
	}
	.quan-class {
		width: 80%;
		display: block;
		margin: 0 auto;
		margin-top: 1rem;
	}
	.rank-text {
		width: 96%;
		margin: 0 auto;
		margin-top: 1rem;
		div {
			text-align: center;
			font-size: 0.6rem;
			line-height: 1.2rem;
			font-weight: bold;
		}
	}
	.index-btn {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 1vh;
		.bg1 {
			height: 8vh;
			color: #fff;
			line-height: 7.5vh;
			text-align: center;
			background-image: url('src/assets/imgs/btnBrack.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
			font-size: 1.2rem;
			font-weight: bold;
		}
		.bg2 {
			margin-top: 1vh;
			height: 8vh;
			color: #fff;
			line-height: 7.5vh;
			text-align: center;
			background-image: url('src/assets/imgs/btnRed.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
}
</style>
