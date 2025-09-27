const body = document.body;
const theme_switch_btn = document.getElementById("theme-switch-btn");
const announcement_icon = document.getElementById("announcement-icon");
const user_icon = document.getElementById("user-icon");

theme_switch_btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    announcement_icon.src =
      "./images/titlebar/announcement/announcement-darkmode.png";
    user_icon.src = "./images/titlebar/user-center/user-darkmode.png";
  } else {
    announcement_icon.src =
      "./images/titlebar/announcement/announcement-whitemode.png";
    user_icon.src = "./images/titlebar/user-center/user-whitemode.png";
  }
});
