import path from 'path';

export default {
	loaded: state => state.loaded,
	path: state => state.path,
	pathOnly: state => path.join(state.path, '../')
}