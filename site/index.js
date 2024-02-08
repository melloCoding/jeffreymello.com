var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var element = document.getElementsByName("navbar");

console.log(windowWidth);

setInterval(function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if(windowWidth <= 619){
        console.log("mobile")
        element.classList.replace("pcnav", "mobilenav");
    }
    console.log("Finished with loop")
}, 1000);

if(windowWidth <= 619){
    console.log("mobile")
}