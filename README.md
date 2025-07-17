# lecteur_audio_app

```sh
git clone git@github.com:Adrien-Ray/lecteur_audio_app.git

npm install

# mode dev
npm start
# mode build
npm run build
# le build apparait dans le dossier /dist/
electron-builder --linux
electron-builder --win
electron-builder --mac

sudo snap install --dangerous ./dist/lecteur-audio-xxx.snap

sudo snap remove lecteur-audio-app
```

## expérimental (get /media/)

```sh
# démarrer dev pour get les bons paths
GTK_USE_PORTAL=0 npm start

# en téorie (mais lock par système)
sudo snap install --dangerous --classic ./myapp_amd64.snap
```