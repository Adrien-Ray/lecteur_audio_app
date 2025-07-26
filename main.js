const {
  app,
  BrowserWindow,
  screen,
  ipcMain,
  dialog,
  Notification
} = require('electron');
const path = require('path');

// process.env.GTK_USE_PORTAL = '0';

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width,
    height,
    // icon: './assets/ico/logo.png',
    icon: path.join(__dirname, 'assets/ico/logo.png'),
    webPreferences: {
      // preload: './preload.js',
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // use or not Node in front
      contextIsolation: true
      // enableRemoteModule: true
    }
  });

  win.loadFile('index.html');
  if (!app.isPackaged) {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

ipcMain.handle('dialog:openFiles', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections']
  });
  return result.filePaths;
});








