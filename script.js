// ===== Foto profil =====
const frame = document.querySelector('.frame');
const foto = document.getElementById('foto');
// const fotoInput = document.getElementById('fotoInput');

// Jika foto.jpg belum ada, tampilkan placeholder "KF"
foto.addEventListener('error', () => frame.classList.add('empty'));
foto.addEventListener('load', () => frame.classList.remove('empty'));
if (foto.complete && foto.naturalWidth === 0) frame.classList.add('empty');

// Pratinjau foto dari perangkat (hanya di browser; untuk permanen, simpan sebagai foto.jpg)
fotoInput.addEventListener('change', () => {
  const file = fotoInput.files[0];
  if (!file || !file.type.startsWith('image/')) return;
  foto.src = URL.createObjectURL(file);
});

// ===== Bar skill terisi saat terlihat =====
const bars = document.querySelectorAll('.track i');
const fill = el => { el.style.width = el.dataset.level + '%'; };
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { fill(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  bars.forEach(b => io.observe(b));
} else {
  bars.forEach(fill);
}

// ===== Tahun footer =====
document.getElementById('year').textContent = new Date().getFullYear();
