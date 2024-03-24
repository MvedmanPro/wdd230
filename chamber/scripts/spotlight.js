async function getEliteMembers() {
    const url = "https://mvedmanpro.github.io/wdd230/chamber/data/members.json"
    const response = await fetch(url)
    const data = await response.json()
    displaySpotlight(data.members)
}
getEliteMembers()

const displaySpotlight = (members) => {
    const eliteList = []

    members.forEach(member => {
        if (member.membershipLevel == "Silver" || member.membershipLevel == "Gold" )
        eliteList.push(member)
    });

    function shuffle(eliteList) {
        return eliteList.sort (() => Math.random()-0.5)
    }
    shuffle(eliteList)
    
    // display three elite members
    const threeSpotlights = eliteList.slice(0, 3)    
    const spotlightSection = document.querySelector(".spotlight")
    
    threeSpotlights.forEach(spotlight => {
        const spotlightCard = document.createElement("section")
        const picture = document.createElement("img")
        const name = document.createElement("p")
        const level = document.createElement("p")
        const blurb = document.createElement("p")
        
        spotlightCard.setAttribute("class", "card")
        picture.setAttribute("src", spotlight.imgURL)
        picture.setAttribute("alt", `${spotlight.name} company's image`)
        picture.setAttribute("width", "400")
        picture.setAttribute("height", "250")
        picture.setAttribute("loading", "lazy")
        name.textContent = spotlight.name
        level.textContent = `Membership Level: ${spotlight.membershipLevel}`
        blurb.textContent = spotlight.spotlightmessage
        
        spotlightCard.appendChild(logo)
        spotlightCard.appendChild(name)
        spotlightCard.appendChild(level)
        spotlightCard.appendChild(message)
        spotlightSection.appendChild(spotlightCard)
    });
}