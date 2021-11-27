function component(){
  let element = document.createElement('h1');
  element.textContent = 'Hello World!'
  return element
}

document.querySelector('body').append(component())