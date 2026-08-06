const loginForm = document.getElementById("loginForm");
const toast = document.getElementById("toast");

function showToast(message, type) {

    toast.textContent = message;
    toast.className = "toast";
    toast.classList.add(type);
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const adminEmail = "admin@foodhub.com";
    const adminPassword = "123456";

    if (email === adminEmail && password === adminPassword) {

        localStorage.setItem("isLoggedIn", "true");

        showToast("Login Successful 🎉", "success");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);

    } else {

        showToast("Invalid Email or Password", "error");

    }

});