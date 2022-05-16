const { app, BrowserWindow } = require('electron')
const ipcMain = require('electron').ipcMain;

let win

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 720,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    titleBarStyle: 'hidden',
    icon: './src/assets/logoIcon.png'
  })
  win.loadURL('http://localhost:3000')
  win.on('closed', () => {
    console.log('closed')
    win = null
  })
  win.minimize()
}

ipcMain.handle('minimize-event', () => {
  win.minimize()
})


ipcMain.handle('close-event', () => {
  app.quit()
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})