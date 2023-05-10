function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

const mercedes = new Carro("Mercedes", "x6", 2024);

const fiat = new Carro();
fiat.ano = 2000;
fiat.marca = "Palio";
fiat.modelo = "Sedam";

// exemplo real da aula

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
    console.log("Ativou");
  };
}

const li = new Dom("li");
li.ativar();
