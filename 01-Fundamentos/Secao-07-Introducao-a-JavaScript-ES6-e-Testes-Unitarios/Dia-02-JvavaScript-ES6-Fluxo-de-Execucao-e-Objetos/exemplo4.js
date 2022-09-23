const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));

/* É uma boa prática tratar os erros de uma melhor forma, para isso
 * realizamos nossos tratamentos dentro do bloco 'try/catch'. O try
 * ele tenta executar o código com sucesso, o catch é chamado caso
 * ocorra um erro. 
 */