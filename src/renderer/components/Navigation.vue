<template>
	<div class="tab-group">
		<router-link 
			class="tab-item"
			tag="div"
			v-for="{ url, path, name } in routes" 
			:key="url"
			:to="path"
			:exact="path === '/'"
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

