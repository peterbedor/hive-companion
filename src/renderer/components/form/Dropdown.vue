<template>
	<div :class="['ui', 'selection', 'dropdown', { 'active visible': active }]" @click="active = ! active">
		<input type="hidden" name="gender">
		<i class="dropdown icon"></i>
		<div class="default text" v-if="selected" v-text="selected"></div>
		<div class="menu visible" :style="{ display: active ? 'block !important' : 'none !important' }">
			<div class="item" v-for="{ key, value } in parsedOptions" :key="value" @click="handleClick(value)">
				{{ key }}
			</div>
		</div>
	</div>
</template>

<script>
import kindOf from 'kind-of';

export default {
	name: 'dropdown',
	props: {
		options: {
			type: [Object, Array]
		},
		defaultValue: {
			type: String,
			default: ''
		}
	},

	methods: {
		handleClick(value) {
			this.selected = value;
			this.$emit('input', value);
		}
	},

	mounted() {
		if (this.defaultValue) {
			this.selected = this.defaultValue;
		}

		if (kindOf(this.options) === 'array') {
			this.parsedOptions = this.options.map(option => ({ key: option, value: option }));
			console.log(this.parsedOptions);
			
		} else if (kindOf(this.options) === 'object') {
			this.parsedOptions = options;
		}
	},

	data: () => ({
		active: false,
		parsedOptions: {},
		selected: ''
	})
}
</script>

