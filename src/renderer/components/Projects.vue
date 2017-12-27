<template>
	<ul class="list-group">
		<project v-for="project in projects" :key="project.name" :project="project" />
	</ul>
</template>

<script>
import { shell } from 'electron';
import { mapGetters } from 'vuex';
import Project from './Project';

export default {
	name: 'projects',
	components: { Project },
	mounted() {
		if (! this.settings) {
			this.$router.push({ name: 'intro' });
		}
	},
	computed: {
		...mapGetters({
			projects: 'config/projects',
			settings: 'config/settings'
		})
	}
}
</script>
