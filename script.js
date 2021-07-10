// dark mode
const darkmode = () => {

  const element = document.body;
  const container = document.querySelector(".courses-container");
  const footer = document.querySelector(".footer");
  const darkBtn = document.querySelector(".fa-adjust");

  darkBtn.addEventListener("click", () => {
    element.classList.toggle("dark-mode-bg");
    footer.classList.toggle("dark-mode-bg2");
    container.classList.toggle("dark-mode-bg2");
  });
};
darkmode();

// document.documentElement.style.setProperty("--peach-bg", "#121212");

