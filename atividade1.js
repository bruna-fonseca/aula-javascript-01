// 1)      Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.
// a)       Chamar a função e exibir o resultado no console.

const multiply = (num1, num2)  => {
  return num1 * num2;
};

console.log(multiply(2,5));


// 2)      Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
// a)       Chamar a função e exibir o resultado no console.

const greater = (num1, num2, num3) => {
  const arr = [num1, num2, num3];
  const greaterNumber = Math.max(...arr);
  return greaterNumber;
 };

console.log(greater(45, 22, 30));
 

// 3)      Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
// a)       Chamar a função e exibir no console o resultado.

const OddOrEven = (num) => {
  if (num % 2 === 0) {
    return 'é par';
  } else {
    return 'é ímpar';
  }
};

console.log(OddOrEven(220));
console.log(OddOrEven(5));

