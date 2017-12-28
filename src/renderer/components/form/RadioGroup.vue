<template>
	<div class="grouped fields">
		<label v-if="label" v-text="label"></label>
		<div 
			:class="[{ inline }, 'field']" 
			v-for="option in options" 
			:key="option.value"
			@click="handleClick(option)"
		>
			<div class="ui radio checkbox">
				<input type="radio" name="fruit" tabindex="0" class="hidden" :checked="checked === option.value">
				<label v-text="option.label"></label>
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
			type: Array,
			default: () => ([])
		},
		defaultValue: {
			type: String,
			default: ''
		}
	},

	created() {
		if (this.defaultValue) {
			this.checked = this.defaultValue;
		}
	},

	methods: {
		handleClick(option) {
			this.checked = option.value;
			this.$emit('input', option.value);
		}
	},

	data: () => ({
		checked: ''
	})
}
</script>

