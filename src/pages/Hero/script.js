// Wave Animation Logic with Vertical Positioning
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
let lines = [];
const lineCount = 10;             // Number of wave lines
const waveHeight = 30;            // Max height of waves
const waveWidth = 1200;           // Width across canvas
const speed = 0.005;              // Speed of animation
let animationProgress = 3;        // Controls dashed to solid transition

// Wave Configuration Object
const waveConfig = {
verticalOffset: 200,            // Vertical positioning (0 = center, negative = up, positive = down)
verticalSpread: 100,           // Vertical spread between wave lines
centeringFactor: 0.5,         // How waves are distributed vertically (0 = top, 0.5 = center, 1 = bottom)

// Method to adjust vertical positioning
setVerticalPosition: function(offset) {
this.verticalOffset = offset;
}
};

// Initialize lines with unique properties
function initializeWaves() {
lines = [];
for (let i = 0; i < lineCount; i++) {
// Calculate vertical positioning with centeringFactor
const baseVerticalOffset = (i - (lineCount - 1) * waveConfig.centeringFactor) * waveConfig.verticalSpread;

lines.push({
    frequency: 0.015 + i * 0.005,     // Wave frequency
    amplitude: waveHeight - i * 10,   // Reduced amplitude for merging effect
    phase: i * Math.PI / 200,         // Phase offset for each line
    verticalOffset: baseVerticalOffset + waveConfig.verticalOffset // Adjusted vertical positioning
});
}
}

// Draw and animate lines
function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
animationProgress += speed;

lines.forEach((line, index) => {
// Create a gradient opacity that fades from left to right
const gradient = ctx.createLinearGradient(0, 0, waveWidth, 0);
gradient.addColorStop(0, `rgba(138, 103, 187, ${0.7 - index * 0.1})`);
gradient.addColorStop(1, `rgba(138, 103, 187, ${0.1 - index * 0.03})`);

ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = gradient;

// Draw wave path with smoother steps and merging effect
for (let x = 0; x <= waveWidth; x += 2) {
    // Reduce vertical offset and amplitude as x increases
    const mergeMultiplier = 1 - (x / waveWidth) * 0.8;
    const yOffset = line.verticalOffset * mergeMultiplier * (x / waveWidth);
    const y = canvas.height / 2 + 
              yOffset + 
              Math.sin(x * line.frequency + animationProgress + line.phase) * 
              (line.amplitude * mergeMultiplier);
    
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
}
ctx.stroke();

// Animate dot along the path with fading effect
const dotX = waveWidth * ((animationProgress + line.phase) % 1);
const mergeMultiplier = 1 - (dotX / waveWidth) * 0.8;
const yOffset = line.verticalOffset * mergeMultiplier * (dotX / waveWidth);
const dotY = canvas.height / 2 + 
             yOffset + 
             Math.sin(dotX * line.frequency + animationProgress + line.phase) * 
             (line.amplitude * mergeMultiplier);

ctx.beginPath();
ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
ctx.fillStyle = `rgba(80, 162, 171, ${0.5 * mergeMultiplier})`;
ctx.fill();
});

// Continue animation loop
requestAnimationFrame(animate);
}

// Resize canvas to window
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Reinitialize waves after resize to maintain proportions
initializeWaves();
}

// Initial setup
function initWaveAnimation() {
// Initial resize and wave initialization
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Start animation
animate();
}

// Advanced wave positioning controls
const waveControls = {
// Move waves up
moveUp: function(amount = 50) {
waveConfig.setVerticalPosition(waveConfig.verticalOffset - amount);
initializeWaves();
},

// Move waves down
moveDown: function(amount = 50) {
waveConfig.setVerticalPosition(waveConfig.verticalOffset + amount);
initializeWaves();
},

// Reset to center position
reset: function() {
waveConfig.setVerticalPosition(0);
initializeWaves();
},

// Adjust centering of waves
setCenteringFactor: function(factor = 0.5) {
waveConfig.centeringFactor = Math.max(0, Math.min(1, factor));
initializeWaves();
}
};
waveControls.moveDown(200);
// Initialize the wave animation
initWaveAnimation();

// Optional: Expose controls to global scope for interactive testing
window.waveControls = waveControls;