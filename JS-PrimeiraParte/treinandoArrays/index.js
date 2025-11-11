const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragonr", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos no Final do Array
// push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)


// Adicionar no Começo do Array
// unshift

tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)

// Remover Ultimo Elemento
// pop 
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Remover no Começo do Array
// shift 

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


// Pesquisar por um Elemento 
// includes 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// Pesquisar Posição de um Elemento
// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// Dividiar o Array
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// Concatenar os Arrays (Juntar os Arrays)
// concat 
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar Sobre os Elementos

for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}