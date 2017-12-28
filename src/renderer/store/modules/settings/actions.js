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
	updateCPUs({ commit }, payload) {
		commit(UPDATE_CPUS, payload);
	},

	updateDefaultDatabase({ commit }, payload) {
		commit(UPDATE_DEFAULT_DATABASE, payload);
	},

	updateDatabases({ commit }, payload) {
		commit(UPDATE_DATABASES, payload);
	},

	updateHostname({ commit }, payload) {
		commit(UPDATE_HOSTNAME, payload);
	},

	updateIP({ commit }, payload) {
		commit(UPDATE_IP, payload);
	},

	updateMemory({ commit }, payload) {
		commit(UPDATE_MEMORY, payload);
	},

	updateName({ commit }, payload) {
		commit(UPDATE_NAME, payload);
	},

	updatePHPVersion({ commit }, payload) {
		commit(UPDATE_PHP_VERSION, payload);
	},

	updateSyncRoot({ commit }, payload) {
		commit(UPDATE_SYNC_ROOT, payload);
	},

	updateTLD({ commit }, payload) {
		commit(UPDATE_TLD, payload);
	},

	updateWebroot({ commit }, payload) {
		commit(UPDATE_WEBROOT, payload);
	},

	updateWebserver({ commit }, payload) {
		commit(UPDATE_DEFAULT_WEBSERVER, payload);
	}
}