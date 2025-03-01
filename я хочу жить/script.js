document.getElementById('they').addEventListener('click',function(){
    const inputlogin = document.getElementById("login").value;
    const inputpassword = document.getElementById("password").value;
    if (inputlogin==="login" && inputpassword==="password" ){
        window.open("they.html")
    }
})