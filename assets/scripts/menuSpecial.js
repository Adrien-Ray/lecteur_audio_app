function allStateOfCheckboxes(bool) {
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
    });
}