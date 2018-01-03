import { spawn } from 'child_process';
import store from '../../index';

import {
	ADD_OUTPUT_ITEM,
	CLEAR_OUTPUT,
	RUN_COMMAND
} from "./types";

export default {
	addOutputItem({ commit }, payload) {
		commit(ADD_OUTPUT_ITEM, payload);
	},

	clearOutput({ commit }) {
		commit(CLEAR_OUTPUT);
	},

	runCommand({ commit }, payload) {
		let path = store.getters['config/pathOnly'];
		let command = spawn(`cd ${path} && ./hive ${payload}`, {
			shell: true
		});

		command.stdout.on('data', (data) => {
			commit(ADD_OUTPUT_ITEM, data.toString());
		});

		commit(RUN_COMMAND, payload);
	}
}