import { generateUuid } from "./generateUuid.js";
import { customPrompt } from "./customPrompt.js";
import { getListProfileInLocalStorage } from "./getListProfileInLocalStorage.js";
import { constructListProfiles } from "./constructListProfiles.js";

function allStateOfCheckboxes(bool = false) {
    document.querySelectorAll('#listFiles li input[type="checkbox"].multiPistModeCheckbox').forEach(element => {
        element.checked = bool;
    });
};

export function menuSpecial() {    
    // listen click on nodeList special
    const listSpecialAction = document.querySelectorAll('.buttonSpecial');
    listSpecialAction.forEach(btnAction => {
        btnAction.addEventListener('click', () => {
            // toggle en fonction du btn les class            
            if (btnAction.id === 'randomMode') {
                document.getElementById('randomMode').classList.toggle('randomModeActive');
            }
            if (btnAction.id === 'multiPistMode') {
                document.getElementById('multiPistMode').classList.toggle('multiPistModeActive');
                document.getElementById('listFiles').classList.toggle('multiPistModeEnabled');
                document.getElementById('multiPistMode_options').classList.toggle('display');
            }
            var isRandomMode = document.querySelector('#randomMode.randomModeActive');
            var isMultiPistMode = document.querySelector('#multiPistMode.multiPistModeActive');
            if (isRandomMode || isMultiPistMode) {
            document.getElementById('lecteur').loop = false;
            }
            if (!isRandomMode && !isMultiPistMode) {
            document.getElementById('lecteur').loop = true;
            }
        })
    });
    document.getElementById('multiPistMode_options_selectAll').addEventListener('click', () => {
        allStateOfCheckboxes(true);
    })
    document.getElementById('multiPistMode_options_selectNone').addEventListener('click', () => {
        allStateOfCheckboxes(false);
    })
    document.getElementById('listProfile_select').addEventListener('change', () => {
        if (document.getElementById('listProfile_select').value) {
            // display save and delete button
            document.getElementById('listProfile_save').classList.add('displayInlineBlock');
            document.getElementById('listProfile_delete').classList.add('displayInlineBlock');
        } else {
            // hide save and delete button
            document.getElementById('listProfile_save').classList.remove('displayInlineBlock');
            document.getElementById('listProfile_delete').classList.remove('displayInlineBlock');
        }
    })
    document.getElementById('listProfile_add').addEventListener('click', () => {
        customPrompt("saisissez le nom du nouveau profile de sélection").then(result => {
            // console.log("Utilisateur a saisi :", result);
            if (result && result != '') {
                const newUuid = generateUuid();
                const newProfileObj = {
                    uuid: newUuid,
                    label: result,
                    listFilesUuidList: []
                }
                // add in localStorage
                let listProfile = getListProfileInLocalStorage();
                listProfile.push(newProfileObj);
                localStorage.setItem('listProfile',JSON.stringify(listProfile));
                // add in DOM
                /* let newOptionDOM = document.createElement('option');
                newOptionDOM.id = `option_${newUuid}`;
                newOptionDOM.value = `${newUuid}`;
                newOptionDOM.innerText = result;
                document.querySelector('#listProfile_select').appendChild(newOptionDOM); */
                constructListProfiles([newProfileObj]);
            }
        });
    });
}