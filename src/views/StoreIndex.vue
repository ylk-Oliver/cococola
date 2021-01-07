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
						<p>一、奖励介绍</p>
						<p>
							1）“快乐畅爽大使”答题奖励 <br />
							a）用户作答完毕之后，可获得一张【可口可乐】商店小程序随机满减券，券面金额为5元人民币、10元人民币、15元人民币随机出现；<br />
							b）用户中途放弃作答则不会获得随机满减券奖励；<br />
							c）所有满减券均需要在【可口可乐】商店小程序内实付金额满50元人民币才能使用（特殊商品除外），一次订单最多只可使用一张，不可叠加，使用期限至2021年1月21日。<br />
							2）“快乐畅爽大使”获胜奖励<br />
							截止至2020年12月21日23时59分59秒，活动总排名前十名的用户即为获奖者，成为【可口可乐】商店小程序的“快乐畅爽大使”，并获得【可口可乐】商店准备的“快乐畅爽大使”获胜奖励。<br />
							a）【可口可乐】商店小程序快乐畅爽大使-快乐认证礼<br />
							礼包内含：一份快乐畅爽大使定制证书、一份快乐畅爽大使定制T恤衫以及一份【可口可乐】萌趣北极熊定制礼盒。<br />
							b）畅爽欢乐购<br />
							【可口可乐】商店小程序“快乐畅爽大使”拥有【可口可乐】商店小程序的专属购物特权，包含：①享受一次【可口可乐】商店小程序在售商品9折优惠（特殊商品除外），有效期三个月；<br />
							②“快乐畅爽大使”可指定5位亲友享受一次【可口可乐】商店小程序在售商品9折优惠（特殊商品除外），有效期三个月。<br />
							c）专属选品体验<br />
							【可口可乐】商店小程序“快乐畅爽大使”拥有一次线上参与【可口可乐】商店小程序选品推荐的体验机会：在下一次【可口可乐】商店小程序的新商品发售前，【可口可乐】商店小程序工作人员会在用户同意相应活动条款的前提下，通过微信与成为“快乐畅爽大使”的用户取得联系，与其在微信上沟通选品，让用户感受一次选品体验。<br />
							d）快乐探店一日游<br />
							成为【可口可乐】商店小程序的十位“快乐畅爽大使”可于指定时间前往【可口可乐】总部（上海）集体参观一次（会提时间另行沟通）
							。<br />
							*注：1）若成为“快乐畅爽大使”的用户因个人原因无法满足此时间要求，则视为自愿放弃；<br />
							2）食宿、交通费及其他费用需用户自费；<br />
							3）活动为集体活动，具体时间待定。
						</p>
						<p class="huanhang"></p>
						<p>二、活动介绍</p>
						<p>
							2020年12月19日至2020年12月21日期间（以下简称“活动期间”），【可口可乐】商店小程序发起「快乐畅爽大使出道计划」。用户可通过
							1）微信扫一扫功能扫描活动二维码进入「快乐畅爽大使出道计划」活动版块；2)微信小程序搜索“可口可乐商店”进入小程序，点击首页「快乐畅爽大使出道计划」进入活动页面。在「快乐畅爽大使出道计划」活动首页点击“我要报名”参与「快乐畅爽大使出道计划」活动，根据活动规则答题得积分，根据最终排名，前十名的用户成为【可口可乐】商店小程序的“快乐畅爽大使”（分数相同时，以答题时间较短或时间靠前的为准）。
						</p>
						<p class="huanhang"></p>
						<p>三、参与资格及活动区域</p>
						<span>凡年满16周岁且拥有智能手机微信注册账号的用户均可参加本次活动。本活动区域仅限中国大陆地区（港澳台除外）。</span>
						<p class="huanhang"></p>
						<p>四、活动主办方</p>
						<span>本活动由可口可乐饮料（上海）有限公司主办（以下简称“主办方”）。</span>
						<p class="huanhang"></p>
						<p>五、活动方式</p>
						<p>1、答题攻略</p>
						<p>a）用户进入「快乐畅爽大使出道计划」活动页面，点击“我要报名”开始答题；</p>
						<p>
							b）出题方式为单选题，每道题设置有四个选项，用户需要在四个选项中选择正确的一项，每位用户的答题时间上限为120秒，需要作答的题目总数为12题；
						</p>
						<p>
							c）12道题目从「快乐畅爽大使出道计划」题库中随机抽取，题库题目涵盖【可口可乐】品牌知识、企业文化及联名产品方面的相关内容；
						</p>
						<p>d）每位用户在答题过程中有且仅有一次换题机会：分享好友即可随机更换一次题目；</p>
						<p>
							e）每位用户有且仅有一次参与答题的机会，根据答题表现计算分数：答对一题记10分，答错或超时未答记0分，同分的情况下用时越短的用户排名越高；
						</p>
						<p>
							f）活动截止时，活动总排名前十名的用户即为【可口可乐】商店小程序的“快乐畅爽大使”，获得【可口可乐】准备的丰富奖励。
						</p>
						<p>2、兑奖方式</p>
						<p>
							主办方将通过用户授权小程序时留存的手机号主动联系成为【可口可乐】商店小程序“快乐畅爽大使”的十名用户，进一步沟通奖品邮寄与兑现事宜。
						</p>
						<p class="huanhang"></p>
						<p>六、活动注意事项</p>
						<span> </span>
						<p>
							1、如出现不可抗力（包括但不限于重大灾害事件，活动受政府机关指令需要停止举办或调整的，活动遭受严重网络攻击等），主办方不承担活动被迫中止的责任和义务。
						</p>
						<p>
							2、用户参加本活动即视为授权本活动主办方及其相关公司在与本活动相关的广告和宣传中无偿使用用户提交的个人信息，包括但不限于姓名、昵称、头像和（或）任何由用户提供的其他个人信息，而无须再另行事先征求确认。*注：核销奖励“专属选品体验”时除外。
						</p>
						<p>
							3、用户分享到微信、朋友圈及好友的内容（包括但不限于中奖心情）须为用户本人自创，拥有著作权，其元素不得涉及个人隐私或侵犯第三方的任何权利，包括但不限于人物的肖像权、建筑、绘画、雕塑、设计、专利、商标、商业秘密等知识产权或其他专属权利，不得涉及黄色、暴力等非法内容，且须符合中国的法律法规。若发生由内容引起的法律责任，将由用户本人自行承担解决。
						</p>
						<p>
							4、如果发现有使用任何不正当手段参加本活动，包括但不限于以下情况，主办方有权在不事先通知的前提下取消其参与活动的资格，终止奖品的使用权利。
						</p>
						<p>a）任何有违本活动目的和宗旨；</p>
						<p>b）不遵守本活动规则参与活动；</p>
						<p>c) 违反职业操守、相关公司政策、社会公序良俗和道德规范以及法律法规；</p>
						<p>d）影响活动正常有序进行；</p>
						<p>e）损害主办方及相关实体的合法权益和声誉；</p>
						<p>f）在活动参与过程中提供非真实的数据或信息；</p>
						<p>
							g）在参与本活动过程中利用多个不同的注册账户在活动期间进行多次数或多账户的提交行为或其他虚假行为，或者在参与本活动过程中，以虚假方式以求获得更多奖品；
						</p>
						<p>h）主办方有证据认为的其他不正当手段或情形。</p>
						<p>
							5、如遇意外，无法提供指定奖品，活动主办方有权以价值相仿的奖品替代公布奖品。
						</p>
						<p>6、本活动中的奖品不得兑换现金、转让或作价销售，一经发现活动主办方有权取消其获奖资格。</p>
						<p>7、所有奖品金额均符合《中华人民共和国反不正当竞争法》的有关规定。</p>
						<p>8、对于消费者在领取和使用各奖项过程中发生的任何伤害和损失，如该等伤害和损失非由主办方之过错导致，主办方不承担任何责任。</p>
						<p>
							9、如因中奖者个人原因不能履行兑换奖项，视为中奖者自行放弃，主办方将不作任何形式赔偿。
						</p>
						<p>10、主办方不对因网络传输原因而导致用户提交的信息错误或延误承担任何责任。</p>
						<p>
							11、用户参与本活动所涉及的手机上网费、流量费、电话费等将由用户自行承担。
						</p>
						<p>
							12、如用户对本活动有任何疑问，请联系：cokestoreadmin@coca-cola.com。主办方将在法律允许的范围内对本活动规则给予必须的解释和说明。如遇不可抗力因素，主办方拥有取消本活动的权利。
						</p>
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
					<img src="../assets/imgs/logo.jpg" alt="" />
					<span @click="showState = true">活动说明</span>
				</div>
				<div class="index-title">
					<img src="../assets/imgs/index-title.png" alt="" />
				</div>
				<div class="index-bottle">
					<img src="../assets/imgs/store-bg.png" alt="" />
				</div>
				<div class="index-btn">
					<div v-if="isQuizNew" class="bg1" @click="commit()">开始答题</div>
					<div v-else class="bg1" @click="result()">我的成绩</div>
					<div class="bg2" @click="go()">开业限定好物抢先拍</div>
				</div>
			</div>
			<div class="index-clause">
				<img @click="chose" :src="imgChose" alt="" />
				<span class="word1">我已阅读并同意<span @click="$router.push('/clause')" class="word2">个人信息保护及用户政策</span></span>
			</div>
		</div>
		<div id="qrcode1"></div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
