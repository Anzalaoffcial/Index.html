const boxes = document.querySelectorAll('.box');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
  });
}, 500);
