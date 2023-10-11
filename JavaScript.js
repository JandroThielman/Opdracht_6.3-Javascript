var x = document.getElementById("effect");

function Magic(){
    x.play();
    document.getElementById("visible").style.visibility = "visible";
    document.body.style.backgroundColor = "rgb(39, 7, 39)";
    document.getElementById("magic").style.transform = "rotate(360)";
}