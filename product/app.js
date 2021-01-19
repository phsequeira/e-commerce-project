import { boards } from './data.js';
import { renderBoards } from './render-boards.js';

const list = document.getElementById('list');

for (let board of boards) {
    const boardEl = renderBoards(board);

    list.append(boardEl);
}