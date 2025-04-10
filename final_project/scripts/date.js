// Function to update the current year and month in the footer dynamically
function updateDate() {
    const currentDate = new Date(); // Get the current date
    const currentYear = currentDate.getFullYear();  // Get the current year
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' }); // Get the current month as a string (e.g., "April")
  
    // Find the elements where the year and month will go
    const yearElement = document.getElementById("currentYear");
    const monthElement = document.getElementById("currentMonth");
  
    // Set the text content for the year and month
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  
    if (monthElement) {
      monthElement.textContent = currentMonth;
    }
  }
  
  // Call the updateDate function when the page has loaded
  document.addEventListener("DOMContentLoaded", updateDate);
  