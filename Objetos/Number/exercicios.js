// Retorne um número aleatório
// entre 1050 e 2000

let aleatório = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatório);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
let arrayNumeros = numeros.split(", ");
let numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230 ", "r$ 200"];

function limparPrecos(listaPrecos) {
  let somaTotal = 0;

  listaPrecos.forEach((item) => {
    item = item.toUpperCase();
    const precoLimpo = parseFloat(
      item.replace("R$", "").replace(",", ".").trim()
    );

    if (!isNaN(precoLimpo)) {
      somaTotal += precoLimpo;
    }
  });

  return somaTotal.toFixed(2);
}

const somaTotal = limparPrecos(listaPrecos);

console.log("Soma total:", somaTotal);
