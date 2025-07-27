import { generateUuid } from "./generateUuid.js";
export function constructListProfiles(listProfiles) {
    listProfiles.forEach(profile => {
        let newOptionDOM = document.createElement('option');
        newOptionDOM.id = `option_${profile.uuid}`;
        newOptionDOM.value = `${profile.uuid}`;
        newOptionDOM.innerText = profile.label;
        document.querySelector('#listProfile_select').appendChild(newOptionDOM);
    });
}