const NavBtn = document.querySelector('.nav-brgr');
const Fline = document.getElementById('line-first');
const Sline = document.getElementById('line-second');
const Tline = document.getElementById('line-third');
const navBar = document.querySelector('.nav-menu-bar');
const html = document.querySelector('.black-bg');

NavBtn.addEventListener('click', function(){
    let tBtn = NavBtn.classList.contains('mobile-nav-btn');
    if (tBtn == true) {
        NavBtn.classList.remove('mobile-nav-btn');
        NavBtn.classList.add('mobile-close-btn');
        navBar.style.transform = "translateX(0%)";
        html.style.background = "#000";
        html.style.opacity = "0.6";
        navBar.style.filter = "brightness(100%)";

    }  else {
        NavBtn.classList.remove('mobile-close-btn');
        NavBtn.classList.add('mobile-nav-btn');
        navBar.style.transform = "translateX(-300%)";
    }
});

