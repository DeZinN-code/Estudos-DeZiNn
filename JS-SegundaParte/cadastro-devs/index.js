/*
  cadastro-devs/index.js
  Comentários explicativos adicionados para cada função e blocos principais.
  Objetivo: facilitar entendimento do fluxo que cria campos dinâmicos de tecnologias
  e obtém os valores no submit do formulário.
*/

// Função: createLabel(text, htmlFor)
// - Cria e retorna um elemento <label>.
// - Parâmetros:
//    text: texto exibido dentro do label.
//    htmlFor: id do input associado (atributo for do label).
// - Uso: facilita a criação dinâmica de labels no DOM.
function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

// Função: createInput(id, name, value, placeholder='', type='text')
// - Cria e retorna um elemento <input> configurado.
// - Parâmetros:
//    id: id do elemento (use ids únicos quando necessário).
//    name: nome do input (importante para submissão e para agrupar rádios).
//    value: valor do input (para rádio, é o valor enviado quando selecionado).
//    placeholder: texto placeholder (útil para inputs de texto).
//    type: tipo do input (ex: 'text', 'radio'). Padrão: 'text'.
// - Observação: para criar rádios, passe `type = 'radio'` e use o mesmo `name` para o grupo.
function createInput (id, name, value, placeholder='',type='text') {
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.placeholder = placeholder
    input.type = type
    return input
}

// Selecionando elementos do DOM e inicializando variáveis
// - addTechBtn: botão que adiciona uma nova linha de tecnologia.
// - form: formulário principal.
// - developers: array que armazenará os desenvolvedores cadastrados.
// - inputRows: contador usado para gerar ids únicos para cada linha criada.
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

// Adicionando nova tecnologia
// Quando o usuário clica em 'Adicionar Nova' criamos dinamicamente uma linha
// contendo: input para nome da tecnologia, um grupo de rádios para experiência
// e um botão 'Remover' que exclui a linha.
addTechBtn.addEventListener('click', function (ev) {
    // container onde as linhas serão inseridas
    const stackInputs = document.getElementById('stackInputs')

    // criar item de lista para agrupar os campos desta tecnologia
    const newRow = document.createElement('li')

    // gerando ids únicos por linha (inputRow-0, inputRow-1, ...)
    const rowIndex = inputRows 
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    // Use classe 'inputRow' (minúsculo) porque o código de envio faz query por '.inputRow'
    newRow.className = 'inputRow'

    // --- Campo: nome da tecnologia ---
    // Label do nome da tecnologia (associa-se ao input por id)
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    // Input de texto para o nome; damos um 'name' para facilitar leitura durante o submit
    const techNameInput = createInput('techName-' + rowIndex, 'techName', '')

    // --- Campo: experiência (grupo de rádios) ---
    // Label descritivo para o grupo de rádios
    const expLabel = createLabel('Experiência: ')
    // Todos os rádios deste grupo devem compartilhar o mesmo 'name' para serem mutuamente exclusivos.
    // Aqui usamos 'techExp-<rowIndex>' para que cada linha tenha seu próprio grupo.
    const radioGroupName = 'techExp-' + rowIndex

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, 'techExp-' + rowIndex, '0-2 anos', '', 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, 'techExp-' + rowIndex, '3-4 anos', '', 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, 'techExp-' + rowIndex, '5+ anos', '', 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    // Botão para remover a linha criada
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function() {
        stackInputs.removeChild(newRow)
    })
  
    // adicionando label e input na nova linha, na ordem desejada
    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)
    stackInputs.appendChild(newRow)
})

// --- Tratamento do envio do formulário ---
// Ao submeter, coletamos o nome completo e todas as tecnologias adicionadas dinamicamente.
form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  // seleciona todas as linhas com a classe 'inputRow' (cada linha criada dinamicamente)
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // dentro de cada linha procuramos o input[name="techName"] e o rádio selecionado
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const checkedRadio = document.querySelector('#' + row.id + ' input[type="radio"]:checked')
    // se nenhum rádio estiver selecionado, evitamos erro ao acessar .value
    const techExp = checkedRadio ? checkedRadio.value : ''
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  // limpa formulário e remove as linhas adicionadas
  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  // imprime array de desenvolvedores no console para inspeção
  console.log(developers)
})

