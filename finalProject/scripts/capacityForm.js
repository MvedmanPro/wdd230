document.getElementById("capacityForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const capacity = parseInt(document.getElementById("capacityInput").value);

    try {
        const response = await fetch("data/rentals.json"); // Assuming the JSON file is named "rentals.json"
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const filteredRentals = data.rentals.filter(rental => rental.capacity === capacity);

        const rentalsSummaryDiv = document.querySelector(".rentals-summary");
        if (filteredRentals.length === 0) {
            rentalsSummaryDiv.textContent = "No available rentals for the specified capacity.";
        } else {
            rentalsSummaryDiv.innerHTML = `
                <h2>Available Rentals for ${capacity} person(s):</h2>
                <table>
                    <tr>
                        <th>Vehicle</th>
                        <th>Half-Day Price</th>
                        <th>Full-Day Price</th>
                    </tr>
                    ${filteredRentals.map(rental => `
                        <tr>
                            <td>${rental.name}</td>
                            <td>${rental.reservation[0].halfDayPrice}</td>
                            <td>${rental.reservation[0].fullDayPrice}</td>
                        </tr>
                    `).join("")}
                </table>
            `;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
