
let fruta = '';

if (fruta === 'maçã') {
   console.log('Não vendemos esta fruta aqui');
} else if (fruta === 'kiwi') {
   console.log('Estamos com escassz de kiwis');
} else if (fruta === 'melancia') {
   console.log('Aqui está, são 3 reais o quilo');
} else {
   console.log('Procure o administrador do sistema!');
}

function salaryIncrease(wage) {
  let increase, total;
  if (wage <= 280) {
    increase = wage * 0.20;
    total = wage + increase;
    return `salário antes ${wage} - percentual aplicado de 20% - valor do aumento ${increase} - aumento total ${total}`;
  } else if (wage > 280 && wage < 700) {
    increase = wage * 0.15;
    total = wage + increase;
    return `salário antes ${wage} - percentual aplicado de 15% - valor do aumento ${increase} - aumento total ${total}`; 
  } else if (wage > 700 && wage < 1500) {
    increase = wage * 0.10;
    total = wage + increase;
    return `salário antes ${wage} - percentual aplicado de 10% - valor do aumento ${increase} - aumento total ${total}`;
  } else if (wage >= 1500) {
     increase = wage * 0.05;
    total = wage + increase;
    return `salário antes ${wage} - percentual aplicado de 5% - valor do aumento ${increase} - aumento total ${total}`;
  }
}
