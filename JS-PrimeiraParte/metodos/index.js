// MÉTODOS EM OBJETOS
let pessoa = {
    nome: "André",
    idade: 20,
    dizerOla: () => {
        console.log("Olá meu nome é " + pessoa.nome)
    }
}
console.log(pessoa)
pessoa.dizerOla()

//FUNÇÕES RECURSIVAS
// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
  console.log(num)
  if (num % 2 === 0) {
    dividir(num / 2)
  } else {
    return num
  }
}
dividir(256)

// É fundamental que uma função recursiva tenha uma forma de parar de chamar novas funções
function dobrar(num) {
  console.log(num)
  dobrar(num * 2)
}
dobrar(1) // Estoura a pilha de chamadas

// Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(num) {
  console.log("num = " + num)
  if (num === 0) { // caso base
    return 1
  } else if (num === 1) { // caso base
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
  }
}
console.log("\n!5 = " + fatorial(5))
console.log("\n!0 = " + fatorial(0))
console.log("\n!9 = " + fatorial(9))

// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores
function somar(a, b) {
  return a + b
}
// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
const operacao = somar
console.log(operacao(4, 5))


// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
const subtrair = function (a, b) {
  return a - b
}
console.log(subtrair(36, 13))

// Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))

// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}