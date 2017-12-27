import electronSettings from 'electron-settings';
import fs from 'fs-extra';
import { settings, projects } from './defaults';

const mapProject = (project) => {
	let projObj = {
		...projects,
		...project,
		_local: { open: false }
	};

	if (! projObj.hivePath) {
		projObj.hivePath = `/home/hive/projects/${projObj.name}`;
	}
	
	return projObj;
};

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
		projects: userProjects.map(mapProject),
		path
	};
}

export default buildConfig;