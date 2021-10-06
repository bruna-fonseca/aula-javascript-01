const carregar = () => {
  const div = document.createElement('div');
  const capitais = ['Recife, Natal, São Luís, João Pessoa, Salvador'];

  for (let index = 0; index < capitais.length; index++) {
    createP = document.createElement('p');
    createP.innerHTML = capitais[index]
    div.appendChild(createP);
  }
  document.body.appendChild(div);
};