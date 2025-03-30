var theme = localStorage.getItem('theme');
var r = document.querySelector(':root');
var rs = getComputedStyle(r);

var pathLight = "images/hero-dark.svg";
var pathDark = "images/hero-light.svg";


document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('colourToggle');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const heroImg = document.getElementById('heroImg');
  if(theme === 'dark') {
    r.style.setProperty('--colour-bg1', rs.getPropertyValue('--colour-dark-bg1'));
    r.style.setProperty('--colour-bg2', rs.getPropertyValue('--colour-dark-bg2'));
    r.style.setProperty('--colour-text', rs.getPropertyValue('--colour-dark-text'));
    r.style.setProperty('--colour-btn1-bg', rs.getPropertyValue('--colour-dark-btn1-bg'));
    r.style.setProperty('--colour-btn2-bg', rs.getPropertyValue('--colour-dark-btn2-bg'));
    r.style.setProperty('--colour-btn1-text', rs.getPropertyValue('--colour-dark-btn1-text'));
    r.style.setProperty('--colour-btn2-text', rs.getPropertyValue('--colour-dark-btn2-text'));
    r.style.setProperty('--colour-card-border', rs.getPropertyValue('--colour-card-dark-border'));
    button.classList.add('dark');
    sun.classList.add('dark');
    moon.classList.add('dark');
    if (heroImg !== null) {
      heroImg.src = pathDark;
    }
    
    
  } 
  else {
      r.style.setProperty('--colour-bg1', rs.getPropertyValue('--colour-light-bg1'));
      r.style.setProperty('--colour-bg2', rs.getPropertyValue('--colour-light-bg2'));
      r.style.setProperty('--colour-text', rs.getPropertyValue('--colour-light-text'));
      r.style.setProperty('--colour-btn1-bg', rs.getPropertyValue('--colour-light-btn1-bg'));
      r.style.setProperty('--colour-btn2-bg', rs.getPropertyValue('--colour-light-btn2-bg'));
      r.style.setProperty('--colour-btn1-text', rs.getPropertyValue('--colour-light-btn1-text'));
      r.style.setProperty('--colour-btn2-text', rs.getPropertyValue('--colour-light-btn2-text'));
      r.style.setProperty('--colour-card-border', rs.getPropertyValue('--colour-card-light-border'));
      button.classList.add('light');
      if(heroImg !== null) {
        heroImg.src = pathLight;
      }
      

  }

  button.addEventListener('click', function() {
    colourToggle();
  });
  

});




function colourToggle() {
  
  theme = localStorage.getItem('theme');
  const button = document.getElementById('colourToggle');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const heroImg = document.getElementById('heroImg');
  if(theme === 'dark') {
    localStorage.setItem('theme', 'light');
    r.style.setProperty('--colour-bg1', rs.getPropertyValue('--colour-light-bg1'));
    r.style.setProperty('--colour-bg2', rs.getPropertyValue('--colour-light-bg2'));
    r.style.setProperty('--colour-text', rs.getPropertyValue('--colour-light-text'));
    r.style.setProperty('--colour-btn1-bg', rs.getPropertyValue('--colour-light-btn1-bg'));
    r.style.setProperty('--colour-btn2-bg', rs.getPropertyValue('--colour-light-btn2-bg'));
    r.style.setProperty('--colour-btn1-text', rs.getPropertyValue('--colour-light-btn1-text'));
    r.style.setProperty('--colour-btn2-text', rs.getPropertyValue('--colour-light-btn2-text'));
    r.style.setProperty('--colour-card-border', rs.getPropertyValue('--colour-card-light-border'));
    r.style.transition = 'background-color 0.5s ease';
    button.classList.replace('dark','light');
    sun.classList.remove('dark');
    moon.classList.remove('dark');
    if(heroImg !== null) {
      heroImg.src = pathLight;
    }

    return;
  } else if(theme === 'light') {


    localStorage.setItem('theme', 'dark');
    r.style.setProperty('--colour-bg1', rs.getPropertyValue('--colour-dark-bg1'));
    r.style.setProperty('--colour-bg2', rs.getPropertyValue('--colour-dark-bg2'));
    r.style.setProperty('--colour-text', rs.getPropertyValue('--colour-dark-text'));
    r.style.setProperty('--colour-btn1-bg', rs.getPropertyValue('--colour-dark-btn1-bg'));
    r.style.setProperty('--colour-btn2-bg', rs.getPropertyValue('--colour-dark-btn2-bg'));
    r.style.setProperty('--colour-btn1-text', rs.getPropertyValue('--colour-dark-btn1-text'));
    r.style.setProperty('--colour-btn2-text', rs.getPropertyValue('--colour-dark-btn2-text'));
    r.style.setProperty('--colour-card-border', rs.getPropertyValue('--colour-card-dark-border'));
    r.style.transition = 'background-color 0.5s ease';
    button.classList.replace('light','dark');
    sun.classList.add('dark');
    moon.classList.add('dark');
    if(heroImg !== null) {
      heroImg.src = pathDark;
    }
    
    return;
  }
  

}


