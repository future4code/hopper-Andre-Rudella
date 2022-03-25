const valorNormal = 1.30
const valorPromocionaL = 1.00

const fruta = ( quantidade ) => {
  let valorTotal = 0
  
  if ( quantidade >= 12) {
    valorTotal = valorPromocionaL * quantidade
  } else { 
    valorTotal = valorNormal * quantidade 
  }
  
  return valorTotal
}

console.log(fruta(2))