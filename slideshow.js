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

    if ((slideshowIndex) == 1) {
        document.getElementById("project_description").innerHTML = "<h1>Scissoring Gait Assistive Device</h1><p>My team and I created a new accesible design for assistive device used by patients with scissoring gait</p><p>Press the image to learn more</p>"
    } else {
        document.getElementById("project_description").innerHTML = "<h1>Chess Game</h1><p>A chess game for two players with fully integrated UI using C++</p>"
    }

}

function changeSlide(num) {
    showSlides(slideshowIndex += num);
}