// Smooth Scroll for Anchor Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('onclick',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});
  
  // Simple Form Validation
  const form = document.querySelector('.contact form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const message = document.querySelector('#message');
  
      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Please fill in all fields.');
      }
    });
  }
// Fade-In Animation on Scroll
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('is-visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
  