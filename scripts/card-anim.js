document.querySelectorAll('.project').forEach(card => {
    const glow = card.querySelector('.glow-border');
  
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
  
      const spread = 260; // degrees
      const grad = [];
  
      for (let i = 0; i <= 360; i++) {
        const diff = Math.abs(i - angle) > 180
          ? 360 - Math.abs(i - angle)
          : Math.abs(i - angle);
  
        const alpha = Math.max(0, 1.5 - diff / (spread / 2));
  
        if (localStorage.getItem('theme') === 'dark') {
          grad.push(`rgba(0, 255, 255, ${alpha.toFixed(2)}) ${i}deg`);
        } else {
          grad.push(`rgba(59, 92, 204, ${alpha.toFixed(2)}) ${i}deg`);
        }
      }
  
      glow.style.background = `conic-gradient(from 0deg at 50% 50%, ${grad.join(", ")})`;
    });
  
    card.addEventListener('mouseleave', () => {
      glow.style.background = "transparent";
    });
  });
  