export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(cartitem, boards){
    let amount = cartitem.quantity * boards.price;
    amount = Math.round(amount * 100) / 100;
    return amount;
}