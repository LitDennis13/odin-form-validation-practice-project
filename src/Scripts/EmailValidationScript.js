const userEmail = document.querySelector("#user-email");

const emailRegEx = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");

function checkEmailValidity() {
    if (!(userEmail.value.length > 0)) {
        userEmail.setCustomValidity("Email Required");
    } else if (!emailRegEx.test(userEmail.value)) {
        userEmail.setCustomValidity("Not an Email");
    } else {
        userEmail.setCustomValidity("");
    }
}

checkEmailValidity();

userEmail.addEventListener("input", checkEmailValidity);
