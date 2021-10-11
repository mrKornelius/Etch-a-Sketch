
const confBtn = document.querySelector('button');
confBtn.addEventListener('click', btn => {
    gridSize = 25; //+prompt('Enter one side of the desired grid size: ', 3);
    createSketch(gridSize);
})

const gridDiv = document.querySelector('.sketch');


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
}


function cellEvent() {
    const cells = document.querySelectorAll('div.cell');
    cells.forEach(c => c.addEventListener('mouseover', changeBackgroundColor));
}

function changeBackgroundColor(e) {
    this.style.backgroundColor = 'white';
}
