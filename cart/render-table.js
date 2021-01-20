import { calcLineItem } from '../utils.js';

export function renderTableRow(cartItem, board) {
    const quantity = cartItem.quantity;
    
    const tr = document.createElement('tr');
    
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = board.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${calcLineItem(cartItem, board)}`;

    tr.append(nameTd, quantityTd, priceTd);
    
    return tr;
}
    