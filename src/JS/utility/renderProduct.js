import productTemplate from '../Components/productTemplate.js';
import allproducts from '../../../api/products.json';

const renderProducts = (Categories) => {
  const productContainer = document.getElementById('productContainer');
  if (productContainer) {
    // Loop through products and create HTML for each
    allproducts.forEach((currproduct) => {
      const productElement = productTemplate(currproduct);

      for (let i = 0; i < Categories.length; i++) {
        if (currproduct.category === Categories[i]) {
          productContainer.innerHTML += productElement; // append the product element to the container
        }
      }
    });
  } else {
    console.error("Product container element not found");
  }
};

export default renderProducts;