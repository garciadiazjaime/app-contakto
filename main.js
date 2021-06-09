const { app, BrowserWindow, protocol, dialog, nativeImage, Menu, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater');
const path = require('path')
const url = require('url')

const fs = require('fs'); 
const { v4: uuidv4 } = require('uuid');

const archiver = require('archiver');

function getQualityFactor(filePath) {
  const stats = fs.statSync(filePath)
  const sizeInKB = stats.size / 1024;

  return sizeInKB > 150 ? 15 : 90
}

async function saveUserFile(files) {
  return files.filePaths.map(filePath => {
    const userImage = nativeImage.createFromPath(filePath)

    const quality = getQualityFactor(filePath)
    const imageBuffer = userImage.toJPEG(quality)

    const imageExtension = filePath.split('.').pop()

    const reducedImageName = `adjunto-small-${uuidv4()}.${imageExtension}`;
    fs.writeFileSync(path.join(__dirname, 'bundle', reducedImageName ), imageBuffer)

    return reducedImageName
  })
};

async function deleteUserFile(fileName) {
  fs.unlinkSync(path.join(__dirname, 'bundle',fileName ))
}

async function generateZip(data) {
  const zipFilename = await dialog.showSaveDialogSync({
    defaultPath: 'candidato.zip'
  })

  if (!zipFilename) {
    return null
  }

  const output = fs.createWriteStream(zipFilename);
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  archive.pipe(output);

  archive.append(JSON.stringify(data, null, 2), { name: 'data.json' });

  Object.keys(data.adjuntos).forEach(key => {
    const name = data.adjuntos[key]
    if (name) {
      archive.file(path.join(__dirname, 'bundle',name ), { name });
    }
  })

  archive.finalize();
}

exports.saveUserFile = saveUserFile
exports.deleteUserFile = deleteUserFile
exports.generateZip = generateZip

let myWindow = null
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore()
      myWindow.focus()
    }
  })

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.whenReady().then(() => {
    myWindow = createWindow()
  })

  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      myWindow = createWindow()
    }
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

  ipcMain.on('app_version', (event) => {
    console.log('perro:app_version')
    event.sender.send('app_version', { version: app.getVersion() });
  });

  ipcMain.on('restart_app', () => {
    console.log('restart_app')
    autoUpdater.quitAndInstall();
  });

  autoUpdater.on('update-available', () => {
    myWindow.webContents.send('update_available');
  });
  autoUpdater.on('update-downloaded', () => {
    myWindow.webContents.send('update_downloaded');
  });
}

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  protocol.interceptFileProtocol('file', (request, callback) => {
    const url = request.url.substr(7)

    callback({ path: path.normalize(`${__dirname}/bundle/${url}`)})
  })


  win.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'file',
    slashes: true
  }))

  win.once('ready-to-show', async () => {
    console.log('ready-to-show')
    const res = await autoUpdater.checkForUpdatesAndNotify();
    console.log(res)
  });

  // const template = [
  //   {
  //     label: 'Actualizar',
  //     submenu: [
  //       {
  //         label: 'Actualizar',
  //         click: async () => {
  //           const { ipcMain } = require('electron');
  //           console.log(ipcMain)
  //           // // const { shell } = require('electron')
  //           // // await shell.openExternal('https://electronjs.org')
  //           // ipcMain.send('restart_app');
  //         }
  //       }
  //     ]
  //   },
  // ]
  // const menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu)

  return win
}
