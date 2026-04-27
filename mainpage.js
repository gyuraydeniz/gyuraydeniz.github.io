document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 5%';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)'; 
    } else {
        nav.style.padding = '1.5rem 5%';
        nav.style.boxShadow = 'none';
    }
});