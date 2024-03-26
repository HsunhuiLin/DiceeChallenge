var rand1 = Math.floor((Math.random()*6)+1);
var rand2 = Math.floor((Math.random()*6)+1);

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+rand1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+rand2+".png");

if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "&#128509; Player 1 wins";
} 
else if (rand1 < rand2) {
    document.querySelector("h1").innerHTML = "Player 2 wins &#128509;";
}
else {
    document.querySelector("h1").innerHTML = "&#128509; Draw! &#128509;";
}