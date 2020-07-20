let gridColor = document.getElementById('colorPicker');
let canvas = document.getElementById('sizePicker');
let grid = document.getElementById('pixelCanvas');

canvas.addEventListener('submit',function createCanvas(event){
    const sizeWidth = document.getElementById('inputWidth').value;
    const sizeHeight = document.getElementById('inputHeight').value;
    event.preventDefault();
    makeGrid(sizeHeight, sizeWidth);
}, false);


function makeGrid(height, width) {
    let selectedColor = document.getElementById('colorPicker').value;
    grid.innerHTML = null; 
    for(let i = 0; i <height; i++){
        const squareRow = document.createElement('tr'); 
        grid.append(squareRow);
        for(let j=0; j < width; j++){
            const squareColumn = document.createElement('td'); 
            squareRow.append(squareColumn);
            squareColumn.addEventListener('click', function(gridColor){ 
                squareColor = document.getElementById('colorPicker').value;
                squareColumn.style.backgroundColor = squareColor;
            });
        }
    }
}
