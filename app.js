const root = document.getElementById('root');
const field = [];
const emptyCell = 0;
const max= 10;
const min = 0;

root.classList.add('mosaic-container');

for(let i = 0; i < max; i++) {
    const row = [];
    for(let j = 0; j < max; j++) {
        row.push(emptyCell);
    }
    field.push(row);
}
console.log(field.length, field[0].length);

function randomPosition() {
    return Math.floor(Math.random() * max);
}

function randomSize() {
    return Math.floor(Math.random() * max) + 1;
}

function placeRect(x, y, width, height) {
    const elem = document.createElement('div');
    elem.classList.add('mosaic-element');
    root.append(elem);
    elem.style.gridRow = `${y + 1} / ${height + 1}`;
    elem.style.gridColumn =  `${x + 1} / ${width + 1}`;
}

function randomRect(){
    let width = randomSize(); 
    let height = randomSize();
    let x = randomPosition();
    let y = randomPosition();
    //console.log(x, width , y, height);
    placeRect(x, y, width, height);
}

randomRect();