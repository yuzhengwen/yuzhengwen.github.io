

//floating header when scroll
window.addEventListener('scroll', makeFloating);
function makeFloating(){
    var header = document.querySelector("header");
    header.classList.toggle("floating", window.scrollY>0);
}

//setting current page to active on header
document.querySelectorAll(".header_button").forEach((button) => {
    if (button.href === window.location.href) {
        button.classList.add("active");
        button.setAttribute("aria-current", "page");
    }
});

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

window.addEventListener('scroll', displayScrollTop);
const scrollTopButton = document.getElementById ("scroll_top");
function displayScrollTop(){
    scrollTopButton.classList.toggle("show", window.scrollY>0);
}

//on click of scroll up button
//good practice to add listener instead of using html onclick=""
scrollTopButton.addEventListener("click", scrollTop, false);

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//from https://www.jqueryscript.net/lightbox/lightbox2.html#google_vignette
lightbox.option({
    imageFadeDuration: 300,
    fadeDuration: 300,
    resizeDuration: 300,
})