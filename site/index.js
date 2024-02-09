var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
//var element = document.getElementsByName("navbar");


setInterval(function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if(windowWidth > 619){
        document.getElementById("navbar-mobile").style.display = "none";
        document.getElementById("navbar-pc").style.display = "block";
    }
    else if(windowWidth <= 619){
        document.getElementById("navbar-mobile").style.display = "block";
        document.getElementById("navbar-pc").style.display = "none";
        document.getElementById("")
    }
    
}, 100);
