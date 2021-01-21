import { boards } from '../board-data.js';
import { renderBoards } from './render-boards.js';

const list = document.getElementById('list');

for (let board of boards) {
    const boardEl = renderBoards(board);

    list.append(boardEl);
}

const quantity = document.getElementById('quantity');
const orderButton = document.getElementById('button');


console.log(quantity);
orderButton.addEventListener('click', () => {

    const quantityValue = quantity.nodeValue;

    console.log(quantityValue);
});