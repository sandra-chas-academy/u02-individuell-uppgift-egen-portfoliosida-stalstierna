const navBar = document.getElementById("navbar");
const aboutMeImg = document.getElementById("about_me_img");
const darkmodeButton = document.getElementById("darkmode");
const darkmodeButtonButton = document.querySelector(".darkmode_button");


window.addEventListener("scroll", function (){
    if (document.documentElement.clientWidth > 800 ) {

        if (window.scrollY > 50) {
        navBar.classList = ("navbarScroll");
        console.log("hej");
        }

        // if (window.scrollY < 300) {
        //     navBar.classList = ("navbarScroll");
        //     console.log("andrea")
        // }

    }

   
    // if (window.scrollY > 300) {
    //     if (document.documentElement.clientWidth > 800 ) {
    //     navBar.classList = ("navbarScroll");
    //     console.log("hej");
    //     }
    // }

    // if (document.documentElement.clientWidth > 800 ) {
    //     navBar.classList.add = ("navbarScroll")
    // }
})

darkmodeButton.addEventListener("click", function () {
console.log("hej");
darkmodeButton.style.justifyContent = "flex-end";
});
