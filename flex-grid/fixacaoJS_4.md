function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let valor = 0 
let resultado 
for (numeroSelecionado of arrayDeNumeros) {
 if (numeroSelecionado === numeroEscolhido) { valor += 1 }
}
if (valor > 0) { resultado = `O número ${numeroEscolhido} aparece ${valor}x`}
else { resultado = 'Número não encontrado' }
return resultado
}