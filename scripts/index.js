

//floating header when scroll
window.addEventListener('scroll', makeFloating);
function makeFloating(){
    var header = document.querySelector("header");
    //header.classList.toggle("floating", window.scrollY>0);
    header.classList.toggle("floating", document.body.scrollTop > header.offsetHeight || document.documentElement.scrollTop > header.offsetHeight);
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
