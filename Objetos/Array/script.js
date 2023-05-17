/** Array.from() é um método utilizado para transformar array-like
objects, em uma array. */

const carros = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};
const carrosArray = Array.from(carros);

//.length retorna o tamanho da array.

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
console.log(frutas.length); // 3

// sort() organiza a pelo unicode.

const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

/** unshift() adiciona elementos ao início da array e retorna o
length da mesma, push() adiciona elementos ao final da  array e retorna o
length da mesma */

const carro = ["Ford", "Fiat", "VW"];

carro.unshift("Honda", "Kia"); // 5
console.log(carro); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
carro.push("Ferrari"); // 6
console.log(carro); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']

/** shift() remove o primeiro elemento da array e retorna o mesmo.
 *  pop() remove o último elemento da array e retorna o mesmo. */

const carro1 = ["Ford", "Fiat", "VW", "Honda"];

const primeiroCarro = carro1.shift(); // 'Ford'
console.log(carro1); // ['Fiat', 'VW', 'Honda'];
const ultimoCarro = carro1.pop(); // 'Honda'
console.log(carro1); // ['Fiat', 'VW'];

/** .splice() adiciona valores na array a partir do index. Remove a quantidade de itens
que for passada no segundo parâmetro (retorna esses itens). */

const carro2 = ["Ford", "Fiat", "VW", "Honda"];

carro2.splice(2, 0, "Mercedes", "X6");
console.log(carro2);
