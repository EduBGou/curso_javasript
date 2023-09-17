let numList = []
let selNum = document.createElement('select')

function numInList(name, num){
    if (name.indexOf(num) != -1){
        return true
    }else{
        return false
    }
}

function numAnalizer(elementTableId, elementNumberId){
    let table = document.getElementById(elementTableId)
    let objNum = document.getElementById(elementNumberId)
    let number = objNum.value

    // VERIFICAÇÃO DO VALOR
    if (numInList(numList, Number(number))){
        window.alert(`O valor ${number} já pertence a lista.`)

    }else{
        if ((number.length == 0 || Number(number) < 0 ||  Number(number) > 100)){
            window.alert('Insira um valor válido.')

        }else{
            // CRIANDO A TABELA
            table.innerHTML = ''
            selNum.size = 6
            numList.push(Number(number)) // Adicionando à lista

            // FORMULANDO AS OPÇÕES
            let optNum = document.createElement('option')
            optNum.text = number
            optNum.value = `num${numList.length}`

            // EXIBIÇÃO
            selNum.appendChild(optNum)
            table.appendChild(selNum)
            objNum.value = ""
            objNum.focus()
        }
    }
}


function result(elementId){
    if (numList.length == 0){
        window.alert = "Preencha com algum valor antes de finaliar."
    }else{
        let res = document.getElementById(elementId)
        let listSize = numList.length
        let sum = 0
        let higher = numList[0]
        let smallest = numList[0]

        // SOMA, MAIOR e MENOR
        for (let i in numList){
            sum += numList[i]
            if (numList[i] > higher) 
                higher = numList[i]
            if (numList[i] < smallest)
                smallest = numList[i]
        }
        
        // MEDIA
        let media = sum / listSize

        // SHOW
        res.innerHTML = `
        <ul>
        <li>Ao todo, temos ${listSize} cadrastos;</li>
        <li>O maior número informado foi ${higher};</li>
        <li>O menor número informado foi ${smallest};</li>
        <li>Somando os valores, temos: ${sum};</li>
        <li>A média dos valores digitados é ${media}.</li>
        </ul>`
    }
}