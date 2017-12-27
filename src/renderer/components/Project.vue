<template>
	<div>
		<div :class="['title', { active: project._local.open }]" @click="toggleProjectSettings">
			<i class="dropdown icon"></i>
			{{ project.name }}
			<button class="mini ui icon button right floated compact" @click="openExternal">
				<i class="external icon"></i>
			</button>
		</div>
		<div :class="['content', { active: project._local.open }]">
			<div class="ui form">
				<div class="field">
					<label>Name</label>
					<input type="text" name="first-name" :placeholder="project.name">
				</div>

				<div class="field">
					<label>Local Path</label>
					<div class="ui action input">
						<input type="text" :placeholder="project.localPath">
						<button class="ui button fitted" @click="openDialog">
							<i class="fitted folder open icon marginless"></i>
						</button>
					</div>
				</div>

				<div class="field">
					<label>Hive Path</label>
					<input type="text" name="first-name" :placeholder="project.hivePath">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { shell } from 'electron';
import { mapGetters, mapActions, mapState } from 'vuex';
import openDialog from '../utilities/dialog';

export default {
	props: {
		project: {
			type: Object,
			default: () => ({})
		}
	},

	methods: {
		...mapActions({
			openProjectSettings: 'config/openProjectSettings',
			closeProjectSettings: 'config/closeProjectSettings',
			setLocalPath: 'config/setLocalPath'
		}),

		toggleProjectSettings() {
			this.project._local.open ? this.closeProjectSettings(this.project) : this.openProjectSettings(this.project)
		},

		openExternal(e) {
			e.stopPropagation();
			shell.openExternal(`https://${this.projectPath}`);
		},

		openDialog() {
			console.log(this.project.localPath);
			
			openDialog({
				properties: ['openDirectory'],
				defaultPath: this.project.localPath
			}).then((path) => {
				this.setLocalPath({ project: this.project, path });
			}).catch((e) => console.log(e));
		}
	},

	computed: {
		...mapGetters({
			settings: 'config/settings'
		}),

		projectPath() {
			return `${this.project.name}.${this.settings.tld}`;
		}
	}
}
</script>

<style scoped>
	.marginless {
		margin: 0 !important;
	}
</style>

