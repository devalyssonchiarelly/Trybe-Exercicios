let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index +=1) {
  if (maiorPalavra < array[index]) {
    maiorPalavra = array[index];
  }
  if (menorPalavra > array[index]) {
    menorPalavra = array[index];
  }
 }

 console.log (`A maior palavra do Array é: ${maiorPalavra}`);
 console.log(`A menor palavra do Array é: ${menorPalavra}`);