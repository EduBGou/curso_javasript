

let bxGrade01 = document.querySelector('#grade01')
let bxGrade02 = document.querySelector('#grade02')

function vldNum(){
    num01 = bxGrade01.value
    num02 = bxGrade02.value

    if(num01 < 0 || num01 > 10 || num02 < 0 || num02 > 10 || num01 == '' || num02 == ''){
        let alert = document.querySelector('#alert')
        alert.textContent = 'Inisra um valor Válido'
    }else{
        console.log(num01, num02)
        alert.textContent = ''
    }
}