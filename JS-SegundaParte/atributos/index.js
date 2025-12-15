const input = document.getElementById('input')

// ---------- 1) Propriedade `value` vs atributo `value` ----------
// Alterar `input.value` muda o valor atual do campo (propriedade do elemento),
// enquanto `getAttribute('value')` lê o valor escrito no HTML inicial (atributo).
document.getElementById('value').addEventListener('click', function () {
    // Atualiza a propriedade (valor atual do campo)
    input.value = 'Olá Mundo!'

    // Mostra o valor atual (propriedade)
    console.log(input.value)
    // Mostra o atributo declarado no HTML (pode estar desatualizado)
    console.log(input.getAttribute('value'))
})


// ---------- 2) Alternar o tipo do input (text <-> radio) ----------
// Mudar o `type` transforma o comportamento do elemento em runtime.
// Aqui também sincronizamos o atributo no markup apenas como demonstração.
document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    input.setAttribute('type', input.type)
})


// ---------- 3) Placeholder (texto de ajuda) ----------
// Define o texto de ajuda exibido quando o campo está vazio.
document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo aqui...'
})


// ---------- 4) Habilitar / Desabilitar ----------
// Evite usar `setAttribute('disabled', false)` para habilitar; prefira a propriedade `disabled`.
document.getElementById('disable').addEventListener('click', function () {
    // Alterna entre desabilitar e habilitar o input
    input.setAttribute('disabled', !input.disabled)
})

document.que('data').addEventListener('click', function () {
  const data = input.dataset.somethingElse
  console.log("O valor do atributo data-something-else é: " + data)
  input.dataset.somethingElse = 'Algum outro valor'
  console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})