const {
  app,
  BrowserWindow,
  screen,
  ipcMain,
  dialog
} = require('electron');
const path = require('path');

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width,
    height,
    icon: './assets/ico/logo.png',
    webPreferences: {
      // preload: './preload.js',
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // use or not Node in front
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

ipcMain.handle('dialog:openFiles', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections']
  });
  return result.filePaths;
});