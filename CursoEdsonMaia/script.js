let name = 'Eduardo Boaro Gouveia'
let weight = 60
let height = 1.7

const imc =  weight / (height * height)

document.write(`${name}, seu IMC é de precisamente: ${imc} <br>`)
document.write(`${name}, seu IMC é de aproximadamente: ${imc.toFixed(2)} <hr>`)