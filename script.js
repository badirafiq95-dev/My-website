// Smooth fade-in on load
window.addEventListener('load',()=>{
  document.getElementById('hero').classList.add('fade-in');
  setTimeout(()=>document.getElementById('about').classList.add('fade-in'),300);
});

// Scroll-indicator click → scroll to About
document.querySelector('.scroll-indicator').addEventListener('click',()=>{
  document.getElementById('about').scrollIntoView({behavior:'smooth'});
});

// 3D tilt on glass card (mobile + desktop)
const card=document.querySelector('.glass-card');
const maxRot=6; // degrees
function tilt(e){
  const {left,top,width,height}=card.getBoundingClientRect();
  const x=(e.clientX||e.touches[0].clientX)-left;
  const y=(e.clientY||e.touches[0].clientY)-top;
  const rotX=((y/height)-.5)*-maxRot;
  const rotY=((x/width)-.5)*maxRot;
  card.style.transform=`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
}
function resetTilt(){card.style.transform='';}
card.addEventListener('mousemove',tilt);
card.addEventListener('mouseleave',resetTilt);
card.addEventListener('touchmove',tilt);
card.addEventListener('touchend',resetTilt);