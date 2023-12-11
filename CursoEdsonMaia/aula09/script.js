function fThemeMode(tag, mode){
    let obj = document.querySelector(`${tag}`).classList
    console.log(tag, mode)

    obj.forEach(function(className){
        obj.remove(className)
    })

    /*
    for(let i = 0; i < obj.length; i++){
        obj.remove(obj[i])
    }
    */
   
    obj.add(`${mode}`)
}