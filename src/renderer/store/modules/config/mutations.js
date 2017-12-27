import { 
	SET_CONFIG_PATH, 
	OPEN_PROJECT_SETTINGS,
	CLOSE_PROJECT_SETTINGS
} from './types';

export default {
	[SET_CONFIG_PATH] (state, path) {
		state.path = path;
	},
	[OPEN_PROJECT_SETTINGS] (state, project) {
		project._local.open = true;
	},
	[CLOSE_PROJECT_SETTINGS](state, project) {
		project._local.open = false;
	}
}