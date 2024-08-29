let baralhos = [
    {id: 1, titulo: 'linguagens'},
    {id: 2, titulo: 'coisas em javascript'},
    {id: 3, titulo: 'funçoẽs'}
]

let flashcards = [
    {id: 1, pergunta: 'Quais linguagens mais usadas para criar sites? ', resposta: 'html e css', idBaralho: 1},
    {id: 2, pergunta: 'Quais linguagens mais usadas para criar jogos? ', resposta: 'c# e c++', idBaralho: 1},
    {id: 3, pergunta: 'Quais linguagens mais usadas para criar aplicativos? ', resposta: 'swift e kotlin', idBaralho: 1},

    {id: 4, pergunta: 'Como voçê adiciona uma informação a um vetor? ', resposta: 'Voçê usa a função push', idBaralho: 2},
    {id: 5, pergunta: 'Como voçê exporta uma coisa de um arquivo para usar em outro? ', resposta: 'Voçê usa a funçâo module.exports ', idBaralho: 2},
    {id: 6, pergunta: 'Como voçê importa uma biblioteca para usar no seu código? ', resposta: 'Voçe cria uma variavel com o nome da biblioteca e pega ela usando require ', idBaralho: 2},

    {id: 7, pergunta: 'Como voçê passa argumentos para uma função', resposta: 'Voçê coloca ela entre os parênteses ao chamar a função', idBaralho: 3},
    {id: 8, pergunta: 'Oque é uma função callback? ', resposta: 'È um argumento em uma função usada ao terminar uma função ', idBaralho: 3},
    {id: 9, pergunta: 'Como voçê retorna um valor em uma função? ', resposta: 'Voçê usa a função return', idBaralho: 3}
]

module.exports = { baralhos, flashcards }