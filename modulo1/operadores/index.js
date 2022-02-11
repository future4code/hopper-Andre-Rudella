const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

/*R - A) False
       B) False
       c) False
       D) String*/ 
       
       let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/* do jeito que está o progra lê como se fosse um number, não irá somar

3 
O jeito certo de somar é transfoamr a string em number desta forma
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/

       

let idade = Number(prompt("qual sua idade ?"))
let amigo = Number(prompt("qual idade do seu melhor amigo ou amiga ?"))

console.log( "Sua idade é maior que a do seu amigo ?", idade > amigo)
const resultado = idade - amigo 
console.log(resultado)


let numeroPar = Number(prompt("digite um número par"))
console.log(numeroPar % 2)

/* percebi que por ser par o resultado sempre vai ser 0*/

/* se for impar sempre vai dar 1*/


/*3)*/ let idade = Number(prompt(" Qual sua idade ? "))
const idadeMeses= idade * 12

console.log(idadeMeses)

/* b*/ let idade = Number(prompt(" Qual sua idade ? "))
const idadeMeses= idade * 365

console.log(idadeMeses)

/* c*/ let idade = Number(prompt(" Qual sua idade ? "))
const horas= idade * 8640

console.log(horas)











