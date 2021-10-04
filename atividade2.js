// 1)      Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
// a)       Calcular a média do aluno.
// b)      Se a média for maior ou igual a 7, retornar "Aprovado!";
// c)       Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
// d)      Se a média for menor que 5, retornar "Reprovado!".
// e)      Chamar a função e exibir no console o resultado.

const classifyingGrades = (grade1, grade2) => {
  const average = (grade1 + grade2) / 2;
  if (average >= 7) {
    return 'Aprovado!';
  } else if (average >= 5 && average < 7) {
    return 'Recuperação';
  } else {
    return 'Reprovado';
  }
};

console.log(classifyingGrades(7,7));
console.log(classifyingGrades(1,7));
console.log(classifyingGrades(6,5));
console.log(classifyingGrades(7,10));


// 2)      Criar uma função anônima que calcula a tabuada de 3.
// a)       Chamar a função e exibir no console o resultado.

const multiplicationTable = () => {
  for (let repeater = 0; repeater <= 10; repeater++) {
    let result = `3 x ${repeater} = ${3 * repeater}`;
    console.log(result);
  }
  return;
}

console.log(multiplicationTable());

// 3)      Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
// a)       Chamar a função e exibir no console o resultado.

const legalAgeOrNot = (birthYear) => {
  const dateNow = new Date();
  const yearNow = dateNow.getFullYear();
  const age = yearNow - birthYear;
  
  if (age >= 18) {
    return 'Maior de idade';
  } else {
    return 'Menor de idade';
  }
};

console.log(legalAgeOrNot(1998));
console.log(legalAgeOrNot(2007));


