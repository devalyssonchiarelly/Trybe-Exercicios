const num1 = 10;
const num2 = 20;
const num3 = 30;

function maiorNumero(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
    return console.log('Esté é o maior número: ' + num1 );
  } else if(num2 > num1 && num2 > num3) {
    return console.log('Este é o maior número: ' + num2);
  } else {
    return console.log('Este é o maior número: ' + num3);
  }
}

maiorNumero(num1, num2, num3);