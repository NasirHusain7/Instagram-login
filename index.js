const user = document.querySelector(".username");
const password = document.querySelector(".password");
const btn = document.querySelector(".login-btn");

btn.addEventListener("click", function(){
    const data = {
        User: user.value,
        password: password.value,
    }
    console.log(data);
    user.value = "";
    password.value ="";
});