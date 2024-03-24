
document.addEventListener("DOMContentLoaded", () => {
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("#mainDiv");

    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }



const baseURL = "https://mvedmanpro.github.io/wdd230/chamber";
const url = "https://mvedmanpro.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector(".cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  }
  
  getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        member.company.forEach((object) => {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let membershipLevel = document.createElement("p");
            let website = document.createElement("a");
            let imgUrl = document.createElement("img");

            name.textContent = `Company: ${object.name}`;
            address.textContent = `Address: ${object.address}`;
            phone.textContent = `Phone Number: ${object.phone}`;
            membershipLevel.textContent = `Membership: ${object.membershipLevel}`
            website.textContent = `Click to Visit Website`;

            website.setAttribute("href", object.website)
            imgUrl.setAttribute("src", object.imgUrl);
            imgUrl.setAttribute("alt", `Image of ${object.name} company in Odesa, Ukraine`);
            imgUrl.setAttribute("loading", "lazy");
            imgUrl.setAttribute("width", "400");
            imgUrl.setAttribute("height", "250");
            
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(imgUrl);
            cards.appendChild(card);
        });
    });
};
});