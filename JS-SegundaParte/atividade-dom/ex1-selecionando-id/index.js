const mensage = document.getElementById('mensage') // note 'mensagem'
const button = document.getElementById('button')

button.addEventListener('click', function() {
        mensage.innerText = 'Texto alterado com sucesso!'  
})