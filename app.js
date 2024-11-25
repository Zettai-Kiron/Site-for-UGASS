



// For the committee slider functionality

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'slider-img'
    var sliderImages = document.querySelectorAll('.slider-img');

    // Add a click event listener to each slider image
    sliderImages.forEach(function(sliderImage) {
        sliderImage.addEventListener('click', function() {
            // Remove the 'active' class from all slider images
            sliderImages.forEach(function(img) {
                img.classList.remove('active');
            });
            // Add the 'active' class to the clicked slider image
            this.classList.add('active');
        });
    });
});
