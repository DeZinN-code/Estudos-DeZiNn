const entrada1 = prompt("Digite um valor: ")
const entrada2 = prompt("Digite outro valor: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y 
const sub = x - y 
const mult = x * y
const divi = x / y 


alert ( 
    "Resultados:\n" + 
    "\nO valor da soma é: " + soma +
    "\nO valor da subtração é: " + sub +
    "\nO valor da multiplicação  é: " + mult +
    "\nO valor da divisão é: " + divi

)