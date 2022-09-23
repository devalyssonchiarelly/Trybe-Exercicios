const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

/*
* Como pode ser visto acima, o clone é exatamente igual ao objeto person,
* e se for mudado qualquer propriedade nele, será observado que o objeto 
* person também será modificado. Isso ocorre ao fato de que o objeto 
* retornado pelo método Object.assign é o próprio objeto destino, que 
* foi alterado adicionando as novas propriedades.
*/