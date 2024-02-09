var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
//var element = document.getElementsByName("navbar");


setInterval(function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if(windowWidth > 619){
        document.getElementById("navbar-mobile").style.display = "none";
        document.getElementById("navbar-pc").style.display = "block";
        document.getElementById("body").style.marginTop = "43px";
    }
    else if(windowWidth <= 619){
        document.getElementById("navbar-mobile").style.display = "block";
        document.getElementById("navbar-pc").style.display = "none";
        document.getElementById("body").style.marginBottom = "43px";
        document.getElementById("body").style.marginTop = "0px";
    }
    
}, 100);
