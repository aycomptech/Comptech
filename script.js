const menu=document.querySelector(".hamburger");
const nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));

document.querySelectorAll(".nav nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

document.getElementById("year").textContent=new Date().getFullYear();

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav nav a")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const service=document.getElementById("service").value;
  const message=document.getElementById("message").value.trim();

  // GANTI nomor ini dengan WhatsApp CompTech.
  const whatsapp="6281234567890";
  const text=`Halo CompTech, saya ${name}.%0A%0ANomor WhatsApp: ${phone}%0ALayanan: ${service}%0A%0AKebutuhan:%0A${message}`;
  window.open(`https://wa.me/${whatsapp}?text=${text}`,"_blank");
});
