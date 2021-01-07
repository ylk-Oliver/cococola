<template>
	<div class="store-main">
		<div class="store-main-top"></div>
		<div class="store-main-middle" :style="{ height: viewHeight + 'vh' }"></div>
		<div class="store-main-bottom"></div>
		<div class="rank">
			<div class="rank-header">
				<div @click="$router.go(-1)" style="width: 3rem;height: 3rem;display: flex;align-items: center;z-index: 999;">
					<img style="width:1rem;height:1rem;" src="../assets/imgs/arrow.png" alt="" />
				</div>
				<img style="margin-left: -2rem;" src="../assets/imgs/logo.jpg" alt="" />
			</div>
			<div class="rank-title">
				<img src="../assets/imgs/rank-title.png" alt="" />
			</div>
			<div class="my-rank">
				<div class="box">
					<div class="rank-one">
						<div>{{ myRank }}</div>
						<div>我的排名</div>
					</div>
					<div class="rank-two">
						<img class="rank-avator" :src="headImg" alt="" />
					</div>
					<div class="rank-three">
						<div class="three-one">{{ wxInfo.nickname }}</div>
						<div class="three-two">总用时:{{ myTime }} 总分：{{ myScore }}分</div>
					</div>
				</div>
			</div>
			<div style="min-height: 40vh;overflow: auto;">
				<div v-for="(val, index) in tableData" :key="index" ref="rankList" class="rank-list" :class="index !== 0 ? 'content' : ''">
					<div class="rank-one">
						<div v-if="index < 3" class="special">{{ index + 1 }}</div>
						<div v-else>{{ index + 1 }}</div>
					</div>
					<div class="rank-two">
						<img class="rank-avator" :src="val.avatar" alt="" />
						<img v-if="index === 0" class="crown" src="../assets/imgs/crown.png" alt="" />
					</div>
					<div class="rank-three">
						<div class="three-one">{{ val.nickname }}</div>
						<div class="three-two">总用时:{{ val.timeElapsed }} 总分：{{ val.score }}分</div>
					</div>
				</div>
			</div>

			<div class="rank-btn">
				<div @click="$router.push('/share')" class="btn">
					<div>我要分享</div>
					<img src="../assets/imgs/btnBlack22.png" alt="" />
				</div>
				<div @click="$router.push('/presell')" class="btn">
					<div>开业限定好物抢先拍</div>
					<img src="../assets/imgs/btnRed22.png" alt="" />
				</div>
			</div>
			<div class="rank-footer">去晒晒你的排名吧！</div>
			<div class="rank-footer">活动结束时，最终排名前十名的用户</div>
			<div class="rank-footer">享受【可口可乐】商店小程序「快乐畅爽大使」专属丰富奖励哦！</div>
		</div>
	</div>
</template>

<script>
import { getRank } from '@/request/cococola';
export default {
	name: 'Rank',
	data() {
		return {
			myRank: '',
			myScore: '',
			myTime: '',
			wxInfo: JSON.parse(localStorage.getItem('wxInfo')),
			tableData: [],
			viewHeight: 0,
			headImg: ''
		};
	},
	watch: {},
	computed: {},
	methods: {},
	mounted() {
		if(this.wxInfo.head_img === null){
			this.headImg = 'https://cokestore-static.coca-cola.cn/mini-programme/ui/user_init_img.png'
		}else {
			this.headImg = this.wxInfo.head_img;
		}
		getRank().then((res) => {
			this.myRank = res.rank;
			this.myScore = res.score;
			this.myTime = res.timeElapsed;
			this.tableData = res.topUsers;
		});
	},
	updated() {
		let x = this.tableData.length - 4;
		this.viewHeight = 10 * x + 100;
	}
};
</script>

<style lang="scss" scoped>
.rank-avator {
	width: 2rem;
	height: 2rem;
	object-fit: contain;
	border-radius: 50%;
}
.rank {
	.content {
		margin-top: 2vh;
	}
	position: absolute;
	top: 5vh;
	width: 96%;
	height: 90vh;
	.rank-header {
		width: 98%;
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
	.rank-title {
		width: 100%;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
	.my-rank {
		width: 100vw;
		background-image: url('src/assets/imgs/rank-my.png');
		background-size: 101%;
		background-repeat: no-repeat;
		background-position: center center;
		font-size: 0.8rem;
		margin-left: -3vw;
		.box {
			display: flex;
			justify-content: flex-start;
			height: 8vh;
			align-items: center;
			width: 94%;
			margin: 0 auto;
			.rank-one {
				width: 20%;
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #fff;
				margin-right: 3.3%;
				.special {
					width: 2rem;
					height: 2rem;
					background-image: url('src/assets/imgs/rank-icon.png');
					background-size: contain;
					background-repeat: no-repeat;
					background-position: center center;
					z-index: 99;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			.rank-two {
				width: 2rem;
				height: 2rem;
				border: 0.13rem solid #fff;
				border-radius: 50%;
				position: relative;
				margin-right: 10%;
				.crown {
					width: 1rem;
					position: absolute;
					top: -0.6rem;
					right: -0.6rem;
				}
			}
			.rank-three {
				width: 50%;
				.three-one {
					font-weight: bold;
				}
				.three-two {
					color: #fff;
				}
			}
		}
	}
	.rank-list {
		display: flex;
		justify-content: flex-start;
		height: 10vh;
		align-items: center;
		font-size: 0.8rem;
		position: relative;
		.rank-one {
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: red;
			margin-right: 3%;
			.special {
				width: 2rem;
				height: 2rem;
				background-image: url('src/assets/imgs/rank-icon.png');
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center center;
				background-position: center center;
				z-index: 99;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.rank-two {
			width: 2rem;
			height: 2rem;
			border: 0.13rem solid red;
			border-radius: 50%;
			position: relative;
			margin-right: 10%;
			.crown {
				width: 1rem;
				position: absolute;
				top: -0.6rem;
				right: -0.6rem;
			}
		}
		.rank-three {
			width: 50%;
			.three-one {
				font-weight: bold;
			}
			.three-two {
				color: red;
			}
		}
	}
	.rank-list::after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 4%;
		width: 90%;
		height: 0.1rem;
		background: red;
	}
	.rank-btn {
		display: flex;
		justify-content: center;
		.btn {
			width: 45%;
			position: relative;
			div {
				position: absolute;
				width: 100%;
				text-align: center;
				color: #fff;
				line-height: 9vh;
				font-size: 0.8rem;
				font-weight: bold;
			}
			img {
				width: 100%;
				height: 10vh;
				object-fit: contain;
			}
		}
	}
	.rank-footer {
		text-align: center;
		font-size: 0.6rem;
		font-weight: bold;
	}
}
</style>
