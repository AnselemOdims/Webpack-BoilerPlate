import './style.css';
import Avatar from './Avatar.jpg';

function component(){
  let div = document.createElement('div')
  let element = document.createElement('h1');
  element.textContent = 'Hello World!, still keeping'
  div.append(element)
  let img = document.createElement('img');
  img.src = Avatar;
  div.append(img)
  return div
}

document.querySelector('body').append(component())