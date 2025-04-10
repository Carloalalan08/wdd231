// form.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Simple form validation
      if (name && email && message) {
        // Proceed to confirm the submission or submit the form data
        displayConfirmation(name, email);
      } else {
        alert("Please fill out all fields.");
      }
    });
  });
  
  // This function could trigger the confirmation process
  function displayConfirmation(name, email) {
    alert(`Thank you, ${name}! We have received your message. We will contact you at ${email}.`);
  }
  