window.onload = pageLoad;

function pageLoad() {
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
    location.href = '../index.HTML';
}

goProject = () => {
    location.href = '../project.HTML';
}

goCooking = () => {
    location.href = 'recipe.html';
}

goBlog = () => {
    location.href = '../Week5/index.html';
}

goBoxGame = () => {
    location.href = '../Week7/index.html';
}

goSignUp = () => {
    location.href = '../Week6/register.HTML';
}

goLogIn = () => {
    location.href = '../Week6/login.html';
}