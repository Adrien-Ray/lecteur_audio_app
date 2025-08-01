import { generateUuid } from "./generateUuid.js";
import { getListFilesInLocalStorage } from "./getListFilesInLocalStorage.js";
import { constructList } from "./constructList.js";

export function addFileListener() {
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
                    uuid: generateUuid()
                })
            } else {
                console.error(`${filePath} n'est pas un mp3`);
            }
        });
        constructList(newInListFiles);
        newInListFiles.forEach(element => {
            initialListFiles.push(element);
        });
        localStorage.setItem('listFiles', JSON.stringify(initialListFiles));
    });
}