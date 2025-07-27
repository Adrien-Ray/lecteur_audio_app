import { constructList } from "./scripts/constructList.js";
import { constructListProfiles } from "./scripts/constructListProfiles.js";
import { getListProfileInLocalStorage } from "./scripts/getListProfileInLocalStorage.js";
import { menuSpecial } from "./scripts/menuSpecial.js";
import { lecteurEnded } from "./scripts/lecteurEnded.js";
import { getListFilesInLocalStorage } from "./scripts/getListFilesInLocalStorage.js";
import { addFileListener } from "./scripts/addFileListener.js";

constructList(getListFilesInLocalStorage());
constructListProfiles(getListProfileInLocalStorage());
menuSpecial();
lecteurEnded();
addFileListener();
