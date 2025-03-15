// Fetch the JSON data and display it
async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching members:", error);
        document.getElementById("business-directory").innerHTML = 
            "<p style='color:red; text-align:center;'>Failed to load directory. Please try again later.</p>";
    }
}

// Function to display members
function displayMembers(members) {
    const directory = document.getElementById("business-directory");
    directory.innerHTML = ""; // Clear existing content

    if (directory.classList.contains("grid")) {
        // Grid View
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("business-card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address ?? "Not Available"}</p>
                <p><strong>Phone:</strong> ${member.phone ?? "Not Available"}</p>
                ${member.website ? `<p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>` : ""}
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.level)}</p>
            `;

            directory.appendChild(card);
        });
    } else {
        // List View (Table Format)
        const table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Business Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Membership</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        const tbody = table.querySelector("tbody");

        members.forEach(member => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.address ?? "Not Available"}</td>
                <td>${member.phone ?? "Not Available"}</td>
                <td>${member.website ? `<a href="${member.website}" target="_blank">${member.website}</a>` : "Not Available"}</td>
                <td>${getMembershipLevel(member.level)}</td>
            `;

            tbody.appendChild(row);
        });

        directory.appendChild(table);
    }
}

// Helper function to return membership level name
function getMembershipLevel(level) {
    const levels = { 1: "Member", 2: "Silver Member", 3: "Gold Member" };
    return levels[level] || "Unknown";
}

// Toggle between Grid and List View
document.getElementById("grid-view").addEventListener("click", function() {
    const directory = document.getElementById("business-directory");
    directory.classList.add("grid");
    directory.classList.remove("list");
    displayMembersOnToggle(true);
});

document.getElementById("list-view").addEventListener("click", function() {
    const directory = document.getElementById("business-directory");
    directory.classList.add("list");
    directory.classList.remove("grid");
    displayMembersOnToggle(false);
});

// Update display when toggling views
function displayMembersOnToggle(isGridView) {
    getMembers(); // Reload data and apply the correct format
}

// Load members when page loads
getMembers();
