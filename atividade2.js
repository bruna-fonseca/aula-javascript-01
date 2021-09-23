//       Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.
// a)       Coloque eles em ordem crescente.
// b)      Exibir no Console.

let arr1 = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];
arr1.sort((a, b) => a - b);
console.log(arr1);


// 2)      Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.

// a)       Adicionar o time "Flamengo" no final do array.
// b)      Remover o time que está no início do array.
// c)       Adicionar o time "Palmeiras" no início do array.
// d)      Adicionar o time "Grêmio" no final do array.
// e)      Adicionar os times "São Paulo" e "Santos" do início do array.
// f)        Exibir, no console, a quantidade de elementos no array.
// g)       Remover o time que está no final do array.
// h)      Exibir, no console, em ordem crescente os times que estão no array.

const teams = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];
teams.push('Flamengo');
teams.shift();
teams.unshift('Palmeiras');
teams.push('Grêmio');
teams.unshift('São Paulo', 'Santos');
console.log(teams.length);
teams.pop();
teams.sort();
console.log(teams);


// 3)      Criar um array contendo 7 atividades que você faz durante o dia.
// a)       Exibir no console as atividades na ordem inversa.
// b)      Selecionar e exibir no console, os elementos nas posições 3 e 6.
// c)       Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
// d)      Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.

let atividadesDiaria = ['acordar', 'escovar os dentes', 'alongar', 'estudar', 'almoçar', 'beber água', 'alimentar o gato'];

console.log(atividadesDiaria.reverse());
console.log(atividadesDiaria[2], atividadesDiaria[5]);
console.log(atividadesDiaria.join('-'));

let atividadesDiaria2 = ['escutar podcast', 'ficar no twitter'];
let conca = atividadesDiaria.concat(atividadesDiaria2);

console.log(conca);


// 4)      Criar um array com o nome de 5 cidades.
// a)       Exibir, no console, em ordem crescente os times que estão no array.
// b)      Remover a cidade que está no início do array.
// c)       Remover a cidade que está no final do array.
// d)      Exibir, no console, em ordem crescente os times que estão no array

let cities = ['recife', 'jampa', 'salvador', 'natal', 'olinda'];

console.log(cities.sort());
cities.shift();
cities.pop();
console.log(cities.sort());
