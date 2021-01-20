import { boards } from '../board-data.js';
import { findById, calcLineItem } from '../utils.js';
import { renderTableRow } from './render-table.js';
import { cart } from './cart-data.js';

const table = document.querySelector('table');
const orderButton = document.getElementById('place-order');


orderButton.addEventListener('click', () => {
    alert('Your order has been placed');
});

let total = 0;

for (let item of cart) {
    const board = findById(item.id, boards);

    const totalForThisBoard = calcLineItem(item, board);

    total = total + totalForThisBoard;
    total = Math.round(total * 100) / 100;
    const tableRowDOM = renderTableRow(item, board);

    table.append(tableRowDOM);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

table.append(tr);