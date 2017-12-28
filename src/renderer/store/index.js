import Vue from 'vue';
import Vuex from 'vuex';

import config from './modules/config';
import settings from './modules/settings';
import projects from './modules/projects';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { config, settings, projects },
	strict: process.env.NODE_ENV !== 'production'
});
