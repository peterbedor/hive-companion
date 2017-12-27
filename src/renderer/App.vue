<template>
	<div id="app">
		<navigation />
		<div class="ui padded container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Navigation from './components/Navigation';
export default {
	name: 'hive-companion',
	components: { Navigation },

	computed: {
		currentPage() {
			if (this.$route.meta && this.$route.meta.name) {
				return this.$route.meta.name;
			}
			
			return 'Hive Companion';
		}
	}
};
</script>

<style>
body {
	background-color: #fff;
	margin-top: 60px;
}
</style>
