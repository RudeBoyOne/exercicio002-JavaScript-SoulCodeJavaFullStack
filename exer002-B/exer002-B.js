// -> 1. Peça ao usuário digitar algum texto no pelo prompt e 2. depois mostre esse texto com todas as letras maiúsculas, 3.com todas as letras minúsculas e depois escreva no 4.console letra por letra do texto que o usuário digitou. (Utilize o método split para fazer esse último)


// Resolvendo 1. Peça ao usuário digitar algum texto no pelo prompt
let palavra = window.prompt("Digite um texto qualquer:")


//Resolvendo 2. depois mostre esse texto com todas as letras maiúsculas
document.write(palavra.toLocaleUpperCase())

document.write("<br>")
document.write("<br>")

// Resolvendo 3.com todas as letras minúsculas
document.write(palavra.toLocaleLowerCase())

// Resolvendo 4.console letra por letra do texto que o usuário digitou. (Utilize o método split para fazer esse último)

let separacao = palavra.split('')

console.log(separacao)