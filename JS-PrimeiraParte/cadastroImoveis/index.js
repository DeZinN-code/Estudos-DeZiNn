let option = ""
let property = []    
do {
    option = prompt(
      "Bem vindo(a) ao cadastro de Imóveis!\n" +
      "Total de imóveis cadastrados: " + property.length +
      "\n\nEscolha uma opção" +
      "\n1. Cadastrar imóvel" +
      "\n2. Mostrar imóveis cadastrados" +
      "\n3. Sair"
    )

    switch (option) { 
        case "1": 
            const propertys = {}
            propertys.owner = prompt("Informe o nome do proprietário:")
            propertys.rooms = prompt("Informe a quantidade de quartos:")    
            propertys.bathrooms = prompt("Informe a quantidade de banheiros:")
            propertys.garage = prompt("O imóvel possui garagem? (Sim/Não)")
            const confirmSave = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + propertys.owner +
                "\nQuartos: " + propertys.rooms +
                "\nBanheiros: " + propertys.bathrooms +
                "\nGaragem: " + propertys.garage
            )   
            if (confirmSave) {
                property.push(propertys)
                alert("Imóvel salvo com sucesso!")
            }
            break   
        case "2":
            for (let i = 0; i < property.length; i++) {  
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + property[i].owner +
                    "\nQuartos: " + property[i].rooms +
                    "\nBanheiros: " + property[i].bathrooms +
                    "\nGaragem: " + property[i].garage
                ) 
            }       
            break
        case "3":
            alert("Encerrando o cadastro de imóveis.")
            break
        default:
            alert("Opção inválida! Por favor, escolha uma opção válida.")
            break
    }
}while (option !== "3");    