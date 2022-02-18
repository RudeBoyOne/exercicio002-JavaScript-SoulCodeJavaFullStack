// -> 1. Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal) e 2. rebeca os números e armazene esses números em um array e  3. depois mostre a soma total deles, 4. a média deles, 5. mostre cada valor em uma potência de 2 e  6. faça a raíz quadrada e  7. cúbica de um.



// Resolvendo 1. Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal) e 2. rebeca os números e armazene esses números em um array

let quantNumeros = Number(window.prompt("Quantos números deseja digitar:"));

// teste se está chegando
console.log(quantNumeros)

let arraydeNumeros = []

for(let i = 0 ; i < quantNumeros; i++){
    arraydeNumeros[i] = Number(window.prompt( `Digite o número ${i + 1}`));
}

// teste se está chegando
console.log(arraydeNumeros)


//  Resolvendo 3. depois mostre a soma total deles


let somaArray = arraydeNumeros.reduce((n , x) => n + x, 0);

document.write(`<h1> A soma dos números é: ${somaArray} </h1>`)


// Resolvendo 4. a média deles

let tamanhoArray = arraydeNumeros.length

// teste se está chegando
console.log(tamanhoArray)

let mediaAritmetica = somaArray / tamanhoArray

document.write(`<h2> A média aritimética dos números é: ${mediaAritmetica.toFixed(2)}`)



// Resolvendo 5. mostre cada valor em uma potência de 2

for(const posicao of arraydeNumeros){
    document.write(` <h2> A potência de ${posicao} é: ${posicao ** 2} <h2>`)
}

// Resolvendo 6. faça a raíz quadrada

let raizQuadrada = Math.sqrt(arraydeNumeros[0])

document.write(`<h2> A raiz quadrada de ${arraydeNumeros[0]} é: ${raizQuadrada} </h2>`)


// Resolvendo 7. cúbica de um

let raizCubica = Math.cbrt(arraydeNumeros[0])

document.write(` <h2> A raiz cúbica de ${arraydeNumeros[0]} é: ${raizCubica.toFixed(4)} <h2>`)