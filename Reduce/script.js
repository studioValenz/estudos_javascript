// MAP = PERCORRER TODO UM ARRAY

// let lista = ["Matheus", "Jose", "Taina", "Enzo"];

// lista.map((item, index) => {
//   console.log(`Passando: ${item} - Esta na posicão ${index}`);
// });

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
  console.log(`${indice} - indice atual`);
  console.log(`${original} - array origial`);
  console.log("=========================");

  return (acumulador += numero);
});

console.log("total do reduce: " + total);
