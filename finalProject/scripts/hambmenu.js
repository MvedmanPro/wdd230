const mainnav = document.querySelector('#navigation')
const hambutton = document.querySelector('#hamButton');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
//const joinButton = document.querySelector("#joinBtn")
//joinButton.addEventListener("click", () => {
    //window.location.href="join.html"
//})