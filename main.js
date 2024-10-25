// Task 1: Setup HTML Structure for Order Form (This is completed in html file)

// Task 2: Add Event Listener for Product Selection
const quantityElement = document.getElementById("quantity");
const productSelector = document.getElementById("product-selector");

productSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;
    quantityElement.textContent = `$${selectedPrice}`;
});

//Task 3: Calculate Total Price Dynamically
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);