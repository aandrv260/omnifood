// Buttons
const learnMoreBtn = document.querySelector('#learn-more');
const startEatingBtn = document.querySelector('#start-eating');

// Copyright text
const copyrightP = document.querySelector('.copyright');

// Sections
const sectionHowItWorks = document.querySelector('#section-how');
const sectionPricing = document.querySelector('#section-pricing');
const sectionCTA = document.querySelector('#section-cta');

// Mobile Nav
const mobNavList = document.querySelector('.nav__list');
const navBTNOpen = document.querySelector('.nav-icon.open');
const navBTNClose = document.querySelector('.nav-icon.close');
const mobileNav = document.querySelector('.nav__list');

// Mobile Navigation Functionality

mobNavList.addEventListener('click', function (e) {
    e.preventDefault();
    const clicked = e.target;
    const clickedId = e.target.getAttribute('href');
    console.log(clicked, clickedId);

    if (!clickedId || clickedId === '#') return;

    const destinationEl = document.querySelector(clickedId);
    const destinationCoords = destinationEl.getBoundingClientRect();

    closeNav();

    window.scrollTo({
        top: destinationCoords.top + window.pageYOffset,
        left: destinationCoords.left + window.pageXOffset,
        behavior: 'smooth'
    });

})

// DATES

const now = new Date().getFullYear();
const year = document.querySelectorAll('.year');
year.forEach(el => {
    el.textContent = now;
});


// ------------------------------------------------------------
// Scrolls

const smoothScroll = (e, dest) => {
    const sectionCoords = dest.getBoundingClientRect();
    e.preventDefault();
    window.scrollTo({
        left: sectionCoords.left + window.pageXOffset,
        top: sectionCoords.top + window.pageYOffset + 50,
        behavior: "smooth"
    });
};

learnMoreBtn.addEventListener('click', function (e) {
    smoothScroll(e, sectionHowItWorks);
});

startEatingBtn.addEventListener('click', function (e) {
    smoothScroll(e, sectionCTA);
});

// ------------------------------------------------------------
// Mobile Nav Open / Close



const openNav = () => {
    mobileNav.classList.add('nav-open');
    navBTNClose.classList.toggle('hide');
    navBTNOpen.classList.toggle('hide');
};

const closeNav = function () {
    mobileNav.classList.remove('nav-open');
    navBTNClose.classList.toggle('hide');
    navBTNOpen.classList.toggle('hide');
};

navBTNOpen.addEventListener('click', function () {
    openNav();
});


navBTNClose.addEventListener('click', function () {
    closeNav();
})

// ------------------------------------------------------------

// Sticky header

const header = document.querySelector('.nav');

const sticky = header.offsetTop;


window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Fixing Flexbox Gap In Old Safari Browsers
const checkFlexGap = function () {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported)
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
};

checkFlexGap();