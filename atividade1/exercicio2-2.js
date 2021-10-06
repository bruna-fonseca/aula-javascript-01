const carregar = () => {
  const div = document.createElement('div');

  for (let contador = 0; contador <= 10; contador++) {
    let newDiv = document.createElement('div');
    let createP = document.createElement('p');
    createP.innerHTML = `9 x ${contador} = ${9*contador}`;
    createP.style.color = 'white';
    newDiv.appendChild(createP);
    div.appendChild(newDiv);
  }
  document.body.style.backgroundColor = 'black'
  document.body.appendChild(div);
};