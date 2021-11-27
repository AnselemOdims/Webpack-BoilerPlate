function component(){
  let element = document.createElement('h1');
  element.textContent = 'Hello World!, still here'
  return element
}

document.querySelector('body').append(component())