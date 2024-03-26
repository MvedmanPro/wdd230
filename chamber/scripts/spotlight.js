const display = document.querySelector('.membersGrid');
const membersData = "data/members.json";

// Function to fetch members data
async function getMembers() {
    const response = await fetch(membersData);
    const data = await response.json();
    return data.members;
}

// Randomly select members with membership level Silver or Gold
function selectRandomSilverGoldMembers(members, count) {
    const silverGoldMembers = members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
    const selectedMembers = [];

    // Ensure that selected members are unique
    while (selectedMembers.length < count && silverGoldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
        const selectedMember = silverGoldMembers[randomIndex];
        if (!selectedMembers.some(member => JSON.stringify(member) === JSON.stringify(selectedMember))) {
            selectedMembers.push(selectedMember);
        }
        // Remove selected member to avoid duplicate
        silverGoldMembers.splice(randomIndex, 1);
    }

    return selectedMembers;
}

// Display randomly selected members
async function displayRandomSpotlightMembers(count) {
    const members = await getMembers();
    const selectedMembers = selectRandomSilverGoldMembers(members, count);

    createMemberCard(selectedMembers);
}

// Initialize by displaying random members
async function initialize() {
    await displayRandomSpotlightMembers(2); // Number of members to display
}

// Create member article
const createMemberCard = (members) => {
    // Clear existing cards
    display.innerHTML = '';

    members.forEach((member) => {
        let card = document.createElement('article');
        let image = document.createElement('img');
        let details = document.createElement('div');
        let name = document.createElement('h3');
        let mes = document.querySelector('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
        name.textContent = member.name;
        let addressParts = member.address.split(', ');
        let streetAddress = addressParts[0];
        let cityZip = addressParts.slice(1).join(', ');
        address.innerHTML = `${streetAddress}<br>${cityZip}`;
        mes.textContent = member.message;
        phone.textContent = member.phone;
        website.href = member.website;
        website.textContent = member.website;
        membership.textContent = `Membership Level: ${member.membershipLevel}`;
        image.setAttribute('src', member.imgUrl);
        image.setAttribute('alt', `Picture of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '');
        image.setAttribute('height', '100px');

        details.classList.add('member-details');

        details.append(name, address, phone, website, membership, mes);
        card.append(image, details);
        display.appendChild(card);
    });
}

// Call initialize() when page loads
initialize();