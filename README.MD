# Powered by Mint
[Web Development Tijuana](https://www.mintitmedia.com/)

## How to pack asar

```
cd ~/Dev/desktop
rm app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources/app.asar
app-contakto/node_modules/asar/bin/asar.js pack app-contakto app.asar --unpack-dir "{node_modules}"
cp app.asar app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources
```

## How to generate EXE

```
cd ~/Dev/desktop/app-contakto
npx electron-packager . app-contakto --platform=win32 --arch=x64
npx electron-packager . app-contakto --platform=win32 --arch=ia32

rm -rf ../app-contakto-win32-x64
mv app-contakto-win32-x64 ../
mv app-contakto-win32-ia32/ ../
cd ..
zip -r app-contakto-win32-x64.zip app-contakto-win32-x64
zip -r app-contakto-win32-ia32.zip app-contakto-win32-ia32
```
