// Seleciona todos os elementos <li> na página
// e adiciona um símbolo de checkmark (✔) ao final do texto de cada item.
// Dica: use o loop forEach para iterar sobre a lista de itens selecionados.
const item = document.querySelectorAll('li')
item.forEach(item => {
    item.textContent = item.textContent + '✔'
})