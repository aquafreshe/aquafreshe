// Lottie
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
  "Keep water containers covered.",
  "Wash hands before handling water.",
  "Clean jerrycans weekly.",
  "Safe water protects families.",
  "Avoid touching water spouts.",
  "Teach children hygiene early.",
  "Use treated water for cooking.",
  "Community hygiene saves lives.",
  "Do not mix old and new water.",
  "Wash hands after toilet use.",
  "Keep animals away from water.",
  "Drink enough water daily.",
  "Clean refill stations daily.",
  "Avoid cracked containers.",
  "Use clean cups to draw water.",
  "Report unusual water smell.",
  "Water is life.",
  "Protect water sources."
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
    ? "Maji Safi.<br><span class='text-accent'>Uhai. Jamii.</span>"
    : "Clean Water.<br><span class='text-accent'>Life. Community.</span>";

  document.getElementById("heroText").textContent = sw
    ? "Huduma salama ya kujaza maji, kwa jamii za Kenya."
    : "Secure, hygienic water refill inspired by Kenyan values.";

  document.getElementById("tipsTitle").innerHTML = sw
    ? "Maarifa ya <span class='text-accent'>Usafi wa Maji</span>"
    : "Water & Hygiene <span class='text-accent'>Wisdom</span>";
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
