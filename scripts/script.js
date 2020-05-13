const tilesDiv = document.querySelector('.tiles');
let tiles = [];
const resetButton = document.querySelector('#reset-button');
const fillButton = document.querySelector('#fill-button');

function createTiles(cols) {
    const numTiles = cols * cols;
    const tilesDivWidth = tilesDiv.offsetWidth;
    const tileWidth = (tilesDivWidth - 2) / cols;
    console.log(tileWidth);
    for (let i = 0; i < numTiles; i++) {
        const tile = document.createElement('div');
        tile.style.width = `${tileWidth}px`;
        tile.style.height = `${tileWidth}px`;
        tile.addEventListener('mouseenter', changeTileColor);
        tile.classList.add('tile');
        tiles.push(tile);
        tilesDiv.appendChild(tile);
    }
}

function randomColor() {
    const randNum1 = randomNumber(256);
    const randNum2 = randomNumber(256);
    const randNum3 = randomNumber(256);
    return `rgb(${randNum1}, ${randNum2}, ${randNum3})`;
}

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function changeTileColor(event) {
    event.target.style.backgroundColor = randomColor();
}

resetButton.addEventListener('click', initializeGrid);

function initializeGrid() {
    tiles.forEach(tile => tilesDiv.removeChild(tile));
    tiles = [];
    let numRows = +(prompt('Enter in the number of rows and cols (n)\nThe grid will be n x n tiles large:'))
    while(Number.isNaN(numRows) || numRows < 2) {
        numRows = +(prompt('You must enter in a number: '));
    }
    createTiles(numRows);
}

createTiles(30);