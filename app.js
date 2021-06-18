const board = document.getElementById('board');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.removeAttribute('style');
}

function getRandomColor() {
  const color = `rgb(
    ${Math.trunc(Math.random() * 256)}, 
    ${Math.trunc(Math.random() * 256)}, 
    ${Math.trunc(Math.random() * 256)})`;

  return color;
}
