// Versão corrigida da Calculadora Geométrica
// Arquivo: index.fixed.js (substitua index.js por este, ou renomeie quando pronto)

// Funções definidas fora dos blocos para evitar comportamentos inconsistentes
const areaTriangle = (baseT, alturaT) => (baseT * alturaT) / 2;
const areaRectangle = (base, altura) => base * altura;
const areaSquare = lado => lado * lado;
const areaTrapezoid = (baseMaior, baseMenor, alturaTrapezio) => ((baseMaior + baseMenor) * alturaTrapezio) / 2;
const areaCircle = raio => Math.PI * (raio * raio);

let option = "";

do {
    option = prompt(
        "Bem vindo à Calculadora Geométrica!\n\n" +
        "Escolha uma opção:\n" +
        "1. Área do Triângulo\n" +
        "2. Área do Retângulo\n" +
        "3. Área do Quadrado\n" +
        "4. Área do Trapézio\n" +
        "5. Área do Círculo\n" +
        "6. Sair"
    );

    // Se o usuário cancelar (pressionar Esc ou Cancel), prompt retorna null -> encerra
    if (option === null) {
        alert("Encerrando a calculadora.");
        break;
    }

    switch (option) {
        case "1": {
            const baseT = parseFloat(prompt("Informe a base do triângulo:"));
            const alturaT = parseFloat(prompt("Informe a altura do triângulo:"));
            if (isNaN(baseT) || isNaN(alturaT)) {
                alert("Entrada inválida. Operação cancelada.");
                break;
            }
            alert("A área do triângulo é: " + areaTriangle(baseT, alturaT));
            break;
        }

        case "2": {
            const baseR = parseFloat(prompt("Informe a base do retângulo:"));
            const alturaR = parseFloat(prompt("Informe a altura do retângulo:"));
            if (isNaN(baseR) || isNaN(alturaR)) {
                alert("Entrada inválida. Operação cancelada.");
                break;
            }
            alert("A área do retângulo é: " + areaRectangle(baseR, alturaR));
            break;
        }

        case "3": {
            const lado = parseFloat(prompt("Informe o lado do quadrado:"));
            if (isNaN(lado)) {
                alert("Entrada inválida. Operação cancelada.");
                break;
            }
            alert("A área do quadrado é: " + areaSquare(lado));
            break;
        }

        case "4": {
            const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
            const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
            const alturaTrapezio = parseFloat(prompt("Informe a altura do trapézio:"));
            if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(alturaTrapezio)) {
                alert("Entrada inválida. Operação cancelada.");
                break;
            }
            alert("A área do trapézio é: " + areaTrapezoid(baseMaior, baseMenor, alturaTrapezio));
            break;
        }

        case "5": {
            const raio = parseFloat(prompt("Informe o raio do círculo:"));
            if (isNaN(raio)) {
                alert("Entrada inválida. Operação cancelada.");
                break;
            }
            alert("A área do círculo é: " + areaCircle(raio));
            break;
        }

        case "6":
            alert("Encerrando a calculadora.");
            break;

        default:
            alert("Opção inválida! Escolha uma opção entre 1 e 6.");
            break;
    }
} while (option !== "6");
