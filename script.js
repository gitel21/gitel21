// On click, section menu-icon be active

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
}

// On scroll, section menu-icon be active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         })
      }
   })

   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.screenY > 100);
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
}

// Content Styling

ScrollReveal({ 
   // reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.skills h2, .portfolio h2, .contact h2', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, .about-img', { origin: 'right' });
ScrollReveal().reveal('.home-img, .about-content', { origin: 'left' });

const typed = new Typed('.text', {
   strings: ['Web Developer'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
})



