import '../../Styles/pages/main-page.css';

import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';

const renderMainPage = () => {
    const navbar = document.getElementById('section-navbar');
    if (navbar) {
        navbar.insertAdjacentHTML('afterbegin', topHeader);
        navbar.insertAdjacentHTML('beforeend', bottomHeader);
    } else {
        console.error("Navbar element not found");
    }

    // Intersection Observer for Lazy Loading Sections
    const main = document.getElementsByTagName('main')[0];
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'section-extra-product') {
                    import('../Components/extraProductSection.js').then(module => {
                        entry.target.innerHTML = module.default;
                    });
                } else if (entry.target.id === 'section-policy') {
                    import('../Components/policySection.js').then(module => {
                        entry.target.innerHTML = module.default;
                    });
                } else if (entry.target.id === 'section-why--choose') {
                    import('../Components/whyChoseSection.js').then(module => {
                        entry.target.innerHTML = module.default;
                    });
                } else if (entry.target.tagName === 'FOOTER') {
                    import('../Components/footerSection.js').then(module => {
                        entry.target.innerHTML = module.default;
                    });
                }
                observer.unobserve(entry.target); // Stop observing once loaded
            }
        });
    });

    // Elements to be lazy loaded
    const extraProduct = document.getElementById('section-extra-product');
    const policy = document.getElementById('section-policy');
    const whyChoose = document.getElementById('section-why--choose');
    const footer = document.querySelector('footer');

    // Observing elements for lazy loading
    if (extraProduct) observer.observe(extraProduct);
    if (policy) observer.observe(policy);
    if (whyChoose) observer.observe(whyChoose);
    if (footer) observer.observe(footer);

    // Immediately load the main section
    if (main) {
        import('../Components/heroSection.js').then(module => {
            main.insertAdjacentHTML('afterbegin', module.default);
        });
    } else {
        console.error("Main element not found");
    }
};

export default renderMainPage;
