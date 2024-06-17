const readline = require('readline') 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let rodadas = 0
let maxrodadas = 10

const numero = Math.floor(Math.random() * 100) + 1

console.log('Bem vindo')
function palpite() {
    rodadas++
    if(rodadas < maxrodadas){
        console.log('y')
        rl.question('Qual numero voce acha que é? ', (resposta) => {
            console.log(`Voce digitou ${resposta}`)
            if(rodadas <= maxrodadas){
            switch (true) {    
                case (resposta > numero):
                    console.log('Muito Alto')
                    palpite()
                    break;
                case (resposta < numero):
                    console.log('Muito Baixo')
                    palpite()
                    break;
                case (resposta == numero):
                    console.log('Voce acertou')
                    console.log(`O numero de rodadas para acertar foi ${rodadas}`)
                    rl.close();
                default:
                    console.log('Invalido')
                    palpite()
                    break;
            } 
        } else {
                console.log(`O numero de rodadas excedeu o maximo`)
                rl.close()
        }
        })
    }
}
palpite()