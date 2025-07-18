export function newCall(
    checkedRequired = false,
    isRandomMode = false
) {
    let liDOM = document.querySelectorAll('#listFiles > li'); // return nodeList checkboxes
    console.log('liDOM',liDOM);
    let liIndexTrigger = [];
    let actualIndex = false;
    for (let i = 0; i < liDOM.length; i++) {
        const liDOMelement = liDOM[i];
        console.log(liDOMelement);
        if (liDOMelement.childNodes[1].classList.contains('current')) {
            actualIndex = i;
        }
        if (checkedRequired) {
            if (liDOMelement.childNodes[0].checked) {
                liIndexTrigger.push(i);
            }
        } else {
            liIndexTrigger.push(i);
        }
    }
    if (isRandomMode) {
        let randomIndex = Math.floor(Math.random() * liIndexTrigger.length);
        let randomIndexValue = liIndexTrigger[randomIndex];
        let randomItem = liDOM[randomIndexValue].childNodes[1];
        randomItem.click();
    } else {
        let nextIndex;
        nextIndex = liIndexTrigger.find((nextVal) => nextVal > actualIndex);
        if(!nextIndex) {
            nextIndex = liIndexTrigger[0];
        };
        let nextItem = liDOM[nextIndex].childNodes[1];
        setTimeout(() => {
            nextItem.click();
        }, 100);
    }
    return;
}