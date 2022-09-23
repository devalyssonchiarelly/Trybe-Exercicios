const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

/* No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos uma nova propriedade.
 * Para isso, podemos utilizar a sintaxe abaixo:
  * objeto.nomeDaPropriedade
  * objeto[variavelQueContemONomeDaPropriedade].
 */