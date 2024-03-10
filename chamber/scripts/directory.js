const baseURL = "https://mvedmanpro.github.io/wdd230/";
const url = "https://mvedmanpro.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayMembers(data.members)
  }
  
  getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        member.company.forEach((object) => {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let imgUrl = document.createElement("img");

            name.textContent = `${object.name}`;
            address.textContent = `Address: ${object.address}`;
            phone.textContent = `Phone Number: ${object.phone}`;
            imgUrl.setAttribute("src", object.imgUrl);
            imgUrl.setAttribute("alt", `Image of ${object.name} company in Odesa, Ukraine`);
            imgUrl.setAttribute("loading", "lazy");
            imgUrl.setAttribute("width", "400");
            imgUrl.setAttribute("height", "250");
            
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(imgUrl);
            cards.appendChild(card);
        });
    });
}