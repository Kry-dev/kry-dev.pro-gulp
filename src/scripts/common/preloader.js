function initPreloader() {
    // const bkgImages           = document.querySelectorAll('div[style*=background-image]');
    //const images              = document.querySelectorAll('img') ;
    //const images_total_count  =  bkgImages.length;
    var
        images = document.querySelectorAll('img'),
        images_total_count = images.length,
        images_loaded_count = 0,
        preloader = document.getElementById('preloader'),
        perc_display = document.getElementById('preloader__percents');

    for (var i = 0; i < images_total_count; i++) {
        var image_clone = new Image();
        image_clone.onload = image_loaded;
        image_clone.onerror = image_loaded;
        // if(images[i].src != 0){
        //     image_clone.src = images[i].src;
        // }

        image_clone.src = images[i].src;
    }

    function image_loaded() {
        images_loaded_count++;
        const percents = ((100 / images_total_count) * images_loaded_count) << 0;
        perc_display.innerText = percents + '%';
        if (images_loaded_count >= images_total_count) {
            setTimeout(function () {
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }, 1000);
        }
    }

}
export {initPreloader};
