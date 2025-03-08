// date.js

// Get current year and update the footer with it
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and display it in the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
