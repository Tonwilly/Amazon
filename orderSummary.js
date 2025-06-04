import { cart} from './cart.js';
import { getProduct } from './products.js';

export function renderOrderSummary() {
    let orderSummaryHTML = "";

    if (cart.length === 0) {
        // If the cart is empty(no items), display a message
        orderSummaryHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const product = getProduct(item.productId); // fetch product details
            // total price of item according to quantity
            const itemTotal = (product.priceCents / 100 * item.quantity).toFixed(2);
            // Generate HTML for each item in the order summary
            orderSummaryHTML += `
                <div class="order-summary-item">
                    <div class="item-name">
                        <h4>${product.name}</h4>
                    </div>
                    <div class="item-quantity">
                        <span><h4>Quantity:</h4> ${item.quantity}</span>
                    </div>
                    <div class="item-price">
                        <span><h4>Price: </h4>$${itemTotal}</span>
                    </div>
                </div>
            `;
        });
    }
    // Update the order summary section with the generated HTML
    document.querySelector(".order-items").innerHTML = orderSummaryHTML;


    // Calculate and display the total price of all items in the cart
    const totalPrice = cart.reduce((total, item) => {
        const product = getProduct(item.productId);
        return total + (product.priceCents / 100 * item.quantity);
    }, 0).toFixed(2);

    // Display the total price in the order summary
    document.querySelector(".order-total-price").innerHTML = `<h4>Total: $${totalPrice}</h4>`;
}
