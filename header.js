window.addEventListener('scroll', makeFloating);

function makeFloating(){
    var header = document.querySelector("header");
    header.classList.toggle("floating", window.scrollY>0);
}