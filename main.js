let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}



//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});


const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

function showNextSlide() {
    index++;
    if (index > slides.length - 5) {
        index = 0;
    }
    carouselWrapper.style.transform = `translateX(${-index * 20}%)`;
}

function showPrevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 5;
    }
    carouselWrapper.style.transform = `translateX(${-index * 20}%)`;
}

document.querySelector('.carousel-button.next').addEventListener('click', showNextSlide);
document.querySelector('.carousel-button.prev').addEventListener('click', showPrevSlide);

// Auto-slide every 3 seconds
setInterval(showNextSlide, 3000);


window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar li a');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150; // Atur offset sesuai keinginan
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});