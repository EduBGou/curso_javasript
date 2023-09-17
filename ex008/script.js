function table(){
    let num = document.getElementById('txtNum').value
    let lmt = document.getElementById('txtLmt').value
    let mtd = document.getElementsByName('radMethod')
    let res = document.getElementById('res')

    if (num.length == 0 || lmt.length == 0){
        window.alert('Preencha todos os campos corretamente')
    }else{
        let n = Number(num)
        let l = Number(lmt)
        res.innerHTML = ''

        if (mtd[0].checked == true){
            for(let i = 0; i <= lmt; i++){
                res.innerHTML += `${n} x ${i} = ${n * i}<br>`
            }
        }else if (mtd[1].checked == true){
            let tab = document.createElement('select')
            tab.size = 6
            
            res.appendChild(tab)
            tab.innerHTML = ''

            for (let i = 0; i <= lmt; i++){
                let opt = document.createElement('option')
                opt.text = `${n} x ${i} = ${n * i}`
                opt.value = `tab${i}`
                tab.appendChild(opt)
            }
        }
    }
}
