/*Menu Show*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*Remove Menu Mobile*/

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Scroll Section Active Link */

const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*Scroll Reveal Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*Scroll Home*/
sr.reveal(".home_title", {});
sr.reveal(".home_scroll", { delay: 200 });
sr.reveal(".home_img", { origin: "right", delay: 400 });

/*Scroll Interest*/
sr.reveal(".music_interest", { distance: "20px", delay: 400, interval: 100 });
sr.reveal(".video_interest", { delay: 400, interval: 100 });

/*Scroll About*/
sr.reveal(".about_img", { origin: "right", delay: 500 });
sr.reveal(".about_subtitle", { origin: "left", delay: 500 });
sr.reveal(".about_profession", { origin: "left", delay: 600 });
sr.reveal(".about_text", { origin: "left", delay: 700 });

/*Scroll Skills*/
sr.reveal(".skill_subtitle", { origin: "left" });
sr.reveal(".skill_name", { distance: "20px", delay: 50, interval: 100 });

/*Scroll Contact*/
sr.reveal(".contact_subtitle", {});
sr.reveal(".contact_text", { interval: 200 });
sr.reveal(".contact_input", { delay: 400 });
sr.reveal("contact_button", { interval: 600 });
