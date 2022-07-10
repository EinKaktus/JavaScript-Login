function login() {


    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "Admin" && password == "strongpassword!"){
        window.location.href = "./index.html";
    }else{
        alert("Wrong Login Data!");
    }
}