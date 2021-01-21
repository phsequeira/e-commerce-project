// IMPORT MODULES under test here:
import { renderBoards } from '../product/render-boards.js';
import { findById, calcLineItem } from '../utils.js';
import { boards } from '../board-data.js';
import { cart } from '../cart/cart-data.js';
import { renderTableRow } from '../cart/render-table.js';
import { getCart } from '../cart-utils.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    const twinzer = {
        id: 1,
        name: 'Twinzer', 
        image: 'Twinzer.PNG',
        description: 'Beginner-Intermediate, Intermediate-Advanced, Advanced-Expert',
        category: 'wakesurf',
        price: 899.99,
    };
    // Set up your arguments and expectations
    // eslint-disable-next-line no-useless-escape
    const expected = `<li class="board-item"><h3 class="board-name">Twinzer</h3><img class="board-img" src="../assets/Twinzer.PNG"><p class="board-descript">Beginner-Intermediate, Intermediate-Advanced, Advanced-Expert</p><p class="board-category">wakesurf</p><p class="board-price">$899.99</p><button value=\"1\">add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBoards(twinzer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('findById should take 1 and the board array and return twinzer', (expect) => {
    //Arrange
      
    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'Twinzer', 
        image: 'Twinzer.PNG',
        description: 'Beginner-Intermediate, Intermediate-Advanced, Advanced-Expert',
        category: 'wakesurf',
        price: 899.99,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, boards);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('compare cost of itmes to function calcLineItem', (expect) => {
    //Arrange
    
    // Set up your arguments and expectations
    const expected = 1679.98;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(cart[2], boards[2]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('makes row for table from elements given', (expect) => {
    //Arrangeconst 
    
    // Set up your arguments and expectations
    const expected = `<tr><td>Twinzer</td><td>1</td><td>$899.99</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cart[0], boards[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
    
});

test('should return the current state of the cart', assert => {
    const myFakeCart = [
        { id: 'twinzer', quantity: 4 },
        { id: 'shrimp', quantity: 2 },
    ];

    const myStringyFakeCart = JSON.stringify(myFakeCart);
    localStorage.setItem('CART', myStringyFakeCart);

    // arrange
    const cart = getCart();
    const expected = myFakeCart;
    
    // assert
    assert.deepEqual(cart, expected);
});
test('should return an empty array if the cart is null in local storage', assert => {
    localStorage.removeItem('CART');
    // arrange

    const cart = getCart();
    const expected = [];
    
    // assert
    assert.deepEqual(cart, expected);
});