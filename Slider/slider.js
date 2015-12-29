var image;
var autoSlideTimer;
/*
* var imagesToDisplay = [
* "https://dl.dropboxusercontent.com/s/33ls16gnacu60a4/slider-img-1.jpg?dl=0",
* "https://dl.dropbox.com/s/2fwnpoqzfqvwqbx/slider-img-2.jpg?dl=0",
* "https://dl.dropbox.com/s/tpfzo5kcduyl2is/slider-img-3.jpg?dl=0",
* "https://dl.dropbox.com/s/xmwgvpzpvckzrkd/slider-img-4.jpg?dl=0" ];
*/
//for some reason doesnt work so stick to this:
var imagesToDisplay = ["Images/Slider/slider-img-1.jpg", "Images/Slider/slider-img-2.jpg", "Images/Slider/slider-img-3.jpg", "Images/Slider/slider-img-4.jpg"];
var imageCount = 0;
var maxCount = 3;
var minCount = 0;

function setUpSlider() {
    image = document.getElementById('slider-img');
    image.src = imagesToDisplay[imageCount];
	autoSlide();
}

function autoSlide() {
    autoSlideTimer = setInterval("nextSlide();", 5000);
}

function nextSlide() {
    if (imageCount == maxCount) {
        imageCount = minCount;
    } else {
        imageCount++;
    }
    image.src = imagesToDisplay[imageCount];
}

function prevSlide() {
    if (imageCount == minCount) {
        imageCount = maxCount;
    } else {
        imageCount--;
    }
    image.src = imagesToDisplay[imageCount];
}

function stop() {
    clearTimeout(autoSlideTimer);
    document.getElementById("play").style.display = "block";
    document.getElementById("stop").style.display = "none";
}

function play() {
    autoSlideTimer = setInterval("nextSlide();", 5000);
    document.getElementById("stop").style.display = "block";
    document.getElementById("play").style.display = "none";
}