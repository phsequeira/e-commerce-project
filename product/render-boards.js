export function renderBoards(board) {

    const li = document.createElement('li');
    li.classList.add('board-item');

    const h3 = document.createElement('h3');
    h3.classList.add('board-name');
    h3.textContent = board.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('board-img');
    li.append(img);
    img.src = `../assets/${board.image}`;

    const pDes = document.createElement('p');
    pDes.classList.add('board-descript');
    pDes.textContent = board.description;
    li.append(pDes);

    const pCat = document.createElement('p');
    pCat.classList.add('board-category');
    pCat.textContent = board.category;
    li.append(pCat);

    const pPrice = document.createElement('p');
    pPrice.classList.add('board-price');
    pPrice.textContent = `$${board.price}`;
    li.append(pPrice);

    const button = document.createElement('button');
    button.textContent = 'add to cart';
    li.append(button);

    return li;
}