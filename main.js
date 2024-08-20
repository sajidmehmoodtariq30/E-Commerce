import './src/Styles/style.css';
import './src/Styles/pages/media-queries.css';
import renderMainPage from './src/JS/pages/mainPage.js';
import renderAllProductsPage from './src/JS/pages/allProducts.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // Define path groups for actions
    const mainPagePaths = ['/index.html', '/'];
    const allProductsPagePath = '/all-products.html';

    switch (path) {
        case (mainPagePaths.includes(path) ? path : null):
            renderMainPage();
            break;
        case allProductsPagePath:
            renderAllProductsPage();
            break;
        // Add additional cases as needed
        default:
            console.error("Page not recognized");
            break;
    }
});