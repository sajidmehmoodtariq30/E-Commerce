import '../../Styles/pages/main-page.css'
import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';
import mainSection from '../Components/heroSection.js';

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
};

export default renderMainPage;
