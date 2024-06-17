var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares = 0
var mediaImpares = 0

for (let i = 0; i <= 999; i++) {
    if (i % 2 == 0) {
    somaPares += i
    totalPares++
    } else {
        somaImpares += i
        totalImpares++
    }
}
mediaPares = somaPares / totalPares
mediaImpares = somaImpares / totalImpares

console.log(`A soma dos numeros pares é ${somaPares}`)
console.log(`A soma dos numeros impares é ${somaImpares}`)
console.log(`O total de numeros pares é ${totalPares}`)
console.log(`O total de numeros Impares é ${totalImpares}`)
console.log(`A média dos numeros pares é ${mediaPares}`)
console.log(`A média dos numeros impares é ${mediaImpares}`)

if (mediaPares < mediaImpares) {
    console.log('A média dos numeros pares é maior')
} else if  (mediaImpares > mediaPares) {
    console.log('A media dos numeros impares é maior')
} else {
    console.log('A media dos numeros pares é igual a dos impares')
}
