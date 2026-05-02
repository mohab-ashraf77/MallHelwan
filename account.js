const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (e) => {

    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

    
    if (email === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError(emailInput, "Enter a valid email");
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    
    if (password.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        isValid = false;
    } else {
        showSuccess(passwordInput);
    }

    if (!isValid) {
        e.preventDefault();
    } else {
        console.log("Login success ✅");
    }
});




function showError(input, message) {
    const box = input.parentElement;
    const group = box.parentElement;

    box.classList.add("error");
    box.classList.remove("success");

    let msg = group.querySelector(".error-message");

    if (!msg) {
        msg = document.createElement("span");
        msg.classList.add("error-message");
        group.appendChild(msg);
    }

    msg.innerText = message;
}

function showSuccess(input) {
    const box = input.parentElement;
    const group = box.parentElement;

    box.classList.add("success");
    box.classList.remove("error");

    const msg = group.querySelector(".error-message");
    if (msg) msg.remove();
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}