// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  let altura = Number(prompt( "digite a altura do retangulo"))
  let largura = Number (prompt( "digite a largura do retangulo"))
  
  const resultado = altura * largura
   
  console.log(resultado)
}


// EXERCÍCIO 02
function imprimeIdade() {

  let anoAtual = Number(prompt( "digite em que ano esstamos"))
  let dataNascimeto = Number( prompt( "digite sua data de nascimento"))


  const idade = anoAtual - dataNascimeto

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
return peso/(altura*altura) 



}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt(`nome`)
const idade = prompt(`idade`)
const email = prompt(`email`)

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt(`digite sua cor favorita`)
  let cor2 = prompt(`digite sua outra cor favorita`)
  let cor3 = prompt(`digite sua outra cor favorita`)

  const cores = [cor1 , cor2 , cor3]

  console.log(cores)








  


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
console.log(string)


}

// EXERCÍCIO 7 
function calculaIngressosEspetaculo(custo, valorIngresso) {
   const  x = custo/valorIngresso
   return x
  console.log(x)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 const igual = string1.length === string2.length
return igual 
console.log(igual)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}