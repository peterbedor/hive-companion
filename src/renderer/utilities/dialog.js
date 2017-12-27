import { remote } from 'electron';

const openDialog = (opts) => {
	return new Promise((res, rej) => {
		let result = remote.dialog.showOpenDialog(opts);

		if (result && result.length) {
			return res(result[0]);
		}

		return rej('No directory selected');
	});
}

export default openDialog;