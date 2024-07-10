// Funções
// Precisa chamar 
// Pode ou não receber receber parâmetros 
// Pode ou não retornar dados  (retorno)

function gerarNome (nome, sobrenome, idade) {
    console.log ('Nome:', nome  +  sobrenome)
    console.log ('Idade:',idade)
}

function gerarNome (nome, sobrenome) {
    return ('Nome: ' + nome + sobrenome)
}

console.log (gerarNome ('Luiz', ' da Silva', 18))

const nomeGerado = gerarNome ('Pedro', ' Carvalho')

console.log (nomeGerado)
