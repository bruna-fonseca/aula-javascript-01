// 1)      Criar um array com os nomes de 7 cidades de Pernambuco:
// a)       Ordenar seus elementos na ordem invertida.
// b)      Exibir no console.
// c)    Adicionar duas cidades usando splice().
// d)      Exibir no console.

let pernambucoCities = ['recife', 'olinda', 'petrolina', 'garanhuns', 'bonito', 'paudalho', 'gravatá'];
console.log(pernambucoCities.reverse());

let addCities = pernambucoCities.splice(0, 0, 'pesqueira', 'serra talhada');
console.log(pernambucoCities);


// 2)      Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5
// a)       Obter qual o index onde está o elemento 9.
// b)      Exibir no console qual a posição no array em que o elemento 9 está.

const arr = [1,4,8,6,9,2,6,7,3,0,5];

console.log(arr.length);
console.log(arr.indexOf(9));
