document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("hasVisited")) {
    localStorage.setItem("hasVisited", "true");
    window.location.href = "/introduction.html";
  } else {
    return;
  }
});

// Tab navigation
const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});

// Tab navigation area global friends
const areaTabs = document.querySelectorAll(".area_tab_btn");
const all_area_content = document.querySelectorAll(".area_content");

areaTabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    areaTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    all_area_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_area_content[index].classList.add("active");
  });
});
