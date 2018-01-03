<template>
	<div>
		<div class="ui buttons fluid mini command-list">
			<button class="ui button" @click="runCommand('up')">Up</button>
			<button class="ui button" @click="runCommand('halt')">Halt</button>
			<button class="ui button" @click="runCommand('refresh')">Refresh</button>
			<button class="ui button" @click="runCommand('reboot')">Reboot</button>
			<button class="ui button" @click="test">SSH</button>
		</div>
		<div class="ui inverted segment output" ref="output">
		  <div class="output-line" v-for="line in output" v-text="line"></div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	methods: {
		...mapActions('commands', {
			runCommand: 'runCommand'
		}),
		test() {
			terminalTab.open('echo hello');
		}
	},

	watch: {
		output() {
			this.$nextTick(() => {
				this.$refs.output.scrollTop = this.$refs.output.scrollHeight + 20;
			});
		}
	},

	computed: {
		...mapGetters('config', {
			path: 'pathOnly'
		}),
		...mapGetters('commands', {
			output: 'output'
		})
	}
}
</script>

<style scoped>
.command-list {
	/*margin-bottom: 40px;*/
}
.output {
	/*max-height: 300px;*/
	height: 230px;
	overflow-y: scroll;
}
.output-line {
	font-family: monospace;
	font-size: 12px;
}
</style>