// Petit script pour interaction minimale (ex: navigation active / dots)
document.addEventListener("DOMContentLoaded", function(){
  // active nav - demo
  const links = document.querySelectorAll(".nav-link");
  links.forEach(l => l.addEventListener("click", (e)=>{
    links.forEach(x=>x.classList.remove("active"));
    e.currentTarget.classList.add("active");
    e.preventDefault();
  }));

  // carousel arrows demo (fait juste une animation simple sur le hero image)
  const leftDot = document.querySelector(".dot:first-child");
  const rightDot = document.querySelector(".dot:last-child");
  const img = document.querySelector(".hero-image");

  if(img){
    leftDot.addEventListener("click", ()=> {
      img.animate([{ transform: "translateX(6%) scale(1)" }, { transform: "translateX(-8%) scale(0.98)"}, { transform: "translateX(6%) scale(1)" }], { duration: 600 });
    });
    rightDot.addEventListener("click", ()=> {
      img.animate([{ transform: "translateX(6%) scale(1)" }, { transform: "translateX(18%) scale(1.02)" }, { transform: "translateX(6%) scale(1)" }], { duration: 600 });
    });
  }
});
