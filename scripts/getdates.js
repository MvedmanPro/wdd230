// current year
var year = new Date().getFullYear();

// last modified date
var lastModified = document.lastModified;

// Output the year and last modified
document.getElementById('currentyear').textContent = year + " | Kateryna Glazkova | Cambodia/USA";
document.getElementById('lastmodified').textContent = "Last Modified: " + lastModified;
