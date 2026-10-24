const board = document.getElementById("board");
const context = board.getContext("2d");
let isDrawing = false
const colorPicker = document.getElementById("color-picker");
const brushSize = document.getElementById("brush-size");
const brushOpacity = document.getElementById("brush-opacity");
const clearButton = document.getElementById("clear-button");
const fillButton = document.getElementById("fill-button");
const downloadButton = document.getElementById("download.button");

board.addEventListener("mousedown", () => {isDrawing = true});
board.addEventListener("mouseup", () => {
    isDrawing = false;
    context.beginPath();
});
board.addEventListener("mouseout", () => {isDrawing = false});
board.addEventListener("mousemove", draw);

clearButton.addEventListener("click", clearCanvas);
fillButton.addEventListener("click", fillCanvas);
downloadButton.button.addEventListener("click", downloadImage);
function draw(e){
   if (!isDrawing) return;
   
   context.lineWidth = brushSize.value;
    context.lineCap = "round";
    context.strokeStyle = colorPicker.value;
    context.globalAlpha = brushOpacity.value;
    
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas() {
    context.clearRect(0, 0, board.width, board.height);
}

function fillCanvas() {
    context.fillStyle = colorPicker.value;
    context.fillRect(0,0, board.width, board.height);
}

function downloadImage() {
    const imageLink = document.createElement("a");
    imageLink.download = `your-image-${Date.now()}.png`;
    imageLink.href = board.toDateURL("image/png");
    imageLink.click();
}