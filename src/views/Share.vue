<template>
	<div ref="main" class="share">
		<div ref="capture" class="share-main">
			<div class="share-logo">
				<div style="width: 3rem;height: 3rem;display: flex;align-items: center;z-index: 999;" @click="goBack">
					<img ref="back" style="width:1rem;height:1rem;" src="../assets/imgs/arrow.png" alt="" />
				</div>
				<img style="margin-left:-2rem;" src="../assets/imgs/logo.jpg" alt="" />
			</div>
			<div class="share-title">
				<img src="../assets/imgs/share-title.png" alt="" />
			</div>
			<div :style="{ height: allHeight1 + 'vh' }" class="share-header">
				<img :style="{ height: allHeight + 'vh' }" class="header-main" src="../assets/imgs/activityState.png" alt="" />
				<img ref="avator" class="share-img" id="avator" src="" alt="" />
				<div id="score" class="my-score">
					<div class="box">
						<img class="score-img1" src="../assets/imgs/twostars.png" alt="" />
						<div class="score">
							<div class="word">我的得分是</div>
							<div class="text">
								<span style="font-family: 'HYDaSongJ';font-size:3rem;font-weight:bold;">{{ score }}</span>
								<span style="font-size:1.6rem;">分</span>
							</div>
						</div>
						<img class="score-img2" src="../assets/imgs/twostar.png" alt="" />
					</div>
					<div class="rank-haihang">
						<div class="rank-time">总用时：{{ time }}</div>
						<div class="rank-box">
							<div class="name1">全国排名第{{ rankValue }}名</div>
							<img src="../assets/imgs/rank-bottle.png" alt="" />
						</div>
					</div>
				</div>

				<div id="scan" :style="{ top: scanViewHeight + 'vh' }" ref="scan" class="share-scan">
					<div id="qrcode">
						<img :src="qrcodeData" alt="" />
					</div>
					<img style="margin-left:1rem;" src="../assets/imgs/share-word.png" alt="" />
				</div>
				<img id="hand" ref="hand" class="share-save" src="../assets/imgs/share-save.png" alt="" />
			</div>
		</div>
		<div v-if="image" class="poster-image1">
			<img :src="image" />
		</div>
		<div @click="$router.push('/presell')" class="share-footer">
			<div class="bg2">开业限定好物抢先拍</div>
		</div>
	</div>
</template>

<script>
import html2canvas from 'html2canvas';
import { getMyRank } from '@/request/cococola';
import QRCode from 'qrcodejs2'; // 引入qrcode
export default {
	name: 'Share',
	data() {
		return {
			rankValue: '',
			score: '',
			time: '',
			image: null,
			avatorViewHight: 0,
			scoreViewHeight: 0,
			scanViewHeight: 0,
			handViewHeight: 0,
			allHeight: 0,
			allHeight1: 0,
			qrcodeData: localStorage.getItem('qrcode1')
		};
	},
	watch: {},
	computed: {},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		generatorImage() {
			this.$refs.hand.hidden = true;
			this.$refs.back.hidden = true;
			html2canvas(this.$refs.capture, {
				backgroundColor: null
			}).then((canvas) => {
				this.image = canvas.toDataURL('image/png', 1.0);
				this.$refs.hand.hidden = false;
				this.$refs.back.hidden = false;
			});
		},
		toBase64(url, callback, outputFormat) {
			//图片地址，回调，输出格式
			var canvas, ctx;
			canvas = document.createElement('canvas');
			ctx = canvas.getContext('2d');
			let img = new Image();
			img.crossOrigin = 'Anonymous';
			img.src = url;
			img.onload = function() {
				canvas.height = img.height;
				canvas.width = img.width;
				ctx.drawImage(img, 0, 0);
				var dataURL = canvas.toDataURL(outputFormat || 'image/jpeg');
				callback.call(this, dataURL);
				canvas = null;
			};
		}
	},
	mounted() {
		let avator = '';
		if (JSON.parse(localStorage.getItem('wxInfo')).head_img === null) {
			avator = 'https://cokestore-static.coca-cola.cn/mini-programme/ui/user_init_img.png';
		} else {
			avator = JSON.parse(localStorage.getItem('wxInfo')).head_img;
		}
		this.toBase64(avator, function(base64Img) {
			document.getElementById('avator').setAttribute('src', base64Img);
		});
		this.$nextTick(() => {
			this.scanViewHeight = (document.getElementById('score').clientHeight / document.body.clientHeight) * 100 + 26 + 3; // 分数的top值
			this.handViewHeight = (document.getElementById('scan').clientHeight / document.body.clientHeight) * 100 + this.scanViewHeight + 4;
			this.allHeight = this.handViewHeight + 8;
			this.allHeight1 = this.allHeight - 1;
		});
		getMyRank().then((res) => {
			this.rankValue = res.rank;
			this.score = res.score;
			this.time = res.timeElapsed;
		});
	},
	updated() {
		this.generatorImage();
		this.$refs.hand.hidden = true;
	}
};
</script>

