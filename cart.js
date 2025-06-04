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
    const newCart = [];
    
    // filter out the item with the given productId
    // cart = cart.filter(cartItem => cartItem.productId !== productId);
    // or use .forEach to create a new array without the item
    cart.forEach(cartItem => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      cart = newCart;
    
    saveToStorage();
}

// function to update the quantity of a product in the cart
export function updateCartItemQuantity() {
    let cartQuantity = 0;

    // iterate through the cart and sum up the quantities   
    cart.forEach(cartItem => cartQuantity += cartItem.quantity);
    // update the cart quantity in the header
    document.querySelector(".number-of-items").innerHTML = `(${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'})`;

}