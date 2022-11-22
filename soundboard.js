var button_1 = document.getElementById("desert");
var button_2 = document.getElementById("forest");
var button_3 = document.getElementById("wild");

var desert = new Audio('Desert.wav');
var forest = new Audio('Forest.wav')
var wild = new Audio('Wild.wav')

function playSound(sound) {
    sound.play();
}