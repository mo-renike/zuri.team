// dark mode
// const darkmode = () => {

//   const element = document.body;
//   const container = document.querySelector(".courses-container");
//   const footer = document.querySelector(".footer");
//   const darkBtn = document.querySelector(".fa-adjust");

//   darkBtn.addEventListener("click", () => {
//     element.classList.toggle("dark-mode-bg");
//     footer.classList.toggle("dark-mode-bg2");
//     container.classList.toggle("dark-mode-bg2");
//   });
// };
// darkmode();

// document.documentElement.style.setProperty("--peach-bg", "#121212");

// page toggler
// const tabs = () => {
//   const firstPage = document.querySelector(".page1");
//   const secondPage = document.querySelector(".page2");
//   const thirdPage = document.querySelector(".page3");
//   const htmlBtn = document.querySelector("#htmlbtn");
//   const cssBtn = document.querySelector("#cssbtn");
//   const javascriptBtn = document.querySelector("#jsbtn");

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

const wrapper = document.querySelector(".accordion-body")
const btn = wrapper.querySelectorAll("a");
const content = wrapper.querySelectorAll(".tab-content");
content.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeActiveClasses();
    btn.classList.add("active");
  });
});

function removeActiveClasses() {
  content.forEach((btn) => {
    btn.classList.remove("active");
  });
}

// const wrapper = document.querySelector(".accordion-body");
// const btns = wrapper.querySelectorAll("a");
// // Loop through the buttons and add the active class to the current/clicked button
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", () => {
//     let current = wrapper.querySelectorAll(".active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
