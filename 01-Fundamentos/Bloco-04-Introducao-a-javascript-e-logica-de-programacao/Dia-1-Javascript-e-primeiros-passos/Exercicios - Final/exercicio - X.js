let valorCusto = 100;
let impostoSobreCusto = (20 / 100 * valorCusto);
let valorCustoTotal = valorCusto + impostoSobreCusto;
let valorVenda = 135;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || impostoSobreCusto < 0 || valorVenda < 0) {
  console.log("Erro, não é permitido valores negativos");
} else {
  lucro = lucro * 1000;
  console.log(`O seu lucro foi de: ${lucro}`);
}