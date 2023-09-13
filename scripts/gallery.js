const gallery = "gallery"
const thumbnailFolder = "gallery/thumbnail" 
const fullFolder = "gallery/full"
const fileextension = ".png"

console.log("Working");
$(document).ready(function() {
    console.log("READY");
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: thumbnailFolder,
        success: function (data) {
            //List all .png file names in the page
            var noOfImages = $(data).find("a:contains(" + fileextension + ")").length;
            console.log(noOfImages);
            for (i=0;i<noOfImages;i++){
                // image names in both thumbnail and full image folder must be img0.png, img1.png etc
                var filename = "/img"+ i + ".png";
                $(".gallery").append('<a class="demo" href="'+fullFolder+filename+ ' " data-lightbox="gallery">' + 
                "<img src='" + thumbnailFolder + filename + "'></a>");
            }
        }
    });
});

//from https://www.jqueryscript.net/lightbox/lightbox2.html#google_vignette
lightbox.option({
    imageFadeDuration: 300,
    fadeDuration: 300,
    resizeDuration: 300,
})