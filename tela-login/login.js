const btn = document.querySelector('.btn');
const input = document.getElementsByTagName('input');

btn.addEventListener('click', () => {
  if (input[0].value === '' || input[1].value === '') {
    alert('preencha os campos');
  } else {
    alert('voce está sendo redirecionado');
  }
});