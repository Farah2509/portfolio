
// 1. NAVBAR & SMOOTH SCROLL

const navLinks = document.querySelectorAll('nav a[href^="#"]');
const navMenu = document.querySelector("nav ul");
const menuToggle = document.getElementById("menuToggle");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// 2. MOBILE MENU

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("show-menu");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show-menu");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });

}


// 3. ACTIVE NAVBAR

const sections = document.querySelectorAll("section[id]");
const sectionLinks = document.querySelectorAll("nav ul a");

function updateActiveLink() {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 150) {
            current = section.id;
        }

    });

    sectionLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );

    });

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


// 4. TYPING ANIMATION

const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Web Developer"
];

const typingElement = document.querySelector(".typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    typingElement.textContent = currentRole.substring(
        0,
        deleting ? charIndex - 1 : charIndex + 1
    );

    charIndex += deleting ? -1 : 1;

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1500;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);

}

if (typingElement) {
    typeEffect();
}


// 5. DARK / LIGHT THEME

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

function updateThemeIcon() {

    if (!themeToggle) return;

    const isLight = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight ? "☀️" : "🌙";

}

updateThemeIcon();

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight = document.body.classList.contains("light-mode");

        localStorage.setItem(
            "portfolioTheme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon();

    });

}


// 6. CONTACT FORM

const contactForm = document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you for contacting me! 💜");

        contactForm.reset();

    });

}


// 7. CONSOLE MESSAGE

console.log("Farah Jalori Portfolio Loaded Successfully 💜");

//abhi tk sb sahi se work kr rha hai