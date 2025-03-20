document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    const userData = window.localStorage.getItem("user");

    if (userData) {
        const user = JSON.parse(userData);
        document.getElementById("userDisplay").innerText = `Welcome, ${user.email}`;
    } else {
        document.getElementById("userDisplay").innerText = "No user logged in.";
    }
});