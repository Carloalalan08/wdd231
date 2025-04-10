// Modal operations: Show and Close
function showModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Populate service dropdown dynamically from services.json
fetch('data/services.json')
  .then(response => response.json())
  .then(services => {
    const serviceSelect = document.getElementById('service');
    
    // Loop through services and add options to dropdown
    for (const key in services) {
      if (services.hasOwnProperty(key)) {
        const service = services[key];
        const option = document.createElement('option');
        option.value = key; // Use the service key as the value
        option.textContent = `${service.title} - ${service.price}`; // Display title and price
        serviceSelect.appendChild(option);
      }
    }
  })
  .catch(error => {
    console.error('Error loading services:', error);
  });

// Quote Calculator logic
document.getElementById("quoteForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceKey = document.getElementById("service").value; // Get the selected service key
  const quantity = parseInt(document.getElementById("quantity").value); // Get the quantity (and convert to integer)

  if (isNaN(quantity) || quantity < 1) {
    document.getElementById("quoteResult").textContent = "Please enter a valid quantity.";
    return;
  }

  // Load data from services.json
  fetch('data/services.json') // Make sure the path is correct
    .then(response => response.json())
    .then(services => {
      const selectedService = services[serviceKey]; // Use the selected service key

      if (!selectedService) {
        document.getElementById("quoteResult").textContent = "Selected service not found.";
        return;
      }

      const basePrice = selectedService.basePrice;

      if (isNaN(basePrice)) {
        document.getElementById("quoteResult").textContent = "This service cannot be quoted automatically.";
        return;
      }

      const total = basePrice * quantity;
      document.getElementById("quoteResult").textContent = 
        `Estimated Total for ${selectedService.title}: ₱${total.toLocaleString()}`;
    })
    .catch(error => {
      console.error("Error loading services:", error);
      document.getElementById("quoteResult").textContent = "Failed to load service data.";
    });
});

// About Us: Owner and Staff modal logic
document.getElementById('ownerCard').addEventListener('click', () => {
  showModal('ownerModal');
});

document.getElementById('staffCard').addEventListener('click', () => {
  showModal('staffModal');
});

document.getElementById('closeOwner').addEventListener('click', () => {
  closeModal('ownerModal');
});

document.getElementById('closeStaff').addEventListener('click', () => {
  closeModal('staffModal');
});

// Optional: Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('ownerModal')) {
    closeModal('ownerModal');
  }
  if (event.target === document.getElementById('staffModal')) {
    closeModal('staffModal');
  }
});
