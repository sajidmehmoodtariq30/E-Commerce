import productTemplate from '../Components/productTemplate.js';
import products from '../../../api/products.json';

const renderAllProducts = () => {
    const productContainer = document.getElementById('productContainer');
    if (productContainer) {
        productContainer.innerHTML = '';

        // Loop through products and create HTML for each
        products.forEach(product => {
            
            let productElement = productTemplate(product);
            
            // Append the new element to the container
            productContainer.insertAdjacentHTML('afterbegin',productElement);
        });
    } else {
        console.error("Product container element not found");
    }
};

export default renderAllProducts;
