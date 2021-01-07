<template>
	<div>
		<div class="index-state" :class="{ shade: showState }" v-if="showState">
			<div class="index-activity-box">
				<div @click="stateFn" class="index-close">
					<img src="../assets/imgs/close.png" alt="" />
				</div>
				<div class="index-activity-main">
					<img class="store-img1" src="../assets/imgs/activite-state.png" alt="" />
					<img class="store-img2" src="../assets/imgs/rank-bg.png" alt="" />
					<div class="store-word">
						<p>一、活动介绍</p>
						<span
							>2020年12月19日至2021年1月24日期间（以下简称“活动期间”），【可口可乐】商店小程序开启限时预售活动：「开业限定好物抢先拍」。用户可通过
							1）微信扫一扫功能扫描「快乐畅爽大使出道计划」活动二维码进入「快乐畅爽大使出道计划」活动板块，点击“开业限定好物抢先拍”进入活动页面；2)微信小程序搜索“可口可乐商店”进入小程序，点击首页「开业限定好物抢先拍」进入活动页面。「开业限定好物抢先拍」预售活动中售卖商品分别为“【可口可乐】商店神秘福袋”及“【可口可乐】商店开业专属礼盒”两大类，所有该活动中售卖的商品统一2020年12月26日开始按照订单支付成功顺序发货。</span
						>
						<p class="huanhang"></p>
						<p>二、参与资格及活动区域</p>
						<span>凡年满16周岁且拥有智能手机微信注册账号的用户均可参加本次活动。本活动区域仅限中国大陆地区（港澳台除外）。</span>
						<p class="huanhang"></p>
						<p>三、活动主办方</p>
						<span>本活动由可口可乐饮料（上海）有限公司主办（以下简称“主办方”）。</span>
						<p class="huanhang"></p>
						<p>四、本「开业限定好物抢先拍」活动售卖的商品</p>
						<span>
							1、【可口可乐】商店神秘福袋
						</span>
						<p>
							“【可口可乐】商店神秘福袋”共售有两类不同规格/售价的商品，第一类是两款99元人民币的“分享快乐福袋”，第二类是一款199元人民币的“畅爽福袋”，具体包括：
							a）分享快乐福袋：共两款，福袋内商品零售总价值分别为124元人民币及118元人民币，福袋内商品类别为文具类/包袋类/美妆类。<br />
							b）畅爽福袋：共一款，福袋内商品零售总价值为248元人民币，福袋内商品类别为小家电类/文创潮杯类。
						</p>
						<p>2、【可口可乐】商店开业专属礼盒</p>
						<p>
							“【可口可乐】商店开业专属礼盒”共售有三款不同规格/售价的商品，具体包括： <br />
							a）生日畅爽礼盒：售价为99元人民币，商品零售总价值为124元人民币。礼盒内包含：【可口可乐】月份瓶一个，同月份【可口可乐】月份钥匙扣一个及相应精美礼盒一个，用户可自行选择心仪月份；<br />
							b）萌趣北极熊定制礼盒：售价为299元人民币，商品零售总价值为314元人民币。礼盒内包含：【可口可乐】小白熊润唇膏礼盒一份、【可口可乐】北极熊钢化玻璃杯一只、【可口可乐】北极熊印花盘一个、【可口可乐】北极熊相框（颜色随机）一个、【可口可乐】北极熊行李牌一个、以及【可口可乐】明信片一张；<br />
							c）【可口可乐】铁粉珍藏礼盒：售价为666元人民币，商品零售总价值为702元人民币。礼盒内包含：【可口可乐】中国版瓶盖纪念银币一枚、【可口可乐】1966大众甲壳虫模型车一辆、【可口可乐】月份瓶及同月份钥匙扣一套，用户可自行选择心仪月份。<br />
						</p>
						<p class="huanhang"></p>
						<p>五、活动注意事项</p>
						<span>
							1、本「开业限定好物抢先拍」活动性质为预售活动，所有该活动中售卖的商品均于2020年12月26日起按照用户的购买顺序安排发货。
						</span>
						<p>2、两款“分享快乐福袋”的发货方式为随机发货，如果用户购买多件“分享快乐福袋”，则可能发生收到内容相同福袋的情况。</p>
						<p>3、“【可口可乐】商店神秘福袋”产品性质特殊，除产品质量问题外，不接受退换货。</p>
						<p>4、本「开业限定好物抢先拍」活动中售卖的商品数量有限，售完即止。</p>
						<p>5、本「开业限定好物抢先拍」活动中售卖的商品展示图片仅供参考，一切以实物为准。</p>
						<p>6、如遇不可抗力因素，活动主办方拥有取消或调整本活动的权利。</p>
					</div>
				</div>
			</div>
		</div>
		<div class="store-main" v-else>
			<div class="store-main-top"></div>
			<div class="store-main-middle"></div>
			<div class="store-main-bottom"></div>

			<div class="index-main">
				<div class="index-header">
					<div style="display:flex;align-items: center;">
						<div
							style="width: 3rem;height: 3rem;display: flex;align-items: center;margin-left: -1rem;z-index: 999;"
							@click="$router.go(-1)"
						>
							<img style="width:1rem;height:1rem;" src="../assets/imgs/arrow.png" alt="" />
						</div>
						<img style="margin-left: -2rem;" src="../assets/imgs/logo.jpg" alt="" />
					</div>
					<span @click="showState = true">活动说明</span>
				</div>
				<div class="index-title">
					<img src="../assets/imgs/presell-header.png" alt="" />
				</div>
				<div class="index-animation">
					<img class="img1" src="../assets/imgs/presell.gif" alt="" />
				</div>
				<div class="index-btn">
					<div class="bg1" @click="wxSkip1()">购买神秘福袋</div>
					<div class="bg2" @click="wxSkip2()">购买开业专属礼盒</div>
				</div>
			</div>
			<div class="index-clause">
				<img @click="chose" :src="imgChose" alt="" />
				<span class="word1">我已阅读并同意<span @click="$router.push('/clause')" class="word2">个人信息保护及用户政策</span></span>
			</div>
		</div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
