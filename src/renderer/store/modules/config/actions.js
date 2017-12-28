import settings from 'electron-settings';
import fs from 'fs-extra';
import path from 'path';
import { 
	SET_CONFIGURATION_LOADED_STATE, 
	SET_CONFIGURATION_PATH 
} from './types';

// TODO: Remove
window._settings = settings;

export default {
	setConfigurationLoadedState({ commit }, payload) {
		commit(SET_CONFIGURATION_LOADED_STATE, payload);
	},

	setConfigurationPath({ commit }, payload) {
		commit(SET_CONFIGURATION_PATH, payload);
	
		settings.set('config.path', payload);
		
		// Make a back up copy of the current configuration
		fs.copySync(payload, path.join(payload, `../config.${+new Date()}.json.bak`));
	}
}