// color input
const colorGrid = document.getElementById('colorPicker');
// size input
const chooseSize = document.getElementById('sizePicker');
let grid = document.getElementById('pixelCanvas');

//user submits size, call makeGrid()
chooseSize.addEventListener('submit',function createCanvas(event){
    const widthSize = document.getElementById('inputWidth').value;
    const heightSize = document.getElementById('inputHeight').value;
    event.preventDefault();
    makeGrid(heightSize, widthSize);
}, false);

// creates the grid
function makeGrid(height, width) {
    let selectedColor = document.getElementById('colorPicker').value;
    // resets submitted info
    grid.innerHTML = null; 
    for(let h = 0; h <height; h++){
        // creates the rows
        const squareRow = document.createElement('tr'); 
        grid.append(squareRow);
        for(let w = 0; w < width; w++){
            // creates the columns
            const squareColumn = document.createElement('td'); 
            squareRow.append(squareColumn);
            // event listener for the color picker
            squareColumn.addEventListener('click', function(gridColor){ 
                squareColor = document.getElementById('colorPicker').value;
                squareColumn.style.backgroundColor = squareColor;
            });
        }
    }
}
