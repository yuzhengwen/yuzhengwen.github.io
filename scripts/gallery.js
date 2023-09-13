const gallery = "gallery";
const thumbnailFolder = "gallery/thumbnail" ;
const fullFolder = "gallery/full";
const fileextension = ".png";

$(document).ready(function() {
    console.log("DOCUMENT READY");
    getNoOfImages(0);
    //THE BELOW METHOD REQUIRES LISTING CONTENTS OF A DIRECTORY
    //IT DOES NOT WORK SINCE GITHUB PAGES DOES NOT INDEX DIRECTORIES
    /*
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: thumbnailFolder,
        success: function (data) {
            //List all .png file names in the page
            var noOfImages = $(data).find("a:contains(" + fileextension + ")").length;
            for (i=0;i<noOfImages;i++){
                // image names in both thumbnail and full image folder must be img0.png, img1.png etc
                var filename = "/img"+ i + ".png";
                $(".gallery").append('<a class="demo" href="'+fullFolder+filename+ ' " data-lightbox="gallery">' + 
                "<img src='" + thumbnailFolder + filename + "'></a>");
            }
        }
    });*/
});

//recursively checks image file exists using ajax calls, then add to a counter
function getNoOfImages(counter){
    $.ajax({
        url:('gallery/thumbnail/img' + counter.toString() + '.png'),
        type:'HEAD',
        success: function(data)
        {
            //file exists
            counter++;
            getNoOfImages(counter+1)
        },
        error: function()
        {
            //file not exists (counter will have the correct number of files in directory +1)
            // Now add the code under the .gallery div
            for (i=0;i<counter-1;i++){
                // image names in both thumbnail and full image folder must be img0.png, img1.png etc
                var filename = "/img"+ i + ".png";
                $(".gallery").append('<a class="demo" href="'+fullFolder+filename+ ' " data-lightbox="gallery">' + 
                "<img src='" + thumbnailFolder + filename + "'></a>");
            }
        }
    });
    console.log("No: of images: "+ counter);
    return counter;
}

//from https://www.jqueryscript.net/lightbox/lightbox2.html#google_vignette
lightbox.option({
    imageFadeDuration: 300,
    fadeDuration: 300,
    resizeDuration: 300,
})