const validateNum = (num) => num >= 0 ? 'positivo' : 'negativo';

const comparingNumbers = (valueA, valueB, valueC) => (valueA + valueC) > valueB ? `${valueA} + ${valueC} = ${valueA + valueC}` : `${valueA + valueC} = ${valueB}`;

const frontEndStudentsShift = (shift) => {
  if (!shift) {
    return "Valor Inválido";
  } else if (shift === 'matutino') {
    return 'Bom dia';
  } else if (shift === 'vespertino') {
    return 'Boa Tarde';
  } else if (shift === 'noturno') {
    return 'Boa noite';
  }
};
