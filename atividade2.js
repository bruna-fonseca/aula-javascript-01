// 1)      Calcular a tabuada de multiplicar de 5.
//  a)       Adicionar o resultado de cada cálculo em um array.
// b)      Transformar o array em string.
// c)       Exibir no console.

let resultados = [];

for (let contador = 0; contador <= 10; contador++) {
  let tabuada = 5 * contador;
  resultados.push(tabuada);
}

let parsedResultados = resultados.toString();

console.log(parsedResultados);



// 2)      Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:
// a)       n é o valor da temperatura a ser convertida. (n - 32) / 1.8
// b)      Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
// c)       Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.

const arr = [54, 78, 56, 98, 0, 12, 11, 37];
const arrConvertido = [];

arr.map((elemento) => {
  let resultado = Math.round((elemento - 32) / 1.8);
  arrConvertido.push(resultado);
});

console.log(arrConvertido);