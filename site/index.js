var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
//var element = document.getElementsByName("navbar");


setInterval(function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if(windowWidth > 619){
        document.getElementById("navbar-mobile").style.display = "none";
        document.getElementById("navbar-pc").style.display = "block";
        //change the margin from the bottom to the top so that the text doesnt go under the navbar
        document.getElementById("body").style.marginTop = "43px";
        document.getElementById("body").style.marginBottom = "0px";
        //
        document.getElementById("game_promo").width = "552";
    }
    else if(windowWidth <= 619){
        document.getElementById("navbar-mobile").style.display = "block";
        document.getElementById("navbar-pc").style.display = "none";
        //change the margin from the top to the bottom so that the text doesnt go under the navbar
        document.getElementById("body").style.marginTop = "0px";
        document.getElementById("body").style.marginBottom = "43px";
        //
        document.getElementById("game_promo").width = "400";
    }
    
}, 1);
