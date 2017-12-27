<template>
	<div class="page">
		<div class="logo-wrap">
			<logo />
		</div>
		<div class="padded-more">
			<div class="form-group">
				<label>Hive configuration path</label>
				<input type="text" class="form-control" placeholder="/Users/developer/hive/config.json" v-model="path">
			</div>
			<div class="form-group">
				<button class="btn btn-large btn-primary" @click="savePath">Save</button>
				<button class="btn btn-large btn-default" @click="openDialog"><span class="icon icon-dot-3"></span></button>
			</div>
		</div>
	</div>
</template>

<script>
import { remote } from 'electron';
import { mapGetters, mapActions } from 'vuex';
import Logo from '../components/global/Logo';

export default {
	name: 'intro',
	components: { Logo },

	methods: {
		...mapActions({
			setPath: 'config/setConfigPath'
		}),
		openDialog() {
			let result = remote.dialog.showOpenDialog({
				properties: ['openFile']
			});

			this.path = result[0];
		},
		savePath() {
			if (this.path) {
				this.setPath(this.path);
				this.$router.push({ name: 'projects' });
			}
		}
	},

	data: () => ({
		path: ''
	})
}
</script>

<style scoped>
	.logo-wrap {
		padding-top: 20px;
		margin: 0 auto;
	}
</style>

