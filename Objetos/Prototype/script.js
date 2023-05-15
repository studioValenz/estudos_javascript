function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

const Julio = new Pessoa("Kevene", 22);
console.log(Julio);
console.log(Pessoa);
