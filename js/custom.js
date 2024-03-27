// // Change the icons inside the button based on previous settings
// if (
//   localStorage.getItem("color-theme") === "dark" ||
//   (!("color-theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   themeToggleLightIcon.classList.remove("hidden");
// } else {
//   themeToggleDarkIcon.classList.remove("hidden");
// }

// themeToggleBtn.addEventListener("click", function () {
//   // toggle icons inside button
//   themeToggleDarkIcon.classList.toggle("hidden");
//   themeToggleLightIcon.classList.toggle("hidden");

//   // if set via local storage previously
//   if (localStorage.getItem("color-theme")) {
//     if (localStorage.getItem("color-theme") === "light") {
//       document.documentElement.classList.add("dark");
//       console.log(document.documentElement);
//       localStorage.setItem("color-theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     }

//     // if NOT set via local storage previously
//   } else {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("color-theme", "dark");
//     }
//   }
// });
var themeToggleBtn = document.getElementById("theme-toggle");
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

const mood = window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultTheme = localStorage.getItem("color-theme");

if (defaultTheme == "light" || mood == false) {
  document.documentElement.classList.add("light");
  themeToggleLightIcon.classList.remove("hidden");
} else if (defaultTheme == "dark" || mood == true) {
  document.documentElement.classList.add("dark");
  themeToggleDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");
  if (localStorage.getItem("color-theme") === "light") {
    localStorage.setItem("color-theme", "dark");
  } else {
    localStorage.setItem("color-theme", "light");
  }
});

document.getElementById("darkmood").addEventListener("change", function (e) {
  console.log(e.target.checked);
});
