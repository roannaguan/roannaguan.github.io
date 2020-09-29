var child;
var bg;
var fish;
var fishDiameter = 20;
var X = (0, 800);
var Y = random(X);
var Z = X;
var fishNumber = (0,427);
var x = 0;


function preload() {
    bg = 
    loadImage('https://roannaguan.github.io/background.png');
    child = loadImage('https://roannaguan.github.io/child.png'); 
    fish =
    loadImage('https://roannaguan.github.io/fish.png');
    fish2 =
    loadImage('https://roannaguan.github.io/fish2.png')
}
 
function setup() {
    createCanvas(800, 500);
    background(bg);
}

function draw(){
    image(child, 0, 330, width / 7, height / 3); 
}

function drawFish(){
    Y = random(X);
    fishNumber = random(X);
    tint(random(X), random(Y), random(Z));

    
if (Y < 427){
    image(fish, random(X), Y, width / 11, height / 10);
}
else if (fishNumber < 300){
    image(fish2, random(X), fishNumber, width / 11, height / 10);
}
}
function keyPressed(){
    drawFish();
}
function drawNewfish(){
    tint(random(X), random(Y), random(Z));
    image(fish, mouseX, mouseY, width / 11, height / 10);
    
}
function mouseClicked(){
    drawNewfish();
}
