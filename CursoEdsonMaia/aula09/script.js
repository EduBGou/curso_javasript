function fThemeMode(tag, mode, removeMode){
    let obj = document.querySelector(`${tag}`)
    console.log(tag, mode)

    obj.classList.add(`${mode}`)
    obj.classList.remove(`${removeMode}`)
}