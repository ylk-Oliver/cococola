<template>
	<div style="position: relative;">
		<div ref="capture" class="user-main">
			<div class="finish-header">
				<img src="../assets/imgs/jiancai-wancheng.png" alt="" />
			</div>
			<div class="title">第{{ witnessCount }}位见证者</div>
			<div class="finish-main">
				<img class="bg-main" src="../assets/imgs/finish-main.png" alt="" />
				<div class="main-top">
					<img :src="headList[avatarIndex].src" alt="" />
				</div>
				<div class="main-middle">
					<img id="bottle2" src="../assets/imgs/finish-header.png" alt="" />
					<div class="main-nickname" :style="{ height: nickNameView + 'vh', lineHeight: nickNameView + 'vh' }">
						<div class="box">
							<img src="../assets/imgs/jiancai-word.png" alt="" />
							<div class="name" :style="{ height: nickNameView + 'vh' }">{{ truncate(nickname) }}</div>
						</div>
					</div>
				</div>
				<div class="main-bottom">
					<div class="scan">
						<img src="../assets/imgs/finish-scan.png" alt="" />
					</div>
					<div id="qrcode2">
						<img style="margin-left:-1rem;" :src="qrcodeData" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div v-if="image" class="poster-image">
			<img :src="image" />
		</div>
		<div class="changan">长按保存分享好友后一同见证</div>
		<div @click="$router.push('/invite')" class="close">
			<img src="../assets/imgs/close.png" alt="" />
		</div>
	</div>
</template>

<script>
import html2canvas from 'html2canvas';
import { init } from '@/request/cococola';
import head1 from '@/assets/imgs/head1.png';
import head2 from '@/assets/imgs/head2.png';
import head3 from '@/assets/imgs/head3.png';
import head4 from '@/assets/imgs/head4.png';
import head5 from '@/assets/imgs/head5.png';
import head6 from '@/assets/imgs/head6.png';
import QRCode from 'qrcodejs2'; // 引入qrcode
export default {
	name: 'InviteShare',
	data() {
		return {
			code: JSON.parse(localStorage.getItem('code')),
			nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
			openid: JSON.parse(localStorage.getItem('wxInfo')).openid,
			witnessCount: 0,
			avatarIndex: 0,
			nickNameView: 0,
			image: null,
			qrcodeData: localStorage.getItem('qrcode2'),
			headList: [
				{
					id: 0,
					src: head1
				},
				{
					id: 1,
					src: head2
				},
				{
					id: 2,
					src: head3
				},
				{
					id: 3,
					src: head4
				},
				{
					id: 4,
					src: head5
				},
				{
					id: 5,
					src: head6
				}
			]
		};
	},
	watch: {},
	computed: {},
	methods: {
		truncate(input) {
			return this.cutstr(input,6);
		},
		cutstr(str, len) {
			var str_length = 0;
			var str_len = 0;
			var str_cut = new String();
			str_len = str.length;
			for (var i = 0; i < str_len; i++) {
				let a = str.charAt(i);
				str_length++;
				if (escape(a).length > 4) {
					//中文字符的长度经编码之后大于4
					str_length++;
				}
				str_cut = str_cut.concat(a);
				if (str_length >= len) {
					str_cut = str_cut.concat('...');
					return str_cut;
				}
			}
			//如果给定字符串小于指定长度，则返回源字符串；
			if (str_length < len) {
				return str;
			}
		},
		generatorImage() {
			html2canvas(this.$refs.capture, {
				backgroundColor: null
			}).then((canvas) => {
				this.image = canvas.toDataURL('image/png', 1.0);
			});
		}
	},
	mounted() {
		document.body.style.backgroundColor = '#000';
		const params = {
			openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
			nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
			avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
			phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
			trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
			code: JSON.parse(localStorage.getItem('code')) // test
		};
		init(params).then((res) => {
			this.witnessCount = res.witnessCount;
			this.avatarIndex = res.avatarIndex;
		});
		this.generatorImage();
		this.nickNameView = (document.getElementById('bottle2').clientHeight / document.body.clientHeight) * 100 - 1;
	},
	updated() {
		this.generatorImage();
		this.nickNameView = (document.getElementById('bottle2').clientHeight / document.body.clientHeight) * 100 - 1;
	},
	destroyed() {
		document.body.style.backgroundColor = '#fff';
	}
};
</script>

<style lang="scss" scoped>
@font-face {
	font-family: 'fashion';
	src: url('static/TCCC-UnityHeadline-Black.ttf');
	font-weight: bold;
	font-style: normal;
}
.name {
	font-family: 'fashion';
	margin-left: 0.2rem;
}
#qrcode2 {
	img {
		width: 4rem;
		height: 4rem;
		object-fit: contain;
		background-color: #fff; //设置白色背景色
	}
}
.poster-image {
	position: absolute;
	width: 100%;
	height: 88vh;
	top: 0;
	left: 0;
	opacity: 0;
}

.poster-image img {
	width: 100%;
	min-height: 88vh;
	-webkit-touch-callout: none;
}
.close {
	width: 100%;
	margin: 0 auto;
	img {
		width: 2rem;
		height: 2rem;
		margin: 0 auto;
		display: block;
	}
}
.changan {
	color: #fff;
	height: 5vh;
	line-height: 5vh;
	width: 100%;
	text-align: center;
}
.finish-header {
	width: 100%;
	img {
		width: 100%;
	}
}
.question-animation {
	width: 100%;
	height: 100vh;
}
#music {
	width: 0;
}
.user-main {
	margin-top: 6vh;
	padding-top: 6vh;
	height: 76vh;
	.title {
		line-height: 2rem;
		text-align: center;
		color: #fff;
	}
	.finish-main {
		position: relative;
		.bg-main {
			height: 55vh;
			object-fit: contain;
			width: 100%;
		}
		.main-top {
			width: 44%;
			position: absolute;
			top: 5vh;
			left: 25%;
			img {
				width: 100%;
				object-fit: contain;
			}
		}
		.main-middle {
			position: absolute;
			top: 28vh;
			width: 68%;
			left: 14%;
			.main-nickname {
				position: absolute;
				top: 0;
				right: 0;
				color: #fff;
				line-height: 11vh;
				.box {
					display: flex;
					align-items: center;
					width: 83%;
					margin: 0 auto;
					justify-content: space-around;
					img {
						width: 65%;
					}
				}
			}
			img {
				width: 100%;
				object-fit: contain;
			}
		}
		.main-bottom {
			width: 100%;
			height: 10vh;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 40vh;
			.scan {
				width: 48%;
				img {
					margin-left: -1rem;
					width: 100%;
				}
			}
		}
	}
	.footer-title {
		color: #fff;
		text-align: center;
		font-size: 0.8rem;
		transform: scale(0.8);
		font-weight: bold;
	}
	.user-button {
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
			background-image: url('src/assets/imgs/btn.jpg');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
			font-size: 1.2rem;
			font-weight: bold;
		}
		.bg2 {
			margin-top: 1vh;
			height: 8vh;
			color: red;
			line-height: 7.5vh;
			text-align: center;
			background-image: url('src/assets/imgs/btn2.jpg');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
}
</style>
