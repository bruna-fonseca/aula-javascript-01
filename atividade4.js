// 1) Criar variáveis para:
// a)   Armazenar os valores: 7, -55, 389, 1000, 3.1459, -46.267;
// b)  As variáveis deverão ser do tipo objeto Number;

let num1 = new Number(7);
let num2 = new Number(-55);
let num3 = new Number(389);
let num4 = new Number(1000);
let num5 = new Number(3.1459);
let num6 = new Number(-46.267);

// c)   Mostrar os valores no console;

console.log(num1, num2, num3, num4, num5, num6);

// d)  Somar a primeira variável com a última variável;

let sum1 = num1 + num6;

// e) Mostrar os valores no console;

console.log(sum1);

// f)   Multiplicar a primeira variável com a terceira variável;

let mult1 = num1 * num3;

// g)  Mostrar os valores no console;

console.log(mult1);

// h) Dividir a quarta variável pela quinta variável;

let div = num4 / num5;

// i)  Mostrar os valores no console.

console.log(div);

// 2)      Criar variáveis para:

// a)       Armazenar os valores: 10, 3, 9, 99.9, 721;
// b)      As variáveis deverão ser do tipo objeto Number.

let n1 = new Number(10);
let n2 = new Number(3);
let n3 = new Number(9);
let n4 = new Number(99.9);
let n5 = new Number(721);


// c)       Mostrar os valores no console.

console.log(n1, n2, n3, n4, n5);

// d)      Validar se a primeira variável é menor que o valor Number.MAX_VALUE;

let validation = n1 < Number.MAX_VALUE;

// e)      Mostrar o resultado e valores no console;

console.log(validation);

// f)        Validar se a segunda variável possui valor igual a NaN;

let validation2 = n2 >= Number.NaN;

// g)       Mostrar o resultado e valores no console;

console.log(validation2);

// h)      Validar se a quinta variável é menor ou igual a terceira variável;

let validation3 = n5 <= n3;

// i)        Mostrar o resultado e valores no console.

console.log(validation3);
