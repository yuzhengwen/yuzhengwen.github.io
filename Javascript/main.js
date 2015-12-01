
// variables for scrolling stuff
var dy = 17;
var currentY;
var targetY;

function scrollUp() {
    currentY = window.pageYOffset;
    targetY = 0;
    dy = -dy;
    window.scrollTo(0, targetY);
    /*
     * while (currentY > targetY) { setTimeout(function(){window.scrollBy(0 ,
     * dy);}, 50); // scrolls up every 50 miliseconds }
     */
}

function scrollDown() {
    dy = Math.abs(dy);
    targetY = document.documentElement.scrollHeight;
    window.scrollTo(0, targetY);
    /*
     * while (currentY < targetY) { setTimeout(function(){window.scrollBy(0 ,
     * dy);}, 50); // scrolls down every 50 miliseconds }
     */
}

var navOut = false;
function showNav() {
    var navList = document.getElementsByTagName("ul")[0];
    if (!navOut) {
        navList.style.display = "block";
        navOut = true;
    } else {
        navList.style.display = "none";
        navOut = false;
    }
}