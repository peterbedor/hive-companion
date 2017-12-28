import settings from 'electron-settings';

let path = settings.get('config.path');

export default {
	loaded: path !== undefined,
	path
}