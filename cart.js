// array to hold cart items
// this will be used to store the cart items in localStorage
export let cart = JSON.parse(localStorage.getItem('cart'));

// if cart is empty, initialize it with some products
if(!cart) {
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    }];
}

// function to save the cart to localStorage
function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

// function to add a product to the cart
export function addToCart(productId) {
    
    // using .find to check if the product is already in the cart
    // and assign to cartItem
    let matchingItem = cart.find(cartItem => productId === cartItem.productId);
    
    // if product is already in the cart, increase quantity by 1
    // otherwise, add a new item with quantity 1
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({ productId: productId, quantity: 1 });
    }

    saveToStorage();
}

// deleting elements from the cart
export function removeFromCart(productId) {
    // filter out the item with the given productId
    cart = cart.filter(cartItem => cartItem.productId !== productId);
    
    saveToStorage();
}

// function to update the quantity of a product in the cart
export function updateCartItemQuantity(productId, cartQuantity) {
    // find the item in the cart
    let matchingItem = cart.find(cartItem => productId === cartItem.productId);
    
    // if item is found, update its quantity
    if (matchingItem) {
        matchingItem.quantity = cartQuantity;
    }

    // if quantity is 0, remove the item from the cart
    if (cartQuantity <= 0) {
        removeFromCart(productId);
    } else {
        saveToStorage();
    }
}