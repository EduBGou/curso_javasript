// INPUTS
let secret_num = Number()
let situation = String()

let input_num       = document.querySelector('#inputNum')
let button_guess    = document.querySelector('#buttonGuess')
let button_sound    = document.querySelector('#buttonSound')
let warning         = document.querySelector('#warning')
let bgSound         = document.querySelector('#backgroundSound')


// FUNCTIOS
function generate_secret_num()
{
    secret_num = Math.floor(Math.random() * 10) + 1
    console.log(`Secret Number = ${secret_num}`)
}


function validate_entered_num(value)
{
    if (value < 1 || value > 10){
        warning.textContent = 'Enter a valid number'
        button_guess.setAttribute('disabled', 'disabled')

        setTimeout(function(){
            warning.textContent = ''
            input_num.value = ''
        }, 3000)
    }else{
        warning.textContent = ''
        button_guess.removeAttribute('disabled')
    }
}


function play_game()
{
    let num = parseInt(input_num.value)

    if (num === secret_num){
        situation = 'is_right'
    }
    else if (num < secret_num){
        situation = 'missed_guess_is_small'
        console.log(num < secret_num, situation)
    }
    else if (num > secret_num){
        situation = 'missed_guess_is_big'
        console.log(num > secret_num, situation)
    }

    switch (situation)
    {
        case 'is_right':
            warning.textContent = "You're right! (play again)"
            generate_secret_num()
            break

        case 'missed_guess_is_small':
            warning.textContent = "You missed! (the secret number is bigger)"
            break

        case 'missed_guess_is_big':
            warning.textContent = "You missed! (the secret number is smaller)"
            break

        default:
            warning.textContent = 'Situation not found!'
    }
}


function turn_sound()
{   
    if (bgSound.paused){
        bgSound.play()
    }else{
        bgSound.muted = !bgSound.muted
    }
}