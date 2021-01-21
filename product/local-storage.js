import { boards } from '../board-data.js';
export function getCart() { 
    return JSON.parse(localStorage.getItem('CART') || '[]');
}

export const getInventory = () => {
    const PRODUCTS_KEY = 'PRODUCTS';
// pull down from local storage
    let myboards = localStorage.getItem(PRODUCTS_KEY);

// if there are no fruits or if fruits is the string of null . . .
    if (!myboards) {
    // seed data into local storage
        myboards = JSON.stringify(boards);
    
        localStorage.setItem(PRODUCTS_KEY, myboards);
    }

    const parsedBoards = JSON.parse(myboards);

    return parsedBoards;
};