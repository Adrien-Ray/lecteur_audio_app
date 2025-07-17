# lecteur_audio_app

```sh
git clone git@github.com:Adrien-Ray/lecteur_audio_app.git

npm install

# mode dev
npm start
# mode build - snap, deb et AppImage
npm run build
```

## .deb RECOMMENDED

```sh
# build
npx electron-builder --linux deb
# install
sudo dpkg -i mon_app.deb
# éventuellement : installer les dépendances : 
sudo apt-get install -f

# désinstallation complète
sudo apt remove lecteur-audio-app
sudo apt purge mon_app
sudo apt autoremove
rm -rf ~/.config/lecteur-audio-app
```

## .snap NOT RECOMMENDED


```sh
# build
npx electron-builder --linux snap
# le build apparaît dans le dossier /dist/
electron-builder --linux
electron-builder --win
electron-builder --mac

sudo snap install --dangerous ./dist/lecteur-audio-xxx.snap

sudo snap remove lecteur-audio-app
```