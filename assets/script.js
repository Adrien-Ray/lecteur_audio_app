import { constructList } from "./scripts/constructList.js";
import { menuSpecial } from "./scripts/menuSpecial.js";
import { lecteurEnded } from "./scripts/lecteurEnded.js";
import { getListFilesInLocalStorage } from "./scripts/getListFilesInLocalStorage.js";

/*const { dialog } = require('electron');
const fs = require('fs');*/

function addFileListener() {
    document.getElementById('addFileButton').addEventListener('click', async () => {
        const files = await window.electronAPI.openFiles();
        console.log('Fichiers sélectionnés :', files);
        let initialListFiles = getListFilesInLocalStorage();
        let newInListFiles = []
        files.forEach(filePath => {
            if (filePath.endsWith('.mp3')) {
                newInListFiles.push({
                    path: filePath.substring(0, filePath.lastIndexOf('/')),
                    name: filePath.substring(filePath.lastIndexOf('/') + 1),
                    uuid: `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
                })
            } else {
                console.error(`${filePath} n'est pas un mp3`)
            }
        });
        constructList(newInListFiles);
        newInListFiles.forEach(element => {
            initialListFiles.push(element);
        });
        localStorage.setItem('listFiles', JSON.stringify(initialListFiles));
        // location.reload();
    });
}

let listFiles = getListFilesInLocalStorage();
console.log('listFiles', listFiles);

constructList(listFiles);
menuSpecial();
lecteurEnded();
addFileListener();


