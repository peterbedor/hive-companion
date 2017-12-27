<template>
	<div id="app">
		<div class="window">
			<header class="toolbar toolbar-header">
				<h1 class="title">{{ currentPage }}</h1>
			</header>
			<navigation />
			<div class="window-content">
				<router-view></router-view>
			</div>
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
.icon-link {
	cursor: pointer;
}
.page {
	width: 100%;
	height: 100%;
}
</style>
