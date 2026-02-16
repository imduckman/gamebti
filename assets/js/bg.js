var colors = [
  '#2196f3',
  '#e91e63',
  '#ffeb3b',
  '#74ff1d'
  ];
function createSquare() {
const section = document.querySelector('section');
if (!section) return;  // section이 없으면 함수 종료
const square = document.createElement('span');
var size = Math.random() * 10;
square.style.width = 10 + size+'px';
square.style.height = 10 + size+'px';
var bg = colors[Math.floor(Math.random() * colors.length)];
square.style.background = bg;
square.style.top = Math.random() * innerHeight + "px";
square.style.left = Math.random() * innerWidth + "px";
section.appendChild(square);

setTimeout(() => {
  square.remove();
}, 6000);
}

setInterval(createSquare, 300);