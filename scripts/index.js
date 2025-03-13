addHeader();
function addHeader(){
    var scrollButton = document.createElement("button");
    scrollButton.setAttribute("id", "scroll_top");
    scrollButton.textContent = "Up"

    var header = document.createElement("nav");
    var headerLogoWrap = document.createElement("h1");
    var headerLogo = document.createElement("a");
    headerLogo.setAttribute("href", "index.html");
    headerLogo.setAttribute("class", "logo");
    headerLogo.textContent = "yuzhengwen";

    var headerButtonWrapper = document.createElement("div");
    headerButtonWrapper.setAttribute('class', 'nav_links_wrapper ');
    //headerButtons will be an array of <a> elements
    var headerButtons = [];
    for(i=0;i<4;i++){
        headerButtons.push(document.createElement('a'));
        headerButtonWrapper.appendChild(headerButtons[i]);
    } 
    headerButtons[0].setAttribute("href", "index.html");
    headerButtons[0].textContent="Home";
    headerButtons[1].setAttribute("href", "downloads.html");
    headerButtons[1].textContent="Downloads";
    headerButtons[2].setAttribute("href", "cv.html");
    headerButtons[2].textContent="CV";
    headerButtons[3].setAttribute("href", "legacy.html");
    headerButtons[3].textContent="Legacy";

    var menuButton = document.createElement("img");
    menuButton.setAttribute("id", "mobile_menu");
    menuButton.setAttribute("src", "img/menu.png");

    //add to respective parent elements
    for(i=0;i<4;i++){
        headerButtonWrapper.appendChild(headerButtons[i]);
    } 
    headerLogoWrap.appendChild(headerLogo);
    header.appendChild(headerLogoWrap);
    header.appendChild(headerButtonWrapper);
    header.appendChild(menuButton);

    // add to html doc
    var wrap = document.getElementById("header-placeholder");
    wrap.appendChild(header);
    wrap.appendChild(scrollButton);

    setActive(headerButtons);
    setResponsive(menuButton, headerButtonWrapper);
    var width = window.innerWidth;
}

//floating header when scroll
const header = document.querySelector("nav");
window.addEventListener('scroll', makeFloating);
function makeFloating(){
    header.classList.toggle("floating", document.body.scrollTop > header.offsetHeight || document.documentElement.scrollTop > header.offsetHeight);
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
function setResponsive(menuButton, headerButtonWrapper){
    const navMobile = document.querySelector(".nav-mobile-menu");
    menuButton.addEventListener('click', function(){
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

        if (boxTop < triggerBottom){
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

//scroll button
window.addEventListener('scroll', displayScrollTop);

function displayScrollTop(){
    const scrollTopButton = document.getElementById("scroll_top");
    scrollTopButton.classList.toggle("show", window.scrollY>0);
    //good practice to add listener instead of using html onclick=""
    scrollTopButton.addEventListener("click", scrollTop, false);
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
