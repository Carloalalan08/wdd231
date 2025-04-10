// Function to fetch and store services data
function loadServicesData() {
    fetch('data/services.json')
      .then(response => response.json())
      .then(data => {
        // Store the service data globally
        window.serviceDetails = data;
      })
      .catch(error => {
        console.error('Error loading service details:', error);
      });
  }
  
  // Function to open the modal with service details
  function openServiceModal(serviceKey) {
    const modal = document.getElementById('serviceModal');
    const details = window.serviceDetails[serviceKey];
  
    if (details) {
      document.getElementById('serviceTitle').textContent = details.title;
      document.getElementById('servicePrice').textContent = `Price: ${details.price}`;
      document.getElementById('serviceDescription').textContent = details.desc;
      modal.style.display = 'block'; // Show the modal
    }
  }
  
  // Function to close the modal
  function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none'; // Hide the modal
  }
  
  // Initialize the services data when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    loadServicesData();
  });
  