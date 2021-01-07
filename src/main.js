import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'normalize.css';
import VueTouch from 'vue-touch';
import directives from './utils/derective';

Vue.config.productionTip = false;

Vue.use(Vant);

Vue.use(VueTouch, { name: 'v-touch' });

Vue.use(directives);

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
