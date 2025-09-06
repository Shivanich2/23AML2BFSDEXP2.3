const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);   // start from previous point
  ctx.lineTo(e.offsetX, e.offsetY); // draw to current point
  ctx.strokeStyle = "blue";   // drawing color
  ctx.lineWidth = 2;
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY]; // update last position
});

// Stop drawing when mouse is released
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Also stop drawing if mouse leaves the canvas
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});
