const menu = document.querySelector(".menu");
const parts = document.querySelector(".parts");
const main = document.querySelector("#home");
const part = document.querySelectorAll(".parts a");
const aside = document.querySelectorAll("aside");

menu.addEventListener("click", () => {
  menu.classList.toggle("rotate");
  parts.classList.toggle("hidden");
});
for (let i = 0; i < part.length; i++) {
  part[i].addEventListener("click", () => {
    parts.classList.remove("hidden");
    menu.classList.toggle("rotate");
  });
}
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 400,
});
ScrollReveal().reveal("section > *> * , footer *", { delay: 100 });
