// 1)      Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
// a)       Se o número for múltiplo de 5, retornar "Bora".
// b)      Se o número for múltiplo de 3, retornar "Dale".
// c)       Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
// d)      Chamar a função e exibir no console o resultado.

 const multipleOf = (num) => {
   if (num % 3 === 0 && num % 5 === 0) {
     return 'JAVASCRIPT';
   } else if (num % 5 === 0) {
     return 'Bora';
   } else if (num % 3 === 0) {
     return 'Dale';
   }
 };

console.log(multipleOf(45));
console.log(multipleOf(6));
console.log(multipleOf(20));


// 2)      Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário.
// a)       Escrever o signo referente a data de aniversário de acordo com a tabela acima.
// b)      Chamar a função e exibir no console o resultado.

const zodiacSign = (day, month) => {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
    return 'Seu signo é Áries';
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    return 'Seu signo é Touro';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return 'Seu signo é Gêmeos';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return 'Seu signo é Câncer';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Seu signo é Leão';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Seu signo é Virgem';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return 'Seu signo é Libra';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return 'Seu signo é Escorpião';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'seu signo é Sagitário';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return 'seu signo é Capricórnio';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'seu signo é Aquário';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'seu signo é Peixes';
  }
};

console.log(zodiacSign(9, 11));
console.log(zodiacSign(28, 2));
console.log(zodiacSign(25, 5));
