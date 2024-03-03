// current year
const year = new Date().getFullYear();

// last modified date
const lastModified = document.lastModified;

// Output the year and last modified
document.getElementById('currentyear').textContent = `${year} | Kateryna Glazkova | Cambodia/USA`;
document.getElementById('lastmodified').textContent = `Last Modified: ${lastModified}`;


const currentTimestamp = Date.now();
document.getElementById("hidden").value = currentTimestamp;
console.log("Current timestamp:", currentTimestamp);
