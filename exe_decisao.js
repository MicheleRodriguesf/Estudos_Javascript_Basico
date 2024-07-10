// Exercicio 2 - Estrutura de decisão

// Percorrer uma lista de cidades 
// Contendo: [são paulo, rio de janeiro, florianopolis, recife]
// Para cada item, verificar se a cidade florianopolis está presente na lista
// Caso esteja avisar,
// Caso não esteja o elemento procurado, avisar 
// Numero de execução

// Execução: 1
// Cidade: São Paulo
// encontrado / Não encontrando
// ------------------------

const city = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

city.forEach ((cidade, index)=>{
    console.log ('Execução:', index + 1)
    console.log ('cidade:' , cidade)

    if (cidade == 'Florianópolis'){
        console.log (' Encontrado')
    } else {
        console.log (' Não encontrado')
    }
    console.log ('-------------------------')
})