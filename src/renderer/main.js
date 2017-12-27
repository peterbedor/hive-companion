import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App';
import router from './router';
import store from './store';

if (! process.env.IS_WEB) {
	Vue.use(require('vue-electron'));
}

const unsync = sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app');
