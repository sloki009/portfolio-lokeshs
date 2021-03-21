window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("page_loader_wrapper").classList.add("loaded");
  }, 500);
  let mainNavLinks = document.querySelectorAll(
    "#navbar_links a:not(#resume_link)"
  );
  let mainSections = document.querySelectorAll("header section");

  window.addEventListener("scroll", () => {
    let styleObj = {};

    if (window.scrollY > 64) {
      styleObj["navbgColor"] = "#000";
      styleObj["aColor"] = "rgba(255,255,255,.75)";
    } else if (window.scrollY < 64) {
      styleObj["navbgColor"] = "none";
      styleObj["aColor"] = "rgba(255,255,255,.75)";
    }
    if (window.scrollY > 440) {
      styleObj["navbgColor"] = "#fff";
      styleObj["aColor"] = "rgba(15, 15, 15, 0.75)";
    }
    handleNavbar(styleObj);

    let fromTop = window.scrollY - 50;
    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop + 55 &&
        section.offsetTop + section.offsetHeight > fromTop + 55
      ) {
        link.classList.add("nav_current");
      } else {
        link.classList.remove("nav_current");
      }
    });
  });

  function handleNavbar({ navbgColor, aColor }) {
    //console.log("inhandlenavbarr...", navbgColor, aColor);
    let navElem = document.querySelector("#nav_wrapper");
    navElem.style.background = navbgColor;
    let navlinks = document.querySelectorAll("#navbar_links a");
    for (var i = 0; i < navlinks.length; ++i) {
      navlinks[i].style.color = aColor;
    }
  }
});
