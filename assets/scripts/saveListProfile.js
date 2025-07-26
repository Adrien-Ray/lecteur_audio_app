import { getListProfileInLocalStorage } from "./getListProfileInLocalStorage.js";

export function saveListProfile() {
    let liDOM = document.querySelectorAll('#listFiles > li');
    let liIndexTrigger = [];
    for (let i = 0; i < liDOM.length; i++) {
        const liDOMelement = liDOM[i];
        if (liDOMelement.childNodes[0].checked) {
            liIndexTrigger.push(liDOMelement.childNodes[0].id.replace('checkbox_', ''));
        }
    }
    let initProfile = getListProfileInLocalStorage();
    let indexinitProfile = initProfile.findIndex((element) => element.uuid === document.querySelector('#listProfile_select').value)
    initProfile[indexinitProfile].listFilesUuidList = liIndexTrigger;
    localStorage.setItem('listProfile',JSON.stringify(initProfile));
}