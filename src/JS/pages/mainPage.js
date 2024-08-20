import '../../Styles/components/loader.css';
import topHeader from '../Components/topHeader.js';
import bottomHeader from '../Components/bottomHeader.js';
import loader from '../Components/loader.js';

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
                const target = entry.target;

                // Show loader
                target.innerHTML = loader;

                // Lazy load content based on section ID
                if (target.id === 'section-extra-product') {
                    import('../Components/extraProductSection.js').then(module => {
                        target.innerHTML = module.default;
                    });
                } else if (target.id === 'section-policy') {
                    import('../Components/policySection.js').then(module => {
                        target.innerHTML = module.default;
                    });
                } else if (target.id === 'section-why--choose') {
                    import('../Components/whyChoseSection.js').then(module => {
                        target.innerHTML = module.default;
                    });
                } else if (target.tagName === 'FOOTER') {
                    import('../Components/footerSection.js').then(module => {
                        target.innerHTML = module.default;
                    });
                }

                observer.unobserve(target); // Stop observing once loaded
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

    // Immediately load the main section with loader
    if (main) {
        main.innerHTML = loader;
        import('../Components/heroSection.js').then(module => {
            main.innerHTML = module.default;
        });
    } else {
        console.error("Main element not found");
    }
};

export default renderMainPage;
