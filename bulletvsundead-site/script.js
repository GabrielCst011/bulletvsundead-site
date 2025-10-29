// ===== Scroll suave nos links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===== Navbar muda de cor ao rolar =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== Animação de entrada (fade-up) =====
const fadeElements = document.querySelectorAll(".fade-up");

function checkFadeElements() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkFadeElements);
checkFadeElements();

// ===== Efeito neon pulsante no título =====
const title = document.querySelector(".hero h1");
if (title) {
  setInterval(() => {
    title.classList.toggle("pulse");
  }, 1500);
}

// ===== Botão voltar ao topo =====
const topButton = document.createElement("button");
topButton.innerText = "▲";
topButton.className = "back-to-top";
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
