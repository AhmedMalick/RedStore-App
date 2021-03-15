var menuItems = document.getElementById('menuItems');
menuItems.style.maxHeight = '0px';

function toggleMenu() {
    if (menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px'
    }
    else {
        menuItems.style.maxHeight = '0px'
    }
}


var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('small-img');


for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        productImg.src = smallImg[i].src
    }
}

var loginForm = document.getElementById('loginForm');
var regForm = document.getElementById('regForm');
var indicator = document.getElementById('indicator');
  
function register() {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login() { 
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}