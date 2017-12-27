<template>
	<div class="ui menu fixed">
		<router-link
			class="item"
			:key="url" 
			:to="path"
			v-for="{ url, path, name } in routes"
			exact
		>
			{{ name }}
		</router-link>
	</div>
</template>

<script>
export default {
	mounted() {
		let routes = [
			...this.$router.options.routes
		];

		this.routes = routes.filter((route) => {
			return route.meta && route.meta.name;
		}).map((route) => {
			return {
				path: route.path,
				name: route.meta.name
			}
		});
	},
	data: () => ({
		routes: []
	})
}
</script>
