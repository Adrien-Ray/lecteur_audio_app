export function constructList(listFiles) {
    let contentUl = '';
    for (let i = 0; i < listFiles.length; i++) {
        const file = listFiles[i].name;
        const dir = listFiles[i].path;
        const uuid = listFiles[i].uuid;
        
        //let liDom = `<li id="li_element_${uuid}"><input class="multiPistModeCheckbox" type="checkbox" onclick="document.getElementById('element_${uuid}').classList.toggle('multiPistModeCheck');"><span id="element_${uuid}" data-object='{"file":"${file}","dir":"${dir}"}' onclick="clickItem('${dir}/${file}', 'element_${uuid}');">${dir}/<b>${file}</b></span><button onclick="deleteOneFile('${uuid}')"><img src="./assets/ico/delete.svg" alt="delete file"></button></li>`;
        //contentUl = contentUl+liDom;

        let liDOM = document.createElement('li');
        liDOM.id = `li_element_${uuid}`;

        let liDOM_checkbox = document.createElement('input');
        liDOM_checkbox.setAttribute("class", `multiPistModeCheckbox`);
        liDOM_checkbox.type = 'checkbox';
        liDOM_checkbox.setAttribute("onclick",`document.getElementById('element_${uuid}').classList.toggle('multiPistModeCheck');`);
        liDOM.appendChild(liDOM_checkbox);

        let liDOM_span = document.createElement('span');
        liDOM_span.id = `element_${uuid}`;
        liDOM_span.setAttribute("onclick",`clickItem('${dir.replace("'","\\\'")}/${file.replace("'","\\\'")}', 'element_${uuid}')`);
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
    //document.getElementById('listFiles').innerHTML = document.getElementById('listFiles').innerHTML + contentUl;
    return;
}