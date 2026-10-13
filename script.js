// ===== Foto profil =====
const frame = document.querySelector('.frame');
const foto = document.getElementById('foto');

// Jika foto.jpg belum ada, tampilkan placeholder "KF"
foto.addEventListener('error', () => frame.classList.add('empty'));
foto.addEventListener('load', () => frame.classList.remove('empty'));
if (foto.complete && foto.naturalWidth === 0) frame.classList.add('empty');

// ===== Bar skill terisi saat terlihat =====
const bars = document.querySelectorAll('.track i');
const fill = (el) => { el.style.width = el.dataset.level + '%'; };

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fill(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach((bar) => observer.observe(bar));
} else {
  bars.forEach(fill);
}

// ===== Tahun footer =====
document.getElementById('year').textContent = new Date().getFullYear();
