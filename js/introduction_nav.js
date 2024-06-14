function navigateToPage(pageNumber) {
  console.log("Navigating to page", pageNumber);
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById("page" + pageNumber).classList.add("active");
}
