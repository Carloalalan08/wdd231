// navigation.js

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name (e.g., 'index.html')
  
    // Select all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Loop through all the navigation links
    navLinks.forEach(link => {
      // Compare the href of the link with the current page
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); // Add the 'active' class to the current link
      } else {
        link.classList.remove("active"); // Remove 'active' class from other links
      }
    });
  
    // Hamburger menu functionality (if needed)
    document.querySelector(".hamburger").addEventListener("click", function () {
      document.querySelector("nav ul").classList.toggle("show");
    });
  });
