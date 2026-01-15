// Lottie Animation
lottie.loadAnimation({
  container: document.getElementById("lottie-water"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
});

// Tips
const tips = [
  "Always store drinking water in clean containers.",
  "Boil water if quality is uncertain.",
  "Wash hands before handling water.",
  "Do not mix old and new water.",
  "Keep water containers covered.",
  "Community hygiene protects lives.",
  "Teach children safe water habits.",
  "Avoid touching water spouts.",
  "Use treated water for cooking.",
  "Water is life – protect it."
];

const tipBox = document.getElementById("tipBox");
setInterval(() => {
  tipBox.textContent = tips[Math.floor(Math.random() * tips.length)];
}, 4000);

// Language Toggle
let sw = false;
document.getElementById("langToggle").addEventListener("click", () => {
  sw = !sw;
  document.getElementById("langToggle").textContent = sw ? "EN" : "SW";
  document.getElementById("heroTitle").innerHTML = sw
    ? "Maji Safi.<br><span style='color:var(--accent)'>Uhai. Jamii.</span>"
    : "Clean Water.<br><span style='color:var(--accent)'>Life. Community.</span>";

  document.getElementById("heroText").textContent = sw
    ? "Huduma salama ya kujaza maji kwa jamii za Kenya."
    : "Secure, hygienic water refill inspired by Kenyan values.";
});

// Theme Toggle (Dark / Light / Auto)
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(mode) {
  root.classList.remove("light");
  if (mode === "light") root.classList.add("light");
  if (mode === "auto") {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      root.classList.add("light");
    }
  }
  localStorage.theme = mode;
  themeToggle.textContent =
    mode === "dark" ? "Light" :
    mode === "light" ? "Auto" :
    "Dark";
}

applyTheme(localStorage.theme || "auto");

themeToggle.addEventListener("click", () => {
  const current = localStorage.theme || "auto";
  const next = current === "dark" ? "light" : current === "light" ? "auto" : "dark";
  applyTheme(next);
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
