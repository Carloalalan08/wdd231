document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    
    document.getElementById("firstName").textContent = params.get("first_name") || "N/A";
    document.getElementById("lastName").textContent = params.get("last_name") || "N/A";
    document.getElementById("email").textContent = params.get("email") || "N/A";
    document.getElementById("phone").textContent = params.get("phone") || "N/A";
    document.getElementById("organization").textContent = params.get("organization") || "N/A";
    document.getElementById("timestamp").textContent = params.get("timestamp") || "N/A";
});
