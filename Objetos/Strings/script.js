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

// metodo indexOf = retorna o index da string, assim que achar o primeiro resultado ele ja retorna

console.log(fruta.indexOf("n"));
console.log(fruta.indexOf("a"));
