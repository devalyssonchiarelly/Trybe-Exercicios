let chessPiece = 'LAdrão';

switch (chessPiece.toLowerCase()) {
  case 'cavalo':
    console.log("cavalo -> movimento em L");
  break;
  case 'peão':
    console.log("peão -> movimento em linha reta");
  break;
  case 'bispo':
    console.log("bispo -> movimento na diagonal");
  break;
  case 'torre':
    console.log("torre -> movimento em linha reta");
  break;
  case 'rainha':
    console.log("rainha -> movimento em linha reta e diagonal");
  break;
  case 'rei':
    console.log("rei -> movimento em linha reta");
  break;
  default:
    console.log("Peça invalida, digite novamente.");  
}