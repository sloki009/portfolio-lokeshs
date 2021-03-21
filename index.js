window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("page_loader_wrapper").classList.add("loaded");
  window.addEventListener("scroll", () => {
    let styleObj = {};

    console.log("scrollY", window.scrollY);

    if (window.scrollY > 64) {
      //navElem.style.background = "#000";
      styleObj["navbgColor"] = "#000";
      styleObj["aColor"] = "rgba(255,255,255,.75)";
    } else if (window.scrollY < 64) {
      //navElem.style.background = "none";
      styleObj["navbgColor"] = "none";
      styleObj["aColor"] = "rgba(255,255,255,.75)";
    }
    if (window.scrollY > 440) {
      //navElem.style.background = "#fff";
      styleObj["navbgColor"] = "#fff";
      styleObj["aColor"] = "rgba(15, 15, 15, 0.75)";
    }
    console.log(styleObj);
    handleNavbar(styleObj);
  });

  function handleNavbar({ navbgColor, aColor }) {
    console.log("inhandlenavbarr...", navbgColor, aColor);
    let navElem = document.querySelector("#nav_wrapper");
    navElem.style.background = navbgColor;
    let navlinks = document.querySelectorAll("#navbar_links a");
    for (var i = 0; i < navlinks.length; ++i) {
      navlinks[i].style.color = aColor;
    }
  }
});
