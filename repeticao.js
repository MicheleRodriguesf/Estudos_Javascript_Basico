 // Repetição por array
 //array.forEach (element => {
 //})

const cidades = ['São paulo', 'Rio de janeiro', 'Bahia', 'Recife']

cidades.forEach ((elemento, index) => {
   console.log ('Execução numero: ' + index)
   console.log (elemento)
})

 // For normal

for (let index = 0; index < cidades.length; index ++){
    console.log (cidades [index])
}