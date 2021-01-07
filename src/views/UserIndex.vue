<template>
	<div>
		<div class="user-state" v-if="showState">
			<div class="user-state-main">
				<img class="main-bg" src="../assets/imgs/state-bg.png" alt="" />
				<div class="state">活动说明</div>
				<div class="store-activity-main">
					<div class="content">
						<div class="store-word">
							<p>一、奖励介绍</p>
							<p>
								a）用户参与【可口可乐】商店小程序「开业云见证」活动，并在“解锁开业福利”中通过分享生成的海报邀请微信好友，当用户邀请的好友扫码进入【可口可乐】商店小程序并注册为新会员时，则该好友视为用户“邀请成功”的好友，此时该用户与该好友将各获得一张【可口可乐】商店小程序20元人民币优惠券。<br />
								b）用户可邀请多位好友，当邀请的好友满足上述“邀请成功”情况时，该用户才可再次获得【可口可乐】商店小程序20元人民币优惠券奖励，获得的【可口可乐】商店小程序20元人民币优惠券数量与“邀请成功”的好友数量相同，上不封顶。<br />
								c）用户通过扫描其他用户分享的「开业云见证」分享海报进入【可口可乐】商店小程序并注册成为新会员，则可获得一张【可口可乐】商店小程序20元人民币优惠券。（仅限于新会员，已是【可口可乐】商店小程序会员的用户则不会获得该奖励）<br />
								d）所有奖励的【可口可乐】商店小程序20元人民币优惠券，均需要实付金额满100元人民币才能使用（特殊商品除外），一次订单最多只可使用一张，不可叠加，使用期限至2021年1月24日。<br />
							</p>
							<p>二、活动介绍</p>
							<span
								>为庆祝中国首家【可口可乐】商店小程序正式上线，2020年12月22日0时起至2020年12月24日23时59分59秒（以下简称“活动期间”），【可口可乐】商店小程序发起「开业云见证」活动。用户可通过
								1）微信扫一扫功能扫描活动二维码进入「开业云见证」活动版块；2)微信小程序搜索“可口可乐商店”进入小程序，点击首页「开业云见证」进入活动页。在「开业云见证」活动首页点击“我要见证”参与活动，见证【可口可乐】商店小程序开业。用户还可通过点击“解锁开业福利”，邀请好友成为【可口可乐】商店小程序新会员，赢取开业惊喜福利。</span
							>
							<p class="huanhang"></p>
							<p>三、参与资格及活动区域</p>
							<span>凡年满16周岁且拥有智能手机微信注册账号的用户均可参加本次活动。本活动区域仅限中国大陆地区（港澳台除外）。</span>
							<p class="huanhang"></p>
							<p>四、活动主办方</p>
							<span>本活动由可口可乐饮料（上海）有限公司主办（以下简称“主办方”）。</span>
							<p class="huanhang"></p>
							<p>五、活动方式</p>
							<span>1、「开业云见证」活动攻略 </span>
							<p>1）见证攻略</p>
							<p>a）用户进入「开业云见证」活动页面，点击“我要见证”即进入“选择见证形象”页面；</p>
							<p>b）在“选择见证形象”页面，用户可通过左右滑动形象图片来选择自己心仪的形象；</p>
							<p>
								c）用户选定形象后点击“开始见证”则进入见证开业的动画，见证动画播放完毕则根据用户参与「开业云见证」的时间，自动生成用户的见证分享图。
							</p>
							<p>2）“解锁开业福利”攻略</p>
							<p>a）用户完成以上「开业云见证」的见证步骤后，点击“解锁开业福利”可进一步解锁【可口可乐】商店小程序开业福利；</p>
							<p>
								b）用户点击“邀请好友”，则自动生成分享海报，用户可将生成的分享海报分享给微信好友，邀请好友扫码海报中二维码参与活动；
							</p>
							<p>
								c）当用户邀请的好友扫码进入【可口可乐】商店小程序并注册为新会员时，则该好友视为用户“邀请成功”的好友，此时该用户与该好友将各获得一张【可口可乐】商店小程序20元人民币优惠券。
							</p>

							<p>3、兑奖方式 <br />获得的优惠券奖励将自动收入用户账户，用户可通过点击“我的优惠券”前往查看。</p>
							<p class="huanhang"></p>
							<p>六、活动注意事项</p>
							<span>
								1、如出现不可抗力（包括但不限于重大灾害事件，活动受政府机关指令需要停止举办或调整的，活动遭受严重网络攻击等），主办方不承担活动被迫中止的责任和义务。
							</span>
							<p>
								2、用户参加本活动即视为授权本活动主办方及其相关公司在与本活动相关的广告和宣传中无偿使用用户提交的个人信息，包括但不限于姓名、昵称、头像和（或）任何由用户提供的其他个人信息，而无须再另行事先征求确认。
							</p>
							<p>
								3、用户分享到微信、朋友圈及好友的内容（包括但不限于中奖心情）须为用户本人自创，拥有著作权，其元素不得涉及个人隐私或侵犯第三方的任何权利，包括但不限于人物的肖像权、建筑、绘画、雕塑、设计、专利、商标、商业秘密等知识产权或其他专属权利，不得涉及黄色、暴力等非法内容，且须符合中国的法律法规。若发生由内容引起的法律责任，将由用户本人自行承担解决。
							</p>
							<p>
								4、主办方对兑奖者资格拥有查验权和最终决定权。如果发现有使用任何不正当手段参加本活动，包括但不限于以下情况，主办方有权在不事先通知的前提下取消其参与活动的资格，终止奖品的使用权利。
							</p>
							<p>
								a）任何有违本活动目的和宗旨；<br />
								b）不遵守本活动规则参与活动；<br />
								c) 违反职业操守、相关公司政策、社会公序良俗和道德规范以及法律法规；<br />
								d）影响活动正常有序进行；<br />
								e）损害主办方及相关实体的合法权益和声誉；<br />
								f）在活动参与过程中提供非真实的数据或信息；<br />
								g）在参与本活动过程中利用多个不同的注册账户在活动期间进行多次数或多账户的提交行为或其他虚假行为，或者在参与本活动过程中，以虚假方式以求获得更多奖品；<br />
								h）主办方有证据认为的其他不正当手段或情形。
							</p>
							<p>
								5、如遇意外，无法提供指定奖品，活动主办方有权以价值相仿的奖品替代公布奖品。本活动中的奖品不得兑换现金、转让或作价销售，一经发现活动主办方有权取消其获奖资格。所有奖品金额均符合《中华人民共和国反不正当竞争法》的有关规定。
							</p>
							<p>6、本活动中的奖品不得兑换现金、转让或作价销售，一经发现活动主办方有权取消其获奖资格。</p>
							<p>7、所有奖品金额均符合《中华人民共和国反不正当竞争法》的有关规定。</p>
							<p>
								8、对于消费者在领取和使用各奖项过程中发生的任何伤害和损失，如该等伤害和损失非由主办方之过错导致，主办方不承担任何责任。
							</p>
							<p>9、如因中奖者个人原因不能履行兑换奖项，视为中奖者自行放弃，主办方将不作任何形式赔偿。</p>
							<p>10、主办方不对因网络传输原因而导致用户提交的信息错误或延误承担任何责任。</p>
							<p>11、用户参与本活动所涉及的手机上网费、流量费、电话费等将由用户自行承担。</p>
							<p>
								12、如用户对本活动有任何疑问，请联系：cokestoreadmin@coca-cola.com。主办方将在法律允许的范围内对本活动规则给予必须的解释和说明。如遇不可抗力因素，主办方拥有取消本活动的权利。
							</p>
						</div>
					</div>
				</div>
			</div>
			<div @click="stateFn" class="sp">
				<img class="close" src="../assets/imgs/close.png" alt="" />
			</div>
		</div>
		<div :class="{ shade: showQuan }" v-if="showQuan && !showState">
			<div class="user-state">
				<div class="user-state-main">
					<img class="main-bg" src="../assets/imgs/state-bg.png" alt="" />
					<div class="imgLogo">
						<img src="../assets/imgs/logo3.png" alt="" />
					</div>
					<img class="imgYou" src="../assets/imgs/You.png" alt="" />
					<div class="imgUserBox">
						<div class="imgContent">
							<div class="imgState">获得{{ uncheckedCouponCount }}张【可口可乐】商店小程序20元优惠券</div>
							<img @click="goQuanPage()" class="imgQuan" src="../assets/imgs/quan20.png" alt="" />
							<div class="bgBox">
								<div v-if="isRibbonNew" @click="stateGo" class="bg1">
									<img src="../assets/imgs/youhuiquan1.png" alt="" />
								</div>
								<div v-else @click="stateGoOld" class="bg1">
									<img src="../assets/imgs/youhuiquanold.png" alt="" />
								</div>
								<div @click="skipIndex2()" class="bg3">
									<img src="../assets/imgs/youhuiquan2.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<img class="close" @click="closeFn()" src="../assets/imgs/close.png" alt="" />
			</div>
		</div>
		<div v-if="!showState && !showQuan" class="user-main">
			<div class="user-header">
				<div class="user-logo">
					<img src="../assets/imgs/logo3.png" alt="" />
				</div>
				<div @click="showState = true" class="user-logo-word">活动说明</div>
			</div>
			<div class="user-title">
				<img src="../assets/imgs/china-first.jpg" alt="" />
				<div>【可口可乐】商店小程序</div>
			</div>
			<div class="user-kaiye">
				<span style="color: red">正式开业啦！</span>
			</div>
			<div class="user-animation">
				<img src="../assets/imgs/jiancai-main.png" alt="" />
			</div>
			<div class="user-button">
				<div v-if="isRibbonNew" @click="commit()" class="bg1">
					<img src="../assets/imgs/index-btn1.png" alt="" />
				</div>
				<div v-else class="bg2" @click="go()">
					<img src="../assets/imgs/index-btn4.png" alt="" />
				</div>

				<div @click="skipIndex()" class="bg3">
					<img src="../assets/imgs/index-btn3.png" alt="" />
				</div>
			</div>
			<div class="user-clause">
				<img @click="chose" :src="imgChose" alt="" />
				<span class="word1">我已阅读并同意<span @click="$router.push('/clause')" class="word2">个人信息保护及用户政策</span></span>
			</div>
		</div>
		<div id="qrcode2"></div>
	</div>
