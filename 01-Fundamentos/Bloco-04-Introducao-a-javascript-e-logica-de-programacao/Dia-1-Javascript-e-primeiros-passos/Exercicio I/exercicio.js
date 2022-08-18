const myName = 'Alysson';
const birthCity = 'Angicos';
let birthYear = '1989';

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = '2030';
console.log(birthYear);

/* Aqui termos um erro, pelo fato de está tentando atribuir um novo valor á uma constante 
o que não é possível de ser realizado, pois os valores de uma constante não podem ser alterados.
*/

birthCity = 'Assu';
console.log(birthCity);