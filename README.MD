## How to pack asar

```

cp -r app/__sapper__/export/* src

cd /Users/jgarciadiaz/Dev/desktop/app-contakto/app
npm run export
cd ..
<base href=/ >
<base href="./">


cd /Users/jgarciadiaz/Dev/desktop

rm app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources/app.asar
cd app-contakto
app-contakto/node_modules/asar/bin/asar.js pack app-contakto app.asar --unpack-dir "{node_modules}"
cp app.asar app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources
```

## How to generate EXE

```
npx electron-packager . app-contakto --platform=win32 --arch=x64
```
