//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        const existingButton = document.createElement("button");
        existingButton.setAttribute("id", "existing");
        existingButton.textContent = "Login as existing user";
        form.appendChild(existingButton);

        existingButton.addEventListener("click", function() {
            alert("Logged in as " + savedUsername);
        });
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const rememberCheckbox = document.getElementById("checkbox");
        const rememberMe = rememberCheckbox.checked;

        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert("Logged in as " + username);
    });
});
