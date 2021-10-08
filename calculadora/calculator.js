let display = document.querySelector('#display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map((button) => {
  button.addEventListener('click', ({ target }) => {
    switch(target.innerText) {
      case 'C':
        display.innerText = '';
        break;
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Erro';
        }
        break;
      default:
        display.innerText += target.innerText;
        break;
    }
  });
});