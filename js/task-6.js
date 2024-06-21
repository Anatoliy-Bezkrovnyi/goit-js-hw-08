function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]'); 
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', createButtonHandler);
destroyButton.addEventListener('click', destroyButtonHandler);

function createButtonHandler() {   
  const amount = input.value;
  let width = 30;
  let height = 30;
  let boxesCollection = [];
  if (parseInt(amount) < 1 || parseInt(amount) > 100) {
        alert("Provided value is expected to be between 1 and 100 inclusively");
        return;
  }
  for (let i = 0; i < parseInt(amount); i++) {
    
    const box = `<div class="box" style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesCollection.push(box);  
    width += 10;
    height += 10;
  }
  boxes.insertAdjacentHTML('afterbegin', boxesCollection.join(''));
}

function destroyButtonHandler() {
  boxes.innerHTML = '';
}

