// Select color input
let gridColor = document.getElementById('colorPicker');
// Select size input
let canvas = document.getElementById('sizePicker');
let grid = document.getElementById('pixelCanvas');


// When size is submitted by the user, call makeGrid()
canvas.addEventListener('submit',function createCanvas(event){
    const sizeWidth = document.getElementById('inputWidth').value;
    const sizeHeight = document.getElementById('inputHeight').value;
    event.preventDefault();
    makeGrid(sizeHeight, sizeWidth);
}, false);


function makeGrid(height, width) {
    let selectedColor = document.getElementById('colorPicker').value;
    grid.innerHTML = null; //resets the grid and the color
    for(let i = 0; i <height; i++){
        const squareRow = document.createElement('tr'); //creates the rows in the table
        grid.append(squareRow);
        for(let j=0; j < width; j++){
            const squareColumn = document.createElement('td'); //creates the cells in the row
            squareRow.append(squareColumn);
            squareColumn.addEventListener('click', function(gridColor){ //event listener for the color selector
                squareColor = document.getElementById('colorPicker').value;
                squareColumn.style.backgroundColor = squareColor;
            });
        }
    }
}
