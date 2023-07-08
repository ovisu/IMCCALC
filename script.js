/*
  LEMBRETES PARA PROX SESSAO DE DESENVOLVIMENTO


    DESENVOLVER A VALIDAÇÃO DOS FORMULARIOS
    ESTILIZAR BOTAO AO CLICK COM ALGUMA ANIMAÇÃO PARA CONFIAR O ENVIO
    ESTILIZAR A FORMA COMO AS LETRAS SURGEM APÓS O ENVIO DO FORMULÁRIO


*/

let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");

function teste() {
  //pegando os valores de peso
  let pvalor = peso.value;
  pvalor = pvalor.replace(",", ".");
  console.log(pvalor);

  //valores de altura
  let avalor = altura.value;
  /* replace sempre deve ser usado atribuindo valor a uma var */
  avalor = avalor.replace(",", ".");
  console.log(avalor);
  //calculoimc
  let imc = Number(pvalor / (avalor * avalor));
  imc = parseFloat(imc).toFixed(2);
  console.log(imc);

  //exib dividida em duas partes para q haja quebra de linha
  let exib = document.querySelector(".resultado");
  let exib2 = document.querySelector(".resultado2");
  console.log(exib);

  //condicionais para mudar a exibição em cada classificação de peso
  if (imc < 18.5) {
    exib.innerText = `O seu IMC é ${imc}.`;
    exib2.innerText = `O que significa que você esta em situação de Magreza.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    exib.innerText = `O seu IMC é ${imc}.`;
    exib2.innerText = `O que significa que você esta em situação normal.`;
  } else if (imc >= 25 && imc <= 29.9) {
    exib.innerText = `O seu IMC é ${imc}.`;
    exib2.innerText = `O que significa que você esta em situação de Sobrepeso.`;
  } else if (imc >= 30 && imc <= 39.9) {
    exib.innerText = `O seu IMC é ${imc}.`;
    exib2.innerText = `O que significa que você esta em situação de Obesidade.`;
  } else if (imc >= 40) {
    exib.innerText = `O seu IMC é ${imc}.`;
    exib2.innerText = `O que significa que você esta em situação de Obesidade grave.`;
  }
}
