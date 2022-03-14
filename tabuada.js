// 06/03/2022
let operacao = "divisao"; // ALTERAR PARA: soma, subtracao, divisao ou multiplicacao
let conta = 0; // variável para o resultado de cada operação
let valor = 1; // entrada que vai de 1 a 10, com incremento no final do DO

do {
  console.log("Tabuada de " + operacao + " do " + valor);
  for (let index = 1; index <= 10; index++) {
    switch (operacao) {
      case "soma":
        conta = valor + index;
        console.log(valor + " + " + index + " = " + conta);
        break;
      case "subtracao":
        conta = valor - index;
        console.log(valor + " - " + index + " = " + conta);
        break;
      case "divisao":
        conta = valor / index;
        console.log(valor + " / " + index + " = " + conta.toFixed(2));
        break;
      case "multiplicacao":
        conta = valor * index;
        console.log(valor + " * " + index + " = " + conta);
        break;
    }
  }
  console.log("");
  valor++;
} while (valor <= 10);