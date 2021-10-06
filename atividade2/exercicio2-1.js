const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');

input1.addEventListener('change', ({ target }) => {
  if (target.value < 2 || target.value > 10) {
    alert('apenas numeros entre 2 e 10 são aceitos!');
  }
});

input2.addEventListener('change', ({ target }) => {
  if (target.value < 2 || target.value > 10) {
    alert('apenas numeros entre 2 e 10 são aceitos!');
  }
});


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  const createH3 = document.createElement('h3');
  createH3.innerHTML = `A soma é = ${Number(input1.value) + Number(input2.value)}`;
  newDiv.appendChild(createH3);
  document.body.appendChild(newDiv);
});