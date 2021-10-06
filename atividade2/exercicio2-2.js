const h1 = document.querySelector('.hello-world');
const p = document.getElementsByTagName('p');
const btn = document.querySelector('#btn');
const div = document.querySelector('.div');

btn.addEventListener('click', () => {
  const createHeading = document.createElement('h1');
  createHeading.innerHTML = h1.textContent.toUpperCase();
  const createP =  document.createElement('p');
  const createP2 =  document.createElement('p');
  div.appendChild(createHeading);
  createP.innerHTML = p[0].textContent.toUpperCase();
  div.appendChild(createP);
  createP2.innerHTML = p[1].textContent.toUpperCase();
  div.appendChild(createP2);
});

h1.addEventListener('mouseover', () => {
  h1.style.color = 'red';
});