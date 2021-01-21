import { findById } from './utils.js';

const CART = 'CART';
const defaultEmptyCart = [];

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        // if there is cart parse it
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    }
    else {
        //if there is no cart stringify empty cart
        const stringydefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringydefaultCart);

        return defaultEmptyCart;
    }
}

export function clearCart() {
    const stringydefaultCart = JSON.stringify(defaultEmptyCart);
    
    localStorage.setItem(CART, stringydefaultCart);
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    
    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id) {
    const cart = getCart();
    
    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }

    setCart(cart);
}