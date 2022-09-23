let lado1 = 40;
let lado2 = 40;
let lado3 = 100;

function encontraTriangulo (num1, num2, num3) {
  let soma = num1 + num2 + num3;

  if (soma === 180) {
    return console.log('true');
  } else if (soma !== 180) {
    return console.log('false');
  }
}

encontraTriangulo(lado1, lado2, lado3);