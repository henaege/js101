var canvas = document.getElementById('canvas');
console.dir()
var context = canvas.getContext('2d');

// Set up the base option for the pictionary board

var color = "#000";
var thickness = 6;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
var canvasColor = document.getElementById('background-color-picker').style.background-color;
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;


var clearCanvas = function(){
    context.clearRect(0,0,500,500)
}

var randomColor = function() {
    return "#" + ("000000" + Math.random() * 16777215 << 0).toString(16)
}

setInterval(function(){
    document.getElementById("label1").style.color = randomColor()
}, 200);
// document.getElementById("label1").style.color = setInterval(randomColor(),500);

colorPicker.addEventListener('change', function(event){
    color = colorPicker.value;    
});



thicknessPicker.addEventListener('change', function(event){
    thickness = thicknessPicker.value;

});

// canvasColor.addEventListener('change', function(event){
//     context.fillStyle = 'canvasColor';
//     context.fillRect(0,0,500,500);

// });

canvas.addEventListener('mousedown', function(event){
    mouseDown = true;
    console.dir(event)
});

canvas.addEventListener('mouseup', function(event){
    mouseDown = false;
    lastMousePosition = null;
});

canvas.addEventListener('mousemove', function(event){
    if (mouseDown){
        // console.log("User has pressed the mouse down and is moving");

        if (lastMousePosition == null){
            lastMousePosition = {
                x: event.layerX,
                y: event.layerY
            }
        }

        mousePosition.x = event.layerX;
        mousePosition.y = event.layerY;

        context.closePath();
        context.strokeStyle = color;
        context.lineWidth = thickness;
        context.beginPath();
        context.lineJoin = "round";
        context.lineCap= "round";
        context.moveTo(lastMousePosition.x, lastMousePosition.y);
        context.lineTo(mousePosition.x, mousePosition.y);
        context.stroke();
        
        lastMousePosition = {
            x: mousePosition.x,
            y: mousePosition.y
        }

    }
});
