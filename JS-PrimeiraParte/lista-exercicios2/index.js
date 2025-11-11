// MEDIAS DE NOTAS DOS ALUNOS
// const name = prompt("Qual o nome do aluno:")

// let noteOne = parseFloat(prompt("Digite a primeira nota"))
// let noteTwo = parseFloat(prompt("Digite a segunda nota:"))
// let noteThree = parseFloat(prompt("Digite a terceira  nota:"))  

// let media =parseFloat(( noteOne + noteTwo + noteThree) / 3)

// if (media >= 7) {
//     alert("Você está aprovado.")
// } else if  (media >= 4 && media <= 6.9) {
//     alert("Você está de recuperação.")
// } else {
//     alert("Você está reprovado.")
// }

// alert ("Notas do aluno(a):" + name +
//     "\n Primeira nota: " + noteOne +
//     "\n Segunda nota: " + noteTwo +
//     "\n Terceira nota: " + noteThree +
//     "\n\n Média do aluno(a): " + media
// )

// CONVERSOR DE MEDIDAS

// let temperature = parseFloat(prompt("Qual o valor da temperatura que deseja calcular?")) 

// do {
//     let response = parseFloat(prompt(
//         "1.Converter de Celsius para Fahrenheit" +
//         "\n2.Converter de Fahrenheit para Celsius " + 
//         "\n 3.Sair"
//     ))
//     switch (response) {
//         case 1:
//             temperature = (temperature * 9/5) + 32
//         alert ("A Conversão de Celcius para Fahrenheit é: " + temperature)
//         break
//         case 2:
//             temperature = 5/9 * (temperature - 32) 
//         alert ("A Conversão de Fahrenheit para Celsius é: " + temperature)
//         break
//     }

// }while (response !== 3)


 // Soma de números até zero
// let number = ""

// let totalSum = 0
// let amountNumber = 0
// let media = 0

// while (number !== 0) {
//     number = parseFloat(prompt("Digite um número:"))
//     amountNumber++ 
//     totalSum += number 
//     media = totalSum / amountNumber

//     if (number === 0){
//         amountNumber--
//     }
// }

// alert ("Soma total dos números digitado: " + totalSum +
//     "\nquantidade de números digitado: " + amountNumber +
//     "\nMédia final dos números digitados: " + media
// ) 


// MENU DE OPERAÇÕES MATEMÁTCAS

// let numberOne = 0 
// let numberTwo = 0

// let response = ""

// do {
//     response = parseFloat(prompt("1) Adição" +
//         "\n2) Subtração" +
//         "\n3) Multiplicação" +
//         "\n4) Divisão" +
//         "\n5) Sair"
//     ))

//     switch (response) {
//         case 1: 
//             numberOne = parseFloat(prompt("Digite o primeiro número para realizar o cálculo de adição:"))
//             numberTwo = parseFloat(prompt("Digite o segundo número para realizar o cálculo de adição:"))    
//             let  addition = numberOne + numberTwo  
            
//             alert("A soma dos dois números é: " + addition)
//         break
//         case 2: 
//             numberOne = parseFloat(prompt("Digite o primeiro número para realizar o cálculo de subtração:"))
//             numberTwo = parseFloat(prompt("Digite o segundo número para realizar o cálculo de subtração:"))    
//             let  subtraction = numberOne - numberTwo  
//             alert("A subtraçãp dos dois números é: " + subtraction)
//         break
//         case 3: 
//             numberOne = parseFloat(prompt("Digite o primeiro número para realizar o cálculo de multiplicação:"))
//             numberTwo = parseFloat(prompt("Digite o segundo número para realizar o cálculo de multiplicação:"))    
//             let  multiplication = numberOne * numberTwo 
            
//             alert("A multiplicação dos dois números é: " + multiplication)
//         break
//         case 4: 
//             numberOne = parseFloat(prompt("Digite o primeiro número para realizar o cálculo de divisão:"))
//             numberTwo = parseFloat(prompt("Digite o segundo número para realizar o cálculo de divisão:"))    

//               if (numberOne && numberTwo === 0) {
//                 alert("Não temos como fazer a divisão por zero.")
//             }
//             let  division = numberOne / numberTwo         
//             alert("A divisão dos dois números é: " + division)
//         break
//     }

// } while (response !== 5)