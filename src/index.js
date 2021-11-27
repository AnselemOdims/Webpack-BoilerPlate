import './style.css';

function component(){
  let element = document.createElement('h1');
  element.textContent = 'Hello World!, still keeping'
  return element
}

document.querySelector('body').append(component())