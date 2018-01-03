<template>
	<div class="field" @click="handleClick">
		<div class="ui checkbox">
			<input type="checkbox" :name="name" tabindex="0" class="hidden" :checked="checked">
			<label v-text="label"></label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'checkbox',
	props: {
		label: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		checked: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		handleClick() {
			this.$emit('input', this.value);
		}
	}
}
</script>
