// Select color input
let colorSelector = document.getElementById('colorPicker');
// Select size input and create variables for the value of height and width
var widthSize = document.getElementById('inputWidth');
var heightSize = document.getElementById('inputHeight'); 
var grid = document.getElementById('pixelCanvas');           
var sizeSelector = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
	event.preventDefault();
	makeGrid(widthSize.value, heightSize.value);
});
// implement the makeGrid function
function makeGrid(inputWidth, inputHeight) {
    // reset the submitted info
    grid.innerHTML = null; 
    for (var x = 1; x<=inputWidth; x++) {
        var row = pixelCanvas.insertRow(-1);
        for (var y = 1; y<=inputHeight; y++) {
            var cell = row.insertCell(-1);
            // color the cell with selected color
            cell.addEventListener('click', function(event) {
                event.target.style.backgroundColor = colorPicker.value;
            });  
        }
    }
}
