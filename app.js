const game = document.querySelector('#mosaic-game-grid');
const colorInput = document.querySelector('#block-background-color');
const borderInput = document.querySelector('#border-color');
const startGame = document.querySelector('#new-game-btn');
const blockNumberWrapper = document.querySelector('.blocks-number');

window.addEventListener('load', playMosaic);
startGame.addEventListener('click', playMosaic);

function playMosaic() {
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }
  const number = Math.floor(Math.random() * (40000 - 9 + 1)) + 9;
  blockNumberWrapper.innerText = `Blocks number: ${number}`;
  const sqrt = Math.floor(Math.sqrt(number*2));

  game.style['grid-template-rows'] = `repeat(${sqrt}, 1fr)`;
  game.style['grid-template-columns'] = `repeat(${sqrt}, 1fr)`;
  let x = 1;
  let row = 1;
  for (let i = 1; i < number + 1; i++) {
    const div = document.createElement('div');
    div.className = 'block';
    if (x === sqrt + 1) {
      x = 1;
      row += 1;
    }
    div.style['grid-column-start'] = x;
    x += Math.floor(Math.random() * (3)) + 1;
    if (x > sqrt + 1 || i === number) {
      x = sqrt + 1;
    }
    div.style['grid-column-end'] = x;
    game.append(div);
  }
  game.style['grid-template-rows'] = `repeat(${row}, 1fr)`;
}

let selected;

game.addEventListener('click', e => {
  if (e.target.className === 'block' || e.target.className === 'block block-active') {
    e.target.classList.add('block-active');
    e.target.style.backgroundColor = colorInput.value;
    activeBlock(e.target);
  }
});

function activeBlock(block) {
  if (selected) {
    selected.classList.remove('block-active');
  }
  selected = block;
  selected.classList.add('block-active');
}

borderInput.addEventListener('change', (e) => {
  game.style.borderColor = borderInput.value;
});

colorInput.addEventListener('change', (e) => {
  if (selected) {
    selected.style.backgroundColor = colorInput.value;
  }
});