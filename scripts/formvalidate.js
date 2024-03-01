const passLabel = document.querySelector("#pwd");
const pwd = document.querySelector("#password");
const pwd2 = document.querySelector("#pwd2");
const message = document.querySelector("#divMessage");

pwd2.addEventListener("focusout", confirmPass);

function confirmPass() {
    if (pwd2.value !== pwd.value) {
        message.innerHTML = "Passwords Don't Match";  
        pwd.value = "";
        pwd2.value = ""; 
        pwd.focus();
    } else {
        message.innerHTML = ""; 
    }
}
const ratingDisplay = document.querySelector("#ratingDisplay")
const ratingRange = document.querySelector("#range")

ratingRange.addEventListener("change", displayValue)
ratingRange.addEventListener("input", displayValue)

function displayValue() {
    ratingDisplay.innerHTML = ratingRange.value
}


