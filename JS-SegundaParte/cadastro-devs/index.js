// Função para criar um label
function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
// Função para criar um input
function createInput (id, name, value, placeholder='',type='text') {
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.placeholder = placeholder
    input.type = type
    return input
}

// Selecionando elementos do DOM
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

// Adicionando nova tecnologia
addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    // criando uma linha para os inputs, com id e classe únicos
    const rowIndex = inputRows 
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'InputRow'

    // criando label e input para o nome da tecnologia
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, '')

    /// criando label e inputs para o tempo de experiência
    const expLabel = createLabel('Experiência: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1,  '0-2 Anos', 'techExp-' + rowIndex, type='radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.1'
    const expRadio2 = createInput(id2,  '0-2 Anos', 'techExp-' + rowIndex, type='radio')
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.1'
    const expRadio3 = createInput(id3, '5 ou mais Anos', 'techExp-' + rowIndex, type='radio')
    const expLabel3 = createLabel('5 ou mais Anos', id3)
    
  
    // adicionando label e input na nova linha  
    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3)
    stackInputs.appendChild(newRow)
})