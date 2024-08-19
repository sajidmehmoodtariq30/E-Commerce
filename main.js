import './src/Styles/style.css'
import './src/Styles/pages/media-queries.css'
import topHeader from './src/JS/Components/topHeader.js'
import bottomHeader from './src/JS/Components/bottomHeader.js';
import mainSection from './src/JS/Components/heroSection.js'


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.section-navbar');
    navbar.insertAdjacentHTML('afterbegin',topHeader);
    navbar.insertAdjacentHTML('beforeend',bottomHeader);
    let main = document.getElementsByTagName('main')
    main[0].insertAdjacentHTML('afterbegin',mainSection);
})
