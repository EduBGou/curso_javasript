function vldNum(obj){
    let num = obj.value
    let elementAlert = document.querySelector('#alert')
    if(num < 0 || num > 10 || num == ''){
        elementAlert.textContent = 'Inisra um Valor Válido'
        elementAlert.className = 'red'
    }else{
        console.log(num)
        elementAlert.textContent = ''
        elementAlert.className = ''
    }
}

let bxGrade01 = document.querySelector('#grade01')
let bxGrade02 = document.querySelector('#grade02')

let bttnCalc = document.querySelector('#bttnCalc')
let bttnClean = document.querySelector('#bttnClean')

let inputAvrg = document.querySelector('#avrg')
let situation = document.querySelector('#situation')

bttnCalc.addEventListener('click', () => {
    let num01 = Number(bxGrade01.value)
    let num02 = Number(bxGrade02.value)
    let avrg = (num01 + num02) / 2

    inputAvrg.value = avrg

    if (avrg >= 7){
        situation.textContent = 'Aprovado!'
    }else if (avrg < 5){
        situation.textContent = 'Reprovado!'
    }else{
        situation.textContent = 'Recuperação.'
    }

})

bttnClean.addEventListener('click', () => {
    bxGrade01.value = ''
    bxGrade02.value = ''

    inputAvrg.value = ''
    situation.textContent = 'Situação do Estudante'
})