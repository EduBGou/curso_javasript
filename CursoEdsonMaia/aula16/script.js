let imgDice = document.querySelector('#imgDado')
let pDrawn = document.querySelector('#drawn')
let btnDraw = document.querySelector('#btnDraw')
let soundRollingDice = document.querySelector('#dadoRolando')

btnDraw.addEventListener('click', function(){
    soundRollingDice.play()
    btnDraw.style.display = 'none'

    setTimeout(function(){
        drawNum = Math.floor(Math.random() * 6) + 1
        console.log(drawNum)
        pDrawn.textContent = String(drawNum)
        imgDice.setAttribute('src', `images/${drawNum}.png`)
        btnDraw.style.display = 'inline-block'
    }, 1000)
})
