<template>
	<div style="position: relative;">
		<div class="user-main">
			<div id="finishBox" ref="capture">
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
						<img id="bottle" src="../assets/imgs/finish-header.png" alt="" />
						<div :style="{ lineHeight: nickNameView + 'vh', height: nickNameView + 'vh' }" class="main-nickname">
							<div class="box">
								<img :src="jiancaiword" alt="" />
								<span class="name" :style="{ height: nickNameView + 'vh' }">{{ truncate(nickname) }}</span>
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

			<div class="footer-title">
				长按保存分享好友一同见证
			</div>
			<div class="footer-title">
				即刻点击 [解锁开业福利] 探索更多畅爽快乐
			</div>
			<div class="user-button">
				<div @click="$router.push('/invite')" class="bg1">
					<img src="../assets/imgs/finish-btn1.png" alt="" />
				</div>
				<div @click="skipIndex()" class="bg2">
					<img src="../assets/imgs/index-btn3.png" alt="" />
				</div>
			</div>
		</div>
		<div v-if="image" class="poster-image" :style="{ height: imgHeight + 'vh' }">
			<img :style="{ height: imgHeight + 'vh' }" :src="image" />
		</div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
import html2canvas from 'html2canvas';
import { init } from '@/request/cococola';
import head1 from '@/assets/imgs/head1.png';
import head2 from '@/assets/imgs/head2.png';
import head3 from '@/assets/imgs/head3.png';
import head4 from '@/assets/imgs/head4.png';
import head5 from '@/assets/imgs/head5.png';
import head6 from '@/assets/imgs/head6.png';
import jiancaiword from '@/assets/imgs/jiancai-word.png';
import QRCode from 'qrcodejs2'; // 引入qrcode
export default {
	name: 'Finish',
	data() {
		return {
			nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
			openid: JSON.parse(localStorage.getItem('wxInfo')).openid,
			code: JSON.parse(localStorage.getItem('code')),
			witnessCount: 0,
			avatarIndex: 0,
			image: null,
			nickNameView: 0,
			imgHeight: 0,
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
			],
			jiancaiword: jiancaiword,
			qrcodeData: localStorage.getItem('qrcode2')
		};
	},
	watch: {},
	computed: {},
	methods: {
		generatorImage() {
			this.$nextTick(() => {
				html2canvas(this.$refs.capture, {
					backgroundColor: null
				}).then((canvas) => {
					this.image = canvas.toDataURL('image/png', 1.0);
				});
			});
		},
		// 首页pages/index/index
		skipIndex() {
			wx.miniProgram.navigateTo({
				url: `/pages/index/index`
			});
		},
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
		}
	},
	updated() {
		this.generatorImage();
		this.nickNameView = (document.getElementById('bottle').clientHeight / document.body.clientHeight) * 100;
		this.imgHeight = (document.getElementById('finishBox').clientHeight / document.body.clientHeight) * 100;
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
			this.witnessCount = res.witnessCount;
			this.avatarIndex = res.avatarIndex;
		});
		this.$nextTick(() => {
			this.imgHeight = (document.getElementById('finishBox').clientHeight / document.body.clientHeight) * 100;
			this.nickNameView = (document.getElementById('bottle').clientHeight / document.body.clientHeight) * 100;
		});
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
#qrcode2 {
	img {
		width: 4rem;
		height: 4rem;
		object-fit: contain;
		background-color: #fff; //设置白色背景色
	}
}
.name {
	font-family: 'fashion';
	margin-left: 0.2rem;
}

#finishBox {
	padding-top: 2vh;
	background-image: url('src/assets/imgs/jiancai-bg.png');
	background-repeat: repeat;
	background-position: top center;
	background-size: 100%;
}
.poster-image {
	position: absolute;
	width: 100%;
	height: 76vh;
	top: 0;
	left: 0;
	opacity: 0;
	overflow: hidden;
}

.poster-image img {
	width: 100%;
	-webkit-touch-callout: none;
	object-fit: contain;
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
	padding-top: 4vh;
	height: 96vh;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
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
			left: 16%;
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
					width: 100%;
					margin-left: -1rem;
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
		}
	}
}
</style>
