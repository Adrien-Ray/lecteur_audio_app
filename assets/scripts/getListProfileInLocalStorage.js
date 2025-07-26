export function getListProfileInLocalStorage() {
    if (!localStorage.getItem('listProfile')) {
        localStorage.setItem('listProfile','[]')
    }
    return JSON.parse(localStorage.getItem('listProfile'));
}