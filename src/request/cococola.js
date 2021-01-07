import api from './api';
import axios from 'axios';
import { Notify } from 'vant';
// 最终是配置baseurl
// const baseurl = 'http://cola-dev.rfan.fun/';
// const baseurl = 'https://openingcampaign-web01.chinacloudsites.cn/';
// const baseurl = 'https://cokestore-opening.coca-cola.cn/';
// const baseurl = '/api/a';
const baseurl = window.BASE_API;
// const baseurl = '';
console.log(baseurl);
const cococola = axios.create({
	baseURL: baseurl
});
cococola.defaults.baseURL = baseurl;
// 请求是否带上cookie
cococola.defaults.withCredentials = false;
// 默认基础请求地址
cococola.defaults.headers.post['Content-Type'] = 'application/json';
// 对返回的结果做处理
cococola.interceptors.response.use(
	function(res) {
		return Promise.resolve(res.data);
	},
	function(error) {
		Notify({ type: 'warning', message: '未知错误' });
		return Promise.reject(error);
	}
);
cococola.interceptors.request.use(
	(config) => {
		const userInfo = localStorage.getItem('userInfo');
		const token = localStorage.getItem('token');
		if (token) {
			const access_stoken = JSON.parse(token);
			config.headers.Authorization = access_stoken;
		}
		if (userInfo) {
			const ak = JSON.parse(userInfo).ak;
			if (ak) {
				config.headers.common['X-ACCESS-TOKEN'] = ak;
			}
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export function getMyRank() {
	return cococola.get(api.getMyRank);
}
export function getQuestionList() {
	return cococola.get(api.getQuestionList);
}
export function getAnswer(params) {
	return cococola.post(api.getAnswer, params);
}
export function init(params) {
	return cococola.post(api.init, params);
}
export function getRank() {
	return cococola.get(api.getRank);
}
export function yaoQing() {
	return cococola.get(api.yaoQing);
}
export function create(params) {
	return cococola.post(api.create, params);
}
export function panDuan(params) {
	return cococola.post(api.panDuan, params);
}
export function state(params) {
	return cococola.post(api.state, params);
}
