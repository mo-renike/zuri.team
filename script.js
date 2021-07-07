// dark mode
// const darkmode = () => {

//   const element = document.body;
//   const container = document.querySelector(".courses-container");
//   const peachBg = document.querySelector(".intro");
//   const footer = document.querySelector(".footer");
//   darkBtn.addEventListener("click", () => {
//     element.classList.toggle("dark-mode-bg");
//     peachBg.classList.toggle("dark-mode-bg2");
//     footer.classList.toggle("dark-mode-bg2");
//     container.classList.toggle("dark-mode-bg2");
//   });
// };
// darkmode();

const bgDark = () => {
  const element = document.body;
  const darkBtn = document.querySelector(".fa-adjust");
  const peachBg = document.documentElement.style.fontVariant();
  darkBtn.addEventListener("click", () => {
    element.classList.toggle("dark-mode-bg");
    if (condition) {
    } else {
    }
    // document.documentElement.style.setProperty("--peach-bg", "#121212");
  });
};
bgDark();

// // page toggler
// const tabs = () => {
//   const firstPage = document.querySelectorAll("#html");
//   const secondPage = document.querySelectorAll("#css");
//   const thirdPage = document.querySelectorAll("#javascript");
//   const htmlBtn = document.querySelector(".html");
//   const cssBtn = document.querySelector(".css");
//   const javascriptBtn = document.querySelector(".javascript");
//   cssBtn.addEventListener("click", () => {
//     firstPage.style.display = "none";
//     thirdPage.style.display = "none";
//     secondPage.style.display = "block";
//   });
//   javascriptBtn.addEventListener("click", () => {
//     firstPage.style.display = "none";
//     thirdPage.style.display = "block";
//     secondPage.style.display = "none";
//   });
//   htmlBtn.addEventListener("click", () => {
//     firstPage.style.display = "block";
//     thirdPage.style.display = "none";
//     secondPage.style.display = "none";
//   });
// };
// tabs();
