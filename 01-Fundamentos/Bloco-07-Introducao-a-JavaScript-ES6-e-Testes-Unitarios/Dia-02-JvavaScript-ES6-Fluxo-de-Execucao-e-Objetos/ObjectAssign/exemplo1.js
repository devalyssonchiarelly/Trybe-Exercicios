const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* 
* O método object.assign é utilizado para copiar os valores de todas as,
* propriedades de um ou mais objetos para um objeto destino. 
* O primeiro parâmentro é o objeto que vai receber as informações dos 
* outros objetos, no caso info e family.
* Quando acontece de existir uma chave como o mesmo nome em outro objeto,
* o valor é sobrescrita pelo valor do outro objeto, neste exemplo o objeto
* person e info compartilham a mesma chave 'age'. Neste caso o valor na chave
* age no objeto person é sobrescrito pelo valor da chave 'age que está no objeto
* info.
*/