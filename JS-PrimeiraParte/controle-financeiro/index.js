let money = parseFloat(prompt("Qual a sua quantidade de dinheiro disponível:"))

let response = ""
let remove = 0
let add = 0

do {
    response = parseFloat(prompt("Você tem R$ " + money + " reais." +
        "\n1) Adicionar" +
        "\n2) Remover" +
        "\n3) Sair"
    ))
    
    if (response === 1) {
        add = parseFloat(prompt("Quanto você quer adicionar?"))
        money += add
        alert ("Sua quantia atual é: R$ " + money)
    } else if (response === 2) {
        remove = parseFloat(prompt("Quanto você quer remover?"))
        money -= remove
        alert ("Sua quantidade atual é: R$ " + money)
    } else {
        alert ("Seu total final é: R$ " + money)
        alert ("Encerrando controle financeiro...")
    }

} while (response !== 3)
