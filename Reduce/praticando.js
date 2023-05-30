let listaCasamento = [];

while (true) {
  const opcao = prompt(
    "Selecione uma opção:\n1. Adicionar item\n2. Finalizar e sair"
  );

  if (opcao === "1") {
    const item = prompt("Digite o item para a lista de casamento:");
    listaCasamento.push(item);
  } else if (opcao === "2") {
    break;
  } else {
    alert("Opção inválida! Por favor, selecione novamente.");
  }
}

const listaUl = document.getElementById("lista-casamento");

listaCasamento.map((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  listaUl.appendChild(li);
});
