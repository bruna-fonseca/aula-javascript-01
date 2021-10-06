const inputName = document.querySelector('#nome');

inputName.addEventListener('change', ({ target }) => {
  inputName.value = target.value.toUpperCase();
});

const div = document.createElement('div');
const inputAge = document.querySelector('#idade');

inputAge.addEventListener('change', ({ target }) => {
  const createH3 = document.createElement('h3');
  createH3.innerHTML = `Daqui a 10 anos você terá ${Number(target.value) + 10}`;

  div.appendChild(createH3);
  document.body.appendChild(div);
});