function cleanUrl(string) {
    string = string.replace("'","\\'");
    string = string.replace("#","%23");
    return string;
}

export function constructList(listFiles) {
    for (let i = 0; i < listFiles.length; i++) {
        let file = listFiles[i].name;
        let fileClean = cleanUrl(file);
        let dir = listFiles[i].path;
        let dirClean = cleanUrl(dir);
        const uuid = listFiles[i].uuid;
        
        let liDOM = document.createElement('li');
        liDOM.id = `li_element_${uuid}`;

        let liDOM_checkbox = document.createElement('input');
        liDOM_checkbox.setAttribute("class", `multiPistModeCheckbox`);
        liDOM_checkbox.id = `checkbox_${uuid}`;
        liDOM_checkbox.type = 'checkbox';
        liDOM.appendChild(liDOM_checkbox);

        let liDOM_span = document.createElement('span');
        liDOM_span.id = `element_${uuid}`;
        liDOM_span.setAttribute("onclick",`clickItem('${dirClean}/${fileClean}', 'element_${uuid}')`);
        liDOM_span.appendChild(document.createTextNode(`${dir}/`));

        let liDOM_span_b = document.createElement('b');
        liDOM_span_b.appendChild(document.createTextNode(`${file}`));

        liDOM_span.appendChild(liDOM_span_b);
        liDOM.appendChild(liDOM_span);
        document.getElementById('listFiles').appendChild(liDOM);

        let liDOM_delete = document.createElement('button');
        liDOM_delete.setAttribute("class", `deleteOneFile`);
        liDOM_delete.setAttribute("onclick",`deleteOneFile('${uuid}')`);

        let liDOM_delete_img = document.createElement('img');
        liDOM_delete_img.src = './assets/ico/delete.svg';
        liDOM_delete_img.alt = 'delete file';
        liDOM_delete.appendChild(liDOM_delete_img);
        liDOM.appendChild(liDOM_delete);

    }
    return;
}