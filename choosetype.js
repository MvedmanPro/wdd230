async function getRentalsData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data loaded successfully:", data);
        displayRentals(data.rentals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
  getRentalsData();

  // Prompt user to choose a rental
  const userInput = prompt("Choose a rental type (enter the number):\n1. Honda Metropolitan (49cc)\n2. Honda Dio (110cc)\n3. Honda PCX150 (149cc)\n4. Honda Pioneer 1000\n5. Jeep Wrangler - 4 door manual with A/C\n6. Jeep Wrangler - 2 door - open air - manual");
  
  // Convert user input to an integer
  const choice = parseInt(userInput);
  
  // Validate user input
  if (isNaN(choice) || choice < 1 || choice > rentals.length) {
    console.log("Invalid choice. Please enter a valid number.");
  } else {
    const selectedRental = rentals[choice - 1];
    console.log(`You selected: ${selectedRental.name} (Capacity: ${selectedRental.capacity} person(s))`);
  
    // Redirect to rentals.html
    window.location.href = "rentals.html";
  }
  // Display the selected rental in the rentals-summary div
const rentalsSummaryDiv = document.querySelector("section.rentals-summary");
rentalsSummaryDiv.textContent = `Selected Rental: ${selectedRental.name} (Capacity: ${selectedRental.capacity} person(s))`;
  