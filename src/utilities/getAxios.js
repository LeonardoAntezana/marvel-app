// const keyPublic = '4442ef4e3aae679fff0e2f6e19e96be8'
// const keyPrivate = 'b8a537f700a69642e6ea508e3623302f2257f6e9'
// const hash = '32bfa31ec597ede355ace93746fefec1'

export const getLocalStorage = key => {
    const dataStorage = localStorage.getItem(key)
    return dataStorage;
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}