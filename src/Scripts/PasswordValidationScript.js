const userPassword = document.querySelector("#user-password");

const passwordConfirmation = document.querySelector(
    "#user-password-confirmation",
);

function checkPasswordConfirmation() {
    if (!(passwordConfirmation.value.length > 0)) {
        passwordConfirmation.setCustomValidity(
            "Password Confirmation Required",
        );
    } else if (userPassword.value !== passwordConfirmation.value) {
        passwordConfirmation.setCustomValidity("Passwords Do not match");
    } else {
        passwordConfirmation.setCustomValidity("");
    }
}

function checkPasswordValidity() {
    if (!(userPassword.value.length > 0)) {
        userPassword.setCustomValidity("Password Required");
    } else if (!(userPassword.value.length >= 8)) {
        userPassword.setCustomValidity(
            "Password must be at least 8 characters",
        );
    } else {
        userPassword.setCustomValidity("");
    }
    checkPasswordConfirmation();
}

checkPasswordValidity();
checkPasswordConfirmation();

userPassword.addEventListener("input", checkPasswordValidity);

passwordConfirmation.addEventListener("input", checkPasswordConfirmation);
