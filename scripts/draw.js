const canvas = document.getElementsByTagName('canvas')[0];
ctx = canvas.getContext('2d');
bg = new Image();
bg.src = 'img/door.jpg';
bg.onload = fillImage;
function fillImage() {
    ctx.canvas.width = bg.width;
    ctx.canvas.height = bg.height;
    ctx.drawImage(bg, 0, 0, bg.width, bg.height);
}

canvas.addEventListener('mousedown', startDraw, false);
canvas.addEventListener('mouseup', draw, false);
canvas.addEventListener('mousemove', checkCursor, false);

const newTape = document.getElementById("newTape");
newTape.addEventListener("click", newTapeFunction);
const undo = document.getElementById("undo");
undo.addEventListener('click', undoLast);

var drawing;
var startingX, startingY;
var lines = [];

function newTapeFunction(){
    newTape.classList.toggle('addMode');
    if (drawing) drawing = false;
    else drawing = true;
}
function startDraw(e){
    startingX = e.offsetX;
    startingY = e.offsetY;
}
function draw(e){
    if (drawing){
        currX = e.offsetX;
        currY = e.offsetY;
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 30;
        ctx.beginPath();
        ctx.moveTo(startingX, startingY);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        lines.push([startingX, startingY, currX, currY]);
    }
}
function checkCursor(e){
    x = e.offsetX;
    y = e.offsetY;
    canvas.style.cursor = 'pointer';
}


function undoLast(){
    // remove last added line coordinates
    if(lines.length>=1){
        lines.pop();
    }
    // redraw image on top
    fillImage();

    // redraw all lines except the removed line
    for (x=0;x<lines.length;x++){  
        line = lines[x];
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 30;
        ctx.beginPath();
        ctx.moveTo(line[0], line[1]);
        ctx.lineTo(line[2], line[3]);
        ctx.stroke();
    }
}

document.getElementById('close_popup').addEventListener('click', ()=>{
    document.getElementById('instructions_popup').style.display='none';
})