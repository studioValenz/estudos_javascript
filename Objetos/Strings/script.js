const frase = "A melhor linguagem é ";
const linguagem = "Javascript";

// metodo Concat = serve para concatenar as strings
const fraseFinal = frase.concat(linguagem, "!");
console.log(fraseFinal);

// ----------------------------------------------------------------

const fruta = "banana";
const listaFruta = "melancia, banana, laranja";

// metodo Includes = Procura pela string exata dentro de outra string
console.log(listaFruta.includes(fruta));
console.log(fruta.includes(listaFruta));

// metodo startsWith e endsWith = começa com e termina com

console.log(fruta.startsWith("a"));
console.log(fruta.endsWith("na"));

// metodo slice = corta a string de acordo com o valor passado

console.log(fruta.slice(3, 6));

/** metodo indexOf = retorna o index da string, assim que achar o primeiro resultado
 *  ele ja retorna */

console.log(fruta.indexOf("n"));
console.log(fruta.indexOf("a"));

/** metodo replace = Troca parte da string por outra. Podemos utilizar uma regular
expression ou um valor direto. Se usarmos um valor direto ele irá
trocar apenas o primeiro valor que encontrar. */

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ",");
console.log(listaItens);

let preco = "R$ 1200,43";
preco = preco.replace(",", ".");
console.log(preco);

// metodo split = Divide a string de acordo com o padrão passado e retorna uma array.

const arrayList = listaItens.split(", ");
console.log(arrayList);
