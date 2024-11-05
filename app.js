const navBar = document.getElementById("navbar");
const aboutMeImg = document.getElementById("about_me_img");
const darkmodeButton = document.getElementById("darkmode");
const darkmodeButtonButton = document.querySelector(".darkmode_button");

const selfie = document.querySelector(".home_img");
const homeText = document.querySelector(".home_text");

window.addEventListener("scroll", function () {
  if (document.documentElement.clientWidth >= 800) {
    if (window.scrollY > 50) {
      navBar.classList.add("navbarScroll");
      console.log("hej");
    }
    if (window.scrollY < 50) {
        navBar.classList.remove("navbarScroll");
        console.log("hej");
      }
  }
});

darkmodeButton.addEventListener("click", function () {
  console.log("hej");
  darkmodeButton.style.justifyContent = "flex-end";
});


selfie.addEventListener("mouseover", function () {
  if (document.documentElement.clientWidth >= 800) {
    homeText.classList.add("home_animation");
    console.log("aaaa");
  }
  
});
