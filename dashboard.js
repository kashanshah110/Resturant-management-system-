const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "index.html";
}
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "login.html";

});