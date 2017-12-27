const settings = {
	name: 'hive',
	tld: 'dev',
	hostname: 'hive',
	memory: 2048,
	cpus: 2,
	ip: '192.168.0.15',
	cleanup: false,
	php: '7.1',
	webserverDefault: 'apache',
	databaseDefault: 'mysql',
	syncRoot: '',
	webroot: 'public_html',
	databases: {
		mysql: false,         
		postgresql: false,         
		redis: false
	}
}

const projects = {
	name: '',
	hostname: '',
	localPath: '',
	hivePath: '',
	webserver: '',
	webroot: '',
	useDatabase: true,
	databaseServer: 'mysql',
	php: '7.1'
}

export {
	settings,
	projects
}