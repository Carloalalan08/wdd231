document.addEventListener("DOMContentLoaded", function () {
    const discoverContainer = document.getElementById("discover-container");
    const modal = document.getElementById("learnMoreModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalDate = document.getElementById("modalDate");
    const closeModal = document.getElementById("modalClose");

    // Fetch the news and updates data from the JSON file
    fetch('data/newsUpdates.json')
        .then(response => response.json())
        .then(newsUpdates => {
            newsUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));

            newsUpdates.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("discover-card", item.type);

                // Add icons based on type
                let icon = '';
                if (item.type === 'announcement') {
                    icon = '<i class="fas fa-info-circle"></i>';
                } else if (item.type === 'promo') {
                    icon = '<i class="fas fa-gift"></i>';
                } else if (item.type === 'new_service') {
                    icon = '<i class="fas fa-cogs"></i>';
                }

                card.innerHTML = `
                    <div class="card-header">
                        ${icon}
                        <h3>${item.title}</h3>
                    </div>
                    <div class="card-body">
                        <p>${item.description}</p>
                        <span class="date">${item.date}</span>
                    </div>
                    <div class="card-footer">
                        <button class="button learn-more">Learn More</button>
                    </div>
                `;

                // Add click event to the Learn More button
                card.querySelector(".learn-more").addEventListener("click", function() {
                    modalTitle.textContent = item.title;
                    modalDescription.textContent = item.description;
                    modalDate.textContent = item.date;
                    modal.style.display = "block"; // Show the modal
                });

                discoverContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading news updates:", error);
            discoverContainer.innerHTML = "<p>Failed to load news updates.</p>";
        });

    // Close the modal when the user clicks the close button (×)
    closeModal.addEventListener("click", function() {
        modal.style.display = "none"; // Hide the modal
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
