<template>
	<div class="container padded">
		<div class="ui form">
			<div class="field">
				<label>CPUs</label>
				<input type="number" min="1" :placeholder="settings.cpus" @input="updateCPUs($event.target.value)" :value="settings.cpus">
			</div>

			<div class="grouped fields">
				<label>Database Default</label>
				<radio 
					label="MySQL" 
					value="mysql" 
					name="default_database" 
					:checked="settings.databaseDefault === 'mysql'"
					@input="updateDefaultDatabase"
				/>
				<radio 
					label="Postgres" 
					value="postgres" 
					name="default_database" 
					:checked="settings.databaseDefault === 'postgres'" 
					@input="updateDefaultDatabase"
				/>
			</div>

			<div class="grouped fields">
				<label>Databases</label>
				<checkbox 
					label="MySQL" 
					value="mysql"
					:checked="settings.databases.mysql"
					@input="updateDatabases"
				/>
				<checkbox 
					label="Postgres" 
					value="postgresql"
					:checked="settings.databases.postgresql"
					@input="updateDatabases"
				/>
				<checkbox 
					label="Redis" 
					value="redis"
					:checked="settings.databases.redis"
					@input="updateDatabases"
				/>
			</div>

			<div class="field">
				<label>Hostname</label>
				<input type="text" :placeholder="settings.hostname" @input="updateHostname($event.target.value)" :value="settings.hostname">
			</div>

			<div class="field">
				<label>IP</label>
				<input type="text" :placeholder="settings.ip" @input="updateIP($event.target.value)" :value="settings.ip">
			</div>

			<div class="field">
				<label>Memory</label>
				<input type="number" :placeholder="settings.memory" @input="updateMemory($event.target.value)" :value="settings.memory">
			</div>

			<div class="field">
				<label>Name</label>
				<input type="text" :placeholder="settings.name" @input="updateName($event.target.value)" :value="settings.name">
			</div>
			
			<div class="field">
				<label>Default PHP Version</label>
				<!-- <input type="text" :placeholder="settings.php" @input="updatePHPVersion($event.target.value)" :value="settings.php"> -->
				<!-- <select class="ui search dropdown">
					<option value="7.1">7.1</option>
					<option value="5.6">5.6</option>
					<option value="5.5">5.5</option>
				</select> -->

				<div class="ui selection dropdown active visible">
					<input type="hidden" name="gender">
					<i class="dropdown icon"></i>
					<div class="default text">Gender</div>
					<div class="menu visible" style="display: block !important">
						<div class="item" data-value="male" data-text="Male">
							<i class="male icon"></i>
							Male
						</div>
						<div class="item" data-value="female" data-text="Female">
							<i class="female icon"></i>
							Female
						</div>
					</div>
				</div>
			</div>

			<div class="field">
				<label>Sync Root</label>
				<div class="ui action icon small input fluid">
					<input type="text" :placeholder="settings.syncRoot" :value="settings.syncRoot">
					<button class="ui button" @click="openDialog">
						<i class="icon horizontal ellipsis button"></i>
					</button>
				</div>
			</div>

			<div class="field">
				<label>TLD</label>
				<input type="text" :placeholder="settings.tld" @input="updateTLD($event.target.value)" :value="settings.tld">
			</div>

			<div class="field">
				<label>Default Web Root</label>
				<input type="text" :placeholder="settings.webroot" @input="updateWebroot($event.target.value)" :value="settings.webroot">
			</div>

			<div class="grouped fields">
				<label>Default Webserver</label>
				<radio 
					label="Apache" 
					value="apache" 
					name="default_webserver" 
					:checked="settings.webserverDefault === 'apache'"
					@input="updateWebserver"
				/>
				<radio 
					label="Nginx" 
					value="nginx" 
					name="default_webserver" 
					:checked="settings.webserverDefault === 'nginx'"
					@input="updateWebserver"
				/>
			</div>

			<button class="ui primary button" @click="save">
				<i class="save icon"></i>
				Save
			</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Radio from '../components/form/Radio';
import Checkbox from '../components/form/Checkbox';
import dialog from '../utilities/dialog';

import fs from 'fs-extra';
import path from 'path';

export default {
	name: 'settings',
	components: { Radio, Checkbox },

	methods: {
		...mapActions('settings', {
			updateCPUs: 'updateCPUs',
			updateDefaultDatabase: 'updateDefaultDatabase',
			updateDatabases: 'updateDatabases',
			updateHostname: 'updateHostname',
			updateIP: 'updateIP',
			updateMemory: 'updateMemory',
			updateName: 'updateName',
			updatePHPVersion: 'updatePHPVersion',
			updateSyncRoot: 'updateSyncRoot',
			updateTLD: 'updateTLD',
			updateWebroot: 'updateWebroot',
			updateWebserver: 'updateWebserver'
		}),

		openDialog() {
			dialog.file({ properties: ['openDirectory'] })
				.then((path) => this.updateSyncRoot(path));
		},

		save() {
			let configFile = fs.readJsonSync(this.path);

			for (let prop in configFile) {
				if (prop !== 'projects') {
					configFile[prop] = this.settings[prop];
				}
			}

			fs.writeJsonSync(path.join(this.path, '../', 'config.json'), configFile, { spaces: '\t' });
		}
	},

	computed: {
		...mapGetters('settings', {
			settings: 'settings'
		}),

		...mapGetters('config', {
			path: 'path'
		})
	}
}
</script>
