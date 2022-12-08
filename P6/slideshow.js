let slideshowIndex = 1;
showSlides(slideshowIndex);

function showSlides (num) {
    let list_of_slides = document.getElementsByClassName("slide");
    if (num > list_of_slides.length) {
        slideshowIndex = 1;
    }
    if (num < 1) {
        slideshowIndex = list_of_slides.length;
    }
    for (let i = 0; i < list_of_slides.length; i++) {
        list_of_slides[i].style.display = "none";
    }

    list_of_slides[slideshowIndex - 1].style.display = "block";
}

function changeSlide(num) {
    showSlides(slideshowIndex += num);
}