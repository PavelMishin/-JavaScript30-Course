const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.globalCompositeOperation = 'destination-atop';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

const minLineWidth = 20;
const maxLineWidth = 100;
let lineWidth = (maxLineWidth + minLineWidth) / 2;
let direction = true;

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
    if (!isDrawing)
        return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    updateLastCoords(e);
    hue++;

    if (direction) {
        lineWidth++;
    } else {
        lineWidth--;
    }

    if (lineWidth >= maxLineWidth || lineWidth <= minLineWidth) {
        direction = !direction;
    }
}

function startDraw(e) {
    isDrawing = true;
    updateLastCoords(e);
}

function updateLastCoords(e) {
    lastX = e.offsetX;
    lastY = e.offsetY;
}
