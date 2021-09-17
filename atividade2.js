// 1)  Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:

// a.  Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.
let x = 5;
let y = 8;

x === y // False;

// b.  Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.
x = 6;
y = '6';

x === y // False;

// c.  Dado que x = “7” e y = 7, valide se os valores são iguais

x = '7';
y = 7;

x == y // True;


// 2)      Declare uma variável chamada nome.
// a)       Atribua a ela o valor “Fulano”.
// b)      Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”.

let nome = 'Fulano';

console.log(`Boa noite, ${nome}`);

// 3)      Considere x = x + y, dado que x = 10 e y = 5.

let b = 5;
let a = 10;

// a)       Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.

a += 5;

// b)      Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.

a += 35;

// c)       Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.

a = 0;

// d)      Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.

a = 2;

// e)      Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.

a += 3;
console.log(a)
