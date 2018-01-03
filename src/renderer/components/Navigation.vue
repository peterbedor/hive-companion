<template>
	<div class="ui secondary pointing menu">
		<router-link to="/" class="item" exact>
			Projects
		</router-link>

		<router-link to="/settings" class="item">
			Settings
		</router-link>

		<router-link to="/commands" class="item">
			Commands
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'navigation'
}
</script>
