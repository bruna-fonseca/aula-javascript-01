const carChoices = (model) => {
  if (model === 'hatch') {
    return 'Compra efetuada com sucesso';
  } else if (model === 'sedans' || model === 'motocicletas' || model === 'caminhonetes') {
    return 'Tem certeza que não prefere este modelo?';
  } else {
    return 'Não trabalhamos com este tipo de automóvel aqui.';
  }
};

const typeOfTriangle = (valueA, valueB, valueC) => {
  if (valueA === valueB && valueB === valueC) {
    return 'triangulo equilátero';
  } else if (valueA !== valueB && valueB !== valueC && valueA !== valueC) {
    return 'triangulo escaleno';
  } else {
    return 'triangulo isósceles';
  }
};

const verifyingNum = num => num >= 0 ? `${num} é positivo` : `${num} é negativo`;