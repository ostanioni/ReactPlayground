
import 'css/abc.css'
function draw() {
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
/*
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);
*/
for (let i = 100; i >= 0; i--){
  for(let j = 100; j >= 0; j--){
    ctx.beginPath();
    var x              = j*10 + 10;               // x coordinate
    var y              = i*10 + 10;               // y coordinate
    var radius         = 2;                    // Arc radius
    var startAngle     = 0;                     // Starting point on circle
    var endAngle       = 2*Math.PI; // End point on circle
    var anticlockwise  = i%2===1;                // Draw anticlockwise
   
    ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
    ctx.fill();
  }
}
  }
}
document.addEventListener( "DOMContentLoaded", draw );