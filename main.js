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

    var projectlink = document.getElementById("projectlink")
    projectlink.onclick = goProject;

    var cookinglink = document.getElementById("cookinglink")
    cookinglink.onclick = goCooking;

    var bloglink = document.getElementById("bloglink")
    bloglink.onclick = goBlog;

    var boxgamelink = document.getElementById("boxgamelink")
    boxgamelink.onclick = goBoxGame;
}

goHome = () => {
    location.href = 'index.html';
}

goProject = () => {
    location.href = 'project.html';
}

goCooking = () => {
    location.href = 'Week4/recipe.html';
}

goBlog = () => {
    location.href = 'Week5/index.html';
}

goBoxGame = () => {
    location.href = 'Week7/index.html';
}

goSignUp = () => {
    location.href = 'Week6/register.html';
}

goLogIn = () => {
    location.href = 'Week6/login.html';
}