<template>
	<div class="user-main">
		<div class="create-logo">
			<img src="../assets/imgs/logo3.png" alt="" />
		</div>
		<div class="create-title">
			<img src="../assets/imgs/create-title.png" alt="" />
		</div>
		<v-touch @swipeleft="leftFn()" @swiperight="rightFn()" class="create-animation">
			<img @click="leftFn()" style="width:1.5rem;height:1.5rem;object-fit:contain;" src="../assets/imgs/left.png" alt="" />
			<div class="create-box">
				<img :src="headList[current].src" alt="" />
			</div>
			<img @click="rightFn()" style="width:1.5rem;height:1.5rem;object-fit:contain;" src="../assets/imgs/right.png" alt="" />
		</v-touch>
		<div class="create-text">
			<div style="font-size; 0.8rem;">左右滑动</div>
			<div style="font-size: 1rem;transform: scale(0.7);">选择你的心仪形象吧！</div>
		</div>
		<div class="user-button">
			<div @click="createFn()" class="bg1"></div>
		</div>
	</div>
</template>

<script>
import head1 from '@/assets/imgs/head1.png';
import head2 from '@/assets/imgs/head2.png';
import head3 from '@/assets/imgs/head3.png';
import head4 from '@/assets/imgs/head4.png';
import head5 from '@/assets/imgs/head5.png';
import head6 from '@/assets/imgs/head6.png';
import { create, state } from '@/request/cococola';
export default {
	name: 'Create',
	data() {
		return {
			showState: false,
			current: 0,
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
		leftFn() {
			if (this.current === 0) {
				this.current = 5;
			} else {
				this.current = this.current - 1;
			}
		},
		rightFn() {
			if (this.current === 5) {
				this.current = 0;
			} else {
				this.current = this.current + 1;
			}
		},
		createFn() {
			const params = {
				avatarIndex: this.current
			};
			create(params).then(() => {
				const params = {
					userState: false
				};
				state(params).then(() => {});
				this.$router.push('/animation');
			});
		}
	},
	mounted() {}
};
</script>

<style lang="scss" scoped>
.user-main {
	.create-logo {
		width: 3rem;
		height: 3rem;
		margin-left: 7%;
		margin-bottom: 2rem;
		img {
			width: 100%;
		}
	}
	.create-title {
		margin-top: 2vh;
		margin-bottom: 2vh;
		width: 86%;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
	.create-animation {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 98%;
		margin: 0 auto;
		margin-top: 2vh;
		.create-box {
			width: 100%;
			height: 50vh;
			background-image: url('src/assets/imgs/create-main.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: contain;
			img {
				height: 44vh;
				object-fit: contain;
				margin: 0 auto;
				display: block;
				margin-top: 3vh;
			}
		}
	}
	.create-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.user-button {
		width: 90%;
		margin: 0 auto;
		.bg1 {
			height: 8vh;
			background-image: url('src/assets/imgs/index-btn1.png');
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
		}
	}
}
</style>
