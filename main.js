import './src/Styles/style.css'
import topHeader from './src/JS/Components/topHeader.js'
import bottomHeader from './src/JS/Components/bottomHeader.js';


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.section-navbar');
    navbar.insertAdjacentHTML('afterbegin',topHeader)
    navbar.insertAdjacentHTML('beforeend',bottomHeader)
})