import dayjs from 'dayjs';
import { getToken, getInfo } from '@/request/service';
import { init, state, getQuestionList } from '@/request/cococola';
import check from '@/assets/imgs/check.svg';
import checked from '@/assets/imgs/checked.svg';
import { Notify } from 'vant';
import QRCode from 'qrcodejs2'; // 引入qrcode
export default {
	name: 'StoreIndex',
	data() {
		return {
			showState: false,
			isQuizNew: true,
			isGoMin: false,
			needGo: false,
			imgChose: '',
			imgUrl: ''
		};
	},
	watch: {},
	computed: {},
	methods: {
		qrcode() {
			let qrcode = new QRCode('qrcode1', {
				width: 132,
				height: 132,
				text: `https://cokestore.coca-cola.cn/qrcode-mp/?q=h5&type=store&t1=100`, // 二维码地址
				colorDark: '#000',
				colorLight: '#fff'
			});
			setTimeout(() => {
				let myCanvas = document.getElementById('qrcode1').getElementsByTagName('canvas');
				this.imgUrl = myCanvas[0].toDataURL('image/png');
				this.$store.commit('setQrcode1', this.imgUrl);
			}, 500);
		},
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
				storeState: false
			};
			state(params).then(() => {});
		},
		commit() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			getInfo().then((res) => {
				// 说明已经授权
				if (res.data && res.data.phone) {
					this.isGoMin = false;
				} else {
					this.isGoMin = true;
				}
				if (this.isGoMin) {
					// 跳转原生小程序 未用户授权或授权手机
					wx.miniProgram.navigateTo({
						url: `/pages/user/get_info`
					});
				} else {
					this.$store.commit('setWxInfo', JSON.stringify(res.data));
					const params = {
						openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
						nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
						avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
						phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
						trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
						code: this.$route.query.code
					};
					init(params).then((res) => {
						this.$store.commit('setUserInfo', JSON.stringify(res));
						getQuestionList()
							.then(() => {
								this.$router.push('/questionlist');
							})
							.catch(() => {
								Notify({ type: 'warning', message: '未知错误' });
							});
					});
				}
			});
		},
		go() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			this.$router.push('/presell');
		},
		result() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			this.$router.push('/result');
		}
	},
	created() {
		const currentTime = dayjs();
		const deadLine = dayjs('2020-12-30');
		if (!dayjs().isBefore(deadLine)) {
			this.$router.push('/storeend');
			return;
		}
		if (JSON.parse(localStorage.getItem('isClickClause') === null)) {
			this.imgChose = check;
		} else if (JSON.parse(localStorage.getItem('isClickClause'))) {
			this.imgChose = checked;
		} else {
			this.imgChose = check;
		}
		// 页面初始化获取code
		const params = {
			code: this.$route.query.code
		};
		const code = this.$route.query.code;
		if (code) {
			this.$store.commit('setCode', JSON.stringify(code));
		}
		getToken(params).then((res) => {
			this.$store.commit('setToken', JSON.stringify(res.data.token));
			getInfo().then((res) => {
				this.$nextTick(() => {
					this.qrcode();
				});
				// 说明已经授权
				if (res.data && res.data.phone) {
					this.$store.commit('setWxInfo', JSON.stringify(res.data));
					const params = {
						openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
						nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
						avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
						phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
						trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
						code: this.$route.query.code
					};
					init(params).then((res) => {
						this.needGo = true;
						this.$store.commit('setUserInfo', JSON.stringify(res));
						this.showState = res.dialogStatus.storeState;
						this.isQuizNew = res.isQuizNew;
					});
				} else {
					this.showState = true;
					this.isGoMin = true;
				}
			});
		});
	}
};
</script>

<style lang="scss" scoped>
#qrcode1 {
	z-index: -111;
	position: fixed;
	top: 100vh;
}
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
