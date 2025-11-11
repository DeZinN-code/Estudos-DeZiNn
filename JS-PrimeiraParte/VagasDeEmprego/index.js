const vagas = []

// Função para listar todas as vagas
function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        // 1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

// Função para criar uma nova vaga
function CriarVagas() {
    const nomeDaVaga = prompt("Informe o nome da vaga:")
    const descricaoDaVaga = prompt("Informe uma descrição da vaga:")
    const dataLimite = prompt("Informe a data limite (dd/mm/aaaa)")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com as seguintes informações?\n" +
        "Nome: " + nomeDaVaga + "\n" +
        "Descrição: " + descricaoDaVaga + "\n" +
        "Data limite: " + dataLimite
    )
    if (confirmacao) {
            const novaVaga = { nome: nomeDaVaga, descricao: descricaoDaVaga, dataLimite: dataLimite, candidatos: [] }
            vagas.push(novaVaga)
            alert("Vaga criada.")
    }
}

function exibirVaga() { 
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]

    if (indice >= vagas.length  || indice < 0 ) {
        alert("Índice inválido.")
        return
    }

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(     
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato:")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato +
        " na vaga " + indice + "?" + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Candidato inscrito.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:" + indice + "?\n" +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")   
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego\n" +
        "Escolha uma das opções abaixo:\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Exibir uma vaga\n" +
        "4. Inscrever um candidato\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
    
        switch (opcao) {
          case "1":
            listarVagas()
            break
          case "2":
            CriarVagas()
            break
          case "3":
            exibirVaga()
            break
          case "4":
            inscreverCandidato()
            break
          case "5":
            excluirVaga()
            break
          case "6":
            alert("Saindo...")
            break
          default:
            alert("Opção inválida.")
        }
    
      } while (opcao !== "6");
    }
    
executar()




