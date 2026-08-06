document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".hamburger"),nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("name").value.trim(), phone=document.getElementById("phone").value.trim();
 const service=document.getElementById("service").value, msg=document.getElementById("message").value.trim();
 // GANTI nomor ini dengan nomor WhatsApp CompTech.
 const whatsapp="6281234567890";
 const text=encodeURIComponent(`Halo CompTech, saya ${name}.\nNomor WhatsApp: ${phone}\nLayanan: ${service}\n\nKebutuhan:\n${msg}`);
 window.open(`https://wa.me/${whatsapp}?text=${text}`,"_blank");
});
