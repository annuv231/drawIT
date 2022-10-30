"use-strict";

const canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
let isDrawing = false;
let brushWidth = 5;
const clear = document.querySelector(".clear-canvas");

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const startDraw = () => {
  isDrawing = true;
  ctx.beginPath(); //* for creating new path
  ctx.lineWidth = brushWidth;
};
const drawing = (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.lineTo(e.offsetX, e.offsetY); //*creat line accourding to the mouse pointer
  ctx.stroke(); //* drawing/filling with color
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("clear");
};
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
clear.addEventListener("click", clearCanvas);
