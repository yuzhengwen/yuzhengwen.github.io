

//floating header when scroll
window.addEventListener('scroll', makeFloating);
function makeFloating(){

    var header = document.querySelector("header");
    header.classList.toggle("floating", window.scrollY>0);
}

document.querySelectorAll(".header_button").forEach((button) => {
    console.log(button.className + button.href+ " \n" + window.location.href);
    if (button.href === window.location.href) {
        button.classList.add("active");
        button.setAttribute("aria-current", "page");
    }
});

//boxes sliding in & scroll up button showing when scroll
const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);
window.addEventListener('scroll', displayScrollTop);

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

function displayScrollTop(){
    
    var scrollTopButton = document.querySelector("#scroll_top");
    if (scrollTopButton != null){
        scrollTopButton.classList.toggle("show", window.scrollY>0);
        console.log(scrollTopButton.className);
    }
}

//on click of scroll up button
//good practice to add listener instead of using html onclick=""
const scrollTopButton = document.getElementById ("scroll_top");
if (scrollTopButton != null){
    scrollTopButton.addEventListener("click", scrollTop, false);
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//from https://www.jqueryscript.net/lightbox/lightbox2.html#google_vignette
lightbox.option({
    imageFadeDuration: 300,
    fadeDuration: 300,
    resizeDuration: 300,
})