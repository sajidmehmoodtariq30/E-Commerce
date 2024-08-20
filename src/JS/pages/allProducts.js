import '../../Styles/components/loader.css';
import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';
import productHeaderSection from '../Components/productHeaderSection.js'
// import loader from '../Components/loader.js';

const renderAllProductsPage = () => {
    const navbar = document.getElementById('section-navbar');
    if (navbar) {
        navbar.insertAdjacentHTML('afterbegin', topHeader);
        navbar.insertAdjacentHTML('beforeend', bottomHeader);
    } else {
        console.error("Navbar element not found");
    }
    const productHeader = document.getElementById("section-products")
    if (productHeader) {
        productHeader.innerHTML = productHeaderSection;
    } else {
        console.error("Product Header element not found");
    }
}

export default renderAllProductsPage;