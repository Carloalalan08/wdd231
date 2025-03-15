document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    async function fetchMembers() {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    }

    function displayMembers(members, layout = "grid") {
        directory.innerHTML = "";
        directory.classList.toggle("list-view", layout === "list");

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("directory-card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            directory.appendChild(card);
        });
    }

    gridViewBtn.addEventListener("click", () => displayMembers(members, "grid"));
    listViewBtn.addEventListener("click", () => displayMembers(members, "list"));

    fetchMembers();
});
