// form-confirmation.js

function showConfirmationMessage() {
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = "Thank you for reaching out to us. We will get back to you soon!";
    document.querySelector("main").appendChild(confirmationMessage);
  }
  