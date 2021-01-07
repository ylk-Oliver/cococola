export default {
	// 获取用户token
	getToken: `/api/h5business/gettoken`,
	// 获取用户信息
	getInfo: `/api/h5business/getuserinfo`,
	// 获取自己分数
	getMyRank: `/api/question/score`,
	// 领取优惠券
	getQuan: `/api/h5business/senddiscountcode`,
	// 获取题库
	getQuestionList: `/api/question/list`,
	// 提交答案
	getAnswer: `/api/question/submit`,
	// 所有用户初始化使用
	init: `/api/user/register`,
	// 答题排名
	getRank: `/api/question/ranking`,
	// 邀请列表
	yaoQing: `/api/user/invitation`,
	// 创建剪彩
	create: `/api/user/cutRibbon`,
	// 获取优惠券
	panDuan: `/api/user/couponConfirmed`,
	// 活动说明状态值
	state: `/api/user/dialogDismiss`
};
