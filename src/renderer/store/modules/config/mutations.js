import { 
	SET_CONFIG_PATH, 
	OPEN_PROJECT_SETTINGS,
	CLOSE_PROJECT_SETTINGS,
	SET_LOCAL_PATH
} from './types';

export default {
	[SET_CONFIG_PATH] (state, path) {
		state = { ...state, path };
	},
	[OPEN_PROJECT_SETTINGS] (state, project) {
		const index = state.projects.indexOf(project);
		let newState = { ...state };

		newState.projects[index]._local.open = true;
	},
	[CLOSE_PROJECT_SETTINGS] (state, project) {
		const index = state.projects.indexOf(project);
		let newState = { ...state };

		newState.projects[index]._local.open = false;
	},
	[SET_LOCAL_PATH] (state, { project, path }) {
		const index = state.projects.indexOf(project);
		let newState = { ...state };
		
		newState.projects[index].localPath = path;
	} 
}