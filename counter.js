// Generate a random number between 500 and 2000
const visitorCount = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;

// Display the visitor count on the webpage
document.getElementById("visitorCount").textContent = `${visitorCount}`;
