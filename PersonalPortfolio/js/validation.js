document.addEventListener('DOMContentLoaded', function() {

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);
});

function validateName() {
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");

    if (name.trim() === "") {
        nameError.innerText = "Name is required.";
        return false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.innerText = "Name should contain only letters and spaces.";
        return false;
    } else {
        nameError.innerText = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        emailError.innerText = "Email is required.";
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Please enter a valid email address (e.g., name@domain.com).";
        return false;
    } else {
        emailError.innerText = "";
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById("message").value;
    const messageError = document.getElementById("messageError");
    if (message.trim() === "") {
        messageError.innerText = "Message is required.";
        return false;
    }
    if (message.length < 10) {
        messageError.innerText = "Message should be at least 10 characters long.";
        return false
    }
    else if (message.length > 10) {
        messageError.innerText = "";
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        const form = document.getElementById("myform");
        form.reset();
        const successMessage = document.getElementById("successMessage");
        successMessage.innerText = "Thank you! I will get back to you soon.";
    }

}
