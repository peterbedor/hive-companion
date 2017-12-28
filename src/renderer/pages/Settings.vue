<template>
	<div class="container padded">
		<div class="ui form">
			<div class="field">
				<label>CPUs</label>
				<input type="text" :placeholder="cpus" v-model="cpus">
			</div>
			<radio-group 
				label="Default Databases" 
				:options="[
					{ label: 'MySql', value: 'mysql' },
					{ label: 'PostGres', value: 'postgres' },
					{ label: 'Reddis', value: 'reddis' }
				]"
				:default-value="databaseDefault"
				v-model="databaseDefault"
			/>
			<!-- <checkbox-group 
				label="Databases" 
				:options="databases"
			/> -->
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RadioGroup from '../components/form/RadioGroup';
import CheckboxGroup from '../components/form/CheckboxGroup';

export default {
	name: 'settings',
	components: { RadioGroup, CheckboxGroup },

	mounted() {
		let settings = { ...this.settings };

		for (let item in settings) {
			if (item !== '_local') {
				this[item] = settings[item];
			}
		}
	},

	methods: {
		...mapActions('settings', {
			activateSetting: 'activateSetting',
			deactivateSetting: 'deactivateSetting'
		}),

		toggleSetting(type) {
			if (this.active.indexOf(type) > -1) {
				this.deactivateSetting(type);
			} else {
				this.activateSetting(type);
			}
		}
	},

	computed: {
		...mapGetters('settings', {
			active: 'active',
			settings: 'settings'
		})
	},

	data: () => ({
		cpus: 0,
		databaseDefault: '',
		picked: false,
		databases: {}
	})
}
</script>
