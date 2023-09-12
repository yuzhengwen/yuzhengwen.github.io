

//floating header when scroll
/*window.addEventListener('scroll', makeFloating);
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
});*/

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
    
    var scrollTop = document.querySelector("#scroll_top");
    scrollTop.classList.toggle("show", window.scrollY>0);
    console.log(scrollTop.className);
}

//on click of scroll up button
//good practice to add listener instead of using html onclick=""
document.getElementById ("scroll_top").addEventListener ("click", scrollTop, false);

function scrollTop() {
    console.log("UP");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//gallery
document.querySelectorAll(".gallery img").addEventListener ("mouseover", darken(), false);
function darken(){
    const selected = document.querySelector(".gallery img:hover");
    console.log(selected.className);
    const body = document.querySelector("body");
    body.classList.add("darken");
    selected.classList.add("selected");
}