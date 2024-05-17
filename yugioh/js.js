//Slider
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = Math.ceil(slides.length / 3); //
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = Math.ceil(slides.length / 3); //
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(nextSlide, 8000);
});

//Feedback

function handleSubmit(event) {
    event.preventDefault();
    alert('Your feedback has been submitted. Thank you!');
}


