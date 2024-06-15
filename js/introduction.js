function navigateToPage(pageNumber) {
  document.querySelectorAll(".introduction_page .page").forEach((page) => {
    page.classList.remove("active");
  });
  document
    .querySelector(".introduction_page .page" + pageNumber)
    .classList.add("active");
}

function claim() {
  localStorage.setItem("hasClaimed", "true");
  showMainPage();
}

function showMainPage() {
  document.querySelector(".introduction_page").classList.remove("active");
  document.querySelector(".main_page").classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("hasClaimed") === "true") {
    showMainPage();
  } else {
    document.querySelector(".introduction_page").classList.add("active");
    navigateToPage(1);
  }
});
