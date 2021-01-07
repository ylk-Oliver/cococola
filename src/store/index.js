import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		code: localStorage.getItem('token'),
		token: localStorage.getItem('token'),
		wxInfo: localStorage.getItem('wxInfo'),
		userInfo: localStorage.getItem('userInfo'),
		isCreate: localStorage.getItem('isCreate'),
		isClickClause: localStorage.getItem('isClickClause'),
		qrcode1: localStorage.getItem('qrcode1'),
		qrcode2: localStorage.getItem('qrcode2'),
		isOuth: localStorage.getItem('isOuth')
	},
	mutations: {
		setCode(state, val) {
			state.code = val;
			localStorage.setItem('code', val);
		},
		setToken(state, val) {
			state.token = val;
			localStorage.setItem('token', val);
		},
		setWxInfo(state, val) {
			state.wxInfo = val;
			localStorage.setItem('wxInfo', val);
		},
		setUserInfo(state, val) {
			state.userInfo = val;
			localStorage.setItem('userInfo', val);
		},
		setIsClickClause(state, val) {
			state.isClickClause = val;
			localStorage.setItem('isClickClause', val);
		},
		setIsCreate(state, val) {
			state.isCreate = val;
			localStorage.setItem('isCreate', val);
		},
		setQrcode1(state, val) {
			state.qrcode1 = val;
			localStorage.setItem('qrcode1', val);
		},
		setQrcode2(state, val) {
			state.qrcode2 = val;
			localStorage.setItem('qrcode2', val);
		},
		setIsOuth(state, val) {
			state.isOuth = val;
			localStorage.setItem('isOuth', val);
		}
	},
	actions: {},
	modules: {}
});
