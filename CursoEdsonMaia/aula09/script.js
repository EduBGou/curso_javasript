function fThemeMode(tag, mode){
    let obj = document.querySelector(`${tag}`).classList
    console.log(tag, mode)

   obj.forEach(function(className){
        obj.remove(className)
    })
    obj.add(`${mode}`)
}