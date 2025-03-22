document.getElementById('they').addEventListener('click',function(){
    const inputlogin = document.getElementById("login").value;
    const inputpassword = document.getElementById("password").value;
    if (inputlogin==="Oleg13" && inputpassword==="001" ){
        window.open("they.html")
    }
})