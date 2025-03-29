document.querySelectorAll(".modal-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const modalId = this.getAttribute("href");
        document.querySelector(modalId).style.display = "block";
    });
});

document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", function() {
        this.style.display = "none";
    });
});
