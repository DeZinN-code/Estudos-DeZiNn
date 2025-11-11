// let number = parseFloat(prompt("Digite um número:"))

// if (number % 2 === 0) {
//     alert ("Esse número é par")
// } else {
//     alert ("Esse número é ímpar")
// }

// const age = parseFloat(prompt("Digite a sua idade:"))

// if (age <= 12) {
//     alert("Você é uma criança.")
// } else if (age >= 13 && age <= 17) {
//     alert ("Você é um adoslescente.")
// } else if (age >= 18 && age <= 59) {
//     alert ("Você é um adulto.")
// } else {
//     alert("Você é um idoso.")
// }

// const day = parseFloat(prompt("Digite um número de 1 a 7 para escolher o dia da semana:"))

// //  switch (day) {
// //     case 1:
// //         alert("Você escolheu Domingo.")
// //         break
// //     case 2:
// //         alert("Você escolheu Segunda-feira.")
// //         break
// //     case 3:
// //         alert("Você escolheu Terça-feira.")
// //         break
// //     case 4:
// //         alert("Você escolheu Quarta-feira.")
// //         break
// //     case 5:
// //         alert("Você escolheu Quinta-feira.")
// //         break
// //     case 6:
// //         alert("Você escolheu Sexta-feira.")
// //         break
// //     case 7:
// //         alert("Você escolheu Sábado.")
// //         break
// //     default:
// //         alert ("Erro.")
// //  }

// let number = parseInt(prompt("Digite um número para ser feito a tabuada:"))

// let count = 1

// while (count <= 10){
//     console.log(number + " x " + count + " = " + (number * count))
//     count++



// let password 

// do {
//     password = prompt("Digite a senha:")
// } while (password !== "1234")

// alert ("Acesso permitido!")    


// let options 

// do {
//     options = parseFloat(prompt ("Escolha uma opção: \n1)Olá, André" +
//         "\n 2) Mostrar Data" + 
//         "\n 3)Sair"
//     ))
//     switch (options){
//         case 1: 
//             alert("Olá, André")
//             break
//         case 2:
//             alert ("Hoje é " +new Date().toLocaleDateString())
//             break
//         case 3:
//             alert ("Saindo do programa...")
//             break
//         default:
//             alert("Opção inválida!")
//     }
// } while (options !== 3)


 

// let positive = 0
// let negative = 0
// let number 
// let zeros = 0

// number = parseFloat(prompt("Digite um número (Digite 0 para parar):"))

// while (number !== 0) {
//     if (number > 0) {
//         positive++
//     }
//     else if (number < 0) {
//         negative ++
//     } else {
//         zeros++
//     }
//     number = parseFloat(prompt("Digite um número (Digite 0 para parar):"))
// }

// alert ("Números positivos: " + positive +
//     "\n Números negativos: " + negative +
//     "\n Zeros: " + zeros
// )


// let number = parseFloat(prompt("Digite um valor: R$"))


// if (number % 10 !== 0){
//     alert("Erro, valor inválido!")
// } else {
//     let hundred = Math.floor(number / 100)
//     number %= 100

//     let fifty = Math.floor(number / 50)
//     number %= 50

//     let twenty = Math.floor(number / 20)
//     number %= 20

//     let ten = Math.floor(number / 10)
    
//     alert(
//     "Notas entregues:\n" +
//     "R$100: " + hundred + "\n" +
//     "R$50: " + fifty + "\n" +
//     "R$20: " + twenty + "\n" +
//     "R$10: " + ten
// )
// }

