
// === Mobile Nav Toggle (must run on all pages) ===
(function(){
  // Wait for DOM to be ready
  function initMobileMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    
    if(menuIcon && navList && !menuIcon.dataset.bound){
      menuIcon.dataset.bound = '1';
      
      // Handle both click and touch events
      function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        navList.classList.toggle('active');
      }
      
      menuIcon.addEventListener('click', toggleMenu);
      menuIcon.addEventListener('touchend', toggleMenu);
      
      // Close menu when clicking on a nav link
      navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navList.classList.remove('active');
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!menuIcon.contains(e.target) && !navList.contains(e.target)) {
          navList.classList.remove('active');
        }
      });
    }
  }
  
  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();

// === Shared Wave Background ===
(function(){
  const canvas = document.getElementById('wavyBackground');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const waves = [];
  const waveCount = 5;
  const waveColors = [
    "rgba(142, 68, 173, 0.7)",
    "rgba(41, 128, 185, 0.7)",
    "rgba(26, 188, 156, 0.7)",
    "rgba(241, 196, 15, 0.7)",
    "rgba(231, 76, 60, 0.7)"
  ];

  function initCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
    if(waves.length === 0){
      for(let i=0;i<waveCount;i++){
        waves.push({
          y: canvas.height/2,
          length: Math.random()*500 + 500,
          amplitude: Math.random()*150 + 150,
          phase: Math.random()*Math.PI*2,
          speed: Math.random()*0.02,
          color: waveColors[i % waveColors.length]
        });
      }
    }
  }
  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
  }
  window.addEventListener('resize', resizeCanvas, {passive:true});

  function drawWaves(){
    const time = Date.now()*0.0001;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    waves.forEach(wave => {
      wave.phase += wave.speed;
      ctx.beginPath();
      ctx.lineWidth = 50;
      ctx.shadowBlur = 60;
      ctx.shadowColor = wave.color;
      for(let x=0;x<canvas.width;x+=10){
        const y = wave.y + Math.sin((x/wave.length)+wave.phase+time)*wave.amplitude;
        ctx.lineTo(x,y);
      }
      const gradient = ctx.createLinearGradient(0, wave.y-wave.amplitude, 0, wave.y+wave.amplitude);
      gradient.addColorStop(0,'rgba(255,255,255,0.5)');
      gradient.addColorStop(0.5, wave.color);
      gradient.addColorStop(1,'rgba(255,255,255,0.5)');
      ctx.strokeStyle = gradient;
      ctx.stroke();
    });
    
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    requestAnimationFrame(drawWaves);

  }

  initCanvas();
  drawWaves();
})();

// Reduced motion
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  // No animation loop if user prefers reduced motion (canvas is static)
}

// Modal accessibility enhancements
(function(){
  const overlay = document.getElementById('modal-overlay');
  const closeBtns = document.querySelectorAll('.modal .close');
  function closeAll(){
    document.querySelectorAll('.modal').forEach(m=> m.style.display='none');
    if(overlay) overlay.style.display='none';
  }
  if (overlay && !overlay.dataset.bound){
    overlay.dataset.bound = '1';
    overlay.addEventListener('click', closeAll, {passive:true});
  }
  closeBtns.forEach(btn => {
    if(!btn.dataset.bound){
      btn.dataset.bound='1';
      btn.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          e.stopPropagation();
          closeAll();
        }
      });
      btn.addEventListener('click', closeAll);
    }
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeAll();
  });
})();
