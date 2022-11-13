const canvasPlot = document.getElementById('canvas_plot');
const ctx = canvasPlot.getContext('2d');

const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

const scaleX = 25;
const scaleY = 25;

ctx.beginPath();
ctx.strokeStyle = "#f5f0e8";

const xAxis = canvasPlotHeight;
const yAxis = 0;

for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasPlotHeight);
}

for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvasPlotWidth, i);
}

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "#000000";

ctx.moveTo(0, xAxis);
ctx.lineTo(canvasPlotWidth, xAxis);

ctx.moveTo(yAxis, 0);
ctx.lineTo(yAxis, canvasPlotHeight);

ctx.stroke();
ctx.closePath();