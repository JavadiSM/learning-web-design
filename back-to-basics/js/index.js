//easy way to accept input:
// let firstName = window.prompt("your name?");
// window.alert(`welcome ${firstName}`);
// but THIS IS THE WAY(best):
let username;
document.getElementById("usernameSubmit").onclick = function () {
    username = document.getElementById("username").value;
    document.getElementById("myh1").textContent = "hello dear" + username;
}
