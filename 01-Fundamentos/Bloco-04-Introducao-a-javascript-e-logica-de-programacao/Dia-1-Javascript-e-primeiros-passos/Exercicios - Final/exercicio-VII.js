let porcentagem = 90;

if (porcentagem >= 90 && porcentagem <= 100) {
  console.log("A sua nota foi -> A");
}
if (porcentagem >= 80 && porcentagem < 90) {
  console.log("A sua nota foi -> B");
}
if (porcentagem >= 70 && porcentagem < 80) {
  console.log("A sua nota foi -> C");
}
if (porcentagem >= 60 && porcentagem < 70) {
  console.log("Sua nota foi -> D");
}
if (porcentagem >= 50 && porcentagem < 60) {
  console.log("Sua nota foi -> E");
}
if (porcentagem > 0 && porcentagem < 50) {
  console.log("Sua nota foi -> F");
} else if(porcentagem < 0 || porcentagem > 100) {
  console.log("Valor de porcentagem não suportado!");
}
