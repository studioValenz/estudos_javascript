// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacao = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let somaTaxa = 0;
let somaRecebimento = 0;

transacao.forEach((item) => {
  const valorNumerico = parseFloat(item.valor.replace("R$ ", ""));

  if (item.descricao.includes("Taxa")) {
    somaTaxa += valorNumerico;
  } else if (item.descricao.includes("Recebimento")) {
    somaRecebimento += valorNumerico;
  }
});

console.log("Soma das taxas:", somaTaxa);
console.log("Soma dos recebimentos:", somaRecebimento);

// Retorne uma array com a lista abaixo
let transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
console.log(transportes);
let divs = ";";
let transArray = transportes.split(divs);
console.log(transArray);

// Substitua todos os span's por a's
const html = `<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
    </ul>`;

let htmlNovo = html.replace(/['span']+/g, "a");
console.log(htmlNovo);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const ultimoCaractere = frase.charAt(frase.length - 1);

console.log("Último caractere:", ultimoCaractere);

// Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  " TAXA DO PÃO",
  " taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxas = 0;

transacoes.forEach((item) => {
  const contemTaxa = item.toLowerCase();
  if (contemTaxa.includes("taxa")) {
    totalTaxas++;
  }
});

console.log("Total de taxas:", totalTaxas);
