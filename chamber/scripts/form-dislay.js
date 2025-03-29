document.addEventListener("DOMContentLoaded", () => {
    // Function to get query parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param) || "Not provided";
    }

    // Populate the page with submitted form data
    document.getElementById("firstName").textContent = getQueryParam("first_name");
    document.getElementById("lastName").textContent = getQueryParam("last_name");
    document.getElementById("email").textContent = getQueryParam("email");
    document.getElementById("phone").textContent = getQueryParam("phone");
    document.getElementById("organization").textContent = getQueryParam("organization");
    document.getElementById("timestamp").textContent = getQueryParam("timestamp");
});
