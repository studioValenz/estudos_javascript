// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return "Nome Completo: " + this.nome + " " + this.sobrenome;
};

const esposa = new Pessoas("Kevene", "Taina", 22);

console.log(esposa.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(Document.prototype));
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");
li; // HTMLLIElement
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); // error

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string
