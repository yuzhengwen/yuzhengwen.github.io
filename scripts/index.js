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

//good practice to add listener instead of using html onclick=""
document.getElementById ("scroll_top").addEventListener ("click", scrollTop, false);

function scrollTop() {
    console.log("UP");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}