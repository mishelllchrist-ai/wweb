// =======================
// SMOOTH SCROLL
// =======================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =======================
// ANIMASI SCROLL (FADE IN)
// =======================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".hero, .fitur-item, .produk-card, .cta")
.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =======================
// EFEK KLIK TOMBOL
// =======================
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function() {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 100);
    });
});

function showPage(pageId) {
  // sembunyikan semua halaman
  let pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
    page.classList.remove('active');
  });

  // tampilkan halaman yang dipilih
  document.getElementById(pageId).classList.add('active');
}

// =======================
// NAVBAR ACTIVE LINK
// =======================
const links = document.querySelectorAll(".navbar nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});


// =======================
// BACK TO TOP BUTTON
// =======================
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
