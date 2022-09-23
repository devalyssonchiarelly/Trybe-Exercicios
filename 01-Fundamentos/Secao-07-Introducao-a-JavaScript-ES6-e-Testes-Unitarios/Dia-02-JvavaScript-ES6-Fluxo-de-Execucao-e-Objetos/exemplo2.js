const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23

/**
 * A operação ao realizada e ser percebido que os tipos dos valores não eram iguais,
 * o primeiro parâmetro foi convertido para uma string, e a operação realizada foi 
 * uma concateação de strings através do sinal ' + ' e não a soma.
 */