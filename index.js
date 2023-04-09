const LOGO = document.querySelector('side-content');
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Draw a circle
ctx.fillStyle = 'lightgrey';
ctx.beginPath();
ctx.arc(25, 25, 20, 0, 2 * Math.PI);
ctx.fill();

// Draw a rectangle inside the circle, reduced by 10%
ctx.fillStyle = 'rgba(39, 121, 228, 0.993)';
ctx.fillRect(13, 13, 24, 24);

// Draw a triangle inside the rectangle, reduced by 10%
ctx.fillStyle = 'lightgrey';
ctx.beginPath();
ctx.moveTo(25, 14.3);
ctx.lineTo(34.4, 30.4);
ctx.lineTo(15.6, 30.4);
ctx.closePath();
ctx.fill();
