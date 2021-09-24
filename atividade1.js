// 1)      Criar 3 variáveis:
// a)       A primeira variável deverá conter o seu nome. 
// b)      A segunda variável deverá conter a sua idade.
// c)       Converter a segunda variável para string.
// d)      A terceira variável deverá conter a concatenação das duas variáveis anteriores.
// e)      Exibir no console a terceira variável.
// f)        Exibir no console o tamanho da terceira variável.

const name = 'Bruna';
const age = 22;
const parsedAge = String(age);
console.log(parsedAge);

const conca = name + age;
console.log(conca, conca.length);


// 2)      Criar 2 variáveis:
// a)       A primeira variável deverá conter o valor 17.
// b)      A segunda variável deverá conter o valor 28.
// c)       Converter os valores das duas variáveis
// d)       Exibir no console a terceira variável.

const seventeen = 17;
const twentyEight = 28;
const parsedNumbers = seventeen.toString() + twentyEight.toString();
console.log(parsedNumbers);

