addHeader();
function addHeader() {

    const navMainWrapper = document.createElement("div");
    navMainWrapper.setAttribute("class", "nav_main_wrapper");

    var header = document.createElement("nav");
    var headerLogoWrap = document.createElement("h1");
    var headerLogo = document.createElement("a");
    headerLogo.setAttribute("href", "index.html");
    headerLogo.setAttribute("class", "logo");
    headerLogo.textContent = "yuzhengwen";

    var headerButtonWrapper = document.createElement("div");
    headerButtonWrapper.setAttribute('class', 'nav_links_wrapper ');
    //headerButtons will be an array of <a> elements
    const headerButtons = [];
    const navTexts = ["Home", "Profile", "CV"];
    const navLinks = ["index.html", "index.html#profile", "cv.html"];
    for (i = 0; i < navLinks.length; i++) {
        headerButtons.push(document.createElement('a'));
        headerButtons[i].textContent = navTexts[i];
        headerButtons[i].setAttribute("href", navLinks[i]);
        headerButtonWrapper.appendChild(headerButtons[i]);
    }

    var menuButton = document.createElement("img");
    menuButton.setAttribute("id", "mobile_menu");
    menuButton.setAttribute("src", "img/menu.png");

    const mobileMenu = document.createElement("div");
    mobileMenu.setAttribute("class", "nav-mobile-menu");
    for (i = 0; i < navLinks.length; i++) {
        mobileMenu.appendChild(document.createElement('a'));
        mobileMenu.children[i].textContent = navTexts[i];
        mobileMenu.children[i].setAttribute("href", navLinks[i]);
    }

    //add to respective parent elements
    for (i = 0; i < headerButtons.length; i++) {
        headerButtonWrapper.appendChild(headerButtons[i]);
    }
    headerLogoWrap.appendChild(headerLogo);
    navMainWrapper.appendChild(headerLogoWrap);
    navMainWrapper.appendChild(headerButtonWrapper);
    navMainWrapper.appendChild(menuButton);
    header.appendChild(navMainWrapper);
    header.appendChild(mobileMenu);

    // add to html doc
    var wrap = document.getElementById("header-placeholder");
    wrap.appendChild(header);

    setResponsive(menuButton, headerButtonWrapper);

    // on page load, set active nav button
    setActive(headerButtons);
    // on click, set active nav button (for no page reload)
    /*
    headerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            setActiveNav(headerButtons, index);
        });
    });*/
}

//floating header when scroll
const header = document.querySelector("nav");
window.addEventListener('scroll', makeFloating);
function makeFloating() {
    header.classList.toggle("floating", document.body.scrollTop > header.offsetHeight || document.documentElement.scrollTop > header.offsetHeight);
}
function setActiveNav(navButtons, activeIndex) {
    navButtons.forEach((button) => {
        button.classList.remove("active");
    });
    navButtons[activeIndex].classList.add("active");
}
//setting current page to active on header
function setActive(headerButtons) {
    headerButtons.forEach((button) => {
        if (button.href === window.location.href) {
            button.classList.add("active");
            button.setAttribute("aria-current", "page");
        }
    });
}
// adding listener to responsive menu button
function setResponsive(menuButton, headerButtonWrapper) {
    const navMobile = document.querySelector(".nav-mobile-menu");
    menuButton.addEventListener('click', function () {
        navMobile.classList.toggle("show-menu");
        /*headerButtons.forEach((button) => {
            console.log(button.textContent);
            button.classList.toggle("show_menu");
        });*/
    });
}

//boxes sliding in & scroll up button showing when scroll
const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

//scroll button
window.addEventListener('scroll', displayScrollTop);

function displayScrollTop() {
    const scrollTopButton = document.getElementById("scroll_top");
    scrollTopButton.classList.toggle("show", window.scrollY > 0);
    //good practice to add listener instead of using html onclick=""
    scrollTopButton.addEventListener("click", scrollTop, false);
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
