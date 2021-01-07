<template>
	<div>
		<div v-if="showAnimation" class="store-index" :class="{ shade: showState }">
			<div>
				<div v-if="showState">
					<div class="share-arrow">
						<img src="../assets/imgs/share-arrow.png" alt="" />
					</div>
					<div class="share-word">
						<div style="display: flex;justify-content: center;">
							<div>点击右上角</div>
							<img style="width: 1.5rem;height:1.5rem;" src="../assets/imgs/share.png" alt="" />
						</div>
						<div style="text-align: center;">
							分享给好友，即可更换一次题目哦
						</div>
					</div>
					<div class="share-close">
						<img
							@click="
								showState = false;
								isShare = true;
							"
							src="../assets/imgs/close.png"
							alt=""
						/>
					</div>
				</div>
				<div v-else class="store-main">
					<div class="store-main-top"></div>
					<div class="store-main-middle" :style="{ height: viewHeight + 'vh' }"></div>
					<div class="store-main-bottom"></div>
					<div class="question-body">
						<div class="question-header">
							<img src="../assets/imgs/logo.jpg" alt="" />
							<van-circle class="vanCircle" :value="timeValue" :clockwise="false" :speed="100" stroke-width="80" color="red">
								<van-count-down :auto-start="autoStart" millisecond ref="countDown" :time="time" format="mm'ss''SS"></van-count-down>
							</van-circle>
						</div>
						<div ref="question" class="question-data">
							<div class="question-title">
								<img src="../assets/imgs/question-title.png" alt="" />
								<div class="question-word">{{ current + 1 }}.{{ tableData.length > 0 ? tableData[current].question : '' }}</div>
							</div>
							<div v-if="tableData.length > 0" class="question-box">
								<div
									v-for="(val, index) in tableData[current].options"
									:key="index"
									class="question-detail"
									:class="val.checked ? 'checked' : ''"
									@click="checkFn(val)"
								>
									{{ optionWord(index) }}: {{ val.value }}
								</div>
							</div>
						</div>
						<div class="activity-btn">
							<div v-if="current + 1 === tableData.length || current + 1 === 12" @click="add()" class="bg1">完成答题</div>
							<div v-else @click="next()" class="bg1">提交此题答案</div>
							<div v-if="!isShare" @click="shareFn()" class="bg2">分享好友换一题</div>
							<div v-if="!isShare" style="text-align:center;color:red;font-weight:bold;height:2rem;line-height:2rem;">
								*只有一次换题机会哦！
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<img class="question-animation" src="../assets/imgs/count.gif" alt="" />
		</div>
	</div>
</template>
<script>
import { getAnswer, getQuestionList, state } from '@/request/cococola';
import { Notify } from 'vant';
export default {
	name: 'QuestionList',
	data() {
		return {
			isShare: false,
			showState: false,
			time: 2 * 60 * 1000,
			timeValue: 100,
			showAnimation: false,
			current: 0,
			tableData: [],
			timer: '',
			autoStart: false,
			viewHeight: 0
		};
	},
	updated() {
		this.viewHeight = (this.$refs.question.offsetHeight / document.body.clientHeight) * 100 + 30;
	},
	computed: {},
	methods: {
		optionWord(val) {
			let temp;
			switch (val) {
				case 0:
					temp = 'A';
					break;
				case 1:
					temp = 'B';
					break;
				case 2:
					temp = 'C';
					break;
				case 3:
					temp = 'D';
					break;
				default:
					'';
			}
			return temp;
		},
		shareFn() {
			this.showState = true;
			let arr = [];
			if (this.current === 0) {
				this.tableData = this.tableData.filter((val, index) => {
					return index !== 0;
				});
			} else {
				this.tableData.forEach((val, index) => {
					if (index + 1 !== this.current) {
						arr.push(val);
					}
				});
				this.tableData = arr;
			}
		},
		checkFn(val) {
			this.tableData[this.current].options.forEach((d) => {
				d.checked = false;
			});
			val.checked = !val.checked;
			this.tableData[this.current].answer = val.key;
		},
		add() {
			const timer =
				this.$refs.countDown.timeData.minutes * 60 * 1000 +
				this.$refs.countDown.timeData.seconds * 1000 +
				this.$refs.countDown.timeData.milliseconds;
			let answers = [];
			this.tableData.forEach((val) => {
				if (val.answer) {
					answers.push({
						id: val.id,
						answer: val.answer
					});
				}
			});
			const params = {
				answers: answers,
				timeElapsed: 2 * 60 * 1000 - timer
			};
			getAnswer(params).then(() => {
				const params1 = {
					storeState: false
				};
				state(params1).then(() => {});
				this.$router.push('/result');
			});
		},
		next() {
			let arr = [];
			arr = this.tableData[this.current].options.filter((val) => {
				return val.checked;
			});
			if (arr.length > 0) {
				this.current = this.current + 1;
			} else {
				Notify({ type: 'warning', message: '请选择答案' });
			}
		}
	},
	mounted() {
		getQuestionList().then((res) => {
			this.tableData = res;
			this.autoStart = true;
			this.timer = setInterval(() => {
				this.timeValue = this.timeValue - 1 / 12;
			}, 100);
			for (let i = 0; i < this.tableData.length; i++) {
				this.$set(this.tableData[i], 'answer', '');
				for (let j = 0; j < this.tableData[i].options.length; j++) {
					this.$set(this.tableData[i].options[j], 'checked', false);
				}
			}
		});
		setTimeout(() => {
			this.showAnimation = true;
			this.$nextTick(() => {
				this.viewHeight = (this.$refs.question.offsetHeight / document.body.clientHeight) * 100 + 30;
			});
		}, 3000);
	},
	destroyed() {
		clearInterval(this.timer);
	}
};
</script>

<style lang="scss" scoped>
.question-animation {
	width: 100%;
	height: 100vh;
	margin: 0 auto;
}
.share-word {
	color: #fff;
	line-height: 1.5rem;
}
.share-arrow {
	width: 40%;
	margin-left: 45%;
	img {
		width: 100%;
	}
}
.share-close {
	margin-top: 4vh;
	img {
		margin: 0 auto;
		display: block;
		width: 2rem;
		height: 2rem;
	}
}
.question-body {
	position: absolute;
	top: 5vh;
	width: 96%;
	height: 90vh;
	.question-header {
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
		.vanCircle {
			width: 4rem !important;
			height: 4rem !important;
		}
		.van-count-down {
			width: 4rem !important;
			height: 1rem !important;
			line-height: 1rem !important;
			font-size: 0.7rem !important;
			position: absolute;
			top: 1.5rem;
		}
	}
	.question-data {
		min-height: 50vh;
		overflow: auto;
		.question-title {
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			line-height: 1.5rem;
			margin-top: 2rem;
			img {
				width: 2.5rem;
				height: 2.5rem;
				object-fit: contain;
			}
			.question-word {
				font-weight: bold;
				font-size: 1.2rem;
				color: red;
				line-height: 2rem;
			}
		}
		.question-box {
			margin-top: 1rem;
			.question-detail {
				width: 80%;
				margin: 0 auto;
				line-height: 2.5rem;
				margin-bottom: 1.5rem;
				border: 1px solid #000;
				font-weight: bold;
				padding-left: 40px;
				padding-right: 40px;
			}
			.checked {
				background: red;
				border: 1px solid red;
				color: #fff !important;
			}
		}
		.question-text {
			margin-top: 2rem;
			margin-bottom: 1rem;
			div {
				text-align: center;
			}
		}
	}
	.activity-btn {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
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
