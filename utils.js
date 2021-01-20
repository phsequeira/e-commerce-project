export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(cartitem, boards){
    return cartitem.quantity * boards.price;
}