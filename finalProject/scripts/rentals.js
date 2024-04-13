const dataUrl = 'data/rentals.json';

fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#rentalPricingTable tbody');
        data.rentals.forEach(rental => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${rental.name}</td>
                <td>${rental.capacity}</td>
                <td>${rental.reservation[0].halfDayPrice}</td>
                <td>${rental.reservation[0].fullDayPrice}</td>
                <td>${rental.walkIn[0].halfDayPrice}</td>
                <td>${rental.walkIn[0].fullDayPrice}</td>`;
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
