let numero
console.log('qual seu numero')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero){
if (numero == 0){
    console.log('o numero e zero')}
else if(numero % 2 == 0){
    console.log('o numero e par')}
else {
    console.log('o numero e impar')}
}
