// IMPORT MODULES under test here:
import { renderBoards } from '../product/render-boards.js';

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
    const expected = `<li class="board-item"><h3 class="board-name">Twinzer</h3><img class="board-img" src="../assets/Twinzer.PNG"><p class="board-descript">Beginner-Intermediate, Intermediate-Advanced, Advanced-Expert</p><p class="board-category">wakesurf</p><p class="board-price">$899.99</p></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBoards(twinzer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
