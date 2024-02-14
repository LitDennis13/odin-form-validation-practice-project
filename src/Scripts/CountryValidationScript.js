const userCountry = document.querySelector("#user-country");

function checkCountryValidity() {
    if (!(userCountry.value.length > 0)) {
        userCountry.setCustomValidity("Country Required");
    } else {
        userCountry.setCustomValidity("");
    }
}

checkCountryValidity();

userCountry.addEventListener("input", checkCountryValidity);
