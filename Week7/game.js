window.onload = pageLoad;

function pageLoad() {
  document.getElementById('start').onclick = startGame;
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
  location.href = 'index.html';
}

goSignUp = () => {
  location.href = '../Week6/register.html';
}

goLogIn = () => {
  location.href = '../Week6/login.html';
}

function startGame() {
  timeStart();
  addBox();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var seconds = 30; // Set the game timer to 10 seconds
    var x = document.getElementById('clock');
    var remainingTime = seconds;

    // Setting timer using setInterval function
    timer = setInterval(timeCount , TIMER_TICK);

    function timeCount() {
      var allbox = document.querySelectorAll("#layer div");
      if (allbox.length === 0 && remainingTime > 0) {
        clearInterval(timer);
        x.innerHTML = "You Win!!!";
        clearScreen();
      } else if (remainingTime === 0 || remainingTime < 0 && allbox.length > 0) {
        clearInterval(timer);
        x.innerHTML = "You're Loser";
        clearScreen();
      } else {
        x.innerHTML = remainingTime + "s";
        remainingTime--;
      }
    }
}


function addBox() {
  clearScreen();
  var numbox = parseInt(document.getElementById('numbox').value);
  var gameLayer = document.getElementById('layer');
  var colorDrop = document.getElementById('color').value;

  for (var i = 0; i < numbox; i++) {
    var tempbox = document.createElement('div');
    tempbox.className = 'square';
    tempbox.id = "box" + i;
    tempbox.style.left = Math.random() * (100-10) + "%";
    tempbox.style.top = Math.random() * (250 - 35) + "px";
    tempbox.style.backgroundColor = colorDrop;
    // Add element to HTML node
    gameLayer.appendChild(tempbox);
    bindBox(tempbox);
  }
}

function bindBox(box) {
  // When clicked, the box will disappear
  box.onclick = function () {
    box.parentNode.removeChild(box);
  };
}

function clearScreen() {
  // Remove all the div nodes representing boxes
  var allbox = document.querySelectorAll("#layer div");
  for (var i = 0; i < allbox.length; i++) {
    allbox[i].parentNode.removeChild(allbox[i]);
  }
}