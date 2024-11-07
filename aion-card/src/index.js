// update the card with the form details
document.getElementById("form-details").addEventListener("input", () => {
  const name = document.getElementById("fname").value;
  const title = document.getElementById("title").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  document.getElementById("nameCard").textContent = name;
  document.getElementById("titleCard").textContent = title;
  document.getElementById("phoneCard").textContent = phone;
  document.getElementById("emailCard2").textContent = email;
  document.getElementById("addressCard").textContent = address;
});

// update the card with the form links
document.getElementById("form-links").addEventListener("input", () => {
  const facebookLink = document.getElementById("facebook").value;
  const instagramLink = document.getElementById("instagram").value;
  const twitterLink = document.getElementById("twitter").value;
  const youtubeLink = document.getElementById("youtube").value;
  const linkedinLink = document.getElementById("linkedin").value;

  document.getElementById("facebook-link").setAttribute("href", facebookLink);
  document.getElementById("instagram-link").setAttribute("href", instagramLink);
  document.getElementById("twitter-link").setAttribute("href", twitterLink);
  document.getElementById("youtube-link").setAttribute("href", youtubeLink);
  document.getElementById("linkedin-link").setAttribute("href", linkedinLink);

  const facebookCard = document.querySelector(".card .fa-facebook-f").parentElement;
  const instagramCard = document.querySelector(".card .fa-instagram").parentElement;
  const twitterCard = document.querySelector(".card .fa-twitter").parentElement;
  const youtubeCard = document.querySelector(".card .fa-youtube").parentElement;
  const linkedinCard = document.querySelector(".card .fa-linkedin").parentElement;

  facebookCard.setAttribute("href", facebookLink);
  instagramCard.setAttribute("href", instagramLink);
  twitterCard.setAttribute("href", twitterLink);
  youtubeCard.setAttribute("href", youtubeLink);
  linkedinCard.setAttribute("href", linkedinLink);
});

// handle the tabs
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

// Add event listeners to toggle visibility of social media form inputs
document.querySelectorAll(".icon-list-social").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const socialMedia = item.id.split("-")[0];
    const inputField = document.getElementById(`${socialMedia}-form`);

    // Toggle the active class to show or hide the input fields
    inputField.classList.toggle("active");
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const defaultActiveLinks = ["facebook", "instagram", "twitter"];

  // Hàm toggleInputVisibility sử dụng arrow function
  const toggleInputVisibility = (linkId, show) => {
    const wrapper = document.getElementById(`${linkId}-wrapper`);
    wrapper.style.display = show ? "flex" : "none";
  };

  const allLinks = ["facebook", "instagram", "twitter", "youtube", "linkedin"];

  allLinks.forEach((link) => toggleInputVisibility(link, false));

  defaultActiveLinks.forEach((link) => toggleInputVisibility(link, true));

  const socialLinks = document.querySelectorAll(".list-social a");
  socialLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const socialMedia = event.currentTarget.id.replace("-link", "");
      const wrapper = document.getElementById(`${socialMedia}-wrapper`);
      const isVisible = wrapper.style.display !== "none";

      toggleInputVisibility(socialMedia, !isVisible);
      event.currentTarget.classList.toggle("active");
    });
  });
});

window.addEventListener("load", () => {
  document.getElementById("facebook-form").classList.add("active");
  document.getElementById("instagram-form").classList.add("active");
  document.getElementById("twitter-form").classList.add("active");

  document.getElementById("facebook-link").classList.add("active");
  document.getElementById("instagram-link").classList.add("active");
  document.getElementById("twitter-link").classList.add("active");
});
