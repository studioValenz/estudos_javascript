// rest operator

let sorteador = (...numeros) => {
  // console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log("O numero gerado é: " + numeros[numeroGerado]);
};

let sorteio = setInterval(() => {
  sorteador(1, 4, 5, 15, 25, 90, 55, 34);
}, 1000);
