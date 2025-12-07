function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function goTo(page) {
    window.location.href = page;
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        document.getElementById('navMenu').classList.remove('active');
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
    let current = 'home'; 
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90; 
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    setActiveLink();

    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('load', setActiveLink);
