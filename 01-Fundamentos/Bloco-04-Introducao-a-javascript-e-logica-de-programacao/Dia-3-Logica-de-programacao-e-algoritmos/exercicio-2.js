//Realiza a inversão de uma palavras
let word = 'Trybe';
/*
Primeiro transformei minha string em array, depois usei o metodo reverse(),
depois usei o metodo join(), para retornar os elementos de uma array para 
uma string.
*/
word = [...word].reverse().join(""); 

console.log(word);