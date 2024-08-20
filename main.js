import './src/Styles/style.css';
import './src/Styles/pages/media-queries.css';
import renderMainPage from './src/JS/pages/mainPage.js';
import renderAllProductsPage from './src/JS/pages/allProducts.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    switch (path) {
        case '/index.html':
            renderMainPage();
            break;
        case '/allProducts.html':
            renderAllProductsPage();
            break;
        // Add additional cases as needed
        default:
            console.error("Page not recognized");
            break;
    }
});
