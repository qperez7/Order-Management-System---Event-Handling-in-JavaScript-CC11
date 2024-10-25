// Task 1: Setup HTML Structure for Order Form (This is completed in html file)

// Task 2: Add Event Listener for Product Selection
const quantityElement = document.getElementById("quantity");
const productSelector = document.getElementById("product-selector");

productSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value;
    quantityElement.textContent = `$${selectedPrice}`;
});