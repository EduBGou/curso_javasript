function calc() {
    var name = window.document.querySelector('input#name').value
    var spd = Number(window.document.querySelector('input#spd').value)
    var lmt = Number(window.document.querySelector('input#lmt').value)
    var mlt = Number(window.document.querySelector('input#mlt').value)
    var msg = window.document.querySelector('div#msg')
    var total = 0
    if (spd > lmt) {
        total = ((spd - lmt) * mlt)
        msg.innerHTML = `O motorista ultrapassou a velocidade permitida, sendo aplicado a ele uma multa de R$ ${total}.`
    }else{
        msg.innerHTML = `Nada de mais por hoje.`
    }
}