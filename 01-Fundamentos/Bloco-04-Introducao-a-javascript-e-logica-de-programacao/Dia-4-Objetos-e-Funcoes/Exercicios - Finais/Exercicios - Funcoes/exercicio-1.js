
function verificaPalidromo(string){
  let word = [...string].reverse().join("");
  if (string == word){
    return console.log('true');
  } else {
    return console.log('false');
  }
}

verificaPalidromo('arara');