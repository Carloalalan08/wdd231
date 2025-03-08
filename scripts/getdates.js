// getdates.js - Dynamically updates footer with current year and last modified date

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set last modified date in footer
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
