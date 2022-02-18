// -> 1. Peça ao usuário para digitar um número binário 2. e o converta para decimal.

// Resolvendo 1. Peça ao usuário para digitar um número binário

// Rebendo os dados via prompt tipo string
let numeroBinario = window.prompt("Digite um número binário:");


// Convertendo os dados para tipo Number e invertendo preparando para conversão
let vazio = " ";

let numeroBinarioTratado = numeroBinario.split('').filter(letra => vazio.indexOf(letra) < 0)

let binarioTratadoNumbers = []

for(let i = 0; i < numeroBinarioTratado.length; i++){
    binarioTratadoNumbers[i] = Number(numeroBinarioTratado[i])
}

let binarioTratadoNumbersInvertido =  binarioTratadoNumbers.reverse()

console.log(binarioTratadoNumbersInvertido)



// Resolvendo 2. e o converta para decimal

let base = 2;

let conversao = []

for(let i = 0; i < binarioTratadoNumbers.length ; i++ ){
    conversao[i] = (base ** i) * binarioTratadoNumbersInvertido[i]
}

let convertido = conversao.reduce((n , x) => n + x ,0)

console.log(convertido)