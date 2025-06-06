import { cart, removeFromCart, updateCartItemQuantity, updateProductQuantity} from './cart.js';
import { getProduct} from './products.js';
import { renderOrderSummary } from './orderSummary.js';


document.getElementById("amazon-logo-btn").addEventListener("click", function() {
    // Redirect to the home page
    window.location.href = "index.html";
});

//getCartItems, updateCartItemQuantity, removeCartItem 

export function renderCartItems() {
    let cartSummarryHTML = "";

    if (cart.length === 0) {
        cartSummarryHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const product = getProduct(item.productId);
            const itemTotal = (product.priceCents / 100 * item.quantity).toFixed(2);
            cartSummarryHTML += `
                <div class="checkout-item">
                    <div class="item-image">
                        <img src="${product.image}" alt="Black and Gray Athletic Cotton Socks - 6 Pairs">
                    </div>
                    <div class="item-details">
                        <h4>${product.name}</h4>
                        <div class="cart-item-quantity">
                        <input type="number" value="${item.quantity}" min="1" data-product-id="${item.productId}" class="item-quantity-input">
                    </div>
                        <div class="cart-item-price">Price: $${(product.priceCents / 100).toFixed(2)}</div>
                        <div class="item-price">
                            <span class="price">Total: ${itemTotal}</span>
                        </div>
                        <button class="remove-cart-item-btn" data-product-id="${product.id}">Remove</button>
                        <button class="update-cart-item-btn" data-product-id="${product.id}">Update</button>
                    </div>
                </div>
            `;
        });
    }

    // Update the cart summary section with the generated HTML
    document.querySelector(".checkout-items-container").innerHTML = cartSummarryHTML;

    // add event listeners to remove buttons for each cart item
    document.querySelectorAll('.remove-cart-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-product-id');
            removeFromCart(productId);
            updateCartItemQuantity();
            renderCartItems();
            renderOrderSummary();
        });
    });

    // add event listeners to update buttons for each cart item
    document.querySelectorAll('.update-cart-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-product-id');
            updateProductQuantity(productId);
            updateCartItemQuantity();
            renderCartItems();
            renderOrderSummary();
        });
    });
    
}

renderCartItems();
updateCartItemQuantity();
renderOrderSummary();