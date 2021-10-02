// 1)      Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
// a)       Transformar todos os elementos em letras maiúsculas.

const citiesToUpperCase = (function() {
  const cities = ['manaus', 'belém', 'macapá', 'palmas', 'boa vista'];
  const upperCased = cities.map(city => city.toUpperCase());
  return upperCased;
})();

console.log(citiesToUpperCase);

// 2)      Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
// a)       Chamar a função e exibir no console o retorno da função. 

const numbers = (function() {
  let numbers = [];
  for (let contador = 0; contador < 450; contador++) {
    if (contador % 2 === 0) {
      numbers.push(contador);
    }
  }
  return numbers;
})();

console.log(numbers);


// 3)      Criar uma função anônima que recebe quatro strings:
// a)       Concatenar as strings e retornar o resultado.
// b)      Chamar a função e exibir no console o resultado.


const concatenar = (str1, str2, str3, str4) => {
  const conca = `${str1} ${str2} ${str3} ${str4}`;
  return conca;
};

console.log(concatenar('oi', 'tudo', 'bem', 'com voce?'));
