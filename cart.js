import getProduct from './products.js';



const cart = [];

export function addToCart(productId, quantity) {

    
    const product = getProduct(productId);
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }
}