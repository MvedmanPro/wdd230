const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets)
  }
  
  getProphetsData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthdate = document.createElement("p")
        let birthplace = document.createElement("p")
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Birth Place: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "347");
        portrait.setAttribute("height", "447");

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        cards.appendChild(card);


    });
}