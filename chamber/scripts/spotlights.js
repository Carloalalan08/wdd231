// Fetch and display business spotlights
async function loadSpotlights() {
    try {
        // Fetch member data from JSON file
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to load members data");

        const members = await response.json();
        
        // Filter only Silver (2) and Gold (3) members
        const eligibleMembers = members.filter(member => member.level >= 2);

        // Randomly select 2 or 3 members
        const selectedSpotlights = getRandomMembers(eligibleMembers, 2, 3);

        // Display the selected members
        displaySpotlights(selectedSpotlights);
    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
}

// Helper function to get a random number of members
function getRandomMembers(members, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min; // Randomly choose 2 or 3
    const shuffled = members.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, count); // Select the first 'count' members
}

// Function to display selected members in the Spotlight section
function displaySpotlights(members) {
    const spotlightContainer = document.getElementById("spotlight-container");
    spotlightContainer.innerHTML = ""; // Clear previous content

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("business-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone ?? "Not Available"}</p>
            <p><strong>Address:</strong> ${member.address ?? "Not Available"}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.level === 3 ? "Gold Member" : "Silver Member"}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

// Load the spotlights when the page is loaded
document.addEventListener("DOMContentLoaded", loadSpotlights);
