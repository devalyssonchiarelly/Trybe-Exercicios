let numeros = [2,3,6,7,10,1];

function verificaMaiorNumero (array) {
  let indexMaiorNumero = 0;
  for (let index in array) {
    if (array[indexMaiorNumero] < array[index]) {
      indexMaiorNumero = index;
    }
  }
  return console.log(indexMaiorNumero);
}

verificaMaiorNumero(numeros)