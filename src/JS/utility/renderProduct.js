import productTemplate from '../Components/productTemplate.js';
import allproducts from '../../../api/products.json';
import quantityToggle from './quantityToggle.js';

const renderProducts = (Categories) => {
  const productContainer = document.getElementById('productContainer');
  if (productContainer) {
    // Loop through products and create HTML for each
    allproducts.forEach((currproduct) => {
      const productElement = productTemplate(currproduct);

      // Check if the product category matches the desired Categories
      for (let i = 0; i < Categories.length; i++) {
        if (currproduct.category === Categories[i]) {
          productContainer.innerHTML += productElement;
        }
      }
    });

    // Add event listeners for all increment and decrement buttons
    document.querySelectorAll('.cartIncrement').forEach(button => {
      button.addEventListener('click', (e) => {
        const cardElement = e.target.closest('.cards'); // Find the closest parent card
        const productId = cardElement.id.replace('card', ''); // Extract product ID from card ID
        const product = allproducts.find(p => p.id === Number(productId)); // Find the product

        quantityToggle(e, product); // Call quantity toggle function
        console.log(productId);
      });
    });

    document.querySelectorAll('.cartDecrement').forEach(button => {
      button.addEventListener('click', (e) => {
        const cardElement = e.target.closest('.cards');
        const productId = cardElement.id.replace('card', '');
        const product = allproducts.find(p => p.id === Number(productId));

        quantityToggle(e, product);
        console.log(productId);
      });
    });
  } else {
    console.error("Product container element not found");
  }
};

export default renderProducts;
