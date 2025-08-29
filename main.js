const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Or contextBridge if you're using a frontend framework
      contextIsolation: false, // Adjust these based on your security needs
    },
  });

  win.loadFile('src/index.html'); // Or dist/index.html if you're building a frontend
}

app.whenReady().then(createWindow);