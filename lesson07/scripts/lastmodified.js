// current year
const year = new Date().getFullYear();

// last modified date
const lastModified = document.lastModified;

// Output the year and last modified
document.getElementById('currentyear').textContent = `${year} | Kateryna G. --- BYU-Idaho student --- Lesson07 --- WDD230|`;
document.getElementById('lastmodified').textContent = `Last Modified: ${lastModified}`;
