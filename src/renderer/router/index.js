import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'projects',
			component: require('@/pages/Projects').default,
			meta: {
				name: 'Projects'
			}
		},
		{
			path: '/settings',
			name: 'settings',
			component: require('@/pages/Settings').default,
			meta: {
				name: 'Settings'
			}
		},
		{
			path: '/intro',
			name: 'intro',
			component: require('@/pages/Intro').default,
			meta: {
				name: 'Intro'
			}
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});
