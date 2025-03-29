document.addEventListener("DOMContentLoaded", function () {
    // Automatically set timestamp
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Modal functionality for membership descriptions
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            const modalId = this.getAttribute("href").substring(1);
            document.getElementById(modalId).classList.add("show-modal");
        });
    });

    // Close modals when clicking the close button
    document.querySelectorAll(".close-modal").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").classList.remove("show-modal");
        });
    });

    // Close modals when clicking outside the modal content
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal.show-modal").forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove("show-modal");
            }
        });
    });

    // Basic form validation (optional enhancement)
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const firstName = form.querySelector("input[name='first_name']").value.trim();
        const lastName = form.querySelector("input[name='last_name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const phone = form.querySelector("input[name='phone']").value.trim();
        const organization = form.querySelector("input[name='organization']").value.trim();

        if (!firstName || !lastName || !email || !phone || !organization) {
            alert("Please fill in all required fields before submitting.");
            event.preventDefault();
        }
    });
});
