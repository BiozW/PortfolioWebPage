window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    form.onreset = reform;

    var home = document.getElementById("home");
    home.onclick = goHome;

    var project = document.getElementById("project");
    project.onclick = goProject;

    var cooking = document.getElementById("cooking");
    cooking.onclick = goCooking;

    var blog = document.getElementById("blog");
    blog.onclick = goBlog;

    var boxgame = document.getElementById("boxgame");
    boxgame.onclick = goBoxGame;

    var signup = document.getElementById("signup");
    signup.onclick = goSignUp;

    var login = document.getElementById("login");
    login.onclick = goLogIn;
}

goHome = () => {
    location.href = '../index.html';
}

goProject = () => {
    location.href = '../project.html';
}

goCooking = () => {
    location.href = '../Week4/recipe.html';
}

goBlog = () => {
    location.href = '../Week5/index.html';
}

goBoxGame = () => {
    location.href = '../Week7/index.html';
}

goSignUp = () => {
    location.href = 'register.html';
}

goLogIn = () => {
    location.href = 'login.html';
}

function validateForm() {
    var a = document.forms["myForm"]["password"][0];
    var b = document.forms["myForm"]["password"][1];

    if (a.value == b.value)
    {
    }
    else
    {
        alert("กรอกไม่ถูก");
        document.getElementById('errormsg').innerHTML = "รหัสไม่ตรง";
        return false;
    }

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function reform(){
    document.getElementById("myForm") = null;
}