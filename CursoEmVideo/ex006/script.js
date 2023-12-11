// VARIÁVEIS GLOBAIS
var img = document.createElement('img')

function checkAge(age, cImg, jImg, aImg, vImg){
    if (age <= 12){
        img.setAttribute('src', cImg)
    }else if (age < 20){
        img.setAttribute('src', jImg)
    }else if (age < 60){
         img.setAttribute('src', aImg)
    }else{
        img.setAttribute('src', vImg)
    }
}
function check(){
    // INPUTS
    var date = new Date()
    var year = date.getFullYear()
    var fYear = Number(window.document.getElementById('txtYearBorn').value)
    var fRes = window.document.getElementById('res')
    
    // VERIFICAÇÕES
    if (fYear <= 1900 || fYear > year){
        window.alert('Tente Novamente, insira a data de nascimento corretamente.')
    }else{
        var fSex = window.document.getElementsByName('radSex')
        var age = year - fYear
        var gender = ''

        // Verificação do Sexo
        if (fSex[0].checked == true){
            gender = 'Homem'

            // Verificação da Idade
            checkAge(age, 'imagens/menino.png', 'imagens/jHomem.png', 'imagens/aHomem.png', 'imagens/vHomem.png')
        }else{
            gender = 'Mulher'

            // Verificação da Idade
            checkAge(age, 'imagens/menina.png', 'imagens/jMulher.png', 'imagens/aMulher.png', 'imagens/vMulher.png')
        }

        // EXIBIÇÃO
        fRes.style.textAlign = 'center'
        fRes.innerHTML = `<p>Verificamos: ${gender} de ${age} anos.</p>`
        fRes.appendChild(img)
        
    }
}