function calculadora(a, b, operador) {  
    switch (operador) {
        case '+' :
            return a + b ;
        case '-' :
            return a - b ;
        case '*' :
            return a * b ;
        case '/' :
            return a / b ;
        default:
            console.log('Operador invalido')
            break;
}
}

console.log(calculadora(5, 7, '+'))
console.log(calculadora(5, 7, '-'))
console.log(calculadora(5, 7, '/'))
console.log(calculadora(5, 7, '*'))
console.log(calculadora(5, 7, '^'))