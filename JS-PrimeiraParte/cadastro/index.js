const primeironome = prompt ("Digite seu nome: ")
console.log(primeironome)

const sobrenome = prompt ("Digite seu sobrenome: ")
console.log(sobrenome)

const estudos = prompt ("Qual sua área de estudos: ")
console.log(estudos)

const nascimento = prompt ("Qual ano que você nasceu: ")
console.log(nascimento)

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeironome + " " + sobrenome + " " + 
    "\nCampo de estudos: " + estudos + " " +
    "\nIdade: " + (2025 - nascimento)
)