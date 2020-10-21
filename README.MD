## How to pack asar

```
cd /Users/jgarciadiaz/Dev/desktop
npx asar pack app-contakto app.asar
cp app.asar app-contakto/node_modules/electron/dist/Electron.app/Contents/Resources
```

## How to generate EXE

```
npx electron-packager . app-contakto --platform=win32 --arch=x64
```
