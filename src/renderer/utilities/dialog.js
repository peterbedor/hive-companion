import { remote } from 'electron';

const open = (opts) => {
	return new Promise((resolve, reject) => {
		let result = remote.dialog.showOpenDialog(opts);

		if (result && result.length) {
			return resolve(result[0]);
		}

		return reject('No file/directory selected');
	});
}

export default {
	file(opts = {}) {
		let options = {
			properties: ['openFile'],
			...opts
		};

		return open(options);
	}
}