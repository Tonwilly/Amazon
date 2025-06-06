import {products} from './products.js';
import {addToCart, cart} from './cart.js';


let productsHTML = '';

products.forEach((product) => {

    productsHTML += `
        <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${product.image}">
                </div>
            
                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>
            
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="/Images/rating-${product.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                        ${product.rating.count} reviews
                    </div>
                </div>
            
                <div class="product-price">
                    $${product.priceCents / 100}
                </div>
            
                <div class="product-quantity-container">
                Quantity:
                    <select class="product-quantity-select js-product-quantity-select" data-product-id="${product.id}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            
                <div class="product-spacer"></div>
            
                <div class="added-to-cart">
                    <img src="/Images/checkmark.png">
                    Added
                </div>
            
                <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
    `;

});

// update the products section with the generated HTML
document.querySelector(".products").innerHTML = productsHTML;

// add event listener to cart icon on top of page
document.getElementById('cart-btn').addEventListener('click', function() {
    // openning the checkout page in the same tab,new tab - '_blank'
    window.open('checkout.html', '_self');
});

//add event listener to all add to cart buttons
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
        // get the product ID from the button's data attribute
        const productId = event.target.getAttribute('data-product-id');
        
        // call the addToCart function with the product ID
        addToCart(productId);
        
        // show the added to cart image
        // the product container of the clicked button, closest parent element
        const productContainer = event.target.closest('.product-container');
    // find the added-to-cart element and its image within this container
    const addedToCartEl = productContainer.querySelector('.added-to-cart');
    const imgEl = addedToCartEl.querySelector('.added-to-cart img');
    
    addedToCartEl.style.display = 'inline-block';
   // imgEl.src = '/Images/checkmark.png';
   // imgEl.style.display = 'inline-block';
   // imgEl.style.transition = 'opacity 0.5s ease-in-out';
        
       //const imgEl = document.querySelector('.added-to-cart img');
       //document.querySelector('.added-to-cart').style.display = 'inline-block';
       imgEl.src = '/Images/checkmark.png';
       imgEl.style.display = 'inline-block';
       imgEl.style.transition = 'opacity 0.5s ease-in-out';
        
        // hide the message after 2 seconds
        setTimeout(() => {
            //addedToCartMessage.classList.remove('show');
            imgEl.style.display = 'none';
            document.querySelector(".added-to-cart").style.display = 'none';
        }, 1500);

        updateCartQuantity();
        // update the cart quantity in the header
    });
});

function updateCartQuantity() {
    let cartQuantity = 0;
    // iterate through the cart and sum up the quantities
    cart.forEach(item => {
        cartQuantity += item.quantity;
    });

    document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}
updateCartQuantity();

// search for products
function searchProducts() {
    // get the search input value and convert it to lowercase for case-insensitive comparison
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    // select all product containers
    const productContainers = document.querySelectorAll('.product-container');

    // iterate through each product container and check if the product name includes the search input
    productContainers.forEach(container => {
        const productName = container.querySelector('.product-name').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}
// wait for the DOM to be fully loaded before adding event listeners for cleaner code
document.addEventListener('DOMContentLoaded', () => {
    // add event listeners for search input and button
    document.getElementById('search-input').addEventListener('input', searchProducts);
    // add event listener to search button
    document.getElementById('search-input-btn').addEventListener('click', searchProducts);
  });