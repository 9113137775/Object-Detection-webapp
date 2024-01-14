object = [];
status = "";
video = "";

function setup(){
    createCanvas( 300, 300);
    canvas.center();
    createCapture(VIDEO);
    video.size( 300, 350);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
    document.getElementById("oname").value
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }
function draw() {
    image(video, 0, 0, 300, 300);
}