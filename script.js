// Function to create the sketch area, given a grid size. A square area with
// the side length equal too grid size is created, and the size of each grid
// cell is calculated from the window size, where the minimum of width and 
// height is used, so the sketch area will fill the screen with a 20px margin.
function createSketch(gridSize) {
    let rowDiv;
    let cell;

    for (let row = 0; row < gridSize; row++) {
        rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let col = 0; col < gridSize; col++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            rowDiv.appendChild(cell);
        }

        gridDiv.appendChild(rowDiv);
    }
    cellEvent();
    setCellSize(gridSize);
}

// Function to resize all cells of the sketch.
// (Would like to change the css class .cell instead...)
function setCellSize(gridSize) {
    let w = window.innerWidth - 20;
    let h = window.innerHeight - 20;
    let cellSize = Math.floor(Math.min(w,h) / gridSize);
    
    const cell = document.getElementsByClassName('cell');
    for (let i = 0; i < cell.length; i++) {
        cell[i].style = `width: ${cellSize}px; height: ${cellSize}px;`;
    }
}

// Function to add a event listener to each cell. Listen for 'mouseover' events
// and will only trigger once for each cell.
function cellEvent() {
    const cells = document.querySelectorAll('div.cell');
    cells.forEach(c => c.addEventListener('mouseover', changeBackgroundColor, {once: true}));
}

// Function to change the background color of a cell.
function changeBackgroundColor(e) {
    // let randomColor = Math.floor(Math.random() * 0xFFFFFF);
    // this.style.backgroundColor = `#${randomColor}`;
    this.style.backgroundColor = 'white';
}

const gridDiv = document.querySelector('.sketch');
const confBtn = document.querySelector('button');

// Function to reset the sketch area.
confBtn.addEventListener('click', btn => {
    gridDiv.replaceChildren();
    gridSize = Math.min(100, +prompt('Enter one side of the desired grid size: (max 100) ', 64));
    createSketch(gridSize);
});

// start with a sketch.
createSketch(64);