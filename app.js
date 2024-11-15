const navBar = document.getElementById("navbar");
const aboutMeImg = document.getElementById("about_me_img");
const workSection =document.querySelector(".work_section");

const darkmodeButton = document.getElementById("darkmode");
const darkmodeButtonButton = document.querySelector(".darkmode_button");

const selfie = document.querySelector(".home_img");
const homeText = document.querySelector(".home_text");

window.addEventListener("scroll", function () {
  if (document.documentElement.clientWidth >= 700) {
    if (window.scrollY > 50) {
      navBar.classList.add("navbarScroll");
    }
    else if (window.scrollY < 50) {
        navBar.classList.remove("navbarScroll");
      }
  }
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 400) {
    console.log("scrolla");
    workSection.classList.add("work_section_animation");
  }
  if (window.scrollY < 400) {
    console.log("scrolla");
    workSection.classList.remove("work_section_animation");
  }
});

selfie.addEventListener("mouseover", function () {
  if (document.documentElement.clientWidth >= 700) {
    homeText.classList.add("home_animation");
    console.log("aaaa");
  }
  
});

darkmodeButton.addEventListener("click", function () {
  console.log("hej");
  darkmodeButton.style.justifyContent = "flex-end";
});


