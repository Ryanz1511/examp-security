document.addEventListener("contextmenu", e => e.preventDefault()); 
document.addEventListener("copy", e => e.preventDefault());       
document.addEventListener("cut", e => e.preventDefault());        
document.addEventListener("paste", e => e.preventDefault());      
document.addEventListener("selectstart", e => e.preventDefault());

const target = document.body;

// PC
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && ["U", "C", "A", "X", "S"].includes(e.key.toUpperCase()))
  ) {
    e.preventDefault();

    target.style.display = "none";

    setTimeout(() => {
      alert("Akses dilarang!");

      target.style.display = "block";
    }, 300);
  }
});

// Minimize (PC & Android)
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    alert("Anda meninggalkan halaman ujian!");
  }
   target.style.display = "none";

    setTimeout(() => {
      alert("Akses dilarang!");

      target.style.display = "block";
    }, 300);
  
});

// Android

let touchBlocked = false;
let startY = 0;

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchmove", e => {
  const dy = e.touches[0].clientY - startY;   // + = tarik ke bawah
  const atTop = window.scrollY <= 0;


    e.preventDefault();

    if (!touchBlocked) {
      touchBlocked = true;
      target.style.display = "none";
      setTimeout(() => {
        alert("Akses dilarang!");
        target.style.display = "block";
      
        setTimeout(() => (touchBlocked = false), 1500);
      }, 200);
    }
  }
}, { passive: false });
