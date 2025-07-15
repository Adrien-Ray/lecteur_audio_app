const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width,
    height,
    icon: './assets/ico/logo.png',
    webPreferences: {
      nodeIntegration: true, // use or not Node in front
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
