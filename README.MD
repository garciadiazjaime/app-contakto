## How to generate app

```
cd /Users/jgarciadiaz/Dev/desktop/offline-contakto
npm run export
rm -rf ../app-contakto/bundle/*
cp -r __sapper__/export/* ../app-contakto/bundle

<base href=/ >
<base href="./">

href=client
href=./client

href=/client
href=./client
```

## How to pack asar

```
cd /Users/jgarciadiaz/Dev/desktop
rm app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources/app.asar
app-contakto/node_modules/asar/bin/asar.js pack app-contakto app.asar --unpack-dir "{node_modules}"
cp app.asar app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources
```

## How to generate EXE

```
cd /Users/jgarciadiaz/Dev/desktop/app-contakto
npx electron-packager . app-contakto --platform=win32 --arch=x64
```
