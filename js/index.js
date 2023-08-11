const iconMenu = document.querySelector('.icon-menu');
const navbar = document.querySelector('.navbar');
const features = document.querySelector('.features');
const featuresMenu = document.querySelector('.dropdown-features');
const company = document.querySelector('.company');
const companyMenu = document.querySelector('.dropdown-company');
const blur = document.querySelector('.blur');

iconMenu.addEventListener('click', () => {

    let show = iconMenu.classList.toggle('show');
    navbar.classList.toggle('cambio');
    if (show) {
        blur.style.display = 'block';
        iconMenu.style.backgroundImage = "url('../images/icon-close-menu.svg')";
    } else {
        iconMenu.style.backgroundImage = "url('../images/icon-menu.svg')";
        features.classList.remove('show', 'active');
        featuresMenu.style.display = 'none';
        company.classList.remove('show', 'active');
        companyMenu.style.display = 'none';
        blur.style.display = 'none';
    }
})


features.addEventListener('click', () => {

    let show = features.classList.toggle('show');
    features.classList.toggle('active');

    if (show) {
        featuresMenu.style.display = 'block';
        company.classList.remove('show', 'active');
        companyMenu.style.display = 'none';
    } else {
        featuresMenu.style.display = 'none';

    }

})
company.addEventListener('click', () => {
    let show = company.classList.toggle('show');
    company.classList.toggle('active');

    if (show) {
        companyMenu.style.display = 'block';
        features.classList.remove('show', 'active');
        featuresMenu.style.display = 'none';
    } else {
        companyMenu.style.display = 'none';

    }

})