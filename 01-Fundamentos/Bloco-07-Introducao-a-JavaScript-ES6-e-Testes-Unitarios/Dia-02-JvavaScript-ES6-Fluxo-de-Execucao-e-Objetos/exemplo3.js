const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

/* Em JavaScript existe um fluxo de exceção quando um erro acontece, devemos
 * lançar uma exceção que vai interromper o funcionamento do código. Essa é
 * a função do 'throw'.
 */