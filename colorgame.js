var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colordisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var numSquares = 6;

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }

});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {

      squares[i].style.backgroundColor = colors[i];

      squares[i].style.display = "block";

  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from Array
  pickedColor = pickColor();
  //Change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors"
  //Change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?"

    } else{
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }

  });
}

function changeColors(color){
  //Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //Change each color to match given color
}

function pickColor() {
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num) {
//Make an Array
var arr = [];
//Add num colors to an Array
for (var i = 0; i < num; i++) {
  //Get random color and push to Array
  arr.push(randomColor());


}
//Return arr
return arr;
}
function randomColor() {
//pick a red from 255
var r = Math.floor(Math.random() * 256);
//pick a green from 255
var g = Math.floor(Math.random() * 256);
//pick a bluee from 255
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}
