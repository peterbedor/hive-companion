<template>
	<div id="app">
		<navigation v-if="! isIntro" />
		<div class="ui padded container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navigation from './components/Navigation';

export default {
	name: 'hive-companion',
	components: { Navigation },

	mounted() {
		if (! this.configLoaded) {
			this.$router.push({ name: 'intro' });
		}
	},

	computed: {
		...mapGetters({
			configLoaded: 'config/loaded'
		}),

		isIntro() {
			return this.$route.name === 'intro';
		}
	}
};
</script>