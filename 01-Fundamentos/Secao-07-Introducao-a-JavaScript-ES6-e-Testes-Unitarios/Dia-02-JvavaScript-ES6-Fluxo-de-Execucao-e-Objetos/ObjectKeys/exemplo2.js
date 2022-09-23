const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

/* O método object.keys, é uma maneira mais robusta de trabalhar com objetos,
 * e seus valores. Ele é utilizado para listar as chaves de um objeto, retor
 * nando-as em um array. Cada entrada do array retornado será uma string com 
 * o valor de cada chave do objeto.
 */