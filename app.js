// Import the prompt-sync module to enable user input
const prompt = require("prompt-sync")();

// Prompt the user to enter their name
const userName = prompt("Enter your name: ");

// Log a greeting message to the console, including the entered name
console.log(`Hello, ${userName}!`);