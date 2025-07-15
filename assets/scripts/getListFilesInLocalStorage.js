export function getListFilesInLocalStorage() {
    if (!localStorage.getItem('listFiles')) {
        localStorage.setItem('listFiles','[]')
    }
    return JSON.parse(localStorage.getItem('listFiles'));
}