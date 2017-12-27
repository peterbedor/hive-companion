import { 
	app, 
	BrowserWindow, 
	Tray 
} from 'electron';
import Positioner from 'electron-positioner';
import extend from 'extend';
import events from 'events';
import path from 'path';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

const winURL = process.env.NODE_ENV === 'development'
	? `http://localhost:9080`
	: `file://${__dirname}/index.html`

let opts = {
	width: 400,
	height: 350,
	tooltip: '',
	dir: app.getAppPath(),
	index: winURL,
	windowPosition: (process.platform === 'win32') ? 'trayBottomCenter' : 'trayCenter'
};

let menubar = new events.EventEmitter();

menubar.app = app;

menubar.setOption = (opt, val) => opts[opt] = val;
menubar.getOption = (opt)  => opts[opt];

const appReady = () => {
	let iconPath = path.join(__dirname + '/../renderer/assets/', 'icon.png');
	var defaultClickEvent = 'click';
	let cachedBounds;

	let supportsTrayHighlightState = false;

	try {
		menubar.tray.setHighlightMode('never');
		supportsTrayHighlightState = true;
	} catch (e) {}

	const showWindow = (trayPos) => {
		if (supportsTrayHighlightState) {
			menubar.tray.setHighlightMode('always');
		}
		if (! menubar.window) {
			createWindow();
		}

		menubar.emit('show');

		if (trayPos && trayPos.x !== 0) {
			// Cache the bounds
			cachedBounds = trayPos;
		} else if (cachedBounds) {
			// Cached value will be used if showWindow is called without bounds data
			trayPos = cachedBounds;
		} else if (menubar.tray.getBounds) {
			// Get the current tray bounds
			trayPos = menubar.tray.getBounds();
		}

		// Default the window to the right if `trayPos` bounds are undefined or null.
		let noBoundsPosition = null;

		if ((trayPos === undefined || trayPos.x === 0) && opts.windowPosition.substr(0, 4) === 'tray') {
			noBoundsPosition = (process.platform === 'win32') ? 'bottomRight' : 'topRight';
		}

		let position = menubar.positioner.calculate(noBoundsPosition || opts.windowPosition, trayPos);
		let x = (opts.x !== undefined) ? opts.x : position.x;
		let y = (opts.y !== undefined) ? opts.y : position.y;

		menubar.window.setPosition(x, y);
		menubar.window.show();
		menubar.emit('after-show');
		
		return;
	}

	const hideWindow = () => {
		if (supportsTrayHighlightState) {
			menubar.tray.setHighlightMode('never');
		}

		if (! menubar.window) {
			return;
		}

		menubar.emit('hide');
		menubar.window.hide();
		menubar.emit('after-hide');
	}

	const windowClear = () => {
		delete menubar.window;
		menubar.emit('after-close');
	}

	const emitBlur = () => {
		menubar.emit('focus-lost');
	}

	const createWindow = () => {
		menubar.emit('create-window');

		let defaults = {
			show: false,
			frame: false,
			resizable: false
		};
		
		let winOpts = extend(defaults, opts);
		menubar.window = new BrowserWindow(winOpts);
		menubar.positioner = new Positioner(menubar.window);

		// menubar.window.on('blur', () => opts.alwaysOnTop ? emitBlur() : hideWindow());

		if (opts.showOnAllWorkspaces !== false) {
			menubar.window.setVisibleOnAllWorkspaces(true);
		}

		menubar.window.on('close', windowClear);
		menubar.window.loadURL(opts.index);
		menubar.emit('after-create-window');
	}

	const clicked = (e, bounds) => {
		if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) {
			return hideWindow();
		}

		if (menubar.window && menubar.window.isVisible()) {
			return hideWindow();
		}

		cachedBounds = bounds || cachedBounds
		
		showWindow(cachedBounds);
	}

	menubar.tray = new Tray(iconPath);
	menubar.tray.on(defaultClickEvent, clicked);
	menubar.tray.on('double-click', clicked);
	menubar.tray.setToolTip(opts.tooltip);

	menubar.showWindow = showWindow;
	menubar.hideWindow = hideWindow;
	menubar.emit('ready');
}

if (app.isReady()) {
	appReady();
} else {
	app.on('ready', appReady);
}

// let mainWindow
// const winURL = process.env.NODE_ENV === 'development'
// 	? `http://localhost:9080`
// 	: `file://${__dirname}/index.html`

// function createWindow () {
// 	/**
// 	 * Initial window options
// 	 */
// 	mainWindow = new BrowserWindow({
// 		height: 563,
// 		useContentSize: true,
// 		width: 1000
// 	})

// 	mainWindow.loadURL(winURL)

// 	mainWindow.on('closed', () => {
// 		mainWindow = null
// 	})
// }

// app.on('ready', createWindow)

// app.on('window-all-closed', () => {
// 	if (process.platform !== 'darwin') {
// 		app.quit()
// 	}
// })

// app.on('activate', () => {
// 	if (mainWindow === null) {
// 		createWindow()
// 	}
// })

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
	autoUpdater.quitAndInstall()
})

app.on('ready', () => {
	if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
