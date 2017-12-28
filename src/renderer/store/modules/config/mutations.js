import { 
	SET_CONFIGURATION_LOADED_STATE,
	SET_CONFIGURATION_PATH
} from './types';

export default {
	[SET_CONFIGURATION_LOADED_STATE](state, loaded) {
		state.loaded = loaded;
	},

	[SET_CONFIGURATION_PATH](state, path) {
		state.path = path;
	},
}