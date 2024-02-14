const userZipCode = document.querySelector("#user-zip-code");

function checkZipCodeValidity() {
    if (!(userZipCode.value.length > 0)) {
        userZipCode.setCustomValidity("Zip Code Required");
    } else {
        userZipCode.setCustomValidity("");
    }
}

checkZipCodeValidity();

userZipCode.addEventListener("input", checkZipCodeValidity);
