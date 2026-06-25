

const roles = [
    "Aspiring Cloud and DevOps Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingElement.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ==========================
// AOS ANIMATION
// ==========================

AOS.init({
  duration: 1200,
  once: true,
  offset: 100
});


// ==========================
// NAVBAR SHADOW
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.35)";

  } else {

    navbar.style.boxShadow = "none";
  }

});


// ==========================
// ACTIVE NAVIGATION LINKS
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.classList.add("active");
    }

  });

});


// ==========================
// SKILL CARD ANIMATION
// ==========================

const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {

  skill.style.opacity = "0";
  skill.style.transform = "translateY(40px)";

  setTimeout(() => {

    skill.style.transition = "all 0.6s ease";
    skill.style.opacity = "1";
    skill.style.transform = "translateY(0)";

  }, index * 120);

});


// ==========================
// RANDOM GLOW EFFECT
// ==========================

setInterval(() => {

  skills.forEach(skill => {
    skill.classList.remove("glow");
  });

  const randomSkill =
    skills[Math.floor(Math.random() * skills.length)];

  randomSkill.classList.add("glow");

}, 3000);


// ==========================
// 3D CARD HOVER EFFECT
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (0.5 - y / rect.height) * 12;

    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";

  });

});


// ==========================
// SMOOTH BUTTON CLICK EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "";
    }, 150);

  });

});


// ==========================
// OPTIONAL: SCROLL TO TOP
// ==========================

const topButton = document.getElementById("topBtn");

if (topButton) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }

  });

  topButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}