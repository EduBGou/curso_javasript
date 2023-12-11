// ArrowFunctions (de 1 linha)
const loaded = () => console.log('A página foi carregada com sucesso!')

const mouseOver = () => console.log('O usuário colocou o mouse sobre a DIV.')

const inFocus = () => console.log('O usuário está em foco no Campo de Texto.')

const inblur = () => console.log('O usuário NÃO está mais em foco no Campo de Texto.')

// ArrowFunctions (+ de 1 linha)
const notifyPressed = () => {
    let characters = document.querySelector('#inputText').value
    console.log(`O usuário digitou ${characters.length + 1} caracteres.`)
}

// EventListener
let anyButton = document.querySelector('#anyBtn')
let buttonSubmit = document.querySelector('#btnSubmit')

anyButton.addEventListener('click', function(){
    console.log('O usuário clicou no Botão Qualquer.')
})

buttonSubmit.addEventListener('click', function(event){
    event.preventDefault()
    console.log('O usuário clicou em Enviar.')
})