var numeros = [27, 10, 3, 0, 20, 5, 6, 3]
var numerosPares = []
var numerosImpares = []

numeros.push(99)

for (let i = 0; i < numeros.length; i ++) {
    if (numeros[i] % 2 == 0) {
        numerosPares.push(numeros[i])
    } else if (numeros[i] % 2 != 0) {
        numerosImpares.push(numeros[i])
    }
}
console.log(`Todos os numeros são ${numeros}`)
console.log(`Os numeros pares são ${numerosPares}`)
console.log(`Os numeros impares são ${numerosImpares}`)