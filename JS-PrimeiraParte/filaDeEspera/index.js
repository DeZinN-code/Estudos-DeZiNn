let fila = []
let responseMenu = ""

do {
    let patients = ""
    for (let i = 0; i < fila.length; i++) {
        patients += (i + 1) + "º - " + fila[i] + "\n"
    }

    responseMenu = prompt("Pacientes:\n" + patients +
        "\nEscolha uma opção: \n" +
        "\n1. Novo paciente" +
        "\n2. Consultar paciente" +
        "\n3.Sair" 
    )

    switch (responseMenu) {
        case "1":
            const newPatients = prompt ("Digite o nome do novo paciente:")
            fila.push(newPatients)
            break
        case "2":
            const consultation = fila.shift()
            if (!consultation) {
                alert("Não há pacientes na fila!")
            } else {
                alert(consultation + "foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert ("Opção inválida.")       
    }

} while(responseMenu !== "3")



// let fila = []
// let opcao = ""

// do {
//   let pacientes = ""
//   for (let i = 0; i < fila.length; i++) {
//     pacientes += (i + 1) + "º - " + fila[i] + "\n"
//   }

//   opcao = prompt(
//     "Pacientes:\n" + pacientes +
//     "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
//   )

//   switch (opcao) {
//     case "1":
//       const novoPaciente = prompt("Qual é o nome do paciente?")
//       fila.push(novoPaciente)
//       break
//     case "2":
//       const pacienteConsultado = fila.shift()
//       if (!pacienteConsultado) {
//         alert("Não há pacientes na fila!")
//       } else {
//         alert(pacienteConsultado + " foi removido da fila.")
//       }
//       break
//     case "3":
//       alert("Encerrando...")
//       break
//     default:
//       alert("Opção inválida!")
//       break
//   }
// } while (opcao !== "3");