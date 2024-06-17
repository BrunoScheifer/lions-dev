function calculadora(a, b, operador) {  
    if (operador == '+') {
        return a + b
    }  else if (operador == '-') {
            return a - b
    }  else if (operador == '/') {
            return a / b
    }  else if (operador == '*') {
            return a * b
    }
}

console.log(calculadora(5, 7, '+'))
console.log(calculadora(5, 7, '-'))
console.log(calculadora(5, 7, '/'))
console.log(calculadora(5, 7, '*'))
console.log(calculadora(5, 7, '^'))