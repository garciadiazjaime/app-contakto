const { app, BrowserWindow, protocol, dialog, nativeImage } = require('electron')
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

let onlineStatusWindow

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
    console.log('url', url, path.normalize(`${__dirname}/${url}`))

    callback({ path: path.normalize(`${__dirname}/bundle/${url}`)})
  })


  win.loadURL(url.format({
    pathname: 'index.html',
    protocol: 'file',
    slashes: true
  }))

  // Open the DevTools.
  // win.webContents.openDevTools()
  onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
  onlineStatusWindow.loadURL(`file://${__dirname}/index.html`)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

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
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
