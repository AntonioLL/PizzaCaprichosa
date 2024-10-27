var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    var index = 0, time = 3000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length) index = 0;
        slides[index].classList.add('active');
    }, time);
}

function orderPizza(pizza) {
    alert('Has pedido: ' + pizza);
}

/* function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'flex';
} */