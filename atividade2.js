// 1)      Criar uma função para receber dois parâmetros: numero e percentual.
// a)       Calcular a porcentagem de um número  usando a fórmula:
// b)       Chamar a função e exibir o resultado no console.

const porcentagem = (numero, percentual) => {
  const total = (numero / 100) * percentual;
  return total;
};

console.log(porcentagem(20, 5));


// 2)      Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
// a)      Converter o array para string e retornar o resultado.
// b)      Chamar a função e exibir o resultado no console.

const joinArr = (arr1, arr2) => {
  const arrJoined = [...arr1, ...arr2];
  return arrJoined.toString();
};

console.log(joinArr([4, 5], [1, 2, 3]));


