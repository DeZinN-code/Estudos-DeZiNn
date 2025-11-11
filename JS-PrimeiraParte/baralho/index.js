const cheap = []
let option = ""

do {
    option = prompt("Cartas do baralho:" + cheap.length +
        "\nEscolha uma opção:" +
        "\n1. Adicionar carta " +
        "\n2. Puxar carta" +
        "\n3. Sair"
    )

    switch (option) {
        case "1": 
            const newCard = prompt ("Digite o nome da carta que deseja adicionar:")  
            cheap.unshift(newCard)
            break 
        case "2":   
            const pullCard = cheap.shift()  
            if (!pullCard) {  
                alert("Não há cartas no baralho!")
            } else {
                alert(pullCard + " foi removida do baralho.")
            }
            break   
        case "3":
            alert("Encerrando...")
            break   
        default:
            alert ("Opção inválida.")}


} while (option !== "3")
