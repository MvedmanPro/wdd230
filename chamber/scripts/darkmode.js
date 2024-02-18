const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const container = document.querySelector(".img-container");
const events = document.querySelector(".section1");
const weather = document.querySelector(".section2");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const h1 = document.querySelector("h1");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🔮")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		container.style.background = "#000";
		card.style.background = "#000";
		card2.style.background = "#000";
		card3.style.background = "#000";
		events.style.background = "#000"
		events.style.color ="#fff";
		weather.style.background = "#000";
		weather.style.color ="#fff";
		h1.style.color = "#F6EEE3";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		card.style.background = "#ebc8a6";
		card2.style.background = "#ebc8a6";
		card3.style.background = "#ebc8a6";
		events.style.background = "#145689";
		events.style.color ="#fff";
		container.style.background = "#F6EEE3";
		weather.style.background = "#145689";
		weather.style.color ="#fff";
		h1.style.color = "#145689";
		modeButton.textContent = "🔮";
	}
});
