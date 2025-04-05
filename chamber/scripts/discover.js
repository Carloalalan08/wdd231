// Load data from JSON file and dynamically display items
async function loadItems() {
    const response = await fetch('data/data.json');
    const items = await response.json();

    const itemsGrid = document.getElementById('items-grid');
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="images/${item.image}" alt="${item.name}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button onclick="window.location.href='#'">Learn More</button>
        `;
        itemsGrid.appendChild(card);
    });
}

// Visitor message based on localStorage
function displayVisitorMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    let message = '';
    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDiff = Math.floor((currentDate - lastVisit) / (1000 * 3600 * 24));
        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago.`;
        }
    }
    localStorage.setItem('lastVisit', currentDate);

    document.getElementById('visitor-message').textContent = message;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadItems();
    displayVisitorMessage();
});
