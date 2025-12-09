const addMessage = document.getElementById('addMessage')

addMessage.addEventListener('click', function () {
    
     const name = document.getElementById('name')
     const newMessage = document.createElement('li')
     
     newMessage.innerText = name.value

     const list = document.getElementById('list')
     list.appendChild(newMessage)

      name.value = ""
})

const removeMessage = document.getElementById('removeMessage')

removeMessage.addEventListener('click', function () {
    const list = document.getElementById('list')
    // Remove a última mensagem da lista
    const lastMessage = list.lastElementChild
    if (lastMessage) {
        list.removeChild(lastMessage)
    }
    
})