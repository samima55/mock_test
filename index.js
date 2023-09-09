// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const submitButton = document.getElementById("submit-button");
    const ratingForm = document.getElementById("rating-form");
    const thankYouContainer = document.querySelector(".thank-you-container");
    const chosenNumber = document.getElementById("chosen-number");
    const reviewContainer= document.querySelector(".review");
    // Add a click event listener to the Submit button
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Find the checked radio button
        const checkedRadio = ratingForm.querySelector('input[name="rating"]:checked');

        // If a radio button is checked, proceed
        if (checkedRadio) {
            const value = checkedRadio.value; // Get the selected rating value
            thankYouContainer.style.display = "block"; // Show the Thank You container
            reviewContainer.style.display = "none"; // Hide the rating form
            thankYouContainer.style.textAlign = "center"; // Center-align text

            // Update the chosen number in the Thank You message
            chosenNumber.textContent = value;
        }
    });
});
