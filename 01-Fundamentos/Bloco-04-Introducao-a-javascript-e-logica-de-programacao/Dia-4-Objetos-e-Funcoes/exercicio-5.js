const num1 = 30;
const num2 = 50;
let resultado;

function maiorNumero(num1, num2) {  
  if (num1 > num2 ) {
    resultado = num1;
    return resultado;
  } else {
    resultado = num2;
    return resultado;
  }
}

maiorNumero(num1, num2);

console.log(resultado);