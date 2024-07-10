// Exercicio 1 - estrutura de repetição 
// Percorrer uma lista de nomes, contendo os nomes 
    // mARIA, Eduardo, Fernando, João e Francisco
    // Numero da execução, começando em 1 
    // Nome que está sendo executado
    //Separadores 

// Execução: 1 
//Nome: Eduardo 
// ------------

const names = ['Maria', 'Eduardo', 'Fernado', 'João', 'Francisco ']

names.forEach ((name, index) =>{
   console.log ('Execução:' , + index + 1)
   console.log ('Nome:' +  name)
   console.log ('------------------')
})
