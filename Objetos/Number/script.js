// parseFloat() serve para retornarmos um número a partir de uma string.

const numero = parseFloat("125.75");
console.log(numero);
console.log(typeof numero);

// toFixed() Arredonda o número com base no total de casas decimais do argumento.

let preço = 19.99;
console.log(preço.toFixed()); // 20
preço = 19.585858;
console.log(preço.toFixed(3)); // 19.586
preço = 19.2;
console.log(preço.toFixed()); // 19

/** toString() Transforma o número em uma string com base no Radix. Use o 10 para
 * o sistema decimal */

let preço2 = 3.55;
let teste = preço2.toString(10);
console.log(teste); //

// toLocaleString() Formata o número de acordo com a língua e opções passadas.

const preco = 59.49;
let valorDolar = preco.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
}); // $ 59.49
let valorReal = preco.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
}); // R$ 59,49

console.log(valorDolar);
console.log(valorReal);

// Metodos do Math

console.log(Math.abs(-5.5)); // 5.5
console.log(Math.ceil(4.8334)); // 5
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.8334)); // 4
console.log(Math.floor(4.3)); // 4
console.log(Math.round(4.8334)); // 5
console.log(Math.round(4.3)); // 4

/** max() retorna o maior número de uma lista de argumentos, min() o
menor número e random() um número aleatório entre 0 e 1.
 */

console.log(Math.max(5, 3, 10, 42, 2)); // 42
console.log(Math.min(5, 3, 10, 42, 2)); // 2
console.log(Math.floor(Math.random() * 100));
