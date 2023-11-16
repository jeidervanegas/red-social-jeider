const STORAGE_KEY = '__token'

export function saveToken(token) {
    localStorage.setItem(STORAGE_KEY, token)
}

export function getToken() {
    return localStorage.getItem(STORAGE_KEY)
}
