import productTemplate from '../Components/productTemplate.js';
import products from '../../../api/products.json';

const renderAllProducts = () => {
    const productContainer = document.getElementById('productContainer');
    if (productContainer) {
        products.forEach(product => {
            const template = document.createElement('template');
            template.innerHTML = productTemplate;
            const clone = template.content.cloneNode(true);

            // Populate product data into the template
            const imageElement = clone.querySelector('.productImage');
            const nameElement = clone.querySelector('.productName');
            const descriptionElement = clone.querySelector('.productDescription');
            const priceElement = clone.querySelector('.productPrice');
            const actualPriceElement = clone.querySelector('.productActualPrice');
            const stockElement = clone.querySelector('.productStock');

            if (imageElement) imageElement.src = product.image;
            if (nameElement) nameElement.textContent = product.name;
            if (descriptionElement) descriptionElement.textContent = product.description;
            if (priceElement) priceElement.textContent = `$${product.price}`;
            if (actualPriceElement) actualPriceElement.textContent = product.actualPrice ? `$${product.actualPrice}` : 'N/A';
            if (stockElement) stockElement.textContent = product.stock;

            productContainer.appendChild(clone);
        });
    } else {
        console.error("Product container element not found");
    }
};

export default renderAllProducts;
