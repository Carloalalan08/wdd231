// spotlight.js
async function loadSpotlights() {
    try {
        const response = await fetch("data/products.json");
        if (!response.ok) throw new Error("Failed to load products data");

        const products = await response.json();

        const selectedSpotlights = getRandomProducts(products, 2, 3);
        displaySpotlights(selectedSpotlights);
        createModals(selectedSpotlights);
    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

// Random selection of products
function getRandomProducts(products, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display product cards in #spotlight-container
function displaySpotlights(products) {
    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    console.log(products);  // Log products for debugging

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="openModal('${product.id}')">View Details</button>
        `;

        container.appendChild(card);
    });
}

// Create modals in #modal-container
function createModals(products) {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";

    products.forEach(product => {
        const modal = document.createElement("div");
        modal.id = product.id;
        modal.classList.add("modal");

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="closeModal('${product.id}')">&times;</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> ₱${product.price}</p>
                <p>${product.details}</p>
            </div>
        `;

        modalContainer.appendChild(modal);
    });
}

// Modal functionality
function openModal(productId) {
    const modal = document.getElementById(productId);
    if (modal) modal.style.display = "block";
}

function closeModal(productId) {
    const modal = document.getElementById(productId);
    if (modal) modal.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});

// Load spotlights when page is ready
document.addEventListener("DOMContentLoaded", loadSpotlights);
