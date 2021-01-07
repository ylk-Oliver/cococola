import Vue from 'vue';
import VueRouter from 'vue-router';
import StoreIndex from '@/views/StoreIndex';
import Presell from '@/views/Presell';
import Result from '@/views/Result';
import Rank from '@/views/Rank';
import Share from '@/views/Share';
import UserIndex from '@/views/UserIndex';
import Create from '@/views/Create';
import Finish from '@/views/Finish';
import Invite from '@/views/Invite';
import InviteShare from '@/views/InviteShare';
import QuestionList from '@/views/QuestionList';
import Animation from '@/views/Animation';
import StoreEnd from '@/views/StoreEnd';
import UserEnd from '@/views/UserEnd';
import Clause from '@/views/Clause';
Vue.use(VueRouter);
const title1 = '快乐畅爽大使出道计划';
const title2 = '开业云见证';
const routes = [
	{
		path: '/store',
		name: 'StoreIndex',
		component: StoreIndex,
		meta: {
			title: title1
		}
	},
	{
		path: '/questionlist',
		name: 'QuestionList',
		component: QuestionList,
		meta: {
			title: title1
		}
	},
	{
		path: '/presell',
		name: 'Presell',
		component: Presell,
		meta: {
			title: title1
		}
	},
	{
		path: '/result',
		name: 'Result',
		component: Result,
		meta: {
			title: title1
		}
	},
	{
		path: '/share',
		name: 'Share',
		component: Share,
		meta: {
			title: title1
		}
	},
	{
		path: '/rank',
		name: 'Rank',
		component: Rank,
		meta: {
			title: title1
		}
	},
	{
		path: '/user',
		name: 'UserIndex',
		component: UserIndex,
		meta: {
			title: title2
		}
	},
	{
		path: '/create',
		name: 'Create',
		component: Create,
		meta: {
			title: title2
		}
	},
	{
		path: '/finish',
		name: 'Finish',
		component: Finish,
		meta: {
			title: title2
		}
	},
	{
		path: '/invite',
		name: 'Invite',
		component: Invite,
		meta: {
			title: title2
		}
	},
	{
		path: '/inviteshare',
		name: 'InviteShare',
		component: InviteShare,
		meta: {
			title: title2
		}
	},
	{
		path: '/storeend',
		name: 'StoreEnd',
		component: StoreEnd,
		meta: {
			title: title1
		}
	},
	{
		path: '/userend',
		name: 'UserEnd',
		component: UserEnd,
		meta: {
			title: title2
		}
	},
	{
		path: '/animation',
		name: 'Animation',
		component: Animation,
		meta: {
			title: title2
		}
	},
	{
		path: '/clause',
		name: 'Clause',
		component: Clause,
		meta: {
			title: '个人信息保护及用户政策'
		}
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});
export default router;
