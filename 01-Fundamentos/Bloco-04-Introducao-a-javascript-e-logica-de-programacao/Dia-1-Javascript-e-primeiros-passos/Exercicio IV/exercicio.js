let estadoPessoa = 'Aprovada';

switch (estadoPessoa) {
  case 'Aprovada':
    console.log("Parabéns, você foi Aprovada(o)!");
    break;
  case 'lista':
    console.log("Você está na nossa lista de espera");
    break;
  case 'reprovada': 
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Não se aplica")
}