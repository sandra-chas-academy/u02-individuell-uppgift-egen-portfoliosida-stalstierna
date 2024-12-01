const navBar = document.getElementById("navbar");
const aboutMeImg = document.getElementById("about_me_img");
const workSection = document.querySelector(".work_section");
const educationSection = document.querySelector(".education_section");
const allProjects = document.querySelector(".all_projects");
const loadingFetch = document.querySelector(".loading_fetch");

const workExperience = document.querySelector(".work_experience");

const darkmodeButton = document.querySelector(".darkmode");
const darkmodeButtonDesktop = document.querySelector(".darkmode_desktop");
const body = document.querySelector("body");
const contactInfo = document.querySelector(".contact_info");
const socialMedia = document.querySelector(".social_media")

const selfie = document.querySelector(".home_img");
const homeText = document.querySelector(".home_text_h1");
const homeTexth2 = document.querySelector(".home_text_h2");
const homeArrow = document.querySelector(".home_arrow");

const speechBubble = document.querySelector(".speech_bubble");

cvFile()
showCV()
projectFile()
setTimeout(function () {
  showProjects()
}, 3000)



async function cvFile() {
  try {
    const response = await fetch('./cv.json');

    if (!response.ok) {
      throw new Error("HTTP ERROR status: " + response.status);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

async function projectFile() {
  try {
    loadingFetch.style.display = "block";
    const response = await fetch('https://api.github.com/users/stalstierna/repos');

    if (!response.ok) {
      throw new Error("HTTP ERROR status: " + response.status);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
}

async function showCV() {
  const data = await cvFile();

  data.jobs.forEach(job => {
    const work = document.createElement("div");
    work.innerHTML = ` <div class="work_experience">
                          <div class="work_experience_top">
                          <div class="left_side">
                            <h3>${job.title}</h3>
                            <p>${job.companyName}</p>
                            <p>${job.location}</p>
                          </div>
                          <div class="right_side">
                            <p class="work_button">${job.fulltime}</p>
                            <p>${job.time}</p>
                          </div>
                          </div>
                          <div class="work_experience_bottom">
                          <p class="work_experience_description">${job.description}</p>
                          <button class="show_more_btn">&#10095</button>
                          </div>
                        </div>`;

    workSection.appendChild(work);
  })

  data.education.forEach(item => {
    const education = document.createElement("div");
    education.innerHTML = ` <div class="education_experience">
                              <div class="education_experience_top">
                                <div class="left_side">
                                  <h3>${item.title}</h3>
                                  <p>${item.schoolName}</p>
                                  <p>${item.location}</p>
                                </div>
                                <div class="right_side">
                                  <p class="education_button">${item.educationLevel}</p>
                                  <p>${item.time}</p>
                                </div>
                             </div>
                          <div class="education_experience_bottom">
                          <p class="education_description">${item.description}</p>
                          <button class="show_more_btn">&#10095</button>
                          </div>
                        </div>`;

    educationSection.appendChild(education);
  })

  const showMoreBtn = document.querySelectorAll(".show_more_btn");

  showMoreBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      btn.previousElementSibling.classList.toggle("displayDescription");
      btn.classList.toggle("displayDescription_btn");
    })
  })
}

async function showProjects() {

  const data = await projectFile();
  const projectImg = await cvFile();
  const imgobj = projectImg.images;
  console.log(data)

  loadingFetch.style.display = "none";

  data.forEach(item => {

    const result = imgobj.find(obj => obj.id === item.id);
    const image = result.imageURL

    allProjects.innerHTML += `<article class="project">
                            <div class="loading_bar"></div>
                              <div class="project_img"><img src="${image}" alt=""></div>
                              <div class="project_info">
                                <h3>${item.name}</h3>
                                <p class="project_text">${item.description}</p>
                                <a class="project_arrow" href="${item.html_url}">&#10095</a>
                              </div>
                              </article>`;

  })
}

window.addEventListener("scroll", function() {
  const loadingBar = document.querySelectorAll(".loading_bar");
  const projectImage = document.querySelectorAll(".project_img");
  const projectInfo = document.querySelectorAll(".project_info");
  let barTime = 2000;
  let imgTime = 2000;
  let infoTime = 2000;

  if (window.scrollY > 1000) {
    loadingBar.forEach(bar => {
      setTimeout(function () {
        bar.style.display = "none";
      }, barTime)
      barTime += 300;
    })

    projectImage.forEach(img => {
      setTimeout(function () {
        img.style.display = "block";
      }, imgTime)
      imgTime += 300;
    })

    projectInfo.forEach(info => {
      setTimeout(function () {
        info.style.display = "block";
      }, infoTime)
      infoTime += 300;
    })
  }
})

window.addEventListener("scroll", function () {
  if (document.documentElement.clientWidth >= 700) {
    if (window.scrollY > 50) {
      navBar.classList.add("navbarScroll");
    }
    else if (window.scrollY < 50) {
      navBar.classList.remove("navbarScroll");
    }
  }
})

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    workSection.classList.add("work_section_animation");
  }
  if (window.scrollY < 400) {
    workSection.classList.remove("work_section_animation");
  }
})

window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    educationSection.classList.add("education_section_animation");
  }
  if (window.scrollY < 700) {
    educationSection.classList.remove("education_section_animation");
  }
})

selfie.addEventListener("mouseover", function () {
  if (document.documentElement.clientWidth >= 700) {
    homeText.classList.add("home_animation");
    homeTexth2.classList.add("home_animation_h2");
    homeArrow.classList.add("home_arrow_animation");
    speechBubble.style.display = "none";
    homeText.childNodes.forEach(span => {
      span.classList.add("home_animation");
    })
  }

})

darkmodeButton.addEventListener("click", function () {
  darkmodeButton.classList.toggle("darkmode_flex");
  body.classList.toggle("light_mode");
  socialMedia.classList.toggle("contact_info_filter");

  if (darkmodeButton.classList.contains("darkmode_flex")) {
    darkmodeButtonDesktop.classList.add("darkmode_flex");
  }
  else {
    darkmodeButtonDesktop.classList.remove("darkmode_flex");
  }

})

darkmodeButtonDesktop.addEventListener("click", function () {
  darkmodeButtonDesktop.classList.toggle("darkmode_flex");
  body.classList.toggle("light_mode");
  socialMedia.classList.toggle("contact_info_filter");

  if (darkmodeButtonDesktop.classList.contains("darkmode_flex")) {
    darkmodeButton.classList.add("darkmode_flex");
  }
  else {
    darkmodeButton.classList.remove("darkmode_flex");
  }
})