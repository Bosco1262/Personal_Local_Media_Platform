const body = document.body;
const theme_switch_btn = document.getElementById("theme-switch-btn");

theme_switch_btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
