import {
	UPDATE_CPUS,
	UPDATE_DEFAULT_DATABASE,
	UPDATE_DATABASES,
	UPDATE_HOSTNAME,
	UPDATE_IP,
	UPDATE_MEMORY,
	UPDATE_NAME,
	UPDATE_PHP_VERSION,
	UPDATE_SYNC_ROOT,
	UPDATE_TLD,
	UPDATE_WEBROOT,
	UPDATE_DEFAULT_WEBSERVER
} from './types';

export default {
	[UPDATE_CPUS] ({ settings }, payload) {
		settings.cpus = parseInt(payload);
	},
	
	[UPDATE_DEFAULT_DATABASE] ({ settings }, payload) {
		settings.databaseDefault = payload;
	},

	[UPDATE_DATABASES] ({ settings }, payload) {
		settings.databases[payload] = ! settings.databases[payload];
	},

	[UPDATE_HOSTNAME] ({ settings }, payload) {
		settings.hostname = payload;
	},

	[UPDATE_IP] ({ settings }, payload) {
		settings.ip = payload;
	},

	[UPDATE_MEMORY] ({ settings}, payload) {
		settings.memory = parseInt(payload);
	},

	[UPDATE_NAME] ({ settings}, payload) {
		settings.name = payload;
	},

	[UPDATE_PHP_VERSION] ({ settings}, payload) {
		settings.php = payload;
	},

	[UPDATE_SYNC_ROOT] ({ settings}, payload) {
		settings.syncRoot = payload;
	},

	[UPDATE_TLD] ({ settings}, payload) {
		settings.tld = payload;
	},

	[UPDATE_WEBROOT] ({ settings}, payload) {
		settings.webroot = payload;
	},

	[UPDATE_DEFAULT_WEBSERVER] ({ settings}, payload) {
		settings.webserverDefault = payload;
	}
}