</template>

<script>
import wx from 'weixin-js-sdk';
import dayjs from 'dayjs';
import { getToken, getInfo, getQuan } from '@/request/service';
import { init, panDuan, state } from '@/request/cococola';
import check from '@/assets/imgs/check.svg';
import checked from '@/assets/imgs/checked.svg';
import { Notify } from 'vant';
import QRCode from 'qrcodejs2'; // 引入qrcode
export default {
	name: 'UserIndex',
	data() {
		return {
			token: '',
			showState: false,
			isNewForStage2: true, // 是否为新用户
			isGoMin: false,
			showQuan: false,
			isRibbonNew: true,
			hasNewCoupon: false, // 是否有券提示
			isClickClose: false, //优惠券提示出后是否点击关闭
			needGo: false,
			imgChose: '',
			uncheckedCouponCount: 0,
			imgUrl: '',
			openid: '',
			finish: false
		};
	},
	watch: {},
	computed: {},
	methods: {
		stateGo() {
			panDuan().then(() => {
				this.showQuan = false;
				localStorage.removeItem('isCreate');
				this.$router.push('/create');
			});
		},
		stateGoOld() {
			panDuan().then(() => {
				this.$router.push('/invite');
				localStorage.removeItem('isCreate');
			});
		},
		go() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			this.$router.push('/finish');
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
				userState: false
			};
			state(params).then(() => {});
		},
		// 首页pages/index/index
		skipIndex() {
			if (this.isRibbonNew) {
				this.indexCommit();
			} else {
				wx.miniProgram.navigateTo({
					url: `/pages/index/index`
				});
			}
		},
		skipIndex2() {
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			panDuan().then(() => {
				this.showQuan = false;
				localStorage.removeItem('isCreate');
				wx.miniProgram.navigateTo({
					url: `/pages/index/index`
				});
			});
		},
		goQuanPage() {
			wx.miniProgram.navigateTo({
				url: `/pages/my/coupons`
			});
		},
		skipPhone() {
			// 跳转原生小程序 未用户授权或授权手机
			wx.miniProgram.navigateTo({
				url: `/pages/user/get_info`
			});
		},
		closeFn() {
			panDuan().then(() => {
				this.showQuan = false;
				this.isClickClose = true;
				localStorage.removeItem('isCreate');
			});
		},
		// 点开始见证按钮
		commitFn() {
			// 没有授权去授权页面
			if (this.isGoMin) {
				this.skipPhone();
				return;
			}
			if (this.uncheckedCouponCount > 0) {
				this.showQuan = true;
				return;
			}
			if (!this.needGo) {
				return;
			}
			this.$router.push('/create');
		},
		// 点开始见证按钮
		commitFnn() {
			// 没有授权去授权页面
			if (this.isGoMin) {
				this.skipPhone();
				return;
			}
			if (this.uncheckedCouponCount > 0) {
				this.showQuan = true;
				return;
			}
			if (!this.needGo) {
				return;
			}
			wx.miniProgram.navigateTo({
				url: `/pages/index/index`
			});
		},
		commit() {
			if (!this.finish) {
				Notify({ type: 'warning', message: '未加载完成，请稍后重试' });
				return;
			}
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			getInfo().then((res) => {
				// 1.只有code说明自己点小程序自己进来的，如果手机号码为空跳原生授权页面
				// 2.根据新的接口判断是否为老旧用户
				if (res.data && res.data.phone) {
					this.isGoMin = false;
					this.$store.commit('setWxInfo', JSON.stringify(res.data));
					const params = {
						openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
						nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
						avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
						phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
						trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
						code: this.$route.query.code // test
					};
					const str = decodeURI(this.$route.query.refer).split('.');
					if (this.$route.query.refer) {
						params.refer = str[1];
					}
					init(params).then((res) => {
						this.needGo = true;
						this.$store.commit('setUserInfo', JSON.stringify(res));
						this.isRibbonNew = res.isRibbonNew;
						this.hasNewCoupon = res.hasNewCoupon;
						this.isNewForStage2 = res.isNewForStage2;
						this.uncheckedCouponCount = res.uncheckedCouponCount;
						this.invokeMiniprogramFunc();
						this.commitFn();
					});
				} else {
					this.isGoMin = true;
					this.commitFn();
				}
			});
		},
		indexCommit() {
			if (!this.finish) {
				Notify({ type: 'warning', message: '未加载完成，请稍后重试' });
				return;
			}
			if (this.imgChose === check) {
				Notify({ type: 'warning', message: '请在底部勾选隐私条款' });
				return;
			}
			getInfo().then((res) => {
				// 1.只有code说明自己点小程序自己进来的，如果手机号码为空跳原生授权页面
				// 2.根据新的接口判断是否为老旧用户
				if (res.data && res.data.phone) {
					this.isGoMin = false;
					this.$store.commit('setWxInfo', JSON.stringify(res.data));
					const params = {
						openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
						nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
						avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
						phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
						trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
						code: this.$route.query.code // test
					};
					const str = decodeURI(this.$route.query.refer).split('.');
					if (this.$route.query.refer) {
						params.refer = str[1];
					}
					init(params).then((res) => {
						this.needGo = true;
						this.$store.commit('setUserInfo', JSON.stringify(res));
						this.isRibbonNew = res.isRibbonNew;
						this.hasNewCoupon = res.hasNewCoupon;
						this.isNewForStage2 = res.isNewForStage2;
						this.uncheckedCouponCount = res.uncheckedCouponCount;
						this.invokeMiniprogramFunc();
						this.commitFnn();
					});
				} else {
					this.isGoMin = true;
					this.commitFnn();
				}
			});
		},
		qrcode() {
			const code = JSON.parse(localStorage.getItem('code'));
			const openid = this.openid;
			const referId = `${code}.${openid}`;
			let qrcode = new QRCode('qrcode2', {
				width: 132,
				height: 132,
				text: `https://cokestore.coca-cola.cn/qrcode-mp/?q=h5&type=user&t1=200&refer=${encodeURIComponent(referId)}`, // 二维码地址
				colorDark: '#000',
				colorLight: '#fff'
			});
			setTimeout(() => {
				let myCanvas = document.getElementById('qrcode2').getElementsByTagName('canvas');
				this.imgUrl = myCanvas[0].toDataURL('image/png');
				this.$store.commit('setQrcode2', this.imgUrl);
			}, 500);
		},
		invokeMiniprogramFunc() {
			const code = JSON.parse(localStorage.getItem('code'));
			const openid = this.openid;
			const referId = encodeURIComponent(`${code}.${openid}`);
			wx.miniProgram.postMessage({ data: { refer: referId } });
		}
	},
	created() {
		// deadline 日期
		const currentTime = dayjs();
		const deadLine = dayjs('2020-12-30');
		if (!dayjs().isBefore(deadLine)) {
			this.$router.push('/userend');
			return;
		}

		if (JSON.parse(localStorage.getItem('isClickClause') === null)) {
			this.imgChose = check;
		} else if (JSON.parse(localStorage.getItem('isClickClause'))) {
			this.imgChose = checked;
		} else {
			this.imgChose = check;
		}
		// 页面初始化获取 code refer
		// code 代表当前人的code
		const code = this.$route.query.code;
		if (code) {
			this.$store.commit('setCode', JSON.stringify(code));
		}
		const params = {
			code: this.$route.query.code
		};
		getToken(params).then((res) => {
			this.token = res.data.token;
			this.$store.commit('setToken', JSON.stringify(res.data.token));
			getInfo().then((res) => {
				// 1.只有code说明自己点小程序自己进来的，如果手机号码为空跳原生授权页面
				// 2.根据新的接口判断是否为老旧用户
				this.openid = res.data.openid;
				this.$nextTick(() => {
					this.qrcode();
				});
				if (res.data && res.data.phone) {
					this.$store.commit('setWxInfo', JSON.stringify(res.data));
					const params = {
						openId: JSON.parse(localStorage.getItem('wxInfo')).openid,
						nickname: JSON.parse(localStorage.getItem('wxInfo')).nickname,
						avatar: JSON.parse(localStorage.getItem('wxInfo')).head_img,
						phoneNumber: JSON.parse(localStorage.getItem('wxInfo')).phone,
						trackingId: JSON.parse(localStorage.getItem('wxInfo')).tracking_id,
						code: this.$route.query.code // test
					};
					const str = decodeURI(this.$route.query.refer).split('.');
					if (this.$route.query.refer) {
						params.refer = str[1];
					}
					init(params).then((res) => {
						this.finish = true;
						this.needGo = true;
						this.$store.commit('setUserInfo', JSON.stringify(res));
						this.isRibbonNew = res.isRibbonNew;
						this.hasNewCoupon = res.hasNewCoupon;
						this.isNewForStage2 = res.isNewForStage2;
						this.uncheckedCouponCount = res.uncheckedCouponCount;
						if (JSON.parse(localStorage.getItem('isCreate'))) {
							this.invokeMiniprogramFunc();
						} else {
							this.$store.commit('setIsCreate', res.isNewForStage2);
							this.invokeMiniprogramFunc();
						}
						if (this.isNewForStage2) {
							const params = {
								userState: false
							};
							state(params).then(() => {});
						}
						if (this.uncheckedCouponCount > 0) {
							this.showQuan = true;
						}
						this.showState = res.dialogStatus.userState;
					});
				} else {
					this.showState = true;
					this.isGoMin = true;
					this.finish = true;
				}
			});
		});
	}
};
</script>