import { getInfo } from '@/request/service';
import { init, state } from '@/request/cococola';
import check from '@/assets/imgs/check.svg';
import checked from '@/assets/imgs/checked.svg';
import { Notify } from 'vant';
export default {
	name: 'Presell',
	data() {
		return {
			showState: false,
			imgChose: ''
		};
	},
	watch: {},
	computed: {},
	methods: {
		chose() {
			if (this.imgChose === check) {
				this.imgChose = checked;
				this.$store.commit('setIsClickClause', true);
			} else {
				this.imgChose = check;
				this.$store.commit('setIsClickClause', false);
			}
		},
		stateFn() {
			this.showState = false;
			const params = {
				presellState: false
			};
			state(params).then(() => {});
		},
		wxSkip1() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			const params = {
				presellState: false
			};
			state(params).then(() => {});
			// /pages/events/detail?id=19
			wx.miniProgram.navigateTo({
				url: `/pages/events/detail?id=28`
			});
		},
		wxSkip2() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			const params = {
				presellState: false
			};
			state(params).then(() => {});
			// /pages/events/detail?id=20
			// 开业专属礼盒，情况1:如单个商品多规格，则跳转商品详情页面。情况2:如多个商品，则需要跳转到活动页面
			wx.miniProgram.navigateTo({
				url: `/pages/events/detail?id=29`
			});
		}
	},
	mounted() {
		if (JSON.parse(localStorage.getItem('isClickClause') === null)) {
			this.imgChose = check;
		} else if (JSON.parse(localStorage.getItem('isClickClause'))) {
			this.imgChose = checked;
		} else {
			this.imgChose = check;
		}
		getInfo().then((res) => {
			// 说明已经授权
			if (res.data && res.data.phone) {
				this.showState = false;
				this.$store.commit('setWxInfo', JSON.stringify(res.data));
				const params = {
					openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
					nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
					avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
					phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
					trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
					code: JSON.parse(localStorage.getItem('code'))
				};
				init(params).then((res) => {
					this.showState = res.dialogStatus.presellState;
				});
			} else {
				this.showState = true;
			}
		});
	}
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
		width: 100%;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
	.index-bottle {
		img {
			height: 40vh;
			object-fit: contain;
			display: block;
			margin: 0 auto;
		}
	}
	.index-animation {
		img {
			height: 40vh;
			object-fit: contain;
			margin: 0 auto;
			display: block;
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
.index-clause {
	margin-top: 1vh;
	display: flex;
	justify-content: center;
	width: 100%;
	line-height: 2vh;
	img {
		object-fit: contain;
		height: 2vh;
	}
	.word1 {
		font-size: 0.6rem;
		font-weight: bold;
		.word2 {
			font-size: 0.6rem;
			font-weight: bold;
			color: #f60009;
			text-decoration: underline;
		}
	}
}
</style>
