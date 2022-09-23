
function numeroPositivoNegativo (num) {
  if (num > 0) {
    return console.log('Número positivo');
  } else if (num < 0) {
    return console.log('Número negativo');
  } else if (num > -1 && num < 1) {
    return console.log('0');
  }
}

numeroPositivoNegativo(0);