<style lang="scss" scoped>
#qrcode2 {
	z-index: -111;
	position: fixed;
	top: 100vh;
}
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
			top: 10vh;
			left: 12%;
			img {
				width: 3rem;
				height: 3rem;
			}
		}
		.imgYou {
			position: absolute;
			top: 14vh;
			object-fit: contain;
			width: 98%;
			height: 14vh;
		}
		.imgUserBox {
			width: 100%;
			height: auto;
			position: absolute;
			top: 28vh;
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
		margin-top: 2vh;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 1.5rem;
			height: 1.5rem;
		}
		div {
			color: #fff;
			font-weight: bold;
			font-size: 1.2rem;
		}
	}
	.user-kaiye {
		width: 78%;
		height: 3rem;
		line-height: 2.7rem;
		background-image: url('src/assets/imgs/user-title.png');
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100%;
		margin-left: 11%;
		text-align: center;
		margin-top: 1vh;
		span {
			font-size: 1.3rem;
			font-weight: bold;
		}
	}
	.user-animation {
		img {
			margin-right: 4%;
			height: 48vh;
			object-fit: contain;
			display: block;
			margin: 0 auto;
		}
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
			img {
				width: 100%;
				object-fit: contain;
			}
		}
		.bg3 {
			margin-top: 1vh;
			width: 80%;
			margin: 0 auto;
			img {
				width: 100%;
				object-fit: contain;
			}
		}
	}
	.user-clause {
		position: absolute;
		bottom: 3vh;
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
			color: #fff;
			.word2 {
				font-size: 0.6rem;
				font-weight: bold;
				color: #000;
				text-decoration: underline;
			}
		}
	}
}
</style>
