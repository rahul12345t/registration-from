document.getElementById("register_btn").addEventListener("click", function() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var terms = document.getElementById("terms").checked;
    var nameError = document.getElementById("nameError");
    var passwordError = document.getElementById("passwordError");
    var formError = document.getElementById("formError");
    var isValid = true;

    // Reset error messages
    nameError.textContent = "";
    passwordError.textContent = "";
    formError.textContent = "";

    // Validate name
    if (firstName === "" || lastName === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    } else if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // Validate terms acceptance
    if (!terms) {
        formError.textContent = "Please accept the terms of use and privacy policy.";
        isValid = false;
    }

    // If the form is valid, you can proceed with registration
    if (isValid) {
        // Perform registration logic here
        alert("Registration successful!");
    }
});