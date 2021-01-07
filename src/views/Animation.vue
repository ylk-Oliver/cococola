<template>
	<div class="store-index">
		<img class="question-animation" :src="loading" alt="" />
		<audio id="music" src="/static/music.wav"></audio>
	</div>
</template>

<script>
import loading from '@/assets/imgs/jiancai.gif';
export default {
	name: 'Animation',
	data() {
		return {
			loading: loading
		};
	},
	watch: {},
	computed: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			const audio = document.getElementById('music');
			audio.load();
			let playPromise = audio.play();
			if (playPromise !== undefined) {
				playPromise
					.then(() => {
						audio.play();
					})
					.catch(() => {});
			}
			setTimeout(() => {
				this.$nextTick(() => {
					this.$router.push('/finish');
				});
			}, 5000);
		});
	},
	created() {}
};
</script>

<style lang="scss" scoped>
.store-index {
	width: 100%;
	height: 100vh;
	img {
		width: 100%;
		height: 100vh;
	}
}
</style>
