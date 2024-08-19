import './style.css'
import topHeader from './JS/Components/topHeader.js'
import bottomHeader from './JS/Components/bottomHeader.js';


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.section-navbar');
    navbar.insertAdjacentHTML('afterbegin',topHeader)
    navbar.insertAdjacentHTML('beforeend',bottomHeader)
})
