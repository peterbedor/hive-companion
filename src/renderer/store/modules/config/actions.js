import settings from 'electron-settings';
import { 
	SET_CONFIG_PATH, 
	OPEN_PROJECT_SETTINGS,
	CLOSE_PROJECT_SETTINGS
} from './types';

// TODO: Remove
window._settings = settings;

export default {
	setConfigPath({ commit }, payload) {
		commit(SET_CONFIG_PATH, payload);
		
		settings.set('config.path', payload);
	},
	openProjectSettings({ commit }, payload) {
		commit(OPEN_PROJECT_SETTINGS, payload);
	},
	closeProjectSettings({ commit }, payload) {
		commit(CLOSE_PROJECT_SETTINGS, payload);
	}
}