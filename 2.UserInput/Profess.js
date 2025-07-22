let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("name").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
}