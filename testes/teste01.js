function fibonacci(n){
    let a = 0; let b = 1
    console.log(`${a},\n${b}`)
    for (let i = 0; i < n - 2; i++){
        let c = a + b
        console.log(`${c},`)
        a = b; b = c
    }
}
fibonacci(50)