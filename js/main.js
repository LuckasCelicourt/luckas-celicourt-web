const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{
  threshold:.12
});

document.querySelectorAll(".reveal")
  .forEach(el => observer.observe(el));


/* NAV */
const nav = document.querySelector(".nav");

window.addEventListener("scroll",()=>{
  nav.classList.toggle("scrolled",window.scrollY > 40);
});


/* PROGRESS */
const progress = document.createElement("div");
progress.id = "progress";
document.body.appendChild(progress);

window.addEventListener("scroll",()=>{
  const max =
    document.documentElement.scrollHeight -
    window.innerHeight;

  progress.style.width =
    `${(window.scrollY / max) * 100}%`;
});


/* CINEMATIC SPOTLIGHT — DESKTOP */
if(window.matchMedia("(pointer:fine)").matches){

  const spotlight = document.createElement("div");
  spotlight.className = "spotlight";
  document.body.appendChild(spotlight);

  window.addEventListener("mousemove",e=>{
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
  });

}


/* HERO PARALLAX */
const heroBG = document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{
  if(window.scrollY < window.innerHeight){
    heroBG.style.translate =
      `0 ${window.scrollY * .15}px`;
  }
});
