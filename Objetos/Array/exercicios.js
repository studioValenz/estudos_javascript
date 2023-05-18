const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
let primeiroValor = comidas.shift();
console.log(primeiroValor);
// Remova o último valor de comidas e coloque em uma variável
let ultimoValor = comidas.pop();
console.log(ultimoValor);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));

let html = `<section>
 <div>Sobre</div>
 <div>Produtos</div>
 <div>Contato</div>
 </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
const novoHtml = html
  .split("<section>")
  .join("<ul>")
  .split("</section>")
  .join("</ul>")
  .split("<div>")
  .join("<li>")
  .split("</div>")
  .join("</li>");

console.log(novoHtml);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

// Cópia da array original
const carrosOriginal = [...carros];

// Remover o último carro
carros.pop();

console.log("Carros original:", carrosOriginal);
console.log("Carros após remover o último elemento:", carros);
