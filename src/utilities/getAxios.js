export const getLocalStorage = key => {
    const dataStorage = localStorage.getItem(key)
    return dataStorage;
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}