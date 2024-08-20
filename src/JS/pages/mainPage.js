import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';
import mainSection from '../Components/heroSection.js';
import extraProductSection from '../Components/extraProductSection.js'
import policySection from '../Components/policySection.js'
import WhyChooseSection from '../Components/whyChoseSection.js'
import footerSection from '../Components/footerSection.js'

const renderMainPage = () => {
    const navbar = document.querySelector('.section-navbar'); // Changed to querySelector and using class
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
    const extraProduct = document.querySelector('.section-extra-product');
    if(extraProduct){
        extraProduct.insertAdjacentHTML('afterbegin', extraProductSection);
    } else {
        console.error("extraProduct element not found");
    }
    const policy = document.querySelector('.section-policy');
    if(policy){
        policy.insertAdjacentHTML('afterbegin', policySection);
    } else {
        console.error("policy element not found");
    }
    const whyChoose = document.querySelector('.section-why--choose');
    if(whyChoose){
        whyChoose.insertAdjacentHTML('afterbegin', WhyChooseSection);
    } else {
        console.error("whyChoose element not found");
    }
    const footer = document.querySelector('.section-footer');
    if(footer){
        footer.insertAdjacentHTML('afterbegin', footerSection);
    } else {
        console.error("footer element not found");
    }
};

export default renderMainPage;