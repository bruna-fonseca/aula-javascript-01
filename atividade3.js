// 1)      Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30
// a)       Chamar a função e exibir o resultado no console.

let aprovados = [
    {candidato: "Renato Soares", nota: 7.8, idade: 29},
    {candidato: "Marcos Teixeira", nota: 7.8, idade: 26},
    {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
    {candidato: "João Oliveira", nota: 7.8, idade: 27},
    {candidato: "Adriana Telles", nota: 7.8, idade: 28}
];

const approved = (candidatos) => {
  const filter = candidatos.filter(({idade}) => idade >= 28 && idade <= 30);
  return filter;
};

console.log(approved(aprovados));

// 2)      Criar um função anônima que recebe uma string como parâmetro:
// a)       Repetir o valor do parâmetro 37 vezes.
// b)      Retornar o Resultado.
// c)       Chamar a função e exibir o resultado no console.

const repeatString = (str) => {
  let resultado = [];
  for (let repetidor = 1; repetidor <= 37; repetidor++) {
    resultado.push(str);
  }
  return resultado;
}

console.log(repeatString('str'));
