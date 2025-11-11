let number = parseFloat(prompt("Qual número deseja ver a tabuada: (1 a 20)"))
let resultado = ""


for (let i = 1; i <= 20; i++) {
      resultado += " -> " + number + " x " + i + " = " + (number * i) + "\n"
}
alert ("Resultado da tabuada de " + number + "\n\n" + resultado) 
