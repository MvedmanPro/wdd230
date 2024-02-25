const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        // Switch to light mode: remove the "dark-mode" class
        body.classList.remove("dark-mode");
        modeButton.textContent = "🔮";
    } else {
        // Switch to dark mode: add the "dark-mode" class
        body.classList.add("dark-mode");
        modeButton.textContent = "🔆";
    }
});
