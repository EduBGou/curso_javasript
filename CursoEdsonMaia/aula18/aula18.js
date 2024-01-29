// === INPUTS === //
let input_in_real = document.querySelector('#value-in-real')
let value_in_real
let convert_button = document.querySelector('#convert-button')
let foreing_currency = document.getElementsByName('foreing-currency')
let warning = document.querySelector('#warning')

let exchange_values = [4.91, 5.34, 6.25, 205300.73]
let final_value = Number()


// === FUNCTIONS === //
function validate_value()
{
    value_in_real = parseInt(input_in_real.value)

    if (value_in_real < 0 || isNaN(value_in_real)){
        can_convert = false
        warning.textContent = 'Invalide value!'
        convert_button.setAttribute('disabled', 'disabled')

        setTimeout(function(){
            warning.textContent = ''
        }, 3000)

    }else{
        can_convert = true
        convert_button.removeAttribute('disabled')
        warning.textContent = 'Valide value!'
    }
}


function convert_currencies()
{
    for(let i = 0; i < foreing_currency.length; i++){
        if (foreing_currency[i].checked){
            final_value = value_in_real / exchange_values[i]
            warning.textContent = final_value
        }
    }
}