<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
.store-main {
	width: 96%;
	height: 90vh;
	padding-top: 5vh;
	padding-bottom: 5vh;
	padding-left: 2%;
	padding-right: 2%;
	background-image: url('src/assets/imgs/wangge.png');
	background-repeat: repeat;
	background-position: center center;
	background-size: contain;
	position: relative;
	.store-main-top {
		width: 100%;
		height: 5vh;
		background-image: url('src/assets/imgs/background-top.png');
		background-repeat: no-repeat;
		background-position: top center;
		background-size: 100%;
	}
	.store-main-middle {
		width: 100%;
		min-height: 80vh;
		background-image: url('src/assets/imgs/background-middle.png');
		background-repeat: repeat;
		background-position: center center;
		background-size: contain;
	}
	.store-main-bottom {
		width: 100%;
		height: 5vh;
		background-image: url('src/assets/imgs/background-bottom.png');
		background-repeat: no-repeat;
		background-position: top center;
		background-size: 100%;
	}
}
.user-main {
	background-image: url('src/assets/imgs/jiancai-bg.png');
	background-repeat: repeat;
	background-position: top center;
	background-size: 100%;
	width: 100%;
	height: 98vh;
	padding-top: 2vh;
}
.shade {
	background: rgba(0, 0, 0, 0.8);
	height: 100vh;
}
</style>
