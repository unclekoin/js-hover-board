const board = document.getElementById('board');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const color = getRandomColor();

  event.target.style.backgroundColor = color;
  event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  event.target.removeAttribute('style');
}

function getRandomColor() {
  const color = `rgb(
    ${Math.trunc(Math.random() * 256)}, 
    ${Math.trunc(Math.random() * 256)}, 
    ${Math.trunc(Math.random() * 256)})`;

  return color;
}
