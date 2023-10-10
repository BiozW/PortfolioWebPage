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
    location.href = '../index.html';
}

goProject = () => {
    location.href = '../project.html';
}

goCooking = () => {
    location.href = '../Week4/recipe.html';
}

goBlog = () => {
    location.href = 'index.html';
}

goBoxGame = () => {
    location.href = '../Week7/index.html';
}

goSignUp = () => {
    location.href = '../Week6/register.html';
}

goLogIn = () => {
    location.href = '../Week6/login.html';
}

function postFunction()
{
    var text = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");

    if(text == null)
    {
        alert("พิมพ์ก่อนพี่ อย่ารีบ!")
    }

    if (topic.innerHTML == "")
    {
        topic.innerHTML = text;
    }
    else if (comment1.innerHTML == "")
    {
        comment1.innerHTML = text;
    }
    else if (comment2.innerHTML == "")
    {
        comment2.innerHTML = text;
    }
    
}

function clearFunction()
{
    var text = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    test = null;
    topic.innerHTML = null;
    comment1.innerHTML = null;
    comment2.innerHTML = null;
}