const tempBtn = document.getElementById("tempBtn")
const tempBan = document.getElementById("tempBan")

tempBan.classList.add("open")

tempBtn.addEventListener("click", () => {
    tempBan.classList.remove("open")
})