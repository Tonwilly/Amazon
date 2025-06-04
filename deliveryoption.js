// delivery options
const deliveryOptions = [
    { id: '7days', label: '7 Days', days: 7, priceCents: 0 },
    { id: '3days', label: '3 Days', days: 3, priceCents: 399 },
    { id: '1day',  label: '1 Day',  days: 1, priceCents: 699 }
  ];
  
  // function for fetching date and formatting to dd/mm/yyy
  function formatDate(date) {
    // Format as DD/MM/YYYY
    return `${date.getDate().toString().padStart(2, '0')}/${
      (date.getMonth() + 1).toString().padStart(2, '0')
    }/${date.getFullYear()}`;
  }
  
  // changing cents to dollars and cents
  function formatPrice(cents) {
    return cents === 0 ? 'Free' : `$${(cents / 100).toFixed(2)}`;
  }
  
  // generating html for delivery options
  // and rendering it to the delivery options container
  function renderDeliveryOptions() {
    const container = document.querySelector('.delivery-options-container');
    if (!container) return;
  
    const today = new Date();
    let html = '';
  
    deliveryOptions.forEach((option, idx) => {
      const deliveryDate = new Date(today);
      deliveryDate.setDate(today.getDate() + option.days);
      const dateString = formatDate(deliveryDate);
      const priceString = formatPrice(option.priceCents);
  
      html += `
        <div class="delivery-option js-delivery-option" data-delivery-option-id="${option.id}">
          <input type="radio" class="delivery-option-input" name="delivery-option" id="delivery-${option.id}" ${idx === 0 ? 'checked' : ''}>
          <label for="delivery-${option.id}">
            <div class="delivery-option-date">${dateString}</div>
            <div class="delivery-option-price">${priceString} - Shipping (${option.label})</div>
          </label>
        </div>
      `;
    });
  
    container.innerHTML = html;
  }
  
  document.addEventListener('DOMContentLoaded', renderDeliveryOptions);