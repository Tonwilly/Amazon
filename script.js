import {products} from './products.js';
import {addToCart} from './cart.js';


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
        //const addedToCartMessage = event.target.previousElementSibling;
       // addedToCartMessage.classList.add('show');
       const imgEl = document.querySelector('.added-to-cart img');
       document.querySelector('.added-to-cart').style.display = 'inline-block';
       imgEl.src = '/Images/checkmark.png';
       imgEl.style.display = 'inline-block';
       imgEl.style.transition = 'opacity 0.5s ease-in-out';
        
        // hide the message after 2 seconds
        setTimeout(() => {
            //addedToCartMessage.classList.remove('show');
            imgEl.style.display = 'none';
            document.querySelector(".added-to-cart").style.display = 'none';
        }, 1500);
    });
});

document.querySelector('.cart-quantity').textContent = localStorage.getItem('cartQuantity') || '0';
// Update the cart quantity in the header