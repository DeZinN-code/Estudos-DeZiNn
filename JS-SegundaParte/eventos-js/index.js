function register (ev) {
    console.log(ev)
    // Pegando o Evento do botão de registro e o ParentNode (section)
    const sectionElement = ev.currentTarget.parentNode
    
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirm = sectionElement.children.passwordConfirm.value
}

const button = document.getElementById('register-button')
// Adicionando o evento de click ao botão
button.addEventListener('click', register)

// Removendo o evento de click do botão
function removeEvent () {
    button.removeEventListener('click', register)
    alert('Evento removido com sucesso!')
}
// Adicionando o evento de mouseover ao botão
button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)

})


