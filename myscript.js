var header = document.querySelector('h1');

header.style.color = 'red';
// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Simple function for clarity
function changeHeaderColor() {
  colorInput = getRandomColor();
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval('changeHeaderColor()', 500);

//Restart
var restart = document.querySelector('#restart');

//all the squares
var squares = document.querySelectorAll('td');
//clear all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard);
//check the squares
// var cellOne = document.querySelector('#one');
//
// cellOne.addEventListener('click', function() {
//   if (cellOne.textContent === '') {
//     cellOne.textContent = 'X';
//   } else if (cellOne.textContent === 'X') {
//     cellOne.textContent = 'O';
//   } else {
//     cellOne.textContent = '';
//   }
// });

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}
//for loop
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}
