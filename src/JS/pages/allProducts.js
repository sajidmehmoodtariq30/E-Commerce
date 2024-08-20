import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';
import productHeaderSection from '../Components/productHeaderSection.js';
import renderProducts from '../utility/renderProduct.js';
import footerSection from '../Components/footerSection.js'
import allCategories from "../../../api/allCategories.json"

const renderAllProductsPage = () => {
    const navbar = document.getElementById('section-navbar');
    if (navbar) {
        navbar.insertAdjacentHTML('afterbegin', topHeader);
        navbar.insertAdjacentHTML('beforeend', bottomHeader);
    } else {
        console.error("Navbar element not found");
    }

    const productHeader = document.getElementById('section-products');
    if (productHeader) {
        productHeader.innerHTML = productHeaderSection;
        
    } else {
        console.error("Product Header element not found");
    }
    renderProducts(allCategories);
    const footer = document.querySelector('.section-footer');
    if(footer){
        footer.insertAdjacentHTML('afterbegin', footerSection);
    } else {
        console.error("footer element not found");
    }
};

export default renderAllProductsPage;