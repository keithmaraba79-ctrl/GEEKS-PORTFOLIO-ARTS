// Preloader Orb + Particles
document.addEventListener("DOMContentLoaded",()=>{
  const particlesContainer=document.querySelector(".particles");
  if(particlesContainer){
    for(let i=0;i<25;i++){
      const p=document.createElement("div");
      p.classList.add("particle");
      p.style.left=Math.random()*100+"vw";
      p.style.animationDuration=(2+Math.random()*3)+"s";
      particlesContainer.appendChild(p);
    }
  }
});
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.querySelector(".preloader").style.opacity="0";
    setTimeout(()=>{
      document.querySelector(".preloader").style.display="none";
    },800);
  },1500);
});

// Cursor sparkle
const cursor=document.createElement("div");
cursor.classList.add("cursor-sparkle");
document.body.appendChild(cursor);
document.addEventListener("mousemove",e=>{cursor.style.left=e.pageX+"px";cursor.style.top=e.pageY+"px";});

// Gallery filtering
const filterButtons=document.querySelectorAll(".filter-buttons button");
const cards=document.querySelectorAll(".gallery .card");
if(filterButtons){
  filterButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      let filter=btn.getAttribute("data-filter");
      cards.forEach(card=>{
        if(filter==="all"||card.classList.contains(filter)){card.style.display="block";}
        else{card.style.display="none";}
      });
    });
  });
}
