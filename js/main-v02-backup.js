
/* ==============================================
   LUCKAS CELICOURT
   V0.3 CINEMATIC INTERACTION ENGINE
============================================== */


/* SECTION REVEALS */

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

},{
  threshold: .12
});

document
  .querySelectorAll(".reveal")
  .forEach(el => observer.observe(el));


/* NAVIGATION */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  nav.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );

});


/* SCROLL PROGRESS */

const progress =
  document.createElement("div");

progress.id = "scroll-progress";

document.body.appendChild(progress);


function updateProgress(){

  const maxScroll =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage =
    maxScroll > 0
      ? (window.scrollY / maxScroll) * 100
      : 0;

  progress.style.width =
    percentage + "%";

}

window.addEventListener(
  "scroll",
  updateProgress,
  { passive:true }
);


/* CINEMATIC MOUSE LIGHT */

if(
  window.matchMedia("(pointer:fine)").matches
){

  const light =
    document.createElement("div");

  light.className =
    "cursor-light";

  document.body.appendChild(light);


  window.addEventListener(
    "mousemove",
    event => {

      light.style.left =
        event.clientX + "px";

      light.style.top =
        event.clientY + "px";

    }
  );

}


/* HERO PARALLAX */

const heroBackground =
  document.querySelector(".hero-bg");

function heroParallax(){

  if(!heroBackground) return;

  if(
    window.scrollY <
    window.innerHeight
  ){

    heroBackground.style.transform =
      `translateY(${window.scrollY * .12}px)
       scale(1.04)`;

  }

}

window.addEventListener(
  "scroll",
  heroParallax,
  { passive:true }
);


/* SUBTLE PROJECT TILT */

if(
  window.matchMedia("(pointer:fine)").matches
){

  document
    .querySelectorAll(".project")
    .forEach(project => {

      project.addEventListener(
        "mousemove",
        event => {

          const rect =
            project.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left;

          const y =
            event.clientY -
            rect.top;

          const rotateY =
            ((x / rect.width) - .5) * 2;

          const rotateX =
            ((y / rect.height) - .5) * -2;

          project.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }
      );


      project.addEventListener(
        "mouseleave",
        () => {

          project.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

        }
      );

    });

}
