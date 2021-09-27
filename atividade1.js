// 1)      Dada as strings abaixo: dominio1 e dominio2.
//  a)       dominio1 = "mundojs"
// b)      dominio2 = "google"
// c)       Concatenar as strings para exibir a mensagem: Olá mundojs! O site www.google.com te ajuda a achar muitos materiais de estudo.

const dom1 = 'mundojs';
const dom2 = 'google';
console.log(`Olá ${dom1}! O site www.${dom2}.com te ajudar achar muitos materiais de estudo`);



// 2)      Dada as strings: valorA e valor B.
//  a)       valorA = "casa"
// b)      valorB = "asa"
// c)       Transformar todas as letras em maiúsculas usando toUpperCase().
// d)      Exibir no console.
// e)      Comparar se a string valorB tem todos os caracteres contidos na string valorB.
// f)        Exibir no console.

 let valorA = 'casa';
let valorB = 'asa';

valorA.toUpperCase();
valorB.toUpperCase();
const comparacao = valorA.localeCompare(valorB);
console.log(comparacao);


// 3)      Dada a string valorA = "substring(): Aprenda a utilizar.", utilizando o método substring, exibir no console: Aprenda a utilizar.

const substr = 'substring(): Aprenda a utilizar.';
const resultado = substr.substring(13, 32);
console.log(resultado);
