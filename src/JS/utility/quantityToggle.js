const quantityToggle = (e, product) => {
    const quantityElement = e.target.closest('.stockElement').querySelector('.productQuantity');
    let currentQuantity = Number(quantityElement.textContent);

    // If it's an increment button
    if (e.target.classList.contains('cartIncrement')) {
        if (currentQuantity < product.stock) {
            currentQuantity += 1;
        }
    }

    // If it's a decrement button
    if (e.target.classList.contains('cartDecrement')) {
        if (currentQuantity > 1) {
            currentQuantity -= 1;
        }
    }

    // Update the quantity in the UI
    quantityElement.textContent = currentQuantity;
};

export default quantityToggle;
