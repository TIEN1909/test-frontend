const openTab = (event, tabName) => {
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  document
    .querySelectorAll(".tab-list .btn")
    .forEach((button) => button.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
};
