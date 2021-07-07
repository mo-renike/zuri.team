// dark mode
const darkmode = () => {
  const darkBtn = document.querySelector(".fa-adjust");
  const element = document.body;
  const container = document.querySelector(".courses-container");
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

// page toggler
const tabs = () => {
  const firstPage = document.querySelectorAll("#html");
  const secondPage = document.querySelectorAll("#css");
  const thirdPage = document.querySelectorAll("#javascript");
  const html = document.querySelector(".html");
  const css = document.querySelector(".css");
  const javascript = document.querySelector(".javascript");
  css.addEventListener("click", () => {
    firstPage.style.display = "none";
    thirdPage.style.display = "none";
    secondPage.style.display = "block";
  });
  javascript.addEventListener("click", () => {
    firstPage.style.display = "none";
    thirdPage.style.display = "block";
    secondPage.style.display = "none";
  });
  html.addEventListener("click", () => {
    firstPage.style.display = "block";
    thirdPage.style.display = "none";
    secondPage.style.display = "none";
  });
};
tabs();
