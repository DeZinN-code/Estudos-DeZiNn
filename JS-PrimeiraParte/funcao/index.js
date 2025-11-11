function dobro(x) {
    alert("O dobro de " + x + " é " + (2 * x));
} 
// dobro(5)
// dobro(10)

function dizerOla(name = "mundo") {
    alert("Olá " + name + "!")
}

// dizerOla("André")
// dizerOla()

function soma(x, y) {
    alert("A soma de " + x + " e " + y + " é " + (x + y));
}

// soma(5, 10)

function criarUsuario(nome,email,senha,tipo = "admin") {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}
criarUsuario("André","andre@example.com","senha123","admin")
//Sempre tilizar os parametros na ordem correta e colocar os parametros opcionais por ultimo


// // Ao criarmos uma função com muitos parâmetros,
// // uma boa prática é substituí-los por um objeto
// function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
//   // ...
// }
// function parametrosDoJeitoCerto(usuario) {
//   // ...
// }
// // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
// parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
// const dadosDoUsuario = {
//   nome: "",
//   telefone: "",
//   email: "",
//   senha: "",
//   aniversario: "",
//   endereco: ""
// }
// parametrosDoJeitoCerto(dadosDoUsuario)