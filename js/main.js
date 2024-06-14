function navigateToPage(pageNumber) {
  console.log("Navigating to page", pageNumber);
  document.querySelectorAll("#introduction .page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById("page" + pageNumber).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("hasVisited")) {
    console.log("First visit, showing introduction");
    localStorage.setItem("hasVisited", "true");
    document.getElementById("introduction").style.display = "block";
    document.getElementById("mainContent").style.display = "none";
  } else {
    console.log("Returning visitor, showing main content");
    document.getElementById("introduction").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
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
