// course.js

// Sample course data
const courses = [
    { name: "Introduction to Web Development", completed: true, credits: 3, category: "WDD" },
    { name: "Advanced JavaScript", completed: false, credits: 4, category: "WDD" },
    { name: "Data Structures", completed: true, credits: 3, category: "CSE" },
    { name: "Computer Networks", completed: false, credits: 3, category: "CSE" }
  ];
  
  // Function to display courses based on filter
  const displayCourses = (filter) => {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = ""; // Clear any existing courses
  
    let totalCredits = 0;
  
    // Filter the courses based on the filter parameter (all, WDD, or CSE)
    courses.filter(course => 
      filter === "all" || course.category === filter
    ).forEach(course => {
      // Create a new div for each course
      const courseCard = document.createElement("div");
      courseCard.classList.add("course");
  
      // If the course is completed, apply a completed class
      if (course.completed) {
        courseCard.classList.add("completed");
      }
  
      // Create the inner HTML for each course card
      courseCard.innerHTML = `
        <h3>${course.name}</h3>
        <p>Credits: ${course.credits}</p>
        <p>Category: ${course.category}</p>
      `;
  
      // Add the course card to the container
      courseContainer.appendChild(courseCard);
  
      // Update the total credits
      totalCredits += course.credits;
    });
  
    // Display the total credits in the footer
    document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;
  };
  
  // Initial display of all courses
  displayCourses("all");
  
  // Add event listeners to the filter buttons
  document.getElementById("allBtn").addEventListener("click", () => displayCourses("all"));
  document.getElementById("wddBtn").addEventListener("click", () => displayCourses("WDD"));
  document.getElementById("cseBtn").addEventListener("click", () => displayCourses("CSE"));  

// getdates.js - Dynamically updates footer with current year and last modified date

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set last modified date in footer
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});

