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
        //
        document.getElementById("para1-index").style.marginLeft = "4em";
        document.getElementById("para1-index").style.marginRight = "4em";
    }
    // else if statement to see if the resolution of the window is to small
    //mobile version
    else if(windowWidth <= 619){
        document.getElementById("navbar-mobile").style.display = "block";
        document.getElementById("navbar-pc").style.display = "none";
        //change the margin from the top to the bottom so that the text doesnt go under the navbar
        document.getElementById("body").style.marginTop = "0px";
        document.getElementById("body").style.marginBottom = "56px";
        //change the iframe for the itch.io page so that it fits on mobile devices
        document.getElementById("game_promo").width = "400";
        //
        document.getElementById("para1-index").style.marginLeft = "200em";
        document.getElementById("para1-index").style.marginRight = "2em";
    }
    
}, 1);
