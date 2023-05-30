// FIND - retorna o primeiro valor encontrado

// let listagem = ["Jose", "Taina", "Kevene", "Kayla", "Enzo"];
// let lista = prompt("Quem deseja pesquisar na lista de casamento ?");

// let busca = listagem.find((item) => {
//   if (item === lista) {
//     return alert("Kevene a mulher mais linda do mundo, esta na lista");
//   } else {
//     return alert("Não se encontra na lista de casamento");
//   }
// });

// FILTER - retorna tudo que foi passado na condição

let palavras = ["Matheus", "Kevene", "Enzo", "Enzo Gabriel", "Kayla"];

let resultado = palavras.filter((item) => {
  return item === "Enzo";
});

console.log(resultado);
