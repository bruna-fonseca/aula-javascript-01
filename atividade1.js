// 1)      Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
// a)       Ordenar os elementos do array na ordem invertida

const northStates = () => {
  let states = ['amazonas', 'acre', 'roraima'];
  states.reverse();
  return states;
};


// 2)      Criar uma função que recebe duas strings:
// a)       Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
// b)      Concatenar as duas strings e retornar o resultado.
// c)       Chamar a função e exibir no console o resultado.

const concatStrings = (string1, string2) => {
  const concat = string1.toUpperCase().concat(string2);
  return concat;
};

console.log(concatStrings('string ', 'no js'));

// 3)      Criar uma função que retorne 17 vezes a palavra Repetição.
// a)       Chamar a função e exibir no console o resultado.

const repeat = () => {
  for (let contador = 1; contador <= 17; contador++) {
    console.log('Repetição');
  }
  return;
};

console.log(repeat());
