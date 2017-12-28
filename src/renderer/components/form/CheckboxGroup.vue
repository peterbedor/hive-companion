<template>
	<div class="grouped fields">
		<label v-if="label" v-text="label"></label>
		<div 
			:class="[{ inline }, 'field']" 
			v-for="(value, name) in options" 
			:key="name"
			@click="handleClick(name)"
		>
			<div class="ui checkbox">
				<input type="checkbox" tabindex="0" class="hidden" :checked="value">
				<label v-text="name"></label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ''
		},
		inline: {
			type: Boolean,
			default: true
		},
		options: {
			type: Object,
			default: () => ({})
		}
	},

	created() {
		for (let option in this.options) {
			this[option] = '';
			this[option] = this.options[option];
		}
	},

	methods: {
		handleClick(option) {
			this.checked[option] = ! this.checked[option];
			this.$emit('input', this.checked);
		}
	},

	data: () => ({
		checked: {}
	})
}
</script>

