function soma (num1, num2) {
  let resultado = num1 + num2;
  return console.log('O resultado dá operação de soma foi: ' + resultado);
}

function subtracao(num1, num2) {
  let resultado = num1 - num2;
  return console.log('O resultado dá operação de subtração foi: ' + resultado);
}

function multiplicacao(num1, num2) {
  let resultado = num1 * num2;
  return console.log('O resultado dá operação de multiplicação foi: ' + resultado);
}

function divisao(num1, num2) {
  let resultado = num1 / num2;
  return console.log('O resultado dá operação de divisão foi: ' + resultado);
}

function modulo(num1, num2) {
  let resultado = num1 % num2;
  return console.log('O resto dá divisão foi: ' + resultado)
}

soma(10, 25);
subtracao(50, 20);
multiplicacao(10, 6);
divisao(10, 5);
modulo(10, 3);