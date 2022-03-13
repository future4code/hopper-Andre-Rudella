
const usuário= comprarCarta()
const usuário1= comprarCarta()
const computador = comprarCarta()
const computador1= comprarCarta()
const resultadoUsuário = usuário.valor + usuário1.valor
const resultadoComputador = computador.valor + computador1.valor

const início = " Boas vindas ao jogo Blackjack"
console.log(início)

const outraRodada = confirm("você quer iniciar uma nova rodada ?") 
if (outraRodada != true) 
{alert("O jogo acabou")}
else (outraRodada === true)
{console.log("vamos jogar")

console.log(`Usuário - cartas: ${usuário.texto} ${usuário1.texto}, - pontuação: ${resultadoUsuário}`)
console.log(`Computador - cartas: ${computador.texto}, ${computador1.texto} - pontuação: ${resultadoComputador}`)
 
if (resultadoUsuário === resultadoComputador){
   console.log("deu empate!")
} else if ( resultadoUsuário < resultadoComputador ){
   console.log( "computador venceu !")
} else if( resultadoUsuário > resultadoComputador ) 
   console.log( " usuário venceu !") 
 } 

 
 console.log( "O jogo acabou")

