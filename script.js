// dark mode
const darkmode = () => {
  const darkBtn = document.querySelector(".fa-adjust");
  const element = document.body;
  const container = document.querySelector('.courses-container')
  const peachBg = document.querySelector(".intro");
  const footer = document.querySelector(".footer");
  darkBtn.addEventListener("click", () => {
    element.classList.toggle("dark-mode-bg");
    peachBg.classList.toggle("dark-mode-bg2");
    footer.classList.toggle("dark-mode-bg2");
    container.classList.toggle("dark-mode-bg2");
  });
};
darkmode();
