// Get HTML elements
const rgbValueDisplay = document.getElementById('rgb-value'); // Element to display the RGB value to guess
const optionsContainer = document.querySelector('.options'); // Container for the color options
const resultDisplay = document.querySelector('.result'); // Element to display result messages
const livesDisplay = document.getElementById('lives'); // Element to display remaining lives
const replayButton = document.getElementById('replay'); // Replay button to restart the game

let lives = 3; // Set initial lives
let score = 0; // Initialize score
let correctColor; // Variable to hold the correct color value

// Start the game
startGame();

// Function to start the game
function startGame() {
    resetGame(); // Reset the game for a new round
    generateColor(); // Generate a new target color
    createColorOptions(); // Create color options for user to guess
}

// Reset game for a new round
function resetGame() {
    optionsContainer.innerHTML = ''; // Clear previous options from the container
    resultDisplay.textContent = ''; // Clear previous result messages
}

// Generate a random RGB color
function generateColor() {
    const r = Math.floor(Math.random() * 256); // Generate random red value
    const g = Math.floor(Math.random() * 256); // Generate random green value
    const b = Math.floor(Math.random() * 256); // Generate random blue value
    correctColor = `rgb(${r}, ${g}, ${b})`; // Construct the rgb color string
    rgbValueDisplay.textContent = correctColor; // Display the target color
}

// Create multiple color options for guessing
function createColorOptions() {
    const correctOptionIndex = Math.floor(Math.random() * 3); // Randomly choose index for correct option
    for (let i = 0; i < 3; i++) {
        // Loop to create 3 color options
        const optionColor = i === correctOptionIndex ? correctColor : generateRandomColor(); // Set correct color or generate a random one
        const div = document.createElement('div'); // Create a new div element for the option
        div.className = 'option'; // Set class for styling
        div.style.backgroundColor = optionColor; // Set background color of div
        div.addEventListener('click', () => checkGuess(optionColor)); // Add click listener to check the guess
        optionsContainer.appendChild(div); // Append the option div to the options container
    }
}

// Generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value
    const g = Math.floor(Math.random() * 256); // Random green value
    const b = Math.floor(Math.random() * 256); // Random blue value
    return `rgb(${r}, ${g}, ${b})`; // Return the constructed rgb color
}

// Check user's guess
function checkGuess(selectedColor) {
    if (selectedColor === correctColor) {
        resultDisplay.textContent = 'Correct! 🎉'; // Correct guess message
        score++; // Increment score
    } else {
        lives--; // Decrement lives on incorrect guess
        resultDisplay.textContent = 'Incorrect! ❌'; // Incorrect guess message
        if (lives === 0) {
            endGame(); // End game if no lives left
        }
    }
    livesDisplay.textContent = lives; // Update lives display
    setTimeout(() => {
        if (lives > 0) {
            startGame(); // Start a new round if lives remain
        }
    }, 1000); // Delay before starting a new round
}

// End the game and display final score
function endGame() {
    resultDisplay.textContent = `Game Over! Your score was: ${score}`; // Show game over message and score
    replayButton.style.display = 'block'; // Show replay button
}

// Replay the game
replayButton.addEventListener('click', () => {
    lives = 3; // Reset lives
    score = 0; // Reset score
    livesDisplay.textContent = lives; // Update lives display
    replayButton.style.display = 'none'; // Hide replay button
    startGame(); // Start a new game
});
