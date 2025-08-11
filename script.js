
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight; // Use scrollHeight to cover the full content height
    drawWaves(); // Redraw waves after resizing
}

// Add throttled scroll event listener        
const canvas = document.getElementById('wavyBackground');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = document.body.offsetHeight;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.offsetHeight;
}
const waves = [];
const waveCount = 5;

// Define specific colors for each wave
const waveColors = [
    "rgba(142, 68, 173, 0.7)", // Purple
    "rgba(41, 128, 185, 0.7)", // Blue
    "rgba(26, 188, 156, 0.7)", // Teal
    "rgba(241, 196, 15, 0.7)",  // Yellow
    "rgba(231, 76, 60, 0.7)",   // Red
];

for(let i = 0; i < waveCount; i++) {
    waves.push({
        y: canvas.height / 2,
        length: Math.random() * 500 + 500, // Individual wavelengths
        amplitude: Math.random() * 150 + 150, // Individual amplitudes
        phase: Math.random() * Math.PI * 2, // Set an initial phase
        speed: Math.random() * 0.02, // Each wave will have a different speed
        color: waveColors[i % waveColors.length] // Assign color from the array
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the entire canvas
    drawWaves();
    requestAnimationFrame(animate);
}

function drawWaves() {
    const time = Date.now() * 0.0001; // Time factor for oscillation
    waves.forEach(wave => {
        wave.phase += wave.speed; // Update the phase of the wave based on its speed
        ctx.beginPath();
        ctx.lineWidth = 50; // Thickness of the wave
        ctx.shadowBlur = 40; // Glow effect
        ctx.shadowColor = wave.color; // Color of the glow

        for(let x = 0; x < canvas.width; x += 10) {
            // Calculate the y position of the wave based on the sine function
            const y = wave.y + Math.sin((x / wave.length) + wave.phase + time) * wave.amplitude;
            ctx.lineTo(x, y);
        }
        
        // Create gradient for frosted glass effect
        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(0.5, wave.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');

        ctx.strokeStyle = gradient;
        ctx.stroke();
    });
}

animate();

// Function to open a modal
document.querySelectorAll('.try-now-btn').forEach(button => {
  button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal-id');
      document.getElementById(modalId).style.display = 'block';
      document.getElementById('modal-overlay').style.display = 'block';
  });
});

document.querySelectorAll('.modal .close').forEach(button => {
  button.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
      document.getElementById('modal-overlay').style.display = 'none';
  });
});

document.getElementById('modal-overlay').addEventListener('click', function() {
  document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
  });
  this.style.display = 'none';
});

function togglePublications() {
    var morePublications = document.getElementById("more-publications");
    var toggleButton = document.getElementById("toggleButton");
    
    if (morePublications.style.display === "none") {
      morePublications.style.display = "block"; // Show the rest of the publications
      toggleButton.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
      morePublications.style.display = "none"; // Hide the additional publications
      toggleButton.textContent = "Read More"; // Change button text back to "Read More"
    }
  }
  
  