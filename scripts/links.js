const baseURL = "https://mvedmanpro.github.io/wdd230/";
const linksURL = "https://mvedmanpro.github.io/wdd230/data/links.json";
const learningLinksList = document.querySelector("#learning-links");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}
getLinks()

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        week.links.forEach((object) => {
            let link = document.createElement("li");
            let anchor = document.createElement("a");

            anchor.setAttribute("href", object.url);
            anchor.setAttribute("target", "_blank");
            anchor.textContent = `${week.lesson} - ${object.title}`;

            link.appendChild(anchor);
            document.getElementById("learning-links").appendChild(link);
        });
    });
};

displayLinks(data.lessons);

