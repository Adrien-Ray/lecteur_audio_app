import { newCall } from "./newCall.js";

export function lecteurEnded() {
    console.log('in lecteurEnded');
    
    // listen ended
    document.getElementById('lecteur').addEventListener('ended',() => {
        console.log('in lecteurEnded listener scope');
        
        // check special bool bool
        var isRandomMode = document.querySelector('#randomMode.randomModeActive');
        var isMultiPistMode = document.querySelector('#multiPistMode.multiPistModeActive');
        if (!isRandomMode && !isMultiPistMode) {
            // if false false -> loop true
            document.getElementById('lecteur').loop = true;
        } else {
            // else  loop false
            document.getElementById('lecteur').loop = false;
            let itemDOMcssSelector;
            //       if *** true -> crée liste restreinte
            if (isMultiPistMode) {
                itemDOMcssSelector = true;
                //           if false true -> nextCall()
                if (!isRandomMode && isMultiPistMode) {
                    newCall(itemDOMcssSelector,false);
                }
                //           if true true -> randomCall()
                if (isRandomMode && isMultiPistMode) {
                    newCall(itemDOMcssSelector,true);
                }
                
            }
            if (isRandomMode && !isMultiPistMode) {
                itemDOMcssSelector = false;
                //       if true false -> randomCall() (sans list restreinte)
                    newCall(itemDOMcssSelector,true);
                
            }
            
        }
    });
}