<style lang="scss">
@font-face {
	font-family: 'fashion';
	src: url('static/TCCC-UnityHeadline-Black.ttf');
	font-weight: bold;
	font-style: normal;
}
.name1 {
	font-family: 'fashion';
}
.text {
	font-family: 'HYDaSongJ';
	text-align: center;
}
#qrcode {
	width: 4rem;
	height: 4rem;
	background-image: url('src/assets/imgs/share-wangge.png');
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	object-fit: contain;
	display: inline-block;
	img {
		width: 3.6rem !important;
		height: 3.6rem !important;
		background-color: #fff !important; //设置白色背景色
		padding: 0.2rem !important; // 利用padding的特性，挤出白边
	}
}
.black {
	background: #000 !important;
}
.poster-image1 {
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	opacity: 0;
}

.poster-image1 img {
	width: 100%;
	min-height: 82vh;
	-webkit-touch-callout: none;
}
.share {
	width: 96%;
	height: 93vh;
	padding-top: 3vh;
	padding-bottom: 4vh;
	padding-left: 2%;
	padding-right: 2%;
	background-image: url('src/assets/imgs/wangge.png');
	background-repeat: repeat;
	background-position: center center;
	background-size: contain;
	position: relative;
	.share-main {
		width: 100%;
		margin: 0 auto;
		background: #fff;
		padding-top: 1vh;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		.share-logo {
			width: 98%;
			margin: 0 auto;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img {
				width: 3rem;
				height: 3rem;
			}
		}
		.share-title {
			width: 100%;
			margin: 0 auto;
			img {
				width: 100%;
			}
		}
		.share-header {
			margin-top: -4vh;
			position: relative;
			margin-left: -1%;
			margin-right: -1%;
			.header-main {
				width: 100%;
				height: 60vh;
			}
			.share-img {
				position: absolute;
				width: 24vw;
				left: 36vw;
				object-fit: contain;
				top: 4vh;
				border-radius: 50%;
				border: 0.13rem solid #fff;
			}
			.my-score {
				width: 50%;
				position: absolute;
				top: 20vh;
				left: 25%;
				display: flex;
				flex-direction: column;
				.box {
					display: flex;
					justify-content: space-around;
					align-items: center;
					img {
						width: 2rem;
					}
					.score {
						color: #fff;
					}
				}
				.rank-haihang {
					width: 100%;
					position: relative;
					.rank-time {
						font-size: 0.8rem;
						position: absolute;
						width: 100%;
						text-align: center;
						top: 0.3rem;
						color: #fff;
					}
					.rank-box {
						position: relative;
						width: 100%;
						div {
							position: absolute;
							left: 0;
							bottom: 1.24rem;
							width: 100%;
							color: red;
							text-align: center;
							font-size: 0.9rem;
						}
						img {
							width: 100%;
						}
					}
				}
			}

			.share-scan {
				width: 100%;
				position: absolute;
				top: 43vh;
				display: flex;
				justify-content: center;
				img {
					height: 4rem;
				}
			}
			.share-save {
				position: absolute;
				bottom: -1vh;
				width: 70%;
				left: 15%;
			}
		}
	}
	.share-footer {
		margin-top: 2vh;
		.bg2 {
			height: 9vh;
			color: #fff;
			line-height: 8vh;
			text-align: center;
			background-image: url('src/assets/imgs/btnRed.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
			font-size: 1.5rem;
			font-weight: bold;
		}
	}
}
</style>
