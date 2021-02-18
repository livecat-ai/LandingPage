/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector('#navbar__list');
const sectionElements = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getSectionInView() {
    /*
    Returns the section element that is closest to the top of the viewport.
    -  Loop through all the sections. The section with the smallest offset
       is the one we'll call in view
    */
    let viewOffset = Infinity;
    let inView = null;
    const sections = document.querySelectorAll('section');
    for (section of sections) {
        const offset = Math.abs(section.offsetTop - pageYOffset);
        if (offset < viewOffset) {
            inView = section;
            viewOffset = offset;
        }
    }
    return inView;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/* Todo:
    * get nav-bar
    * populate nav-bar with nav buttons
    * create scoll to section function
    * add on click listener to nav buttons
*/

function getMenuItems() {
    let menuItems = ['Home'];
    for (item of document.querySelectorAll('section')) {
        menuItems.push(item.dataset.nav);
    }
    return menuItems;
}

function createMenuLink(name) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.appendChild(document.createTextNode(name));
    a.classList.add('menu__link');
    li.appendChild(a);
    return li;
}

function addNavBarItems() {
    for (item of getMenuItems()) {
        navBar.appendChild(createMenuLink(item));
    }
}

function menuClickEventCallback(event) {
    event.preventDefault();
    if (event.target.nodeName === "A") {
        const dataNav = event.target.textContent;
        for (section of sectionElements) {
            if (dataNav === "Home") {
                window.scrollTo(0, 0);
            }
            else if (section.dataset.nav === dataNav) {
                section.scrollIntoView(true);
            }
        }
    }
}



// Add class 'active' to section when near top of viewport
function setActiveSection(event) {
    const activeNow = document.querySelector('.active');
    const inView = getSectionInView();
    if (activeNow != inView) {
        activeNow.classList.remove("active");
        inView.classList.add("active");
    }
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addNavBarItems();

// Scroll to section on link click
navBar.addEventListener('click', menuClickEventCallback);

// Set sections as active
const main = document.querySelector("main");
window.addEventListener('scroll', setActiveSection);