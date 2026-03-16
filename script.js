// ParticlesJS
particlesJS("particles-js", {
  particles: {
    number:{value:80},
    color:{value:"#38bdf8"},
    shape:{type:"circle"},
    opacity:{value:0.5},
    size:{value:3},
    line_linked:{enable:true,distance:150,color:"#38bdf8",opacity:0.4,width:1},
    move:{enable:true,speed:2}
  }
});

// Mobile menu
function toggleMenu(){document.getElementById("menu").classList.toggle("active");}

// Typing effect
const text = "Building Modern Digital Solutions";
let i = 0;
function typing(){if(i<text.length){document.getElementById("typing").innerHTML+=text.charAt(i);i++;setTimeout(typing,70);}}
typing();

// Scroll animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add("show");} 
    else{entry.target.classList.remove("show");}
  });
},{threshold:0.2});
sections.forEach(sec => observer.observe(sec));

// Stats counters
let counted=false;
window.addEventListener("scroll",()=>{
  const stats=document.getElementById("stats");
  if(!counted && stats.getBoundingClientRect().top<window.innerHeight){
    counted=true;
    let c1=setInterval(()=>{let el=document.getElementById("count1");el.innerText++;if(el.innerText==50)clearInterval(c1);},40);
    let c2=setInterval(()=>{let el=document.getElementById("count2");el.innerText++;if(el.innerText==30)clearInterval(c2);},40);
    let c3=setInterval(()=>{let el=document.getElementById("count3");el.innerText++;if(el.innerText==5)clearInterval(c3);},100);
  }
});

// Testimonials slider
let testimonialIndex=0;
function showTestimonials(){
  const testimonials=document.querySelectorAll(".testimonial");
  testimonials.forEach(t=>t.style.display="none");
  testimonialIndex++;
  if(testimonialIndex>testimonials.length)testimonialIndex=1;
  testimonials[testimonialIndex-1].style.display="block";
  setTimeout(showTestimonials,4000);
}
showTestimonials();

// Theme toggle
function toggleTheme(){document.body.classList.toggle("light");}

// Project filter
function filterProjects(type){
  const projects=document.querySelectorAll(".project-box");
  projects.forEach(p=>{
    if(type==="all"){p.style.display="block";}
    else if(p.querySelector("p").innerText.toLowerCase().includes(type)){p.style.display="block";}
    else{p.style.display="none";}
  });
}

// Hero 3D mouse effect
document.addEventListener("DOMContentLoaded", () => {
  const heroCard = document.querySelector(".hero-card");
  if(heroCard){
    document.addEventListener("mousemove", e => {
      let x = (window.innerWidth / 2 - e.pageX) / 20;
      let y = (window.innerHeight / 2 - e.pageY) / 20;
      heroCard.style.transform = 'rotateY(${x}deg) rotateX(${y}deg)';
    });
  }
});