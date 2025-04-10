// modal.js

// Function to open the modal by ID
function openModal(productId) {
    const modal = document.getElementById(productId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close the modal by ID
function closeModal(productId) {
    const modal = document.getElementById(productId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking the close button
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-modal")) {
        const modal = event.target.closest(".modal");
        modal.style.display = "none";
    }
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});
// modal.js

// Function to open the modal by ID
function openModal(productId) {
    const modal = document.getElementById(productId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close the modal by ID
function closeModal(productId) {
    const modal = document.getElementById(productId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking the close button
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-modal")) {
        const modal = event.target.closest(".modal");
        modal.style.display = "none";
    }
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});
