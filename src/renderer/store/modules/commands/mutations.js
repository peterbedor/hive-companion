import {
	ADD_OUTPUT_ITEM,
	CLEAR_OUTPUT,
	RUN_COMMAND
} from "./types";

export default {
	[ADD_OUTPUT_ITEM] (state, payload) {
		state.output.push(payload);
	},

	[CLEAR_OUTPUT] (state) {
		state.output = [];
	},

	[RUN_COMMAND] (state, payload) {
		state.history.push(payload);
	}
}