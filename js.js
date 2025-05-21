document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
});

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const visibleItems = 3;
const itemWidth = items[0].offsetWidth + 10; // item + margin
let currentIndex = 0;
const maxIndex = items.length - visibleItems;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  updateCarousel();
});
const elements = document.querySelectorAll('.fade-in');

function handleScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); 



  