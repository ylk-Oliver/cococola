import api from './api';
import axios from 'axios';

// const testUrl = 'https://cokestore-dev-web01.chinacloudsites.cn';
const url = 'https://cokestore.coca-cola.cn';
// const url = '/api/b';
const service = axios.create({
	baseURL: url
});
service.defaults.baseURL = url;
// 请求是否带上cookie
service.defaults.withCredentials = false;
// 默认基础请求地址
service.defaults.headers.post['Content-Type'] = 'application/json';
// 对返回的结果做处理
service.interceptors.response.use((response) => {
	return response.data;
});
service.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			const access_stoken = JSON.parse(token);
			if (access_stoken) {
				config.headers.Authorization = access_stoken;
			}
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);
export function getToken(params) {
	return service.post(api.getToken, params);
}
export function getInfo() {
	return service.get(api.getInfo);
}
export function getQuan(params) {
	return service.post(api.getQuan, params);
}
