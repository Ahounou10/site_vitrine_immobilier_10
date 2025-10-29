// Menu mobile
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Filtrage des biens
const select = document.getElementById('filtre');
const cartes = document.querySelectorAll('.carte');
select.addEventListener('change', () => {
  const type = select.value;
  cartes.forEach(carte => {
    carte.style.display = (type === 'tous' || carte.dataset.type === type) ? 'block' : 'none';
  });
});

// Animation au scroll
window.addEventListener('scroll', () => {
  cartes.forEach(carte => {
    const pos = carte.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) carte.classList.add('visible');
  });
});
