window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
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
    location.href = '../index.HTML';
}

goProject = () => {
    location.href = '../project.HTML';
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
    location.href = '../Week6/register.HTML';
}

goLogIn = () => {
    location.href = 'login.html';
}

function checkLogin(){
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	
	const usernamecheck = urlParams.get('username');
	const passwordcheck = urlParams.get('password');

	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];

	if (user.value == usernamecheck && pass.value == passwordcheck)
	{
		alert("ยินดีด้วย ถูกแล้ว!!");
	}
	else
	{
		alert("กรอกผิด");
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

function reform(){
    document.getElementById("myForm") = null;
}