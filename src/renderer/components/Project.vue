<template>
	<li class="list-group-item">
		<div class="media-body">
			{{ project.name }}
			<span class="icon icon-export icon-link" @click="openExternal"></span>
			<span class="icon icon-pencil pull-right icon-link" @click="toggleProjectSettings"></span>
			<div :class="['project-settings', {'-open': project._local.open }]">
				<div class="form-group">
					<label>Project Name</label>
					<input type="text" class="form-control" :placeholder="project.name">
				</div>
			</div>
		</div>
	</li>
</template>

<script>
import { shell } from 'electron';
import { mapGetters, mapActions } from 'vuex';

export default {
	props: {
		project: {
			type: Object,
			default: () => ({})
		}
	},

	mounted() { console.log(this.project) },

	methods: {
		...mapActions({
			openProjectSettings: 'config/openProjectSettings',
			closeProjectSettings: 'config/closeProjectSettings'
		}),

		toggleProjectSettings() {
			this.project._local.open ? this.closeProjectSettings(this.project) : this.openProjectSettings(this.project)
		},

		openExternal() {
			shell.openExternal(`https://${this.project.name}.${this.settings.tld}`);
		},
	},

	computed: {
		...mapGetters({
			settings: 'config/settings'
		})
	}
}
</script>

<style scoped>
	.project-settings {
		max-height: 0;
		overflow: hidden;
	}
	.project-settings.-open {
		max-height: 1000px;
	}
</style>

