import electronSettings from 'electron-settings';
import fs from 'fs-extra';
import { settings, projects } from './defaults';

const buildConfig = () => {
	let path = electronSettings.get('config.path');

	if (! path) {
		return {}
	}

	let configFile = fs.readJsonSync(path);
	let { projects: userProjects } = configFile;

	delete configFile.projects;

	return {
		settings: { ...settings, ...configFile },
		projects: userProjects.map(project => ({ ...projects, ...project, _local: { open: false } })),
		path
	};
}

export default buildConfig;