function fCount(){
    let start = document.getElementById('txtNumbStart').value
    let end = document.getElementById('txtNumbEnd').value
    let step = document.getElementById('txtNumbStep').value
    let res = document.getElementById('res')

    if(start.length == 0 || end.length == 0 || step.length == 0){
        window.alert('[ERRO] Insira od dados corretamente.')
    }else{
        start = Number(start)
        end = Number(end)
        step = Number(step)

        res.innerHTML = 'Contagem Solicitada: <br>'
        
        for(var i = start; i <= end; i += step){
            if (i >= end - step){
                res.innerHTML += `<strong>${i}</strong>`
            }else{
                res.innerHTML += `${i} => `
            }
        }
    }
}
