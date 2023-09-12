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