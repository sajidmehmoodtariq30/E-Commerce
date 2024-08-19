import '../../Styles/pages/main-page.css'

import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';
import mainSection from '../Components/heroSection.js';
import extraProductSection from '../Components/extraProductSection.js';
import policySection from '../Components/policySection.js'

const renderMainPage = () => {
    const navbar = document.getElementById('section-navbar');
    if (navbar) {
        navbar.insertAdjacentHTML('afterbegin', topHeader);
        navbar.insertAdjacentHTML('beforeend', bottomHeader);
    } else {
        console.error("Navbar element not found");
    }
    const main = document.getElementsByTagName('main');
    if (main.length > 0) {
        main[0].insertAdjacentHTML('afterbegin', mainSection);
    } else {
        console.error("Main element not found");
    }
    const extraProduct = document.getElementById('section-extra-product');
    if (extraProduct) {
        extraProduct.innerHTML = extraProductSection;
    } else {
        console.error("Extra Product element element not found");
    }
    const policy = document.getElementById('section-policy');
    if (policy) {
        policy.innerHTML = policySection;
    } else {
        console.error("policy element element not found");
    }
};

export default renderMainPage;
