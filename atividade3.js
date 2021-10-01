// 1)  Criar uma função para receber  uma string como parâmetro:
// a)  Contar a quantidade de palavras repetidas em uma frase e retornar o total.
// b)  Chamar a função e exibir o resultado no console.

const repeatWord = (phrase, word) => {
   const repeat = phrase.split(' ').filter(wordEl => wordEl === word).length;
  return repeat;
};


// 2)  Criar uma função que receba um array com 5 números como parâmetros:
// a)  Inverter o array e retornar o resultado.
// b)  Chamar a função e exibir o resultado no console.

const numbersReversed = arrNumbers => {
  const reversed = arrNumbers.reverse();
  return reversed;
};

console.log(numbersReversed([5, 4, 3, 2, 1]));


// 3      Criar uma função que receba 4 números inteiros positivos como parâmetros:
// a)     Calcular a soma de todos os números.
// b)     Retornar o Resultado.
// c)     Chamar a função e exibir o resultado no console.

const sum = (numArr) => {
  const total = numArr.reduce((previous, acc) => previous + acc, 0);
  return total;
};

console.log(sum([1, 2, 3, 4, 5]));
