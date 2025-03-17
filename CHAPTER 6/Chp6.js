const calculateBtn = document.getElementById('calculateBtn'); // Assigns the variable to the calculate button for interaction.
calculateBtn.addEventListener('click', () => { // Sets up an event listener that triggers calculations when the button is clicked.
    const cost = parseFloat(document.getElementById('cost').value); // Converts the input value to a float and stores it as cost.
    const liters = parseFloat(document.getElementById('liters').value); // Converts the input value to a float and stores it as liters.
    const totalCost = cost * liters; // Computes the total cost by multiplying cost by liters.

    document.getElementById('result').innerText = `Total Cost: $${totalCost.toFixed(2)}`; // Displays the calculated total amount.
});